import React from 'react'
import Link from 'next/link'
import { NAVLINKS } from '@/constant/constant'

const Nav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAVLINKS.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className="text-sm font-medium uppercase tracking-wide transition hover:text-blue-600 dark:hover:text-blue-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
