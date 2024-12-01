import React, { useState } from 'react'

export const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  )
}

export const DropdownMenuTrigger = ({ children, isOpen, setIsOpen }) => {
  return React.cloneElement(children, {
    onClick: () => setIsOpen(!isOpen),
    'aria-expanded': isOpen
  })
}

export const DropdownMenuContent = ({ children, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className="absolute right-0 mt-2 w-56 z-20 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </div>
    </div>
  )
}

export const DropdownMenuItem = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="block px-4 w-full py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.2)] "
      role="menuitem"
    >
      {children}
    </button>
  )
}

