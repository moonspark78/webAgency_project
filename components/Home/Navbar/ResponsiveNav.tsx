"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { NAVLINKS } from '@/constant/constant'
import { HiBars3 } from 'react-icons/hi2'

const ResponsiveNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-gray-950/80 dark:border-gray-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          WebAgency
        </Link>
        <Nav />
        <div className="flex items-center gap-3">
          <ThemeToggler />
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="flex md:hidden cursor-pointer p-2"
            aria-label="Menu"
          >
            <HiBars3 className="h-6 w-6" />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <MobileNav
          links={NAVLINKS}
          onClose={() => setMobileNavOpen(false)}
        />
      )}
    </header>
  )
}

export default ResponsiveNav
