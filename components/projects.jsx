import React from 'react'
import surfManagementAppImg from '../public/assets/projects/surfManagementAppMockup2.jpg'
import IndividualProject from './subcomponents/individualProject'

const projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen p-2 py-36'>
        <div className='max-w-[1240px] mx-auto h-full'>
            <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>Projects</h3>
            <h2 className='text-[#4d4740] py-2'>What have I done?</h2> 
            <div className='grid md:grid-cols-2 gap-8 py-2'>
                 
                <IndividualProject title='Surf Club Management Application' backgroundImg={surfManagementAppImg} url={'/surf'}/>
                

            </div>
        </div>
    </div>
  )
}

export default projects