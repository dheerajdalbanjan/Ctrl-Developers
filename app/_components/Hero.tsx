import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col space-y-4 text-primary px-4 py-8 xl:mx-auto max-w-7xl'>
            <p className='text-base sm:text-xl uppercase'>website design and DEVELOPMENT agency</p>
            <h2 className='text-4xl sm:text-6xl sm:max-w-3xl max-w-lg uppercase antialiased font-bold'>We are a leading website development agency</h2>
            <div className='flex items-center w-full sm:justify-start space-x-1.5 sm:space-x-5 justify-start'>
                <div className='w-fit flex items-center space-x-1 '>
                    <span className='text-base sm:text-xl sm:p-2 sm:w-[22rem] text-wrap uppercase w-[14rem] p-1  bg-secondary '>A creative WEB design AND DEVELOPMENT AGENCY from INDIA</span>
                    <span className='h-20 sm:h-[4.5rem] w-3.5 sm:w-10 bg-secondary'></span>
                    <span className='h-20 sm:h-[4.5rem] w-1.5 sm:w-6 bg-secondary'></span>
                </div>
                <a href="/contact"><Button className=' !rounded-full items-center flex text-center !px-3 bg-primary text-background'>Lets Talk <ArrowRight className='-rotate-45 bg-secondary rounded-full ml-1 scale-150  p-0.5
            ' /></Button></a>
            </div>
        </div>
    )
}

export default Hero