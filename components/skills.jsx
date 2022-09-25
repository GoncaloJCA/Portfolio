import React from 'react'
import individualSkill from './subcomponents/individualSkill'
import Image from 'next/image'
const skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>Skills</h3>
        <h2 className='text-[#4d4740] py-2'>What am I capable of?</h2> 
        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Languages</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/js.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/java.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/python1.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/sap1.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>ABAP</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/csharp.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>C#</h3>
              </div>
            </div>
          </div>

        </div> 


        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Frontend</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/react1.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>ReactJS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/nextJS.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/mui.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Material UI</h3>
              </div>
            </div>
          </div>

        </div>    

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Backend</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/node-js.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/express.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Express</h3>
              </div>
            </div>
          </div>

        </div> 

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Databases</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/postgres.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Postgres</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/sqlServer.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>SQLServer</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/cloud-firestore.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Firestore</h3>
              </div>
            </div>
          </div>

        </div>  

        <h3 className='text-[#a29687] py-2 text-xl tracking-wider'>Cloud</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src='/../public/assets/skills/gCloud.png' alt='/' width='64px' height='64px'/>
              </div>
              <div className='text-[#4d4740]'>
                <h3>Google Could Platform</h3>
              </div>
            </div>
          </div>

        </div>    

      </div>
    </div>
  )
}

export default skills