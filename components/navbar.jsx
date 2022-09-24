import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/alien.png" alt="/" width='125' height='50' /> 
            <div>
                <ul className='hidden md:flex mr-20'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <ul className='md:hidden mr-10'>
                    <AiOutlineMenu size={25}></AiOutlineMenu>
                </ul>
            </div>
        </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-black/50'>
            <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7e5ce] p-3'>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/logo3.png' width='150' height='150' alt='/'/>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-5'>
                            <AiOutlineClose size={25}></AiOutlineClose>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <h4>Let's build something together!</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar