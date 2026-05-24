// Home.tsx
import * as React from 'react'
import './index.css'
import FetchButton from './FetchButton'
import { moduleValue, increaseModuleValue } from '../../modules/module'
import Box from '../../components/Box'
import Button from '../../components/Button'
import { useCoinContext } from '../../context/useCoinContext'

const Home = () => {
  const [count, setCount] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState(1)
  const [moduleLog, setModuleLog] = React.useState(moduleValue)
  const refButton = React.useRef<HTMLButtonElement>(null)

  const [coinState, coinActions] = useCoinContext()
  const { fetchCoin } = coinActions

  const ethereum = coinState.ethereum

  const getPriceDisplay = (coinData: typeof ethereum) => {
    if (coinData.status === 'loading') return 'loading...'
    if (coinData.status === 'error') return 'error'
    if (coinData.status === 'success' && coinData.data) {
      return `$${coinData.data.market_price_usd}`
    }
    return 'not fetched'
  }

  const printModuleValue = () => setModuleLog(moduleValue)

  const onRefButtonClick = () => {
    if (refButton.current) refButton.current.style.padding = '10px'
  }

  return (
    <div className="App">
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="header">reactVite v0.0.84</h1>

      <Box>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </Box>
      <Box>
        <div>
          Ethereum price: {getPriceDisplay(ethereum)}
          {ethereum.status === 'error' && (
            <span style={{ color: 'red', marginLeft: '8px' }}>{ethereum.error}</span>
          )}
        </div>
        <FetchButton status={ethereum.status} onFetch={() => fetchCoin('ethereum')} />
      </Box>

      <Box>
        <div className="btns">
          <Button onClick={() => setActiveTab(1)}>tab1</Button>
          <Button onClick={() => setActiveTab(2)}>tab2</Button>
        </div>
        <div className="tab" style={{ background: activeTab === 2 ? '#595260' : '#3F4E4F' }} />
      </Box>

      <Box>
        module: {moduleLog}
        <Button onClick={printModuleValue}>print</Button>
        <Button onClick={() => increaseModuleValue()}>+1</Button>
      </Box>

      <Box>
        <Button ref={refButton} onClick={onRefButtonClick}>
          ref
        </Button>
      </Box>
    </div>
  )
}

export default Home
