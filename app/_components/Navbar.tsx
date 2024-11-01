"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react'

const Navbar = () => {
  const [open, setOPen] = useState(false);
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
      link: '/#work'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ];
  return (
    <header className='  mx-3 z-50 border-b-2 xl:mx-auto max-w-7xl border-primary/20 flex items-center justify-between'>
      <div className='flex items-center '>

        <Sheet open={open} onOpenChange={setOPen} >
          <SheetTrigger className={`flex sm:hidden flex-col ${open ? '-space-y-0.5' : 'space-y-2.5'}`}>

            <div className={`h-0.5 w-7 bg-primary ${open ? 'rotate-45 ' : 'rotate-0'} transition-transform duration-300`}></div>
            <div className={`h-0.5 w-7 bg-primary ${open ? '-rotate-45 ' : 'rotate-0'} transition-transform duration-300`}></div>

          </SheetTrigger>
          <SheetContent className='transition-all'>
            <SheetHeader>
              <SheetTitle>Ctrl Developers</SheetTitle>

            </SheetHeader>
            <div className='flex flex-col space-y-3 py-5'>
              {navItems.map((item, i) =>
                <a key={i} href={item.link}><Button variant={'ghost'}
                  className='text-2xl text-primary/90 relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:rounded-full hover:bg-background/60 before:h-0.5 before:bg-primary/80 !px-0 before:transition-width before:duration-300 before:ease-in-out hover:before:w-full hover:before:left-0'
                >
                  {item.name}
                </Button></a>
              )}
            </div>
          </SheetContent>
        </Sheet>

        <a href='/' className='w-28 overflow-hidden h-20 flex items-center'>
          <img src="/ctrl-logo.svg" alt="logo" className='  mix-blend-multiply' />
        </a>
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

        <a href="/contact?reason=Offer"><Button className=' !rounded-full items-center flex text-center !px-3 bg-primary text-background'>Try for free <ArrowRight className='-rotate-45 bg-secondary rounded-full ml-1 scale-150  p-0.5
            ' /></Button></a>
      </div>




    </header>

  )
}

export default Navbar