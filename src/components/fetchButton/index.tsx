import React, { useContext } from 'react'
import coinContext from '../../context/coinContext'
import './index.css'

const FetchButton = () => {
  const { status, fetch } = useContext(coinContext)

  return (
    <div>
      <button
        disabled={status === 'fetching'}
        onClick={() => fetch()}
        className={status === 'fetching' ? 'opacity05' : 'opacity1'}
      >
        fetch
      </button>
    </div>
  )
}
export default FetchButton
