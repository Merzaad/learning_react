import React, { useContext } from 'react'
import coinContext from '../../context/coinContext'
import './index.css'
import Button from '../../components/Button'

const FetchButton = () => {
  const { status, fetch } = useContext(coinContext)

  return (
    <Button
      disabled={status === 'fetching'}
      onClick={() => fetch()}
      className={status === 'fetching' ? 'opacity05' : 'opacity1'}
    >
      fetch
    </Button>
  )
}
export default FetchButton
