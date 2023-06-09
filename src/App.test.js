import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import notfContext from './context/notifContext'
import App from './App'

describe('App', () => {
  test('renders layout', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const layoutElement = screen.getByRole('main')
    expect(layoutElement).toBeInTheDocument()
  })

  test('renders Z component on / route', () => {
    window.history.pushState({}, '', '/')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const zElement = screen.getByText(/This is Z component!/i)
    expect(zElement).toBeInTheDocument()
  })

  test('renders X component on /x route', () => {
    window.history.pushState({}, '', '/x')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const xElement = screen.getByText(/This is X component!/i)
    expect(xElement).toBeInTheDocument()
  })

  test('renders Y component on /y route', () => {
    window.history.pushState({}, '', '/y')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const yElement = screen.getByText(/This is Y component!/i)
    expect(yElement).toBeInTheDocument()
  })

  test('renders T component on /t route', () => {
    window.history.pushState({}, '', '/t')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const tElement = screen.getByText(/This is T component!/i)
    expect(tElement).toBeInTheDocument()
  })

  test('renders Notification component when update is true', () => {
    const closeFn = jest.fn()
    const update = true
    render(
      <notfContext.Provider value={{ update, close: closeFn }}>
        <App />
      </notfContext.Provider>
    )
    const notificationElement = screen.getByText(/A new update is available!/i)
    expect(notificationElement).toBeInTheDocument()
  })
})
