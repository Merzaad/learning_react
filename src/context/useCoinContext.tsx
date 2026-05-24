// context/coinContext.tsx
import React, { createContext, useContext, useState } from 'react'

interface CoinData {
  market_price_usd: string
}

interface CoinState {
  ethereum: {
    data: CoinData | null
    status: 'initial' | 'loading' | 'success' | 'error'
    error: string | null
  }
  bitcoin: {
    data: CoinData | null
    status: 'initial' | 'loading' | 'success' | 'error'
    error: string | null
  }
  dogecoin: {
    data: CoinData | null
    status: 'initial' | 'loading' | 'success' | 'error'
    error: string | null
  }
}

interface CoinActions {
  fetchCoin: (coin: keyof CoinState) => Promise<void>
  updateCoinData: (coin: keyof CoinState, data: Partial<CoinState[keyof CoinState]>) => void
}

type ContextValue = [CoinState, CoinActions]

const initialState: CoinState = {
  ethereum: {
    data: null,
    status: 'initial',
    error: null,
  },
  bitcoin: {
    data: null,
    status: 'initial',
    error: null,
  },
  dogecoin: {
    data: null,
    status: 'initial',
    error: null,
  },
}

export const CoinContext = createContext<ContextValue>([
  initialState,
  {
    fetchCoin: async () => {},
    updateCoinData: () => {},
  },
])

export const CoinProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CoinState>(initialState)

  const updateCoinData = (coin: keyof CoinState, data: Partial<CoinState[keyof CoinState]>) => {
    setState((prevState) => ({
      ...prevState,
      [coin]: {
        ...prevState[coin],
        ...data,
      },
    }))
  }

  const fetchCoin = async (coin: keyof CoinState) => {
    updateCoinData(coin, { status: 'loading', error: null })
    console.log('asd')
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
      )
      const data = await response.json()

      const market_price_usd = data[coin]?.usd?.toString() || 'N/A'

      updateCoinData(coin, {
        data: { market_price_usd },
        status: 'success',
        error: null,
      })
    } catch (error) {
      updateCoinData(coin, {
        status: 'error',
        error: error instanceof Error ? error.message : 'Failed to fetch coin data',
      })
    }
  }

  const actions: CoinActions = {
    fetchCoin,
    updateCoinData,
  }

  return <CoinContext.Provider value={[state, actions]}>{children}</CoinContext.Provider>
}

export const useCoinContext = () => {
  const context = useContext(CoinContext)

  if (!context) {
    throw new Error('useCoinContext must be used within a CoinProvider')
  }

  return context
}
