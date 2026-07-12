import React from 'react'
import { CgWebsite } from 'react-icons/cg'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
        <div>
            <CgWebsite className="w-6 h-6 text-black"/>
        </div>
    </div>
  )
}

export default Logo