"use client"
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false)

    const {theme, setTheme, systemTheme} = useTheme()
  return (
    <div>ThemeToggler</div>
  )
}

export default ThemeToggler