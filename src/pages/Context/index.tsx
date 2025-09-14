import * as React from 'react'
import context from '../../context/context'
import Children1 from './Children1'
import Children2 from './Children2'
import Children3 from './Children3'
import Provider from './Provider'
import Box from '../../components/Box'

const Context = () => {
  const [state, setState] = React.useState({
    a: { x: 1, y: { i: 1 } },
    b: { x: { i: 1 }, y: { i: 1 } },
  })

  React.useEffect(() => {
    console.log('parent render')
  })
  return (
    <>
      <Box>
        <context.Provider value={[state, setState]}>
          <Children1>
            <Children2>
              <Children3 />
            </Children2>
          </Children1>
        </context.Provider>
      </Box>
      <Box>
        <Provider>
          <Children1>
            <Children2>
              <Children3 />
            </Children2>
          </Children1>
        </Provider>
      </Box>
    </>
  )
}
export default Context
