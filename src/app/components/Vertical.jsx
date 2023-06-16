import React from 'react'

export default function Vertical() {
  return (
    <div className='fixed lg:top-1/2 bottom-0   lg:left-1/2 lg:-translate-x-10 lg:-translate-y-8'>
        <div className=' lg:rotate-90 text-sm flex lg:block w-screen'>
        <p className='bg-[#f5f5f1] hover:bg-[#e6e6e6] w-1/2 lg:w-screen text-center transition duration-300 py-3 tracking-widest text-[#4b6157]'>Method</p>
        <p className='bg-[#617e71] lg:w-screen text-center w-1/2 py-3 tracking-[0.3em] transition duration-500 text-white hover:bg-[#4b6157] '>Programmes</p>
        </div>
    </div>
  )
}
