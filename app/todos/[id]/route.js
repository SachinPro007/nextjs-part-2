import todos from "@/todos.json"

export async function GET(_, { params }) {
  const { id } = await params
  const todo = todos.find(todo => todo.id === parseInt(id))

  if (!todo) {
    return Response.json({ error: "todo not found" }, {
      status: 404
    })
  }

  return Response.json(todo)
}