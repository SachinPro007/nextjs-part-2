import { writeFile } from "node:fs/promises"
import todos from "@/todos.json"

export async function GET(_, { params }) {
  const { id } = await params
  const todo = todos.find(todo => todo.id == id)
  

  if (!todo) {
    return Response.json({ error: "todo not found" }, {
      status: 404
    })
  }

  return Response.json(todo)
}


export async function PATCH(request, { params }) {
  const body = await request.json()
  const { id } = await params

   // if user want to change id then sent a error
  if(body.id){
    return Response.json({error: "id changing is not allow"}, {status: 403})
  }

  //finde todo index
  const index = todos.findIndex((todo) => todo.id == id)
  if (index === -1) {
    return Response.json({ error: "Todo not Found" }, { status: 404 })
  }

  // updated todo
  const updatedTodo = { ...todos[index], ...body }

  // update todo on data
  todos[index] = updatedTodo
  writeFile("todos.json", JSON.stringify(todos, null, 2))
  return Response.json(updatedTodo)
}


export async function PUT(request, { params }) {
  const todo = await request.json()
  const { id } = await params


  // if user want to change id then sent a error
  if(todo.id){
    return Response.json({error: "id changing is not allow"}, {status: 403})
  }

  //finde todo index
  const index = todos.findIndex((todo) => todo.id == id)
  if (index === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 })
  }

  // update todos on data
  todos[index] = todo
  writeFile("todos.json", JSON.stringify(todos, null, 2))
  return Response.json(todo)
}