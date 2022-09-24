import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiFillHome} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div  className='fixed w-full h-20 shadow-xl z-[100] bg-[#4d4740]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/../public/assets/logo.png" alt="/" width='125' height='50' /> 
                <div>
                    <ul className='hidden md:flex mr-20'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase text-[#f7e5ce] hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase text-[#f7e5ce] hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase text-[#f7e5ce] hover:border-b'>Experience</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase text-[#f7e5ce] hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase text-[#f7e5ce] hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden mr-10'>
                        <AiOutlineMenu size={25}></AiOutlineMenu>
                    </div>
                </div>
            </div>
            <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/50': ''}>
                <div className={nav ? 
                    'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7e5ce] p-10 ease-in duration-300' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-300'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/logo.png' width='150' height='150' alt='/'/>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
                                <AiOutlineClose size={25}></AiOutlineClose>
                            </div>
                        </div>
                        <div className='border-b border-gray-400 '>
                            <h3 className='w-[85%] md:w-[90%] py-4 text-[#191715]'>Let's build something together</h3>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href={'/'}>
                                    <li className='py-4 text-[#4d4740] text-sm ml-2'>Home</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className='py-4 text-[#4d4740] text-sm ml-2'>About</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className='py-4 text-[#4d4740] text-sm ml-2'>Experience</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className='py-4 text-[#4d4740] text-sm ml-2'>Projects</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className='py-4 text-[#4d4740] text-sm ml-2'>Contact</li>
                                </Link>
                            </ul>
                            <div className='pt-40'>
                                <h3 className='uppercase  text-[#191715]'>Feel free to connect</h3>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn></FaLinkedinIn>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub></FaGithub>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail></AiOutlineMail>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar