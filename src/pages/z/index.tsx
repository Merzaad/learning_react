import * as React from 'react'
import './index.css'
import coinContext from '../../context/coinContext'
import FetchButton from '../../components/fetchButton'
import RefButton from '../../components/refButton'

import { useCoinData } from '../../hooks/useCoinData'
import { moduleValue, increaseModuleValue } from '../../modules/module'
import MiddleSticky from '../../components/middleSticky'

const Home = () => {
  const [count, setCount] = React.useState(0)
  const [activeTab, setActiveTab] = React.useState(1)
  const [moduleLog, setModuleLog] = React.useState(moduleValue)
  const refBtn = React.useRef<HTMLButtonElement>(null)
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
        <div className="box">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
        <div className="box">
          {ethPrice && `ethereum price: ${ethPrice}`} {ethError}
          <coinContext.Provider value={{ status: ethStatus, fetch: ethFetch }}>
            <FetchButton />
          </coinContext.Provider>
        </div>
        <MiddleSticky />
        <div className="box">
          {btcPrice && `bitcoin price: ${btcPrice}`} {btcError}
          <coinContext.Provider value={{ status: btcStatus, fetch: btcFetch }}>
            <FetchButton />
          </coinContext.Provider>
        </div>
        <div className="box">
          {dgePrice && `bitcoin price: ${dgePrice}`} {dgeError}
          <coinContext.Provider value={{ status: dgeStatus, fetch: dgeFetch }}>
            <FetchButton />
          </coinContext.Provider>
        </div>
        <div className="box">
          <div className="btns">
            <button onClick={() => setActiveTab(1)}>tab1</button>
            <button onClick={() => setActiveTab(2)}>tab2</button>
          </div>
          <div className="tab" style={{ background: activeTab === 2 ? '#595260' : '#3F4E4F' }} />
        </div>
        <div className="box">
          module:
          {moduleLog}
          <button onClick={printModuleValue}>print</button>
          <button onClick={() => increaseModuleValue()}>+1</button>
        </div>
        <div className="box">
          <RefButton
            ref={refBtn}
            onClick={() => {
              if (refBtn.current) refBtn.current.style.padding = '20px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
