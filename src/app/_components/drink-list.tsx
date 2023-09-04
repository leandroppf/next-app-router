'use client'

import { foodAtom } from "./food"
import { useHydrateAtoms } from 'jotai/utils'
import { useAtom } from "jotai"

export default function FoodList({ foodPromise }: {foodPromise: Promise<string[]>}) {
  useHydrateAtoms([[foodAtom, foodPromise]])
  const [foods] = useAtom(foodAtom)

  return <div>Drinks: {foods?.join(', ')}</div>
}