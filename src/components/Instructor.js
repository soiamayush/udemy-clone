import React from 'react'
import { Link } from 'react-router-dom'

const Instructor = () => {
  return (
    <div className='flex flex-row gap-x-20 my-20 mx-28'>
        <div className='w-1/2'>
            <img src='https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg' alt='err'/>
        </div>

        <div className='flex flex-col gap-y-6 w-1/2 justify-center'>
            <div className='font-bold text-3xl font-serif'>Become an instructor</div>
            <div className='text-xl'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</div>

            <Link
              to="/"
              className="inline-flex items-center justify-center whitespace-nowrap  border border-transparent bg-neutral-900 p-4  text-sm font-bold   text-white shadow-sm w-40"
            >
              Start teaching today
            </Link>
        </div>
    </div>
  )
}

export default Instructor