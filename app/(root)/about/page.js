import Counter from '@/components/Counter'
// import Header from '@/components/Header'
import User from '@/components/User'
import React from 'react'

function AboutPage() {
  
  return (
    <div className="min-h-screen p-8">
      {/* <Header /> */}
      <div className="flex justify-center items-center h-screen flex-col gap-8">
        <h1>This is About Page</h1>

        <div>
          <User />
          <Counter />
        </div>

      </div>
    </div>
  )
}

export default AboutPage