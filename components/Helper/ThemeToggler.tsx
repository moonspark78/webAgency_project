"use client"
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false)

    const {theme, setTheme, systemTheme} = useTheme()

    useEffect(() => {
        const mountCheck = () => {
            setMounted(true);
        };
        mountCheck();
    },[])

    if (!mounted) return null;


  return (
    <div>ThemeToggler</div>
  )
}

export default ThemeToggler