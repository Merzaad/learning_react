import * as React from 'react'
import './index.css'
import axios from 'axios'
import { themeColor } from '../../styles/theme'

const X = () => {
  const [fetching, setFetching] = React.useState(false)
  const [details, setDetails] = React.useState({
    ratio: 1,
    minAmount: 0,
    assetPrecision: 0,
    quotePrecision: 0,
  })
  const [input, setInput] = React.useState({
    asset: '',
    quote: '',
    error: { hasError: false, errorMessage: '' },
  })
  const assetInputRef = React.useRef<any>()
  const quoteInputRef = React.useRef<any>()
  const [pair, setPair] = React.useState({ asset: 'USDT', quote: 'BTC' })
  const [coins] = React.useState(['BTC', 'DOGE', 'ETH', 'USDT', 'IRT'])
  const { ratio, minAmount } = details
  const removeExtraDecimals = (value: string, precision: number) => {
    const strValue = String(value)
    const decIndex = strValue.indexOf('.')
    if (decIndex !== -1) {
      if (precision === 0) {
        return strValue.slice(0, decIndex)
      } else {
        return strValue.slice(0, decIndex + precision + 1)
      }
    } else {
      return strValue
    }
  }
  const setAsset = (
    value: string,
    testRatio: number,
    testMinAmount: number,
    assetPrecision: number,
    quotePrecision: number
  ): void => {
    const numValue = Number(value)
    if (numValue > 0) {
      setInput({
        asset: removeExtraDecimals(value, assetPrecision),
        quote: removeExtraDecimals(String(numValue * testRatio), quotePrecision),
        error: {
          hasError: numValue !== 0 && numValue < testMinAmount,
          errorMessage: `minimum amount ${testMinAmount}`,
        },
      })
    }
  }
  const setQuote = (
    value: string,
    testRatio: number,
    testMinAmount: number,
    assetPrecision: number,
    quotePrecision: number
  ): void => {
    const numValue = Number(value)
    if (numValue >= 0) {
      setInput({
        asset: removeExtraDecimals(String(numValue / testRatio), assetPrecision),
        quote: removeExtraDecimals(value, quotePrecision),
        error: {
          hasError: numValue !== 0 && numValue / testRatio < testMinAmount,
          errorMessage: `minimum amount (${testMinAmount})`,
        },
      })
    }
  }
  const assetChangeHanler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setAsset(value, ratio, minAmount, details.assetPrecision, details.quotePrecision)
  }
  const quoteChangeHanler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    setQuote(value, ratio, minAmount, details.assetPrecision, details.quotePrecision)
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
  const setMinumumAmount = (): void =>
    setAsset(String(minAmount), ratio, minAmount, details.assetPrecision, details.quotePrecision)
  const fetchPrice = async () => {
    try {
      console.time('api/currencies/prices/latest/')
      setFetching(true)
      const { data } = await axios.get(
        `https://api.twox.ir/api/currencies/prices/latest/${pair.asset}/${pair.quote}`
      )
      const { price: ratio, minAmount, baseAsset, quoteAsset } = data
      setDetails({
        ratio,
        minAmount,
        assetPrecision: baseAsset.assetPrecision,
        quotePrecision: quoteAsset.assetPrecision,
      })
      setAsset(input.asset, ratio, minAmount, baseAsset.assetPrecision, quoteAsset.assetPrecision)
    } catch (error) {
      console.warn(error)
    }
    setFetching(false)
    console.timeEnd('api/currencies/prices/latest/')
  }
  const refetch = () => {
    fetchPrice()
  }
  React.useEffect(() => {
    fetchPrice()
  }, [pair])
  return (
    <div className="X">
      <div className="background">
        <div className="main">
          <div className="inputs">
            <input
              className="input"
              value={fetching ? '' : input.asset}
              onChange={assetChangeHanler}
              placeholder={fetching ? 'fetching' : 'asset'}
              disabled={fetching}
              ref={assetInputRef}
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
          <div className="menu">
            <button
              type="button"
              onClick={switchHandler}
              disabled={fetching}
              className="menuButton"
            >
              switch
            </button>
            <button type="button" onClick={refetch} disabled={fetching} className="menuButton">
              refetch
            </button>
            <button
              type="button"
              onClick={() => quoteInputRef.current?.select()}
              disabled={fetching}
              className="menuButton"
            >
              select quote
            </button>
            <button
              type="button"
              onClick={() => assetInputRef.current?.select()}
              disabled={fetching}
              className="menuButton"
            >
              select asset
            </button>
            <button
              type="button"
              onClick={setMinumumAmount}
              disabled={fetching}
              className="menuButton"
            >
              minimum
            </button>
          </div>
          <div className="inputs">
            <input
              className="input"
              value={fetching ? '' : input.quote}
              onChange={quoteChangeHanler}
              placeholder={fetching ? 'fetching' : 'quote'}
              disabled={fetching}
              ref={quoteInputRef}
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
          <div className="box">
            <div className="help" style={{ color: themeColor }}>
              error: {fetching ? '' : input.error.hasError && input.error.errorMessage}
              <br />
              price: {fetching ? 'fetching' : `${ratio} ${pair.asset}${pair.quote}`}
              <br />
              status: {'todo'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default X
