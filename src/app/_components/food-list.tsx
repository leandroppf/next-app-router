'use client'

export default function FoodList({ foods }: { foods: string[] }) {
  return <div>Foods: {foods.join(', ')}</div>
}