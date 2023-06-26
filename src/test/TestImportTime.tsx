import * as React from 'react'
import testChunk from '../modules/testChunk'

interface initial {
  result?: any
  time?: number
}
export default function TestImportTime() {
  const someData = testChunk()
  console.log(someData)
  const [executionTime, setExecutionTime] = React.useState<initial>({})
  const testMain = async () => {
    const time = new Date()
    try {
      const resoonse = await import('../pages/x/index')
      console.log(resoonse)
      setExecutionTime({ result: resoonse, time: Number(new Date()) - Number(time) })
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    testMain()
  }, [])
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '50px',
      }}
    >
      {executionTime.time && executionTime.time}
    </div>
  )
}
