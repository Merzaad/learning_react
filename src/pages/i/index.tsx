import * as React from 'react'
import './index.css'
import Box from '../../components/Box'
import { produce } from 'immer'
import Button from '../../components/Button'

const I = () => {
  const [nested, setNested] = React.useState({
    a: { x: 1 },
    b: {
      x: { i: 1 },
      y: { j: 1 },
    },
  })
  const obj1 = React.useRef({
    a: { x: 1 },
    b: { y: 2 },
    c: { d: { x: 2 }, e: { z: 2 } },
  })
  const obj2 = React.useRef<any>(null)
  const trigger = () => {
    obj2.current = produce(obj1.current, (draft) => {
      draft.b.y = 3
      draft.c.d = draft.a
    })
    console.log('a', Object.is(obj2.current.a, obj1.current.a))
    console.log('b', Object.is(obj2.current.b, obj1.current.b))
    console.log('c', Object.is(obj2.current.c, obj1.current.c))
    console.log('c.e', Object.is(obj2.current.c.e, obj1.current.c.e))
    console.log('c.d', Object.is(obj2.current.c.d, obj1.current.c.d))
    console.log('c.d is a', Object.is(obj2.current.c.d, obj1.current.a))
    console.log('obj', Object.is(obj2.current, obj1.current))
  }
  const triggerCurry = (obj: any, amount: number) => {
    const curry = produce((draft, value) => {
      draft.a.x += value
    })
    obj.current = curry(obj.current, amount)
  }
  const updateNested = () => {
    setNested(
      produce((draft) => {
        draft.b.x.i += 1
      })
    )
  }
  React.useEffect(() => {
    console.log('render')
  }, [nested.b.y])
  return (
    <div className="I">
      <Box>
        <Button onClick={trigger}>IMMER</Button>
      </Box>
      <Box>
        <Button onClick={() => triggerCurry(obj1, 2)}>curry 2</Button>
        <Button onClick={() => console.log(obj1.current.a)}>print</Button>
      </Box>
      <Box>
        {nested.b.x.i}
        <Button onClick={updateNested}>update nested</Button>
      </Box>
    </div>
  )
}
export default I
