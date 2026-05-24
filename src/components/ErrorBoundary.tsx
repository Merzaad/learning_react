'use client'
import React from 'react'
import Button from './Button'

interface ErrorBoundaryProps {
  fallback?: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return <div onClick={this.resetError}>{this.props.fallback}</div>

      return (
        <div style={{ color: 'red', padding: 16 }}>
          <h2>Something went wrong 😢</h2>
          <pre>{this.state.error?.message}</pre>
          <Button onClick={this.resetError}>Try again</Button>
        </div>
      )
    }

    return this.props.children
  }
}
