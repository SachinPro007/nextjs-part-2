import React from 'react'

async function page({params}) {
  const {blogID} = await params
  
  // if(blogID % 2 === 0) {
  //   // throw new Error("BlogID can only be an odd numer")
  //   throw new Error("BlogID can only be an odd numer")
    
  // }  

  const randomNumber = Math.random()
  console.log(randomNumber);
  

  if(randomNumber > 0.5){
    throw new Error("Error occurred")
  }
  
  return (
    <div>BlogID : {blogID}</div>
  )
}

export default page