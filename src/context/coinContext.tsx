import { createContext } from 'react'
import { EthContext } from '../types/eth'

const coinContext = createContext<EthContext>({
  status: 'initial',
  fetch: () => null,
})
export default coinContext
