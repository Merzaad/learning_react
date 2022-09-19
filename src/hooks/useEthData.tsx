import React from 'react'
import axios from 'axios'
import { EthData, EthDataHook } from '../types/eth'
const useEthData = (): EthDataHook => {
  const [ethData, setEthData] = React.useState<EthData>({
    status: 'initial',
  })
  const fetch = async () => {
    console.log('fetch executed')
    setEthData({ status: 'fetching' })
    try {
      // test multiple awaits in try catch
      // await axios.get('https://api.blockchair.com/ethere123um/stats')
      const response = await axios.get('https://api.blockchair.com/ethereum/stats')
      setEthData({ ...response.data, status: 'fetched' })
    } catch (error: any) {
      setEthData({ error: error.message, status: 'error' })
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
