export type EthData = {
  data?: any
  context?: any
  status: string
  error?: string
}
export interface EthDataHook extends EthData {
  fetch: () => void
}
export type EthContext = {
  status: string
  fetch: () => void
}
