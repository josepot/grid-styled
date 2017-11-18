import test from 'ava'
import React from 'react'
import { create } from 'react-test-renderer'
import Styletron from 'styletron-server'
import {StyletronProvider} from 'styletron-react'
import {
  Box,
  Grid,
  Flex,
  ThemeProvider
} from './src'
import { flex } from './src/Box'

class StyletronRenderer extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      styles: '',
      styletron: new Styletron(),
    }
  }
  componentDidMount() {
    if (this.state.styles) return;
    this.setState(({ styletron }) => ({
      styletron,
      styles: styletron
        .getCss()
        .split('}.')
        .join('}\n    .'),
    }))
  }

  render() {
    return [
      <StyletronProvider styletron={this.state.styletron} key="provider">
        {this.props.children}
      </StyletronProvider>,
      <style key="styles">{this.state.styles}</style>,
    ];
  }
}

const render = element => create(
  <StyletronRenderer>{element}</StyletronRenderer>
).toJSON()

// ThemeProvider
test('ThemeProvider', t => {
  const json = render(
    <ThemeProvider theme={{breakpoints: [1, 2, 3]}}>
      <Box />
    </ThemeProvider>
  )
  t.snapshot(json);
})


// Box
test('Box renders', t => {
  const json = render(<Box m={2} px={3} />)
  t.snapshot(json)
})

test('Box renders with props', t => {
  const json = render(<Box
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    w={1}
    flex='1 1 auto'
  />)
  t.snapshot(json)
})

test('Box renders with `is` prop', t => {
  const json = render(<Box is='section' />)
  t.snapshot(json)
  t.is(json[0].type, 'section')
})

test('flex util returns null', t => {
  const sx = flex({})
  t.is(sx, null)
})

test('flex util returns a style object', t => {
  const sx = flex({ flex: 'none' })
  t.is(sx.flex, 'none')
})

// Grid
test('Grid renders', t => {
  const grid = render(<Grid />)
  t.snapshot(grid)
})

test('Grid has a classname', t => {
  const [div] = render(<Grid />)
  t.truthy(div.props.className)
})

// Flex
test('Flex renders', t => {
  const flex = render(<Flex />)
  t.snapshot(flex)
})

test('Flex renders with props', t => {
  const flex = render(
    <Flex
      wrap
      direction='column'
      align='center'
      justify='space-between'
    />
  )
  t.snapshot(flex)
})

test('Flex renders with column prop', t => {
  const flex = render(
    <Flex
      column
    />
  )
  t.snapshot(flex)
})

test('Flex renders with responsive props', t => {
  const flex = render(
    <Flex
      wrap={[ true, false ]}
      direction={[ 'column', 'row' ]}
      align={[ 'stretch', 'center' ]}
      justify={[ 'space-between', 'center' ]}
    />
  )
  t.snapshot(flex)
})
