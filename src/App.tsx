import React from 'react'
import Notification from './components/notification'
import notfContext from './context/notifContext'
import Layout from './components/layout'
import { register } from './swRegisteration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/app'
import X from './components/x'

function App() {
  const [update, setUpdate] = React.useState(false)
  React.useEffect(() => {
    console.log('app rendered')
  })
  React.useEffect(() => {
    register({
      onUpdate: (registration: any) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
        setUpdate(true)
      },
    })
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/x" element={<X />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <notfContext.Provider value={{ update, close: () => window.location.reload() }}>
        {update && <Notification />}
      </notfContext.Provider>
    </>
  )
}

export default App
