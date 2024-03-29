import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiFillHome} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className={'fixed w-full h-auto shadow-xl z-[100] bg-[#4d4740]'}>
            <div className='flex justify-between items-center w-full h-full  2xl:px-16  p-2'>
                <Link  href={'/'}>
                    <Image className='cursor-pointer' src="/../public/assets/GA_4.png" alt="/" width='100' height='100' /> 
                </Link>
                <div>
                    <ul className='hidden md:flex mr-20 '>
                        <a href='/#home'>
                            <li className='ml-10 text-lg uppercase text-[#f7e5ce] hover:border-b '>Home</li>
                        </a>
                        <a href='/#about'>
                            <li className='ml-10 text-lg uppercase text-[#f7e5ce] hover:border-b'>About</li>
                        </a>
                        <a href='/#skills'>
                            <li className='ml-10 text-lg uppercase text-[#f7e5ce] hover:border-b'>Skills</li>
                        </a>
                        <a href='/#projects'>
                            <li className='ml-10 text-lg uppercase text-[#f7e5ce] hover:border-b'>Projects</li>
                        </a>
                        <a href='/#contact'>
                            <li className='ml-10 text-lg uppercase text-[#f7e5ce] hover:border-b'>Contact</li>
                        </a>
                    </ul>
                    <div onClick={handleNav} className='md:hidden mr-10'>
                        <AiOutlineMenu color='#f7e5ce' size={25}></AiOutlineMenu>
                    </div>
                </div>
            </div>
            <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-[#4d4740]/80': ''}>
                <div className={nav ? 
                    'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7e5ce] p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-out duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href={'/'}>
                                <Image className='cursor-pointer'  src='/../public/assets/GA_1.png' width='150' height='150' alt='/'/>
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
                                <AiOutlineClose color='#4d4740' size={25}></AiOutlineClose>
                            </div>
                        </div>
                        <div className='border-b border-gray-400 '>
                            <h3 className='w-[85%] md:w-[90%] py-4 text-[#4d4740] text-lg'>Let's build something together</h3>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase font-normal'>
                                <a href={'/#home'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-[#4d4740] text-base ml-2 '>Home</li>
                                </a>
                                <a href={'/#about'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-[#4d4740] text-base ml-2'>About</li>
                                </a>
                                <a href={'/#skills'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-[#4d4740] text-base ml-2'>Skills</li>
                                </a>
                                <a href={'/#projects'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-[#4d4740] text-base ml-2'>Projects</li>
                                </a>
                                <a href={'/#contact'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-[#4d4740] text-base ml-2'>Contact</li>
                                </a>
                            </ul>
                            <div className='pt-40'>
                                <h3 className='uppercase  text-[#4d4740]'>Feel free to connect</h3>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='https://www.linkedin.com/in/goncaloalbuquerque/' target='_blank'>
                                            <FaLinkedinIn></FaLinkedinIn>
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <a href='https://github.com/GoncaloJCA' target='_blank'>
                                            <FaGithub></FaGithub>
                                        </a>
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