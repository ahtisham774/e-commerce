import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import React from 'react'

export const Pagination = ({ children }) => {
  return <nav className="relative z-0 inline-flex items-center bg-[#EEDFE2] rounded-md " aria-label="Pagination">{children}</nav>
}

export const PaginationContent = ({ children }) => {
  return <>{children}</>
}

export const PaginationItem = ({ children }) => {
  return <>{children}</>
}

export const PaginationLink = ({ children, isActive, ...props }) => {
  return (
    <a
      href="#"
      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
        isActive
          ? 'z-10 bg-[#EBFDFF]'
          : 'bg-[#EEDFE2]'
      }`}
      {...props}
    >
      {children}
    </a>
  )
}

export const PaginationPrevious = (props) => {
  return (
    <a
      href="#"
      className="relative inline-flex items-center p-2 px-3 rounded-l-md  text-sm font-medium bg-[#EEDFE2] text-black"
      {...props}
    >
     <ChevronsLeft />
    </a>
  )
}

export const PaginationNext = (props) => {
  return (
    <a
      href="#"
      className="relative inline-flex items-center p-2 px-3 rounded-r-md bg-[#EEDFE2]"
      {...props}
    >
     <ChevronsRight />
    </a>
  )
}

export const PaginationEllipsis = () => {
  return <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
}

