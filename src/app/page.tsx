import FoodList from "./_components/food-list"


export default function Home() {
  const foodReq = fetch("http://localhost:3000/api/foods", {
    cache: 'no-cache'
  }).then(res => res.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <FoodList foodPromise={foodReq} />
    </main>
  )
}
