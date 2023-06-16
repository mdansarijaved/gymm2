import React from 'react'
import Image from 'next/image'
export default function Body1() {
    return (
        <div className='h-screen '>
            <div className='bg-[#b18c7a] py-20 lg:px-36'>
                <h1 className='text-center lg:text-5xl font-serif  text-white'>See which programme is right for you</h1>
            </div>
            <div>
                <div className='flex flex-wrap '>
                    <Image src='/images/flowergymm.jpeg' alt='programme1' height={500} width={1920} className='bg-cover bg-center lg:w-1/2 h-full' />
                    <div className='lg:w-1/2 bg-[#f5f5f1] py-10 px-20 text-xl justify-center  flex flex-col gap-10'>
                        <p>Louise Parker has transformed into 'The Parker Practice'. Don’t worry though, we're still the same family company, founded and run by Louise and the team!</p>
                        <p>DON’T DIET, CHANGE.</p>
                        <p>Reset your habits and transform your lifestyle. With our unique programmes you’ll have access to specialist advice on how to think, act and feel healthier. No more fad diets that don’t work...</p>
                        <p>Join thousands of clients all around the world who have followed the Louise Parker Method over the past 20 years. Regain your confidence, feel fabulous and lose weight once and for all!

                        </p>
                        <div className='hover:opacity-70 cursor-pointer'>
                            <button className='flex gap-5  border-b border-black  justify-center items-center'>About <span>→</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
