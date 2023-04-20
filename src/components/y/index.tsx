import * as React from 'react'
import { increaseModuleValue, moduleValue } from '../../modules/module'
import Button from './button'
import './index.css'

type Reducer = (state: any[], action: { type: string; payload: any }) => any[]

const reducer: React.Reducer<any[], React.ReducerAction<Reducer>> = (state, action) => {
  if (action.type === 'add') {
    return [...state, action.payload]
  }
  return state
}
export default function Y() {
  const [state, dispatch] = React.useReducer(reducer, [])
  const [staled, setStaled] = React.useState(0)
  const testStale = 1 + staled
  const testLocalstorageStale = localStorage.getItem('stale') || 0
  const staledCallback = React.useCallback(() => {
    const testStale2 = 1 + staled
    const testLocalstorageStale2 = localStorage.getItem('stale') || 0
    console.log(testStale, testStale2, testLocalstorageStale, testLocalstorageStale2)
  }, [])
  const onStaledIncrease = () => {
    setStaled((prev) => prev + 1)
  }
  const preventReRender = React.useMemo(() => <Button />, [])
  React.useEffect(() => {
    localStorage.setItem('stale', String(staled))
  }, [staled])
  const onAddReducerClick = () => dispatch({ type: 'add', payload: 'x' })
  return (
    <div className="y">
      <div className="box">
        {state}
        <button onClick={onAddReducerClick}>reducer: add</button>
        <div className="box">{preventReRender}</div>
        parent
      </div>
      <div className="box">
        module:{moduleValue}
        <button onClick={() => increaseModuleValue()}>+1</button>
      </div>
      <div className="box">
        {staled} <button onClick={onStaledIncrease}>+</button>
        <button onClick={staledCallback}>print</button>
      </div>
    </div>
  )
}
