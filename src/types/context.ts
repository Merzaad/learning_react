import React from 'react'

interface state {
  a: { x: number; y: { i: number } }
  b: { x: { i: number }; y: { i: number } }
}
export interface Context {
  state: state
  setState: React.Dispatch<React.SetStateAction<state>>
}
