import * as React from 'react'
import './index.css'
import { moduleValue, increaseModuleValue } from '../../modules/module'

const X = () => {
  return (
    <div className="X">
      <button type="button" onClick={() => increaseModuleValue()}>
        +
      </button>
      <button type="button" onClick={() => window.alert(moduleValue)}>
        print
      </button>
    </div>
  )
}
export default X
