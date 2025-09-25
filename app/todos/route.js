
import { writeFile } from "node:fs/promises"
import todosData from "@/todos.json";
import { db } from "@/config/db";


export async function GET() {
  console.log("Running GET route Handler.");
  const [todos] = await db.execute(`SELECT * FROM todos_data;`);

  return Response.json(todos)

  // return new Response(JSON.stringify(todos), {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   status: 200,
  // })
}


export async function POST(request) {
  const todo = await request.json()  

  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false
  }
  await db.execute(`INSERT INTO todos_data (id, text, completed) VALUES (?, ?, ?);`, [newTodo.id, newTodo.text, newTodo.completed]);
  
  todosData.push(newTodo)
  await writeFile("todos.json", JSON.stringify(todosData, null, 2))
  return Response.json(newTodo)
}

