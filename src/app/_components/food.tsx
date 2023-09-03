import { atomWithStorage } from 'jotai/utils'

export const foodAtom = atomWithStorage<Promise<string[]> | null>('food-atom', null)