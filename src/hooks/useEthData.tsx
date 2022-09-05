import React from 'react'
import axios from 'axios'
type EthData = {
  data: any,
  context: any,
}
const useEthData = ():EthData  => {
  const [ethData, setEthData] = React.useState<EthData>({ data: {}, context: {} })
  React.useEffect(() => {
    ;(async () => {
      const response = await axios.get('https://api.blockchair.com/ethereum/stats')
      if (response.status === 200) setEthData(response.data)
    })()
  }, [])
  return ethData
}
export { useEthData }
