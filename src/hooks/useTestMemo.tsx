import React from 'react'
import { EthData } from '../types/eth'
import { useEthData } from './useEthData'
const useTestMemo = () => {
  const { data } = useEthData()
  const price = React.useMemo(() => {
    console.log('memo executed')
    return data.market_price_usd * 100
  }, [data])
  React.useEffect(() => {
    console.log('memo rendered')
  })
  return price
}

export default useTestMemo
