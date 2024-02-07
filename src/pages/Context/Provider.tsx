import * as React from 'react'
import context from '../../context/context'

export default function Provider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState({
    a: { x: 1, y: { i: 1 } },
    b: { x: { i: 1 }, y: { i: 1 } },
  })
  return <context.Provider value={{ state, setState }}>{children}</context.Provider>
}
