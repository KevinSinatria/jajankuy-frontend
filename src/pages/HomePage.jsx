import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {

  return (
    <div>
      <main className='w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600'>
        <Navbar />
      </main>
    </div>
  );
}