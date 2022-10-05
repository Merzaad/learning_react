import * as React from 'react'
import './index.css'
import { moduleValue, increaseModuleValue } from '../../modules/module'

const X = () => {
  const [state, setState] = React.useState(moduleValue)
  const increaseHandler = () => {
    increaseModuleValue()
    setState(moduleValue)
  }
  return (
    <div className="X">
      state: {state}
      <button type="button" onClick={increaseHandler}>
        +1
      </button>
      <button type="button" onClick={() => window.alert(`module: ${moduleValue}`)}>
        print
      </button>
    </div>
  )
}
export default X
