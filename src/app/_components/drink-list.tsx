'use client'

import { useDrinkPromise } from "../_context/drink-provider"
import { use } from 'react'

export default function FoodList() {
  const drinks = use(useDrinkPromise())

  return <div>Drinks: {drinks?.join(', ')}</div>
}