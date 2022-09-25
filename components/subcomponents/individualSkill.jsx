import React from 'react'
import Image from 'next/image'

const individualSkill = ({path, name}) => {
    console.log(path + name);
    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={path} alt='/' width='64px' height='64px'/>
                </div>
                <div className='text-[#4d4740]'>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default individualSkill