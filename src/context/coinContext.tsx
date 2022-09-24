import { createContext } from 'react'
import { CoinContext } from '../types/coin'

const coinContext = createContext<CoinContext>({
  status: 'initial',
  fetch: () => null,
})
export default coinContext
