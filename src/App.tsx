import React from 'react'
import UpdatePopup from './components/UpdatePopup'
import notfContext from './context/notifContext'
import Layout from './components/Layout'
import { register } from './swRegisteration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/home'
import Convertor from './pages/convertor'
import Mutation from './pages/mutation'
import Memoization from './pages/memoization'
import Key from './pages/key'
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
            <Route index element={<Home />} />
            <Route path="/convertor" element={<Convertor />} />
            <Route path="/mutation" element={<Mutation />} />
            <Route path="/memoization" element={<Memoization />} />
            <Route path="/key" element={<Key />} />
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
