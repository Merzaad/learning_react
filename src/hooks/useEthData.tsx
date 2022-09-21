import React from 'react'
import { EthData, EthDataHook } from '../types/eth'
import { Test } from '../api/api'
const useEthData = (): EthDataHook => {
  const [ethData, setEthData] = React.useState<EthData>({
    status: 'initial',
  })
  const fetch = async () => {
    console.log('fetch executed')
    setEthData({ status: 'fetching' })
    try {
      // await axios.get('https://api.blockchair.com/ethere123um/stats')
      const response = await Test.get('https://api.blockchair.com/ethereum/stats')
      setEthData({ ...response.data, status: 'fetched' })
    } catch (error: any) {
      setEthData({ error: error.response?.statusText, status: 'error' })
    }
  }
  React.useEffect(() => {
    fetch()
  }, [])
  React.useEffect(() => {
    console.log('hook rendered')
  })
  return { ...ethData, fetch }
}
export { useEthData }
