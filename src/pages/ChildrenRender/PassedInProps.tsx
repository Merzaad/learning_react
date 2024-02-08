import * as React from 'react'
import Box from '../../components/Box'

export default function PassedInProps() {
  React.useEffect(() => {
    console.log('render PasseInProps')
  })
  return <Box>passed as children in props</Box>
}
