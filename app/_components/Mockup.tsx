import React from 'react'

const Mockup = () => {
  return (
    <div className='mx-4 xl:mx-auto max-w-7xl flex flex-col space-y-2 py-6 items-center justify-center'>
        <p className='uppercase antialiased sm:text-lg font-semibold text-base'>Design Visually, develop  Efficiently.</p>
        <p className='px-1 sm:text-lg'>Crafting sleek designs with precision development, ensuring both aesthetics and performance are top-tier.</p>
        <div className='flex py-2 items-center justify-center max-w-2xl px-4 '>
            <img src='/mockup.png' className='object-contain'/>
        </div>
    </div>
  )
}

export default Mockup