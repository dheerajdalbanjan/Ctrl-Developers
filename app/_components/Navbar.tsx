"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Navbar = () => {
    const [open , setOPen] = useState(false) ;
    const navItems = [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About',
          link: '/about'
        },
        {
          name: 'Work',
          link: '/work'
        },
        {
          name: 'Contact',
          link: '/contact'
        }
      ];
  return (
    <header className='  mx-3 z-50 border-b-2 xl:mx-auto max-w-7xl border-primary/20 flex items-center justify-between'>
        <div className='flex items-center '>
        <button onClick={()=>setOPen(!open)} className={`flex sm:hidden flex-col ${open?'-space-y-0.5':'space-y-2.5'}`}>
  <div className={`h-0.5 w-7 bg-primary ${open ? 'rotate-45 ' : 'rotate-0'} transition-transform duration-300`}></div>
  <div className={`h-0.5 w-7 bg-primary ${open ? '-rotate-45 ' : 'rotate-0'} transition-transform duration-300`}></div>
</button>
            <div className='w-28 overflow-hidden h-20 flex items-center'>
            <img src="/ctrl-logo.svg" alt="logo" className='  mix-blend-multiply' />
            </div>
        </div>

        <div className='flex items-center space-x-4 justify-center'>
        <nav className='sm:flex items-center justify-center hidden space-x-4'>
            {navItems.map((item, i) => (
                <a key={i} href={item.link}><Button variant={'ghost'}
                className='text-base relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:rounded-full hover:bg-background/60 before:h-0.5 before:bg-primary/80 !px-0 before:transition-width before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0'
              >
                {item.name}
              </Button></a>
            ))}
        </nav>
        
        <Button className='!rounded-full bg-primary !px-6 text-zinc-100'>Sign Up</Button>
        </div>


        <div className={`fixed  ${open?'translate-y-0 ':'-translate-y-[100vh]'} transition-transform duration-500 ease-in-out !z-[10000] h-[89vh] w-screen bottom-0 left-0 right-0 bg-background flex flex-col items-start px-12 py-8 justify-start`}>
            <div className='flex flex-col space-y-3'>
            {navItems.map((item, i) => 
                <a key={i} href={item.link}><Button variant={'ghost'}
                className='text-3xl text-primary/90 relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:rounded-full hover:bg-background/60 before:h-0.5 before:bg-primary/80 !px-0 before:transition-width before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0'
              >
                {item.name}
              </Button></a>
            )}
            </div>
        </div>


    </header>

  )
}

export default Navbar