import axios from 'axios'

const Test = axios.create({})

let testCalled = false
Test.interceptors.request.use((config) => {
  console.log(`test: ${testCalled}`)
  if (config.url?.includes('stats')) {
    testCalled = true
  }
  return config
})
export { Test }
