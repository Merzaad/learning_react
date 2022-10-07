import { createContext } from 'react'
import { Notif } from '../types/notif'

const notfContext = createContext<Notif>({
  update: false,
  close: () => null,
})

export default notfContext
