import { NextResponse } from "next/server"

const FOODS = [
  'Pizza',
  'Burger',
  'Rice',
  'Pasta',
  'Noodles',
  'Bread',
  'Soup',
  'Salad',
  'Sandwich',
  'Fries',
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return NextResponse.json(FOODS)
}