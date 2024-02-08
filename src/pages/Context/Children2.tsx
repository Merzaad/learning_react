import * as React from 'react'
import Box from '../../components/Box'

export default function Children2({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    console.log('children2 render')
  })
  return <Box>{children}</Box>
}
