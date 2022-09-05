import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useEthData } from './hooks/useEthData'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { data, status, fetch } = useEthData()
  const price = data.market_price_usd || 'no data'
  React.useEffect(() => {
    console.log('render')
  })
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <div className='card'>
        {price}
        <br />
        {status === 'fetching' && 'fetching'}
      </div>
      <div className='card'>
        <button
          disabled={status === 'fetching'}
          style={{ opacity: status === 'fetching' ? 0.5 : 1 }}
          onClick={() => fetch()}
        >
          fetch
        </button>
      </div>
    </div>
  )
}

export default App

