import React from 'react'
import { space, responsiveStyle, width } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import tag from './tag-hoc'
import PropTypes from 'prop-types';
import commonPropTypes from './propTypes'
import removeProps from './remove-props'
import styled from './styled'
import {themeShape} from './ThemeProvider';

const flex = responsiveStyle('flex')
const order = responsiveStyle('order')

const cache = {};
const Tag = tag(removeProps)

const responsivePropType = oneOfType([
  number,
  string,
  array
])

const propTypes = Object.assign({}, commonPropTypes, {
  flex: responsivePropType,
  order: responsivePropType
})
const contextTypes = {
  theme: PropTypes.shape(themeShape),
  styletron: PropTypes.object,
}

export default base => {
  if (cache[base]) return cache[base];

  const Base = Tag(base);
  Base.contextTypes = Object.assign({},
    base.contextTypes,
    contextTypes,
  )

  const Box = styled(Base,
    { boxSizing: 'border-box' },
    width,
    space,
    flex,
    order
  )
  Box.displayName = 'Box'
  Box.propTypes = propTypes
  Box.contextTypes = Base.contextTypes;

  if (typeof base === 'string') cache[base] = Box

  return Box;
}
