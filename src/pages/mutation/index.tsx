import * as React from 'react'
import './index.css'
import Box from '../../components/Box'
import Button from '../../components/Button'

const Mutation = () => {
  const [state, setState] = React.useState(0)
  let [obj, setObj] = React.useState({ a: 1 })
  const [array, setArray] = React.useState<number[]>([])
  const [num, setNum] = React.useState(0)
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
    console.log(num)
  }, [num])
  React.useEffect(() => {
    console.log('render')
    setTimeout(() => {
      // if mutate, print updated but if new obj set, print captured
      // if press render then set new then mutate, print captured in first
      // if press render then set mutate then set new, print captured in first + mutate
      console.log(array)
      console.log(obj)
      console.log(num)
    }, 2000)
  }, [render])
  React.useEffect(() => {
    'render'
  })
  return (
    <div className="S">
      <Box>
        l
        <input onChange={inputChangeHandler} value={state} />
        {testUpdatingRefInMemo}
      </Box>
      <Box>
        <Button
          onClick={() =>
            setObj((prev) => {
              prev.a += 1
              return prev
            })
          }
        >
          mutate prev + 1
        </Button>
        <Button onClick={() => setObj(obj)}>set same obj</Button>
        <Button
          onClick={() => {
            obj = { a: 3 }
          }}
        >
          test
        </Button>
        <Button onClick={() => setObj({ a: obj.a + 1 })}>set new obj</Button>
        obj.a : {obj.a}
      </Box>
      <Box>
        <Button
          onClick={() =>
            setArray((prev) => {
              prev.push(1)
              return prev
            })
          }
        >
          mutate array push 1
        </Button>
        <Button onClick={() => setArray(array)}>set same array</Button>
        <Button onClick={() => setArray([...array, 2])}>set new array push 2</Button>
        array : {array}
        <br />
        array.length: {array.length}
      </Box>
      <Box>
        <Button onClick={() => setNum(num)}>set same num</Button>
        <Button onClick={() => setNum(num + 1)}>set num + 1</Button>
        <Button onClick={() => setNum((prev) => prev)}>set same num</Button>
        num: {num}
      </Box>
      <Box>
        <Button onClick={() => setRender(!render)}>RENDER</Button>
      </Box>
    </div>
  )
}
export default Mutation
