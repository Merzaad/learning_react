// FetchButton.tsx
import * as React from 'react'
import Button from '../../components/Button'

interface FetchButtonProps {
  status: 'initial' | 'loading' | 'success' | 'error'
  onFetch: () => void
}

const FetchButton: React.FC<FetchButtonProps> = ({ status, onFetch }) => {
  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return 'Loading...'
      case 'success':
        return 'Fetch Again'
      case 'error':
        return 'Retry'
      default:
        return 'Fetch Price'
    }
  }

  const isDisabled = status === 'loading'

  return (
    <Button onClick={onFetch} disabled={isDisabled}>
      {getButtonText()}
    </Button>
  )
}

export default FetchButton
