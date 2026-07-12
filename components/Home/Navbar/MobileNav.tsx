import React from 'react'
import Link from 'next/link'

interface MobileNavProps {
  links: { id: number; url: string; label: string }[]
  onClose: () => void
}

const MobileNav = ({ links, onClose }: MobileNavProps) => {
  return (
    <div className="fixed inset-0 z-40 flex md:hidden">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="relative ml-auto flex h-full w-64 flex-col gap-4 bg-white p-6 shadow-xl dark:bg-gray-950">
        <div className="flex justify-end">
          <button onClick={onClose} className="cursor-pointer p-1 text-2xl" aria-label="Fermer">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={onClose}
              className="text-base font-medium uppercase tracking-wide transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
