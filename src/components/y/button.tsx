import * as React from 'react'

export default function Button() {
  const [state, setState] = React.useState(0)
  const [state2, setState2] = React.useState(0)
  const [triggerCallBack, setTriggerCallBack] = React.useState(false)
  const clickHandler = React.useCallback(() => {
    setState((x) => x + state2)
    console.log(state2)
  }, [triggerCallBack])
  const oldSatate = React.useMemo(() => state2, [triggerCallBack])
  return (
    <>
      {state}
      <button onClick={clickHandler}>add {oldSatate}</button>
      <button onClick={() => setTriggerCallBack((x) => !x)}>update callback</button>
      <button onClick={() => setState2((x) => x + 1)}>increase {state2}</button>
      memo
    </>
  )
}
