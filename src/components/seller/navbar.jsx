import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SellerNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const links = [
    {
      name: 'Products',
      link: '#'
    },
    {
      name: 'CONTACT',
      link: '#'
    },
    {
      name: 'Become A Buyer ',
      link: '#'
    },
    {
      name: 'Log In',
      link: '#'
    }
  ]

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className='flex w-full items-center justify-end p-4 lg:px-8 bg-[#EEDFE2]'>
      <div className='flex items-center gap-8 w-full justify-between lg:justify-end'>
        <div className='flex items-center gap-2 rounded-full px-4 bg-white overflow-hidden max-w-[30rem] w-full'>
          <input
            type='search'
            className='border-none outline-none w-full p-2 font-semibold placeholder:font-semibold placeholder:text-black'
            placeholder='Search...'
          />
          <MdSearch size={25} />
        </div>
        <div className='lg:hidden'>
          <FaBars className='text-2xl cursor-pointer' onClick={toggleSidebar} />
        </div>
        <div className='hidden lg:flex items-center gap-1'>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className='text-black px-4 py-1.5 font-bold uppercase bg-[#EEDFE2]'
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#EEDFE2] z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='flex justify-end p-4'>
          <FaTimes
            className=' text-2xl cursor-pointer'
            onClick={toggleSidebar}
          />
        </div>

        <div className='flex flex-col h-[calc(100%-80px)] justify-between'>
          <div className='flex flex-col flex-1 items-start px-8'>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className='text-black px-4 py-1.5 font-bold uppercase bg-[#EEDFE2]'
                onClick={toggleSidebar}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerNavbar
