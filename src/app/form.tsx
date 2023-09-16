'use client'
import React from "react";

import { useRouter } from "next/navigation";

export default  function Form({todos}:{todos:Array<any>}) {
    const router = useRouter();
    const [todo, setTodo] = React.useState('')
    const addTodoDb = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/todos', {
            method: 'PUT',
            body: JSON.stringify({title: todo}),
            headers: {
                'content-type': 'application/json'
            }
        })

            router.refresh()
        
      
      
    }
  
    return (
      <main className='h-screen w-screen flex justify-center items-center flex-col'>
        <form onSubmit={addTodoDb}>
        <input type="text" placeholder="Search" className='p-4 text-black' onChange={(e)=> {setTodo(e.target.value)}} />
        <button type="submit">Search</button>
        </form>
        <ul>
            {todos.map((todo) => (
                <li className="flex gap-5 items-center justify-center" key={todo.id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>

                </li>
            ))} 
        </ul>
        </main>
    )
  }