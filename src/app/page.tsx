import FoodList from "./_components/food-list"


export default async function Home() {
  const foodReq = await fetch("http://localhost:3000/api/foods", {
    cache: 'no-cache'
  })

  const foods = await foodReq.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <FoodList foods={foods} />
    </main>
  )
}
