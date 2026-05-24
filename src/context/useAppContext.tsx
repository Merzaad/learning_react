// context/context.tsx
import React, { createContext, useContext, useState } from 'react'

interface NestedObject {
  i: number
}

interface State {
  a: {
    x: number
    y: NestedObject
  }
  b: {
    x: NestedObject
    y: NestedObject
  }
}

type ContextValue = [State, React.Dispatch<React.SetStateAction<State>>]

const initialState: State = {
  a: { x: 1, y: { i: 1 } },
  b: { x: { i: 1 }, y: { i: 1 } },
}

export const AppContext = createContext<ContextValue>([initialState, () => null])
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<State>(initialState)

  return <AppContext.Provider value={[state, setState]}>{children}</AppContext.Provider>
}
const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }

  return context
}

export default useAppContext
