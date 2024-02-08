import React from 'react'
import UpdatePopup from './components/UpdatePopup'
import notfContext from './context/notifContext'
import Layout from './components/Layout'
import { register } from './swRegisteration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Z from './pages/z'
import X from './pages/x'
import S from './pages/s'
import Y from './pages/y'
import A from './pages/a'
import Immer from './pages/Immer'
import Context from './pages/Context'
import ChildrenRender from './pages/ChildrenRender'

function App() {
  const [update, setUpdate] = React.useState(false)
  React.useEffect(() => {
    register({
      onUpdate: (registration: any) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
        setUpdate(true)
      },
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Z />} />
            <Route path="/x" element={<X />} />
            <Route path="/s" element={<S />} />
            <Route path="/y" element={<Y />} />
            <Route path="/a" element={<A />} />
            <Route path="/immer" element={<Immer />} />
            <Route path="/context" element={<Context />} />
            <Route path="/childrenRender" element={<ChildrenRender />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <notfContext.Provider value={{ update, close: () => window.location.reload() }}>
        {update && <UpdatePopup />}
      </notfContext.Provider>
    </>
  )
}

export default App
