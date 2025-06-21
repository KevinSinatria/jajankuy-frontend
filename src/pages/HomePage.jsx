import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export default function HomePage() {

  return (
    <div>
      <main className='w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600'>
        <Navbar />
      </main>
  
      <Footer/> 

    </div>
  );
}