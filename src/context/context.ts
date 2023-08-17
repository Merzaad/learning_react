import { createContext } from 'react'
import { Context } from '../types/context'

const context = createContext<Context>({
  state: { a: { x: 1, y: { i: 1 } }, b: { x: { i: 1 }, y: { i: 1 } } },
  setState: () => null,
})

export default context
