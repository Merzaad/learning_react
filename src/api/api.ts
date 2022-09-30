import axios from 'axios'

const api = axios.create({
  timeout: 10000,
})

api.interceptors.request.use((config) => {
  if (config.url?.includes('ethereum')) {
    throw new Error('axios interceptor')
    // config.url = config.url.replace('ethereum', 'bitcoin')
  }
  return config
})
export { api }
