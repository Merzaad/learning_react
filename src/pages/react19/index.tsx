import * as React from 'react'
import './index.css'
import Box from '../../components/Box'
/* import Use from './asd'
import AppProvider from '../../context/useAppContext' */

const React19 = () => {
  return (
    <div className="React19">
      <Box>
        Use
        <br />
        <React.Suspense fallback={<>Fallback...</>}>
          {/* <AppProvider>
            <Use />
          </AppProvider> */}
        </React.Suspense>
      </Box>
    </div>
  )
}
export default React19
