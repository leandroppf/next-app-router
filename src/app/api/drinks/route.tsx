import { NextResponse } from "next/server"

const DRINKS = [
  'Water',
  'Coffee',
  'Tea',
  'Milk',
  'Juice',
  'Soda',
  'Beer',
  'Wine',
  'Cocktail',
  'Liquor',
  'Whiskey',
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return NextResponse.json(DRINKS)
}