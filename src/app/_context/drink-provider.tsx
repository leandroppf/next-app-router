'use client'

import { createContext, useContext } from 'react'

const DrinkContext = createContext<Promise<string[]> | null>(null)

export const useDrinkPromise = () => {
  const context = useContext(DrinkContext)

  if(!context) throw new Error('useDrinkPromise must be used within DrinkProvider')

  return context
}

const DrinkProvider = ({ children, drinkPromise }: { children: React.ReactNode, drinkPromise: Promise<string[]> }) => {
  return <DrinkContext.Provider value={drinkPromise}>{children}</DrinkContext.Provider>
}

export default DrinkProvider