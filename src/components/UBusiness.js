import React from 'react'
import { Link } from 'react-router-dom'

const UBusiness = () => {
  return (
    <div className='flex flex-row gap-x-24 my-16'>
        <div className='flex flex-col gap-y-4 w-1/2 ml-24'>
            <img className='w-52' src='https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg' alt='err' />
            <div className='font-serif font-bold text-3xl'>Upskill your team with Udemy Business</div>
            <ul className='list-disc text-xl px-6'>
                <li>Unlimited access to 19,000+ top Udemy courses, anytime, anywhere</li>
                <li>International course collection in 14 languages</li>
                <li>Top certifications in tech and business</li>
            </ul>

            <div className='btns py-6'>

            <Link
              to="/"
              className="inline-flex items-center justify-center whitespace-nowrap  border border-transparent bg-neutral-900 px-4 py-3 font-bold text-sm  w-48 text-white shadow-sm "
            >
              Get Udemy Business
            </Link>
            <Link to="/" className="whitespace-nowrap  text-sm text-neutral-900 hover:bg-slate-100 border border-neutral-900 px-4 py-3 ml-4 font-bold w-28">
              Learn More
            </Link>

            </div>
        </div>
        <div className='w-1/2 mr-24'>
            <img src='https://s.udemycdn.com/home/non-student-cta/UB_Promo_1200x1200.jpg' alt='err'/>
        </div>
    </div>
  )
}

export default UBusiness