import * as React from 'react'
import Button from '../../components/Button'

export default function Buttons() {
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
      <Button onClick={clickHandler}>add {oldSatate}</Button>
      <Button onClick={() => setTriggerCallBack((x) => !x)}>update callback</Button>
      <Button onClick={() => setState2((x) => x + 1)}>increase {state2}</Button>
      memo
    </>
  )
}
