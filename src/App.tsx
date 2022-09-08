import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useEthData } from './hooks/useEthData'
import ethContext from './context/ethContext'
import FetchButton from './components/fetchButton'
import useTestMemo from './hooks/useTestMemo'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  const { data, status, fetch } = useEthData()
  const price = data.market_price_usd || 'no data'
  const testPrice = useTestMemo()
  React.useEffect(() => {
    console.log('app rendered')
    console.log(`memo : ${testPrice}`)
  })
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div className="card">
        {price}
        <br />
        {status === 'fetching' && 'fetching'}
      </div>
      <ethContext.Provider value={{ status, fetch }}>
        <FetchButton />
      </ethContext.Provider>
    </div>
  )
}

export default App
