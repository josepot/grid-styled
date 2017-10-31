import React from 'react'
import { space, width, removeProps, propTypes } from 'styled-system'
import styled from './styled'

const CleanDiv = props => {
  const cleanProps = removeProps(props)
  return <div {...cleanProps} />
}

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