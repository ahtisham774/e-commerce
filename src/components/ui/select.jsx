import React, { useState } from 'react'

export const Select = ({ children, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelect = (value) => {
    console.log("selected", value)
    setSelectedValue(value)
    setIsOpen(false)
    onValueChange(value)
  }

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setIsOpen, selectedValue, handleSelect })
      )}
    </div>
  )
}

export const SelectTrigger = ({ children, isOpen, setIsOpen, selectedValue }) => {
  return (
    <button
      type="button"
      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      onClick={() => setIsOpen(!isOpen)}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      {selectedValue || children}
    </button>
  )
}

export const SelectContent = ({ children, isOpen }) => {
  if (!isOpen) return null
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-56 z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="listbox">
        {children}
      </div>
    </div>
  )
}

export const SelectItem = ({ children, value, handleSelect }) => {
  return (
    <div
      className="cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
      onClick={() => handleSelect(value)}
      role="option"
    >
      {children}
    </div>
  )
}

export const SelectValue = ({ placeholder }) => {
  return <span>{placeholder}</span>
}

