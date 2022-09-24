import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h2 className='uppercase text-sm tracking-widest text-[#191715]'>Let's build something together</h2>
                <h1 className='py-4 text-[#4d4740]'> Hi, I'm <span className='text-[#6a00e4]'> Gonçalo </span> </h1>
                <h1 className=' text-[#4d4740]'> a Software Engineer</h1>
                <p className='pt-4 text-[#a29687] max-w-[80%] m-auto'>
                    I'm a software engineer living in Portugal eager to solve problems and learn new technologies
                    with a strong foundation in software engineering and programming.
                </p>
                <p className='pb-4 text-[#a29687] max-w-[70%] m-auto'>
                    I have a background in web development, both frontend and backend, aiming towards a user-friendly experience.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill></BsFillPersonLinesFill>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn></FaLinkedinIn>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail></AiOutlineMail>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub></FaGithub>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default main