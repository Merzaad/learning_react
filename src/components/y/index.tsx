import * as React from 'react'
import Button from './button'
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
  const preventReRender = React.useMemo(() => <Button />, [])
  return (
    <div className="y">
      <div className="box">
        {state}
        <button onClick={() => dispatch({ type: 'add' })}>add</button>
      </div>
      <div className="box">
        {preventReRender}
      </div>
    </div>
  )
}
