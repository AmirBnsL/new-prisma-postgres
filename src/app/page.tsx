import Form from "./form"
import prisma from "./lib/db";

async function getTodos( ) {
  const todo = await prisma.todos.findMany();
  return todo;

}

async function page() {

  const Todos= await getTodos();
  console.log(Todos)

  return (
    <main className="flex flex-col">
      <Form todos={Todos}></Form>
    </main>
  )
}

export default page




