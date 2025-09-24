
import { writeFile } from "node:fs/promises"
import todosData from "@/todos.json";


export function GET() {
  // console.log("Running GET route Handler.");

  return Response.json(todosData)

  // return new Response(JSON.stringify(todosData), {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   status: 200,
  // })
}


export async function POST(request) {
  const todo = await request.json()
  const newTodo = {
    // id: todosData.length + 1,
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false
  }
  todosData.push(newTodo)
  await writeFile("todos.json", JSON.stringify(todosData, null, 2))
  return Response.json(newTodo)
}

