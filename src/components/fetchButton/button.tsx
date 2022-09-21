import React, { useContext } from 'react'
import coinContext from '../../context/coinContext'
import './index.css'
const Button = () => {
  // to do css
  const { status, fetch } = useContext(coinContext)
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
