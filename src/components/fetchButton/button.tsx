import React, { useContext } from 'react'
import ethContext from '../../context/ethContext'
const Button = () => {
  const { status, fetch } = useContext(ethContext)
  return (
    <button
      disabled={status === 'fetching'}
      style={{ opacity: status === 'fetching' ? 0.5 : 1 }}
      onClick={() => fetch()}
    >
      fetch
    </button>
  )
}
export default Button
