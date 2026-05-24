import React from 'react'
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
import React19 from './pages/react19'
import { ErrorBoundary } from './components/ErrorBoundary'
import { CoinProvider } from './context/useCoinContext'

function App() {
  React.useEffect(() => {
    register({
      onUpdate: (registration: any) => {
        if (registration && registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        }
        console.log('uodate sw')
      },
    })
  }, [])
  return (
    <>
      <CoinProvider>
        <ErrorBoundary>
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
                <Route path="/react19" element={<React19 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </CoinProvider>
    </>
  )
}

export default App
