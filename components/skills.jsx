import React from 'react'
import IndividualSkill from './subcomponents/individualSkill'
import Image from 'next/image'
const skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>Skills</h3>
        <h2 className='text-[#4d4740] py-2'>What am I capable of?</h2> 
        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Languages</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/js.png' name='Javascript'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/java.png' name='Java'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/python1.png' name='Python'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/sap2.png' name='ABAP'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/csharp.png' name='C#'></IndividualSkill>

        </div> 


        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Frontend</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/react1.png' name='ReactJS'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/nextJS.png' name='NextJS'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/mui.png' name='Material UI'></IndividualSkill>

        </div>    

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Backend</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/nodejs2.png' name='NodeJS Express'></IndividualSkill>

        </div> 

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Databases</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <IndividualSkill path='/../public/assets/skills/postgres.png' name='Postgres'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/sqlserver.png' name='SQLServer'></IndividualSkill>
          <IndividualSkill path='/../public/assets/skills/cloud-firestore.png' name='Firestore'></IndividualSkill>

        </div>  

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Cloud</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          <IndividualSkill path='/../public/assets/skills/gCloud1.png' name='Google Could Platform'></IndividualSkill>

        </div>    

      </div>
    </div>
  )
}

export default skills