import * as React from 'react'
import './index.css'

const S = () => {
  const [state, setState] = React.useState(0)
  const ref = React.useRef(0)
  const Test = React.useMemo(() => {
    const test = state - ref.current > 0 ? '>' : '=<'
    ref.current = state
    return test
  }, [state])
  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setState(Number(value))
  }
  return (
    <div className="S">
      <div className="box">
        <input onChange={inputChangeHandler} value={state} />
        {Test}
      </div>
    </div>
  )
}
export default S
