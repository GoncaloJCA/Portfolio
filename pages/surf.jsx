import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import homeSurf from '../public/assets/projects/homeSurf.png';
import Image from 'next/image';
import architecture from '../public/assets/projects/architecture.jpg'
import mockup from '../public/assets/projects/surfManagementAppMockup1.jpg'

const surf = () => {
  return (
    <>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 ' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={homeSurf}
          alt='/'
        />

        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 '>
          <h2 className='py-2'>Surf Club Management Application</h2>
          <h3>Node JS / Express / PostgreSQL / React JS / React Redux / Material UI</h3>
        </div>
      </div>

      <div className='w-full flex justify-center items-center mt-8 '>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 ml-6 mr-6'>
          <div className='col-span-4'>
            <h3 className='text-[#a29687] py-2 uppercase text-xl tracking-wider'>Project</h3>
            <h2 className='text-[#4d4740] py-2'>Overview</h2>
            <p className='pt-2 py-4 text-[#696258]'>
            The project was done in partnership with <span className='text-[#8C52FF]'> <a className='underline' href='https://www.linkedin.com/company/ericeira-surf-clube/'>Ericeira Surf Clube</a>  </span> to help 
            create a management application that will be used within the organization 
            to manage their members. The focus with this project was to deliver a great
            user experience and user interface, along with the ability to automate tedious
            tasks and create a way for the community to grow.
            </p>

            <a
              href='https://github.com/BernardoFMF/surf-management-app'
              target='_blank'
              rel='noreferrer'
              className='py-6'
            >
              <button className='px-8 py-2 mt-4 mr-8 bg-[#4d4740'>Code</button>
            </a>
            <a
              href='https://surf-management-app.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
              className='py-6'
            >
              <button className='px-8 py-2 mt-4'>Demo</button>
            </a>
          </div>
                  
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4  '>
            <div className='p-2 '>
              <p className='text-center font-bold pb-2 text-[#4d4740] '>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-[#696258] py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Node JS
                </p>
                <p className='text-[#696258] py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1 ' /> Express
                </p>
                <p className='text-[#696258] py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> PostgreSQL
                </p>
                <p className='text-[#696258] py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' />  React JS
                </p>
                <p className='text-[#696258] py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> React Redux
                </p>
                <p className='text-[#696258] py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Material UI
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-4'>

            <h2 className='text-[#4d4740] py-4'>Motivation</h2>
            <p className='pt-2 text-[#696258] '>
              Managing an association and its members can be a difficult effort, especially without the right tools,
              one of these examples is Ericeira Surf Club, that uses a simple excel sheet to manage their members.
            </p>
            <p className='pt-1 text-[#696258]'>
              This approach can be a handy option with a simple application, however as the association grows, it becomes
              a less feasible option due to lack of scalability. Besides making the maintenance of members a long task 
              and inefficient, it also makes the implementation of new functionalities difficult.
            </p>
            <p className='pt-1 text-[#696258]'>
              In addition to replacing the excel sheet which only managed its members and their personal information, 
              it is now feasible to acquire member engagement, thanks to the future availability of a system that will
              allow members to view their profile and receive clubrelated notifications, such as event or payment reminders.
            </p>
            <p className='pt-1 text-[#696258]'>
              A management application enables the creation of a shared infrastructure for achieving compliance with
              business policies, resulting in improved results in terms of both goal execution and budget management.
            </p>
            <p className='pt-1 text-[#696258]'>
              There are several services and software that allow for the management of members in a community, but 
              there are several gaps between what is offered and what is required in our situation, one of which is 
              the ability to manage partner companies that offer discounts based on whether someone is a member of 
              the association and quickly validate their membership, which will be accomplished by creating a digital 
              membership card that is accessible via QR code.
            </p>
            <p className='pt-1 text-[#696258]'>
              The main aim of this project is to solve this problem creating a more modern environment, bringing 
              more exposure to the company, and allowing a simple and easier management of their members.
            </p>

                      
            <div className='pt-6 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
              <Image className=' rounded-xl flex items-center justify-center p-2'  src={mockup} alt='/'></Image>
            </div>


          </div>

          <div className='col-span-4'>
            <h2 className='text-[#4d4740] py-4'>Architecture</h2>
            <p className='pt-2 py-4 text-[#696258] '>
            The system is divided into two parts. The server is the major one, and it’s in 
            charge of implementing the system’s logic, storing data, and providing an HTTP 
            API that offers a set of capabilities to potential customers. The other part of 
            the system’s is a web application that serves as a client for the server application, 
            allowing users to interact with it via a graphical interface.
            </p>

            <div className='rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
              <Image className=' rounded-xl flex items-center justify-center p-2'  src={architecture} alt='/'></Image>
            </div>

            <p className='pt-2 py-2 text-[#696258]'>
            This technique was adopted in order to accommodate the possibility of numerous types 
            of user engagement, such as mobile or desktop applications. Clients do not need to 
            maintain knowledge about the system or implement its logic in this way because these 
            pieces are already available in the server.
            </p>
            <p className=' text-[#696258]'>
            A web application was chosen for the creation of a client application because it is 
            compatible with a simple browser, which is what most club members use. It also allows to
            have just one implementation for it to be compatible with any operating system or device.
            </p>
          </div>

          <div className='col-span-4'>
            <a
              href='/#projects'
              rel='noreferrer'
              className='py-6'
            >
              <button className='px-8 py-2 mt-4 '>Back</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default surf