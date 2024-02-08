import * as React from 'react'
import Box from '../../components/Box'

export default function Imported() {
  React.useEffect(() => {
    console.log('render Imported')
  })
  return <Box>Imported</Box>
}
