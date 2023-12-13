import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const main = () => {
  return (
    <div id='home' className='w-full lg:h-screen items-center text-center'>
        <div className='max-w-[1500px] w-full h-full mx-auto p-2 flex justify-center items-center hover:scale-110 ease-in-out duration-300'>
            <div>
                <h2 className='uppercase text-sm tracking-widest text-[#4d4740]'>Let's build something together</h2>
                <h1 className='py-4 text-[#4d4740]'> Hi, I'm <span className='text-[#8C52FF]'> Gonçalo </span> </h1>
                <h1 className=' text-[#4d4740]'> a Software Engineer</h1>
                <p className='pt-4 text-[#a29687] max-w-[80%] m-auto'>
                    I'm a software engineer living in Portugal eager to solve problems and learn new technologies
                    with a strong foundation in software engineering.
                </p>
                <p className='pb-4 text-[#a29687] max-w-[70%] m-auto'>
                    I have a background in web development, both frontend and backend, aiming towards a user-friendly experience.
                </p>

                <div className='flex items-center justify-between max-w-[250px] m-auto py-4 pb-8'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://www.linkedin.com/in/goncaloalbuquerque/' target='_blank'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='/#contact' >
                            <AiOutlineMail></AiOutlineMail>
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href='https://github.com/GoncaloJCA' target='_blank'>
                            <FaGithub></FaGithub>
                        </a>
                    </div>
                </div>
                <button className=" text-white font-bold py-2 px-4 rounded-full " >
                    <a target='_blank' href={'https://www.linkedin.com/in/goncaloalbuquerque/overlay/1635503562596/single-media-viewer/'} >Curriculum Vitae</a>
                </button>
            </div>
        </div>  
    </div>
  )
}

export default main