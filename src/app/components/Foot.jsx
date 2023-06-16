import React from 'react'

export default function Foot() {
    return (
        <div className='fixed bottom-0 w-full z-50 hidden lg:flex bg-black py-5 text-white  flex-wrap justify-between items-center text-xs px-8'>
            <p>This website uses cookies to ensure you get the best experience on our website. Learn more.</p>
            <div className='border border-white rounded-3xl py-1 px-6 lg:py-2 lg:px-6 lg:mr-20'>
                <button>Got it</button>
            </div>
        </div>
    )
}
