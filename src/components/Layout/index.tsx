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
        }}
      >
        <ul>
          <li>
            <Button onClick={() => window.location.reload()}>Reload</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/x')}>X</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/')}>Z</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/y')}>Y</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/s')}>S</Button>
          </li>
          <li>
            <Button onClick={() => navigate('/a')}>A</Button>
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
