import React from 'react'
import { responsiveStyle } from 'styled-system'
import { oneOfType, number, string, array, bool } from 'prop-types'
import commonPropTypes from './propTypes'
import styled from './styled'
import withBox from './withBox';

const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
const direction = responsiveStyle('flex-direction', 'direction')
const align = responsiveStyle('align-items', 'align')
const justify = responsiveStyle('justify-content', 'justify')
const column = props => props.column ? {flexDirection: 'column'} : null

const responsivePropType = oneOfType([
  number,
  string,
  array,
  bool
])
const propTypes = Object.assign({}, commonPropTypes, {
  wrap: responsivePropType,
  direction: responsivePropType,
  align: responsivePropType,
  justify: responsivePropType,
  column: bool
})
const cache = {}

export default base => {
  if (cache[base]) return cache[base];

  const Flex = styled(withBox(base),
    { display: 'flex' },
    wrap,
    column,
    direction,
    align,
    justify,
  )
  Flex.displayName = 'Flex'
  Flex.propTypes = propTypes

  if (typeof base === 'string') cache[base] = Flex

  return Flex
}
