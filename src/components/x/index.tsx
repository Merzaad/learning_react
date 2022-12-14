import * as React from 'react'
import './index.css'
import { moduleValue, increaseModuleValue } from '../../modules/module'

const X = () => {
  const [state, setState] = React.useState(moduleValue)
  const [ratio, setRatio] = React.useState(1.5)
  const [input, setInput] = React.useState({
    asset: '',
    quote: '',
    error: { hasError: false, errorMessage: '' },
  })

  const increaseHandler = () => {
    increaseModuleValue()
    setState(moduleValue)
  }
  const setAsset = (value: number, testRatio: number): void => {
    if (value >= 0) {
      setInput({
        asset: String(value),
        quote: String(value / testRatio),
        error: { hasError: value !== 0 && value < 100, errorMessage: '<100' },
      })
    }
  }
  const setQuote = (value: number, testRatio: number): void => {
    if (value >= 0) {
      setInput({
        asset: String(value * testRatio),
        quote: String(value),
        error: { hasError: value !== 0 && value * testRatio < 100, errorMessage: '<100' },
      })
    }
  }
  const assetChangeHanler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setAsset(Number(value), ratio)
  }
  const quoteChangeHanler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setQuote(Number(value), ratio)
  }
  const switchHandler = () => {
    setRatio(1 / ratio)
    setAsset(Number(input.quote), 1 / ratio)
  }
  return (
    <div className="X">
      <div className="box">
        state: {state}
        <button type="button" onClick={increaseHandler}>
          +1
        </button>
        <button type="button" onClick={() => window.alert(`module: ${moduleValue}`)}>
          print
        </button>
      </div>
      <div className="box">
        <input
          className="input"
          value={input.asset}
          type="number"
          onChange={assetChangeHanler}
          placeholder="asset"
        />
        <button type="button" onClick={switchHandler}>
          switch
        </button>
        <input
          className="input"
          type="number"
          value={input.quote}
          onChange={quoteChangeHanler}
          placeholder="quote"
        />
        <div className='help'>
          error: {input.error.hasError && input.error.errorMessage}
          <br />
          ratio: {ratio}
        </div>
      </div>
    </div>
  )
}
export default X
