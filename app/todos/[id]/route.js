import { writeFile } from "node:fs/promises"
import todos from "@/todos.json"
import { db } from "@/config/db"

export async function GET(_, { params }) {
  const { id } = await params
  // const todo = todos.find(todo => todo.id == id)
  const [[todo]] = await db.execute(`SELECT * FROM todos_data WHERE id = ?;`, [id])
  console.log(todo);
  


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


  // update value in database 
  if(body.text){
    await db.execute(`UPDATE todos_data SET text = '${body.text}' WHERE id = ?;`, [id])
  }else{
    await db.execute(`UPDATE todos_data SET completed = '${body.completed ? 1 : 0}' WHERE id = ?;`, [id])
  }



  // update value in my todos.json file 
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


  await db.execute(`UPDATE todos_data SET text = '${todo.text}', completed = ${todo.completed ? 1 : 0}  WHERE id = ?;`, [id])

  //finde todo index
  const index = todos.findIndex((todo) => todo.id == id)
  if (index === -1) {
    return Response.json({ error: "Todo not found" }, { status: 404 })
  }

  // update todos on data
  todos[index] = todo
  writeFile("todos.json", JSON.stringify(todos, null, 2))
  return Response.json(todo, {status: 201})
}


export async function DELETE(_, {params}) {
  const {id} = await params

  await db.execute(`DELETE FROM todos_data WHERE id = ?;`, [id])

  const index = todos.findIndex((todo) => todo.id == id)

  if(index === -1){
    return Response.json({error: "Todo not found"}, {status: 404})
  }

  todos.splice(index, 1)
  writeFile("todos.json", JSON.stringify(todos, null, 2))
  return Response.json({id})
}