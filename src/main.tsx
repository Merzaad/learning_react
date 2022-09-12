import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { register } from './swRegisteration'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
register({
  onSuccess: (registration: any) => console.log('success'),
  onUpdate: (registration: any) => console.log('update v6'),
})
