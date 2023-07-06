import React from 'react'
import { themeColor } from '../../styles/theme'
import './index.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav
        style={{
          backdropFilter: 'blur(4px)',
          backgroundColor: `${themeColor}50`,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <ul>
          <li>
            <button type="button" onClick={() => window.location.reload()}>
              Reload
            </button>
          </li>
          <li>
            {' '}
            <button type="button" onClick={() => navigate('/x')}>
              X
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('/')}>
              Z
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('/t')}>
              T
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('/y')}>
              Y
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('/s')}>
              S
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate('/a')}>
              A
            </button>
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
