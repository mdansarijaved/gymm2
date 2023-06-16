'use client'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'

export default function Body() {
    const names = ['Refresh.', 'Reset.', 'Regain.', 'feel fabulous.', 'Be Healthy.'];
    const [currentNameIndex, setCurrentNameIndex] = useState(0);
    const [currentName, setCurrentName] = useState(names[currentNameIndex]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [names.length]);

    useEffect(() => {
        setCurrentName(names[currentNameIndex]);
    }, [currentNameIndex]);
    const images = ['beautygymm.jpg', 'flowergymm.jpeg', 'dontgymm.jpg', 'foodgymm.jpeg', 'treegymm.jpg']
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[currentImageIndex]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
        return () => clearInterval(intervalId);
    }, [images.length]);
    useEffect(() => {
        setCurrentImage(images[currentImageIndex]);
    }, [currentImageIndex]);
    const images1 = [ 'work2.jpg']
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImage1, setCurrentImage1] = useState(images1[currentImageIndex1]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [images1.length]);
    useEffect(() => {
        setCurrentImage1(images1[currentImageIndex1]);
    }, [currentImageIndex1]);

    return (
        <div className='h-screen lg:flex relative overflow-clip bg-[#bed9b1] '>
            <div className='lg:w-1/2 w-screen h-1/2 lg:h-screen relative text-3xl  lg:text-7xl xl:text-[80px] font-sans'>
                <Image src={"/images/" + currentImage} alt='' height={500} width={1920} className='lg:h-full bg-contain ' />

                <h1 className='absolute top-[90%] -translate-x-16  lg:-translate-x-0  lg:top-1/2 left-1/2 lg:-translate-y-1/2'>Change &</h1>
            </div>
            <div className='lg:w-1/2 w-screen h-1/2 lg:h-screen relative text-3xl lg:text-[80px] text-white font-sans'>
                <Image src={"/images/" + currentImage1} alt='hero' height={500} width={1920} className='lg:h-full bg-cover lg:hidden  absolute top-0 left-0' />
                <video src="/video/running.mp4" muted autoPlay loop className='h-[200vh] w-[200vh] hidden lg:block bg-contain absolute -bottom-20 right-0 '></video>
                <h1 className='absolute top-1 left-1/2 -translate-x-16 lg:-translate-x-0 lg:top-1/2 lg:left-1 lg:-translate-y-1/2 '>{currentName}</h1>

            </div>
        </div>
    )
}
