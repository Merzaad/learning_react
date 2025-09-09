import React from 'react'
import { themeColor } from '../../styles/theme'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../Button'
import './index.css'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav
        style={{
          backdropFilter: 'blur(4px)',
          backgroundColor: `${themeColor}50`,
          padding: '1rem'
        }}
      >
        <ul>
          <li>
            <Button onClick={() => window.location.reload()}>Reload</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/key')}>key</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/')}>home</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/memoization')}>memoization</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/mutation')}>mutation</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/x')}>convertor</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/immer')}>Immer</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/context')}>Context</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/childrenRender')}>Children Render</Button>
          </li>
        </ul>
      </nav>
      <div className="Outlet">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
