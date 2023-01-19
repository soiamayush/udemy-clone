import React from 'react'

const Categories = () => {
  return (
    <div className='mx-8 my-16'>
        <div className='text-2xl font-bold my-4'>Top Categories</div>
            <div className='flex flex-row gap-x-4 '>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Design</div>
                </div>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Development</div>
                </div>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Marketing</div>
                </div>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>IT and software</div>
                </div>
                </div>

            <div className='flex flex-row gap-x-4 my-8'>

                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Personal software</div>
                </div>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Business</div>
                </div>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Photography</div>
                </div>
                <div className="w-60  cursor-pointer my-8transition ease-in-out delay-100  hover:-translate-y-1 0 duration-200">
                    <img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-2x-v2.jpg' alt="err"/>
                    <div className='font-bold text-lg py-1'>Music</div>
                </div>
            </div>
    </div>
  )
}

export default Categories