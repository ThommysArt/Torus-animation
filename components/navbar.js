import React from 'react'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <div className="fixed z-50 flex flex-row gap-2 p-4 md:px-8 h-14 w-full justify-between items-center backdrop-blur-sm border-b">
        <h1 className="text-xl md:text-2xl font-bold">Three JS</h1>
        <ModeToggle />
    </div>
  )
}

export default Navbar