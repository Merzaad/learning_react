import * as React from 'react'
import context from '../../context/context'
import './index.css'
import Children1 from './Children1'
import Children2 from './Children2'

const Context = () => {
  const [state, setState] = React.useState({
    a: { x: 1, y: { i: 1 } },
    b: { x: { i: 1 }, y: { i: 1 } },
  })
  return (
    <context.Provider value={{ state, setState }}>
      <div className="Context">
        <Children1 />
        <Children2 />
      </div>
    </context.Provider>
  )
}
export default Context
