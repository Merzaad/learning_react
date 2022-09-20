import React, { useState } from 'react'
import { useEthData } from './hooks/useEthData'
import ethContext from './context/ethContext'
import FetchButton from './components/fetchButton'
import Notification from './components/notification'
import notfContext from './context/notifContext'
import Menu from './components/menu'
import { register } from './swRegisteration'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { data, status, fetch, error } = useEthData()
  const [update, setUpdate] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const price = data?.market_price_usd || status
  React.useEffect(() => {
    console.log('app rendered')
  })
  React.useEffect(() => {
    register({
      onSuccess: (registration: any) => console.log('success'),
      onUpdate: (registration: any) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
        setUpdate(true)
      },
    })
  })
  React.useEffect(() => {
    const alert = setTimeout(() => console.log(`activetab: ${activeTab}`), 1000)
    return () => clearTimeout(alert)
  }, [activeTab])
  return (
    <>
      <div className="App">
        <div className={`${update && 'blur'}`}>
          <div className='logos'>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img src="/react.svg" className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="header">reactVite v0.0.3</h1>
          <div className="box">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          </div>
          <div className="box">
            {price && `ethereum price: ${price}`} {error}
            <ethContext.Provider value={{ status, fetch }}>
              <FetchButton />
            </ethContext.Provider>
          </div>
          <div className="box">
            <div className="btns">
              <button onClick={() => setActiveTab(1)}>tab1</button>
              <button onClick={() => setActiveTab(2)}>tab2</button>
            </div>
            <div className="tab">{`active: ${activeTab}`}</div>
          </div>
        </div>
        <notfContext.Provider value={{ update, close: () => window.location.reload() }}>
          {update && <Notification />}
        </notfContext.Provider>
      </div>
      <Menu />
    </>
  )
}

export default App
