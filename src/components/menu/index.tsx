import React from 'react'
import { themeColor } from '../../styles/theme'
import './index.css'

const Menu = () => {
  return (
    <div
      className="Menu"
      style={{ backdropFilter: 'blur(4px)', backgroundColor: `${themeColor}B3` }}
    >
      <button type="button" onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  )
}

export default Menu
