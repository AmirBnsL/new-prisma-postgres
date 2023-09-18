import Counter from "./components/counter"; 

function page() {
console.log('is this client');
  
  return (
    <main className="flex flex-col justify-center items-center">
      <Counter></Counter>
    </main>
  )
}

export default page



