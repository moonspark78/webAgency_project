import React from 'react'
import { NAVLINKS } from '../../../constant/constant'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen"></div>
      {/* Navlinks */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%]
      sm:w-[60%] bg-blue-900 space-y-6 z-1050">
        {NAVLINKS.map((link) => {
          return <Link key={link.id} href={link.url}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white'>
              {link.label}
            </p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default MobileNav