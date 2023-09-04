import Link from "next/link"
import DrinkList from "../_components/drink-list"
import DrinkProvider from "../_context/drink-provider"
import { Suspense } from "react"

export default function Home() {
  const drinkPromise = fetch("http://localhost:3000/api/drinks", {
    cache: 'no-cache'
  }).then(res => res.json())

  return (
    <DrinkProvider drinkPromise={drinkPromise}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense fallback={<div>Loading...</div>}>
          <DrinkList />
        </Suspense>

        <Link href={'/'}>Foods</Link>
      </main>
    </DrinkProvider>
  )
}
