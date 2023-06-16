'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const showMenu = () => {
    setShow(!show)
  }
  return (
    <div className='fixed top-0 py-6 w-full z-50  bg-white  flex justify-between px-4 xl:px-36 items-center'>
      <div>
        <Image src={'/images/gymmlogo.svg'} alt='logo' height={50} width={200} />
      </div>
      <div className='lg:hidden text-3xl' onClick={showMenu}>
        <CiMenuBurger />
      </div>
      <div onClick={() => {
        if (show)
          setShow(false)
      }} className={`z-[999] transition-opacity duration-200 bg-black/5  fixed ${show ? "  opacity-100 pointer-events-auto " : "pointer-events-none opacity-0 "} w-screen h-screen top-0 left-0 `}>
      </div>
      <MainMenu state={show} toggle={setShow} />
      <ul className='lg:flex justify-center hidden items-center gap-7 text-xs [&>*]:tracking-wide'>
        <li className='hover:underline cursor-pointer'>Quiz</li>
        <li className='hover:underline cursor-pointer'>COVID-19</li>
        <li className='hover:underline cursor-pointer'>Programmes</li>
        <li className='hover:underline cursor-pointer'>Method</li>
        <li className='hover:underline cursor-pointer'>About</li>
        <li className='hover:underline cursor-pointer'>Our Practice</li>
        <li className='hover:underline cursor-pointer'>Blog</li>
        <li className='hover:underline cursor-pointer'>Merchandise</li>
        <li className='hover:underline cursor-pointer'>Testimonials</li>
        <li className='hover:underline cursor-pointer'>contact</li>
      </ul>
    </div>
  )
}

function MainMenu({ state, toggle }) {
  return (
    <div className={`fixed z-[99999] bg-white px-12 h-screen w-10/12 sm:w-fit top-0  right-0 transition-transform duration-1000 ease-in-out ${!state ? "translate-x-full " : "  "} `}>


      <button onClick={() => { toggle(false) }} className="flex items-center text-3xl font-semibold py-9 gap-3">
        <AiOutlineClose className="text-3xl" />
      </button>
      <div className="">
        <ul className='flex flex-col justify-center  items-start gap-7  [&>*]:tracking-wide'>
          <li className='hover:underline cursor-pointer'>Quiz</li>
          <li className='hover:underline cursor-pointer'>COVID-19</li>
          <li className='hover:underline cursor-pointer'>Programmes</li>
          <li className='hover:underline cursor-pointer'>Method</li>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Our Practice</li>
          <li className='hover:underline cursor-pointer'>Blog</li>
          <li className='hover:underline cursor-pointer'>Merchandise</li>
          <li className='hover:underline cursor-pointer'>Testimonials</li>
          <li className='hover:underline cursor-pointer'>contact</li>
        </ul>
      </div>


    </div>

  );
}