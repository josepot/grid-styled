import Box from './Box'
import styled from './styled'

const align = props => ({ verticalAlign: props.align || 'top' })

const Grid = styled(Box, {
  display: 'inline-block'
}, align)
Grid.displayName = 'Grid'

export default Grid
