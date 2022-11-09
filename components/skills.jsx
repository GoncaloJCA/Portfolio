import React from 'react'
import IndividualSkill from './subcomponents/individualSkill'
import Image from 'next/image'
const skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-36'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center '>
        <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>Skills</h3>
        <h2 className='text-[#4d4740] py-2'>What am I capable of?</h2> 
        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Languages</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/js.png' name='Javascript' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/java.png' name='Java' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/python1.png' name='Python' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/SAP-Logo-2000.png' name='ABAP' width={'95px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/csharp.png' name='C#' width={'64px'} height={'64px'}></IndividualSkill>

        </div> 


        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Frontend</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/react1.png' name='ReactJS' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/nextJS.png' name='NextJS' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/mui.png' name='Material UI' width={'64px'} height={'64px'}></IndividualSkill>

        </div>    

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Backend</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/nodejs2.png' name='NodeJS Express' width={'64px'} height={'64px'}></IndividualSkill>

        </div> 

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Databases</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/postgres.png' name='Postgres' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/sqlserver.png' name='SQLServer' width={'64px'} height={'64px'}></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/cloud-firestore.png' name='Firestore' width={'64px'} height={'64px'}> </IndividualSkill>

        </div>  

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Cloud</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          <IndividualSkill path='/../public/assets/skills/gCloud1.png' name='Google Could Platform' width={'80px'} height={'64px'}></IndividualSkill>

        </div>    

      </div>
    </div>
  )
}

export default skills