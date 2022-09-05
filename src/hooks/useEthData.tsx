import React from 'react'
import axios from 'axios'
const useEthData = (call = false) => {
  const [data, setData] = React.useState<{data: any}>({data: {}})
  React.useEffect(() => {
    const getData = async () => {
        const response = await axios.get('https://api.blockchair.com/ethereum/stats')
        if (response.status === 200) setData(response.data)
      }
      getData()
  }, [])
  return { data }
}
export { useEthData }
