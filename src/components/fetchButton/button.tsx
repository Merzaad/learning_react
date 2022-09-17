import React, { useContext } from 'react'
import ethContext from '../../context/ethContext'
import './index.css'
const Button = () => {
  // to do css
  const { status, fetch } = useContext(ethContext)
  return (
    <button
      disabled={status === 'fetching'}
      onClick={() => fetch()}
      className={status === 'fetching' ? 'opacity05' : 'opacity1'}
    >
      fetch
    </button>
  )
}
export default Button
