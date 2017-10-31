import React from 'react'
import { space, width, removeProps, propTypes } from 'styled-system'
import styled from './styled'

const CleanDiv = cleanElement('div');

CleanDiv.propTypes = {
  ...propTypes.width,
  ...propTypes.wrap,
}

export const flex = ({flex}) => flex ? {flex} : null

const Box = styled(CleanDiv,
  {boxSizing: 'border-box'},
  width,
  space,
  flex
)




export default Box
