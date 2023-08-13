import * as React from 'react'
import './index.css'
import Box from '../../components/Box'
import { produce } from 'immer'
import Button from '../../components/Button'

const I = () => {
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
  return (
    <div className="I">
      <Box>
        <Button onClick={trigger}>IMMER</Button>
      </Box>
    </div>
  )
}
export default I
