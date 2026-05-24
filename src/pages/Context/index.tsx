import * as React from 'react'
import { AppProvider } from '../../context/useAppContext'
import Children1 from './Children1'
import Children2 from './Children2'
import Children3 from './Children3'
import Box from '../../components/Box'

const Context = () => {
  return (
    <>
      <Box>
        <AppProvider>
          <Children1>
            <Children2>
              <Children3 />
            </Children2>
          </Children1>
        </AppProvider>
      </Box>
      <Box>
        <AppProvider>
          <Children1>
            <Children2>
              <Children3 />
            </Children2>
          </Children1>
        </AppProvider>
      </Box>
    </>
  )
}

export default Context
