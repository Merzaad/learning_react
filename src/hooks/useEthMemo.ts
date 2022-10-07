import React from 'react'
import { useCoinData } from './useCoinData'
const useEthMemo = () => {
  // error handling todo
  const { data } = useCoinData('ethereum')
  const price = React.useMemo(() => {
    return data.market_price_usd * 100
  }, [data])
  React.useEffect(() => {
  })
  return price
}

export default useEthMemo
