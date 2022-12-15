import * as React from 'react'
import './index.css'
import { moduleValue, increaseModuleValue } from '../../modules/module'
import axios from 'axios'

const X = () => {
  const [state, setState] = React.useState(moduleValue)
  const [ratio, setRatio] = React.useState(1.5)
  const [input, setInput] = React.useState({
    asset: '',
    quote: '',
    error: { hasError: false, errorMessage: '' },
    status: 'initial',
  })
  const [pair, setPair] = React.useState({ asset: 'USDT', quote: 'BTC' })
  const [coins] = React.useState(['BTC', 'DOGE', 'ETH', 'USDT'])
  const fetching = input.status === 'fetching'
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
        status: '',
      })
    }
  }
  const setQuote = (value: number, testRatio: number): void => {
    if (value >= 0) {
      setInput({
        asset: String(value * testRatio),
        quote: String(value),
        error: { hasError: value !== 0 && value * testRatio < 100, errorMessage: '<100' },
        status: '',
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
  const switchHandler = (): void => {
    setRatio(1 / ratio)
    setAsset(Number(input.quote), 1 / ratio)
    setPair({ asset: pair.quote, quote: pair.asset })
  }
  const selectAssetHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target
    setPair({ ...pair, asset: value })
  }
  const selectQuoteHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target
    setPair({ ...pair, quote: value })
  }
  React.useEffect(() => {
    const fetchPrice = async () => {
      try {
        setInput({ ...input, status: 'fetching' })
        const { data } = await axios.get(
          `https://api.twox.ir/api/currencies/prices/latest/${pair.quote}/${pair.asset}`
        )
        setRatio(data.price)
        setInput({ ...input, status: '' })
      } catch (error) {
        console.warn(error)
      }
    }
    fetchPrice()
  }, [pair])
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
        <div>
          <input
            className="input"
            value={fetching ? '' : input.asset}
            type="number"
            onChange={assetChangeHanler}
            placeholder={fetching ? 'fetching' : 'asset'}
            disabled={fetching}
          />
          <select value={pair.asset} className="select" onChange={selectAssetHandler}>
            {coins.map(
              (coin) =>
                coin !== pair.quote && (
                  <option value={coin} key={`asset ${coin}`}>
                    {coin}
                  </option>
                )
            )}
          </select>
        </div>
        <button type="button" onClick={switchHandler} disabled={fetching} className="switch">
          switch
        </button>
        <div>
          <input
            className="input"
            type="number"
            value={fetching ? '' : input.quote}
            onChange={quoteChangeHanler}
            placeholder={fetching ? 'fetching' : 'quote'}
            disabled={fetching}
          />
          <select value={pair.quote} className="select" onChange={selectQuoteHandler}>
            {coins.map(
              (coin) =>
                coin !== pair.asset && (
                  <option value={coin} key={`asset ${coin}`}>
                    {coin}
                  </option>
                )
            )}
          </select>
        </div>
        <div className="help">
          error: {input.error.hasError && input.error.errorMessage}
          <br />
          price: {fetching ? 'fetching' : `${ratio} ${pair.quote}${pair.asset}`}
          <br />
          status: {input.status}
        </div>
      </div>
    </div>
  )
}
export default X
