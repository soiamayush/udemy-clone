import React from 'react'

const Personality = () => {
  return (
    <div className='bg-slate-50  py-24'>
        <div className='border p-8 flex flex-row gap-x-8 h-auto w-3/4 m-auto '>
            <div>
        <div className="font-serif text-6xl px-4 pt-4 block">''</div>
            <div className="w-80 pl-4">
            Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its {" "}
              <span className="font-bold">
              data scientists, with highly relevant and in-demand tech skills
              </span>{" "}
              that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
            </div>
            </div>

            <div className='w-1/2 flex flex-col gap-y-4 justify-center align-center' >
                <img className='rounded-full w-40 block m-auto' src='https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg' alt='err'/>
                <div className='justify-center align-center flex flex-col w-24 m-auto'>
                    <div className='font-bold flex justify-center block align-center '>Jim Hemgen</div>
                    <div className='text-slate-400 flex justify-center block  align-center'>Principal</div>
                </div>

                <div className='flex justify-center align-center'>Booz Allen Hamilton</div>
            </div>
        </div>
    </div>
  )
}

export default Personality