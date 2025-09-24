"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

function Error({error, reset}) {
  // console.dir(error);
  // console.log(error.digest);
  // console.log(error.message);
  const router = useRouter()
  
  
  
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <p>Something went wrong</p>
      {/* <p>{error.message}</p> */}
      <button onClick={() => {
        startTransition(() => {
          router.refresh()
          reset()          
        })
      }}>Try again</button>
    </div>
  )
}

export default Error