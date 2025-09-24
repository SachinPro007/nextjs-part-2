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


