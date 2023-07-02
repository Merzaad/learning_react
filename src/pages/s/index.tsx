import * as React from 'react'
import './index.css'

const S = () => {
  const [state, setState] = React.useState(0)
  const [obj, setObj] = React.useState({ a: 1 })
  const [array, setArray] = React.useState<number[]>([])
  const [render, setRender] = React.useState(false)
  const ref = React.useRef(0)
  const testUpdatingRefInMemo = React.useMemo(() => {
    // doesnt work in strict mode
    const test = state - ref.current > 0 ? '>' : '=<'
    ref.current = state
    return test
  }, [state])
  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setState(Number(value))
  }
  React.useEffect(() => {
    console.log(obj)
  }, [obj])
  React.useEffect(() => {
    console.log(array)
    // [array.length] as dependency
  }, [array])
  React.useEffect(() => {
    console.log('render')
    setTimeout(() => {
      // if mutate, print updated but if new obj set, print captured
      // if press render then set new then mutate, print captured in first
      // if press render then set mutate then set new, print captured in first + mutate
      console.log(array)
      console.log(obj)
    }, 2000)
  }, [render])
  return (
    <div className="S">
      <div className="box">
        l
        <input onChange={inputChangeHandler} value={state} />
        {testUpdatingRefInMemo}
      </div>
      <div className="box">
        <button
          onClick={() =>
            setObj((prev) => {
              prev.a += 1
              return prev
            })
          }
        >
          mutate prev + 1
        </button>
        <button onClick={() => setObj(obj)}>set same obj</button>
        <button onClick={() => setObj({ a: obj.a + 1 })}>set new obj</button>
        obj.a : {obj.a}
      </div>
      <div className="box">
        <button
          onClick={() =>
            setArray((prev) => {
              prev.push(1)
              console.log(prev)
              return prev
            })
          }
        >
          mutate array push 1
        </button>
        <button onClick={() => setArray(array)}>set same array</button>
        <button onClick={() => setArray([...array, 2])}>set new array push 2</button>
        array : {array}
        <br />
        array.length: {array.length}
      </div>
      <div className="box">
        <button onClick={() => setRender(!render)}>RENDER</button>
      </div>
    </div>
  )
}
export default S
