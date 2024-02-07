import * as React from 'react'
import Box from '../../components/Box'

export default function Children1({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    console.log('children1 render')
  })
  return <Box>{children}</Box>
}
