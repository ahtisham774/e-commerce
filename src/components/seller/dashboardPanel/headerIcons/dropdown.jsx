import React, { useState, useRef, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

function Dropdown({ 
  icon, 
  unreadCount, 
  title, 
  data = [], 
  align = 'right', 
  renderItem 
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const trigger = useRef(null)
  const dropdown = useRef(null)

  // Animation using react-spring
  const animationStyles = useSpring({
    opacity: dropdownOpen ? 1 : 0,
    display: dropdownOpen ? 'block' : 'none',
    config: { tension: 200, friction: 20 },
  })

  // Close dropdown on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // Close dropdown on pressing the Esc key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='relative inline-flex'>
      <button
        ref={trigger}
        className={`size-12  flex  items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 rounded-xl ${
          dropdownOpen ? 'bg-gray-200' : 'bg-[#EBFDFF]'
        }`}
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className='sr-only'>{title}</span>
        {icon}

        {unreadCount > 0 && (
          <div className='absolute -top-2 -right-2 size-5 bg-red-500 border-2 border-gray-100 rounded-full'>
            <div className='text-[9px] text-white flex items-center justify-center h-full'>
              {unreadCount}
            </div>
          </div>
        )}
      </button>

      <animated.div
        style={animationStyles}
        className={`origin-top-right z-10 absolute top-full ${
          align === 'right' ? 'right-0' : 'left-0'
        } min-w-80 bg-white border border-gray-200 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1`}
        ref={dropdown}
      >
        <div>
          <div className='text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4'>
            {title}
          </div>
          <ul>
            {data.map((item, index) => (
              <li key={index} className='flex items-end py-2 px-4 hover:bg-gray-100'>
                {renderItem(item)}
              </li>
            ))}
          </ul>
        </div>
      </animated.div>
    </div>
  )
}

export default Dropdown
