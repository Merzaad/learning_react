import * as React from 'react'
import './index.css'
import axios from 'axios'

const X = () => {
  const [details, setDetails] = React.useState({ ratio: 1, minAmount: 0 })
  const [input, setInput] = React.useState({
    asset: '',
    quote: '',
    error: { hasError: false, errorMessage: '' },
    status: 'initial',
  })
  const [pair, setPair] = React.useState({ asset: 'USDT', quote: 'BTC' })
  const [coins] = React.useState(['BTC', 'DOGE', 'ETH', 'USDT'])
  const fetching = input.status === 'fetching'
  const { ratio, minAmount } = details
  const setAsset = (value: number, testRatio: number, testMinAmount: number): void => {
    if (value >= 0) {
      setInput({
        asset: String(value),
        quote: String(value * testRatio),
        error: {
          hasError: value !== 0 && value < testMinAmount,
          errorMessage: `< ${testMinAmount}`,
        },
        status: '',
      })
    }
  }
  const setQuote = (value: number, testRatio: number, testMinAmount: number): void => {
    if (value >= 0) {
      setInput({
        asset: String(value / testRatio),
        quote: String(value),
        error: {
          hasError: value !== 0 && value / testRatio < testMinAmount,
          errorMessage: `< ${testMinAmount}`,
        },
        status: '',
      })
    }
  }
  const assetChangeHanler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setAsset(Number(value), ratio, minAmount)
  }
  const quoteChangeHanler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setQuote(Number(value), ratio, minAmount)
  }
  const switchHandler = (): void => {
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
        const { data } = await axios.get(
          `https://api.twox.ir/api/currencies/prices/latest/${pair.asset}/${pair.quote}`
        )
        const { price: ratio, minAmount } = data
        setDetails({ ratio, minAmount })
        setAsset(Number(input.asset), ratio, minAmount)
      } catch (error) {
        console.warn(error)
      }
    }
    fetchPrice()
    return () => {
      setInput({ ...input, status: 'fetching' })
    }
  }, [pair])
  return (
    <div className="X">
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
          <select
            value={pair.asset}
            className="select"
            onChange={selectAssetHandler}
            disabled={fetching}
          >
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
          <select
            value={pair.quote}
            className="select"
            onChange={selectQuoteHandler}
            disabled={fetching}
          >
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
          error: {fetching ? '' : input.error.hasError && input.error.errorMessage}
          <br />
          price: {fetching ? 'fetching' : `${ratio} ${pair.asset}${pair.quote}`}
          <br />
          status: {input.status}
        </div>
      </div>
    </div>
  )
}
export default X
