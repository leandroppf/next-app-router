import Link from "next/link"
import DrinkList from "../_components/drink-list"

export default function Home() {
  const foodPromise = fetch("http://localhost:3000/api/drinks", {
    cache: 'no-cache'
  }).then(res => res.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DrinkList foodPromise={foodPromise} />

      <Link href={'/'}>Foods</Link>
    </main>
  )
}
