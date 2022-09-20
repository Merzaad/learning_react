import React from 'react'
import './index.css'

const Menu = () => {
  return (
    <div className="Menu">
      <button type="button" onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  )
}

export default Menu
