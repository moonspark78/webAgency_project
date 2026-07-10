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

    const currentTheme = theme === "system" ? systemTheme : theme;



  return (
    <button onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        className="p-2 transition w-10 h-10 cursor-pointer bg-white rounded-full flex flex-col items-center justify-center"
    >
    </button>
  )
}

export default ThemeToggler