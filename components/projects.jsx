import React from 'react'
import surfManagementAppImg from '../public/assets/projects/surfManagementAppMockup2.jpg'
import IndividualProject from './subcomponents/individualProject'

const projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>Projects</h3>
            <h2 className='text-[#4d4740] py-4'>What have I done?</h2> 
            <div className='grid md:grid-cols-2 gap-8'>
                 
                <IndividualProject title='Surf Club Management Application' backgroundImg={surfManagementAppImg} url={'/'}/>
                <IndividualProject title='ToDo App' backgroundImg={surfManagementAppImg} url={'/'}/>

            </div>
        </div>
    </div>
  )
}

export default projects