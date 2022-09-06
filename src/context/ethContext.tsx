import { createContext } from 'react'
import { EthContext } from '../types/eth'

const ethContext = createContext<EthContext>({
  status: 'initial',
  fetch: () => null,
})
export default ethContext
