import * as React from 'react'

export default function Button() {
  const [state, setState] = React.useState(0)
  console.log(state)
  const clickHandler = React.useCallback(() => setState((x) => x + 1), [])
  return (
    <>
      {state}
      <button onClick={clickHandler}>memo preventing re-render</button>
    </>
  )
}
