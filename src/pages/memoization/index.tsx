import * as React from 'react'
import { increaseModuleValue, moduleValue } from '../../modules/module'
import Buttons from './buttons'
import './index.css'
import Box from '../../components/Box'
import Button from '../../components/Button'

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
  const staledCallback = React.useCallback(() => {
    console.log(staled, localStorage.getItem('stale'))
  }, [])
  const onStaledIncrease = () => {
    setStaled((prev) => prev + 1)
  }
  const preventReRender = React.useMemo(() => <Buttons />, [])
  React.useEffect(() => {
    localStorage.setItem('stale', String(staled))
  }, [staled])
  const onAddReducerClick = () => dispatch({ type: 'add', payload: 'x' })
  return (
    <div className="y">
      <Box>
        {state}
        <Button onClick={onAddReducerClick}>reducer: add</Button>
        <Box>{preventReRender}</Box>
        parent
      </Box>
      <Box>
        module:{moduleValue}
        <Button onClick={() => increaseModuleValue()}>+1</Button>
      </Box>
      <Box>
        {staled} <Button onClick={onStaledIncrease}>+</Button>
        <Button onClick={staledCallback}>print</Button>
      </Box>
    </div>
  )
}
