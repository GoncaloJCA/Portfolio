import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const individualProject = ({title, backgroundImg, url}) => {
  return (
    <div className='hover:scale-110 ease-in duration-300 relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#4d4740] to-[#a29687]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' ></Image>
        <div className='w-[450px] hidden group-hover:block absolute top-[25%] '>
          <h2 className='py-2 text-2xl text-white tracking-wide text-center'>{title}</h2>
            <Link className='' href={url}>
                <h2 className=' text-center  py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'> More info</h2>
            </Link>
        </div>
    </div>
  )
}

export default individualProject