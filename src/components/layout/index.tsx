import React from 'react'
import { themeColor } from '../../styles/theme'
import './index.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="Menu"
        style={{
          backdropFilter: 'blur(4px)',
          backgroundColor: `${themeColor}50`,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <button type="button" onClick={() => window.location.reload()}>
          Reload
        </button>
        <button type="button" onClick={() => navigate('/x')}>
          X
        </button>
        <button type="button" onClick={() => navigate('/')}>
          Z
        </button>
        <button type="button" onClick={() => navigate('/t')}>
          T
        </button>
        <button type="button" onClick={() => navigate('/y')}>
          Y
        </button>
      </div>
      <Outlet />
    </>
  )
}

export default Layout
