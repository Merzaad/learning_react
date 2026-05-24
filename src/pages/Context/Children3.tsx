import * as React from 'react'
import useAppContext from '../../context/useAppContext'
import { produce } from 'immer'
import Box from '../../components/Box'
import Button from '../../components/Button'

export default function Children3() {
  const [state, setState] = useAppContext()
  const increase = () => {
    setState(
      produce((draft) => {
        draft.a.x += 1
      })
    )
  }
  React.useEffect(() => {
    console.log('children3 render')
  })
  return (
    <>
      <Box>
        {state.a.x} <Button onClick={increase}>state.a.x++</Button>
      </Box>
    </>
  )
}
