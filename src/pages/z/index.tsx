import * as React from 'react'
import './index.css'
import coinContext from '../../context/coinContext'
import FetchButton from './FetchButton'

import { useCoinData } from '../../hooks/useCoinData'
import { moduleValue, increaseModuleValue } from '../../modules/module'
import Box from '../../components/Box'
import Button from '../../components/Button'

const Home = () => {
  const [count, setCount] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState(1)
  const [moduleLog, setModuleLog] = React.useState(moduleValue)
  const refButton = React.useRef<HTMLButtonElement>(null)
  const {
    data: ethDara,
    status: ethStatus,
    fetch: ethFetch,
    error: ethError,
  } = useCoinData('ethereum')
  const {
    data: btcData,
    status: btcStatus,
    fetch: btcFetch,
    error: btcError,
  } = useCoinData('bitcoin')
  const {
    data: dgeData,
    status: dgeStatus,
    fetch: dgeFetch,
    error: dgeError,
  } = useCoinData('dogecoin')
  const ethPrice = ethDara?.market_price_usd || ethStatus
  const btcPrice = btcData?.market_price_usd || btcStatus
  const dgePrice = dgeData?.market_price_usd || btcStatus

  /* React.useEffect(() => {
    const alert = setTimeout(() => console.log(`activetab: ${activeTab}`), 1000)
    return () => clearTimeout(alert)
  }, [activeTab]) */
  const printModuleValue = () => setModuleLog(moduleValue)
  const onRefButtonClick = () => {
    if (refButton.current) refButton.current.style.padding = '10px'
  }
  return (
    <div className="App">
      <div className={`${false && 'blur'}`}>
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
          {ethPrice && `ethereum price: ${ethPrice}`} {ethError}
          <coinContext.Provider value={{ status: ethStatus, fetch: ethFetch }}>
            <FetchButton />
          </coinContext.Provider>
        </Box>
        <Box>
          {btcPrice && `bitcoin price: ${btcPrice}`} {btcError}
          <coinContext.Provider value={{ status: btcStatus, fetch: btcFetch }}>
            <FetchButton />
          </coinContext.Provider>
        </Box>
        <Box>
          {dgePrice && `bitcoin price: ${dgePrice}`} {dgeError}
          <coinContext.Provider value={{ status: dgeStatus, fetch: dgeFetch }}>
            <FetchButton />
          </coinContext.Provider>
        </Box>
        <Box>
          <div className="btns">
            <Button onClick={() => setActiveTab(1)}>tab1</Button>
            <Button onClick={() => setActiveTab(2)}>tab2</Button>
          </div>
          <div className="tab" style={{ background: activeTab === 2 ? '#595260' : '#3F4E4F' }} />
        </Box>
        <Box>
          module:
          {moduleLog}
          <Button onClick={printModuleValue}>print</Button>
          <Button onClick={() => increaseModuleValue()}>+1</Button>
        </Box>
        <Box>
          <Button ref={refButton} onClick={onRefButtonClick}>
            ref
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default Home
