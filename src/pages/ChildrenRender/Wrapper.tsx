import * as React from 'react'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Imported from './Imported'

export default function Children1({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState(false)

  React.useEffect(() => {
    console.log('render Wrapper')
  })
  return (
    <Box>
      <>
        {state}
        <Button onClick={() => setState((prev) => !prev)}>trigger render</Button>
        {children}
        <Imported />
      </>
    </Box>
  )
}
