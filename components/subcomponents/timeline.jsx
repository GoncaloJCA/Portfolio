import React from 'react'

const timeline = () => {
  return (
    <div class="timeline pt-4">
        <div class="container left">
            <div class="content">
            <h2 className='text-[#4d4740] py-2'>2019</h2>
            <p className=' text-[#696258]'>Started my Bachelor's degree in Computer
             Science and Software Engineering at <span className='font-bold underline cursor-pointer text-red-800' href='https://www.isel.pt/'>  ISEL</span> .</p>
            </div>
        </div>
        <div class="container right">
            <div class="content">
            <h2 className='text-[#4d4740] py-2'>2022</h2>
            <p className=' text-[#696258]' >Finished my Bachelor's degree in Computer Science and Software Engineering.</p>
            <p className=' text-[#696258]'>Grade: <span className='font-bold text-[#4d4740]'>15</span></p>
            </div>
        </div>
        <div class="container left">
            <div class="content">
            <h2 className='text-[#4d4740] py-2'>2022</h2>
            <p className=' text-[#696258]'>Started working in <span className='font-bold underline cursor-pointer text-[#712afd]' href='https://www.stratesys-ts.com/en/'>Stratesys</span> as a Technical Analyst.</p>
            </div>
        </div>
        
    </div>
  )
}

export default timeline