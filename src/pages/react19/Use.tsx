import React from 'react'
import Box from '../../components/Box'

const resolvePromise = new Promise<string>((resolve) => setTimeout(() => resolve('resolved'), 1000))
const resolvePromise2 = new Promise<string>((resolve) =>
  setTimeout(() => resolve('resolved2'), 2000)
)

/* const rejectPromise = new Promise<string>((resolve, reject) =>
  setTimeout(() => reject(new Error('reject')), 5000)
) */

export default function Use() {
  const result = React.use(resolvePromise)
  const result2 = React.use(resolvePromise2)

  /* const error = React.use(rejectPromise) */
  return (
    <>

      <Box>{result}</Box>
      <Box>{result2}</Box>

      {/*  <Box>{error}</Box> */}
    </>
  )
}
