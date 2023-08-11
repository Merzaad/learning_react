import * as React from 'react'
import './index.css'

export default function Box({ children }: { children: React.ReactNode }) {
  return <div className="box">{children}</div>
}
