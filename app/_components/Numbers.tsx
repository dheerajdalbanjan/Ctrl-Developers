import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const Numbers = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start items-center gap-3 py-6 mx-4 max-w-7xl xl:mx-auto'>
        <div className='flex flex-col space-y-2'>
                <p className='uppercase text-base max-w-xs font-semibold antialiased text-center' >We are a creative and talented team of designers and developers</p>
                <div className='flex items-center space-x-1 justify-center'>
                    {Array(5).fill(0).map((_, i) => (
                        <StarFilledIcon key={i} className='w-6 h-6 opacity-90' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='text-center max-w-xl'>Delivering customized digital solutions, we blend creativity with functionality. At Ctrl Developers, we ensure every detail is crafted with precision to maximize your business growth and online impact.</p>
                <div className='flex items-center w-full py-2 px-4 justify-between'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-7xl sm:text-8xl text-primary font-bold antialiased'>35+</p>
                        <p className='uppercase text-sm'>Designs & Websites</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-7xl sm:text-8xl text-primary font-bold antialiased'>02yr</p>
                        <p className='uppercase text-sm '>Have working experience</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Numbers