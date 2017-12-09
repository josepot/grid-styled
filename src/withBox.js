import React from 'react'
import { space, responsiveStyle, width } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import tag from './tag-hoc'
import propTypes from './propTypes'
import removeProps from './remove-props'
import styled from './styled'

const flex = responsiveStyle('flex')
const order = responsiveStyle('order')

export default base => {
  const Tag = tag(removeProps)
  const Base = Tag(base)

  const Box = styled(Base,
    { boxSizing: 'border-box' },
    width,
    space,
    flex,
    order
  )
  Box.displayName = 'Box'

  const responsivePropType = oneOfType([
    number,
    string,
    array
  ])

  Box.propTypes = Object.assign({}, propTypes, {
    flex: responsivePropType,
    order: responsivePropType
  })

  return Box;
}