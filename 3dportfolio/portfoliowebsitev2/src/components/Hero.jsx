import React from 'react';
import Typed from 'react-typed';
import {FaLinkedin, 
        FaGithubSquare,} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='h-screen md:max-w-[1200px] grid md:grid-cols-2 mx-auto'>
        <div className='mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center p-8'>
            <p className='text-black text-4xl md:text-5xl'> Hi, I'm Trevin.</p>
            <h1 className='text-4xl text-black'>
                <Typed
                className='text-4xl md:text-5xl font-bold'
                strings={[
                    'Physics Major @ UCR',
                    'Mechanical Engineer',
                    'Front-End Developer',]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop >
                    <input type="text"/>
                </Typed>
            </h1>
            <button className='flex justify-left text-2xl md:text-3xl space-x-1'>
                <FaLinkedin className='hover:scale-105 duration-100'/> 
                <FaGithubSquare className='hover:scale-105 duration-100'/>
            </button>
        </div>
                
        <div>

        </div>
    </div>
  )
}

export default Hero