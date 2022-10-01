
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


const contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto ps-2 py-36 w-full items-start '>
            <h3 className='text-[#a29687] uppercase text-xl tracking-wider'>Contact</h3>
            <h2 className='text-[#4d4740] py-6'>Get in touch</h2> 
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left side */}
                <div className='col-span-3 lg:col-span-2 w-full lg:h-4/6 shadow-xl shadow-gray-400 rounded-xl p-1 hover:scale-105 ease-in duration-300'>
                    <div className='lg:p-4 mr-3 ml-3'>
                        <div>
                            <img className='rounded-xl' src="https://usa.visa.com/dam/VCOM/global/contact-us/woman-using-laptop-on-office-desk-800x450.jpg">
                            </img>
                        </div>
                        <div>
                            <h3 className='text-[#4d4740] pt-2'>Software Engineer</h3> 
                            <p className='text-[#696258] pt-5'>I'm open to hear all opportunities, so feel free to reach me out!</p> 
                        </div>
                        <div className='pt-5 '>
                            <h3 className='uppercase  text-[#4d4740]'>Connect with me</h3>
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
                

                {/* right side */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 hover:scale-105 ease-in duration-300'>
                    <div className='p-4  mr-3 ml-3'>
                    <form
                        action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                        method='POST'
                        encType='multipart/form-data'
                    >
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm text-[#4d4740] py-2'>Name</label>
                            <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='text'
                            name='name'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm text-[#4d4740] py-2'>
                            Phone Number
                            </label>
                            <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='text'
                            name='phone'
                            />
                        </div>
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm text-[#4d4740] py-2'>Email</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='email'
                            name='email'
                        />
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm text-[#4d4740] py-2'>Subject</label>
                        <input
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='text'
                            name='subject'
                        />
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm text-[#4d4740] py-2'>Message</label>
                        <textarea
                            className='border-2 rounded-lg p-3 border-gray-300'
                            rows='10'
                            name='message'
                        ></textarea>
                        </div>
                        <button className='w-full bg-[#4d4740] p-4 text-gray-100 mt-4 border-gray-200'>
                            Send Message
                        </button>
                    </form>
                    </div>
                </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <a>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                            className='text-[#4d4740]'
                            size={30}
                            />
                        </div>
                        </a>
                    </Link>
                </div>

            </div>
        </div>
  )
}

export default contact