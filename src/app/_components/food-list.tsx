'use client'
import { use } from 'react'

export default function FoodList({ foodPromise }: { foodPromise: Promise<string[]> }) {
  const foods = use(foodPromise)
  return <div>Foods: {foods.join(', ')}</div>
}