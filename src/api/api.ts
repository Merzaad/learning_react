import axios from 'axios'

const api = axios.create({})

let is = false
api.interceptors.request.use((config) => {
  console.log(`interceptors tets: ${is}`)
  if (config.url?.includes('bitcoin')) {
    is = true
  }
  return config
})
export { api }
