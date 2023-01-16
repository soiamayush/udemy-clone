import React from 'react'

const End = () => {
  return (
    <div className='w-full h-16 bg-stone-900 flex justify-between'>
        <div className='logo px-8'>
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-8"
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt=""
              />
            </a>
        </div>

        <div className='naming text-stone-50 px-8 text-xs '>
        © 2023 Udemy, Inc.
        </div>

    </div>
  )
}

export default End