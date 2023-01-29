import * as React from 'react'
import './index.css'

type Reducer = (state: number, action: { type: string }) => number

const reducer: React.Reducer<number, React.ReducerAction<Reducer>> = (state, action) => {
  if (action.type === 'add') {
    return state + 1
  }
  return state
}
export default function Y() {
  const [state, dispatch] = React.useReducer(reducer, 0)
  return (
    <div className="reducer">
      {state}
      <button onClick={() => dispatch({ type: 'add' })}>add</button>
    </div>
  )
}
