import React from 'react'
import { CoinData, CoinDataHook } from '../types/coin'
import { api } from '../api/api'
const useCoinData = (coin: string): CoinDataHook => {
  const [ethData, setEthData] = React.useState<CoinData>({
    status: 'initial',
  })
  const fetch = async () => {
    setEthData({ status: 'fetching' })
    try {
      // await axios.get('https://api.blockchair.com/ethere123um/stats')
      const response = await api.get(`https://api.blockchair.com/${coin}/stats`)
      setEthData({ ...response.data, status: 'fetched' })
      // console.log(response.data.test.test)
    } catch (error: any) {
      setEthData({ error: error.response?.statusText || error.message, status: 'error' })
    }
  }
  React.useEffect(() => {
    fetch()
  }, [])
  return { ...ethData, fetch }
}
export { useCoinData }
