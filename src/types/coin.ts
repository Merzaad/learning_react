export type CoinData = {
  data?: any
  context?: any
  status: string
  error?: string
}
export interface CoinDataHook extends CoinData {
  fetch: () => void
}
export type CoinContext = {
  status: string
  fetch: () => void
}
