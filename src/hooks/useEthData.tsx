import React from 'react'
import axios from 'axios'
type EthData = {
  data: any
  context: any
  status: string
}
interface EthDataHook extends EthData {
  fetch: () => void
}
const useEthData = (): EthDataHook => {
  const [ethData, setEthData] = React.useState<EthData>({ data: {}, context: {}, status: 'initial' })
  const fetch = async () => {
    setEthData((prev) => ({...prev, status: 'fetching'}))
    const response = await axios.get('https://api.blockchair.com/ethereum/stats')
    if (response.status === 200) setEthData({...response.data, status: 'fetched'})
  }
  React.useEffect(() => {
    fetch()
  }, [])
  return { ...ethData, fetch }
}
export { useEthData }
