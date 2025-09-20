"use client"

import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

const Navbar = () => {

    const { theme , toggleTheme } = useTheme()

  return (
    <nav className={`flex items-center justify-between shadow-md px-6 py-4 sticky top-0 z-10 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
        <Link href="/" className='text-2xl font-bold text-blue-600'>
            🎬 Movie Explorer
        </Link>
        <div className='flex items-center gap-6'>
            <Link href='/search' className={`hover:underline ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Search</Link>
            <button onClick={toggleTheme} className='px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600'>
              {theme === "light" ? "☀️ Light" : "🌑 Dark"} 
            </button>
        </div>
    </nav>
  )
}

export default Navbar