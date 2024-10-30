import React from 'react'

const Footer = () => {
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
    <div className='w-full flex flex-col space-y-2 items-center static bottom-0 p-5 bg-primary'>
        <div className='w-28 overflow-hidden h-20 flex items-center'>
          <img src="/ctrl-logo.svg" alt="logo" className=' invert mix-blend-lighten ' />
        </div>

        <div className='flex flex-col space-y-1'>
            {navItems.map((item, i) => (
                <div className='text-background' key={i}>
                    <a href={item.link} className='hover:opacity-80'>{item.name}</a>
                </div>
            ))}
        </div>

        <hr  className='my-2 border-background border-t-0'/>

        <div className='flex flex-col space-y-1 text-background items-center'>
            <h4 className='bg-secondary w-fit rounded-lg text-primary px-3 py-1'>Contact Us</h4>
            <p>Email: <span>ctrldevelopers4@gmail.com</span></p>
            <p>Phone: <span>+91 63620 58230</span></p>
        </div>
    </div>
  )
}

export default Footer