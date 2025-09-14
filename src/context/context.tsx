import React, { createContext, useState } from 'react'
import { Context } from '../types/context'

const initialState = { a: { x: 1, y: { i: 1 } }, b: { x: { i: 1 }, y: { i: 1 } } }
export const context = createContext<Context>([initialState, () => null])

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState)
  return <context.Provider value={[state, setState]}>{children}</context.Provider>
}

export default context
