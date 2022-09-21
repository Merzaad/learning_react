import React from 'react'
import { useCoinData } from './useCoinData'
const useEthMemo = () => {
  // error handling todo
  const { data } = useCoinData('ethereum')
  const price = React.useMemo(() => {
    console.log('memo executed')
    return data.market_price_usd * 100
  }, [data])
  React.useEffect(() => {
    console.log('memo rendered')
  })
  return price
}

export default useEthMemo
