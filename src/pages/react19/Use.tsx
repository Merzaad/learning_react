import React from 'react'
import Box from '../../components/Box'
import context from '../../context/context'

const resolvePromise = new Promise<string>((resolve) => setTimeout(() => resolve('resolved'), 1000))
const resolvePromise2 = new Promise<string>((resolve) =>
  setTimeout(() => resolve('resolved2'), 2000)
)

/* const rejectPromise = new Promise<string>((resolve, reject) =>
  setTimeout(() => reject(new Error('reject')), 5000)
) */

export default function Use() {
  const [state] = React.use(context)
  const result = React.use(resolvePromise)
  const result2 = React.use(resolvePromise2)

  console.log(state)
  return (
    <>
      <Box>{result}</Box>
      <Box>{result2}</Box>
      <Box>{JSON.stringify(state)}</Box>
    </>
  )
}
