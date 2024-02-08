import * as React from 'react'
import Box from '../../components/Box'
import Wrapper from './Wrapper'
import PassedInProps from './PassedInProps'

export default function ChildrenRender() {
  React.useEffect(() => {
    console.log('render parent')
  })
  return (
    <Box>
      <Wrapper>
        <PassedInProps />
      </Wrapper>
    </Box>
  )
}
