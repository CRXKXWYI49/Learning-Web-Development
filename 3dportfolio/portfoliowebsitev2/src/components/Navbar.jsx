import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  
    return (
    <div className='flex 
                    justify-between 
                    items-center 
                    h-24 
                    mx-auto 
                    px-8
                    text-black
                    z-10
                    sticky 
                    top-0
                    bg-white
                    drop-shadow-sm'>   
        <div>
            <h1 className='w-full 
                           text-xl 
                           font-black
                           hover:scale-105 duration-100'>
            Trevin Lee.
            </h1>
        </div>
        <ul className='hidden md:flex text-black font-black text-l'>
            <button className='py-4 px-2 hover:scale-105 duration-100'>Profile</button>
            <button className='py-4 px-2 hover:scale-105 duration-100'>Projects</button>
            <button className='py-4 px-2 hover:scale-105 duration-100'>Photography</button>
            <button className='py-4 px-2 hover:scale-105 duration-100'>Contact</button>
        </ul>

        <div onClick ={handleNav} className='block md:hidden z-10'>
            {nav ? <AiOutlineClose style = {{color:'black', size:'30'}}/> : <AiOutlineMenu style = {{color:'black', size:'30'}}/>}        
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-full h-full bg-white ease-in-out duration-500': 'fixed left-[-100%]'}>
            <div className='flex 
                            justify-between 
                            items-center 
                            h-24
                            px-8 
                            text-black'> 

                <h1 className='text-xl 
                               font-black
                               hover:scale-105 duration-100'>
                Trevin Lee.
                </h1>
            </div>
            <ul className='px-8 text-black flex flex-col'>
                <button className='p-2 w-min hover:scale-105 duration-100'>Profile</button>
                <button className='p-2 w-min hover:scale-105 duration-100'>Projects</button>
                <button className='p-2 w-min hover:scale-105 duration-100'>Photography</button>
                <button className='p-2 w-min hover:scale-105 duration-100'>Contact</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar