import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div>
      <main className='w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600'>
        <Navbar />
        <h1>Landing page</h1>
      </main>
    </div>
  )
}

export default LandingPage
