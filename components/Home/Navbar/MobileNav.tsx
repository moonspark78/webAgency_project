import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen"></div>
      {/* Navlinks */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%]">

      </div>
    </div>
  )
}

export default MobileNav