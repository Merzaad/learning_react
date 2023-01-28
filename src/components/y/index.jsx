import * as React from 'react'
const reducer = (state, action) => {
  if (action.type === 'add') {
    return state + 1
  }
}
export default function Y() {
  const [state, dispatch] = React.useReducer(reducer, 0)
  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
    </div>
  )
}
