import * as React from 'react'
import './index.css'
import Box from '../../components/Box'
import Use from './Use'

const React19 = () => {
  return (
    <div className="React19">
      <Box>
        Use
        <br />
        <React.Suspense fallback={<>Fallback...</>}>
          <Use />
        </React.Suspense>
      </Box>
    </div>
  )
}
export default React19
