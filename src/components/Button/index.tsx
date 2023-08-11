/* eslint-disable react/display-name */
import * as React from 'react'
import './index.css'

type propType = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, propType>(
  ({ onClick, children, disabled, className }, ref) => (
    <button
      className={'button' + ' ' + className}
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
)

export default Button
