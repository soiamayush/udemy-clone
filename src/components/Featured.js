import React from 'react'
import { Link } from "react-router-dom"

const Featured = () => {
  return (
    <div className='my-8 bg-slate-50 py-16 px-8'>
        <div className='text-2xl font-bold py-4'>Featured topics by category</div>
        <div className='flex flex-row gap-x-32'>
            <div className='flex flex-col gap-y-5'>
                <div className='text-lg py-2 font-bold'>Development</div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Python</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">11,298,764 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Web Development</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">3,765,879 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Machine learning</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">98,765,244 students</div>
                </div>
            </div>

            <div className='flex flex-col gap-y-5'>
                <div className='text-lg py-2 font-bold'>Business</div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Financial Analysis</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">72,875,492 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">AWS</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">7,836,825 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">PMP</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">98,682,825 students</div>
                </div>
            </div>

            <div className='flex flex-col gap-y-5'>
                <div className='text-lg py-2 font-bold'>IT and software</div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">AWS Certification</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">87,087,264 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Ethical Hacking</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">9,725,265 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Cyber Security</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">8,786,275 students</div>
                </div>
            </div>

            <div className='flex flex-col gap-y-5'>
                <div className='text-lg py-2 font-bold'>Design</div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Photoshop</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">72,863,827 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Graphic Design</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">12,876,352 students</div>
                </div>
                <div className=''>
                    <div className="font-bold text-indigo-700 underline hover:text-indigo-800 cursor-pointer">Drawing</div>
                    <div className="text-sm text-slate-500 py-2 font-semibold">9,753, students</div>
                </div>
            </div>
        </div>

        <div className='my-6'>
        <Link to="/" className="whitespace-nowrap  text-sm text-neutral-900 hover:bg-slate-100 border border-neutral-900 px-4 py-2 font-bold">
              Explore more topics
            </Link>
            </div>
    </div>
  )
}

export default Featured