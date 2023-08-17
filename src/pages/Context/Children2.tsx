import * as React from 'react'
import Box from '../../components/Box'

export default function Children1() {
  const count = React.useRef(0)
  const renders = React.useMemo(() => count.current + 1, undefined)
  count.current += 1
  return <Box>renders: {renders}</Box>
}
