import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-around items-center bg-gray-500 container mx-auto p-4'>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/services"}>services</Link>
    </div>
  )
}

export default Header