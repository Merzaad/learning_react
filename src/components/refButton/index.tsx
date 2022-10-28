/* eslint-disable react/display-name */
import * as React from 'react'

type propType = {
  onClick: () => void
}

const RefButton = React.forwardRef<HTMLButtonElement, propType>(({ onClick }, ref) => (
  <button ref={ref} onClick={onClick} type="button">
    ref
  </button>
))

export default RefButton
