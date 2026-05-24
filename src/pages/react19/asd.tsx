import React from 'react'
import Box from '../../components/Box'
import { AppContext } from '../../context/useAppContext'

const resolvePromise = new Promise<string>((resolve) => setTimeout(() => resolve('resolved'), 1000))
const resolvePromise2 = new Promise<string>((resolve) =>
  setTimeout(() => resolve('resolved2'), 2000)
)

/* const rejectPromise = new Promise<string>((resolve, reject) =>
  setTimeout(() => reject(new Error('reject in react19 -> use')), 5000)
) */

export default function Use() {
  const [state] = React.use(AppContext)
  const result = React.use(resolvePromise)
  const result2 = React.use(resolvePromise2)
  /* const result3 = React.use(rejectPromise) */

  return (
    <>
      <Box>{result}</Box>
      <Box>{result2}</Box>
      {/* <Box>{result3}</Box> */}
      <Box>{JSON.stringify(state)}</Box>
    </>
  )
}
