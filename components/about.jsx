import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 p-2 '>
                <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>About</h3>
                <h2 className='text-[#4d4740] py-2'>Who Am I?</h2>
                <p className='pt-2 text-[#696258] '>
                    I'm Gonçalo Albuquerque with 21 years of age and I have a bachelor’s
                     degree in Computer Science and Software Engineering.
                </p>
                <p className='pt-1 text-[#696258]'>
                    I choose this area since building software encourages creativity, communication, self-discipline
                     and I've always been a problem solver and a technophile who is fascinated by new gadgets and technology.
                </p>
                <p className='pt-1 text-[#696258]'>
                    My favorite hobbies are gaming, playing ukulele or do some sports like running or swimming.
                </p>
                <p className='pt-1 text-[#696258] underline cursor-pointer '>
                    Check my projects
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl'  src='https://images.unsplash.com/photo-1628187526295-3ccbe4e2ad54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80' alt='/'></img>
            </div>
        </div>
    </div>
  )
}

export default about