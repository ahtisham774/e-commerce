import { useEffect, useState } from 'react'
import { useAuth } from '../../../context/useAuth'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import Notification from './icons/notification'
import Messages from './icons/messages'
import Gifts from './icons/gifts'
import Favourites from './icons/favourites'
import Cart from './icons/cart'
import ShowNumbers from './icons/showNumbers'
import { LuUser } from 'react-icons/lu'
import { MdOutlineCancel } from 'react-icons/md'
import { FaRegStar } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { TbLogout2 } from 'react-icons/tb'
const TopNavbar = () => {
  const { user } = useAuth()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const items = [
    {
      name: 'Home',
      link: '/buyer'
    },
    user
      ? {
          name: 'Categories',
          link: '/buyer/categories'
        }
      : {
          name: 'Contact',
          link: '/buyer/contact'
        },
    {
      name: 'About',
      link: '/buyer/about'
    },
    user
      ? {
          name: 'Become a Seller',
          link: '/seller'
        }
      : {
          name: 'Sign Up',
          link: '/buyer/signUp'
        }
  ]
  const accountItems = [
    {
      name: 'Manage My Account',
      link: '/buyer/account',
      icon: <LuUser />
    },
    {
      name: 'My Order',
      link: '/buyer/order',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 6.30005V20.5C3 20.7653 3.10536 21.0196 3.29289 21.2072C3.48043 21.3947 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3947 20.7071 21.2072C20.8946 21.0196 21 20.7653 21 20.5V6.30005H3Z'
            stroke='white'
            strokeWidth='1.5'
            strokeLinejoin='round'
          />
          <path
            d='M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      name: 'My Cancellations',
      link: '/buyer/cancellations',
      icon: <MdOutlineCancel />
    },
    {
      name: 'My Reviews',
      link: '/buyer/reviews',
      icon: <FaRegStar />
    },
    {
      name: 'Settings',
      link: '/buyer/setting',
      icon: <CiSettings />
    }
  ]

  useEffect(() => {
    // close the profile dropdown when clicked outside
    const handleClickOutside = event => {
      if (event.target.closest('.profile')) return
      setIsProfileOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isProfileOpen])

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  return (
    <div className='flex items-center justify-between w-full p-4 md:p-6 2xl:p-8 navbar-bg'>
      <div className='w-full max-w-[200px] text-center'>
        <h1 className='text-2xl font-bold'>Menu</h1>
      </div>
      <div className='w-full flex items-center justify-end gap-8'>
        <div className='hidden lg:flex items-center gap-8'>
          {items.map((item, index) => {
            return (
              <div key={index}>
                <Link
                  to={item.link}
                  className='text-base font-normal hover:underline hover:underline-offset-1 focus-within:underline focus-within:underline-offset-1'
                >
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
        <div className='hidden lg:flex items-center bg-white px-2 w-full max-w-xs rounded'>
          <input
            type='search'
            className='border-none outline-none w-full px-2 py-1.5 font-semibold placeholder:font-semibold placeholder:text-[#8a8a8a] bg-transparent'
            placeholder='What are you looking for?'
          />

          <IoSearchOutline size={25} />
        </div>
        <div className='flex items-center gap-3'>
          {user && (
            <>
              <ShowNumbers>
                <Gifts />
              </ShowNumbers>
              <ShowNumbers>
                <Messages />
              </ShowNumbers>
              <ShowNumbers>
                <Notification />
              </ShowNumbers>
            </>
          )}
          <ShowNumbers>
            <Favourites />
          </ShowNumbers>
          <ShowNumbers>
            <Cart />
          </ShowNumbers>
        </div>

        <div className='relative profile'>
          <button
            onClick={toggleProfile}
            className='size-9 rounded-full flex items-center justify-center bg-[#ED1270] text-white'
          >
            <LuUser size={25} />
          </button>

          {isProfileOpen && (
            <div className='absolute top-10 right-0 bg-black text-white p-4 w-max rounded shadow-lg'>
              <div className='flex flex-col gap-2'>
                {accountItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={e => e.stopPropagation()}
                    className='flex items-center gap-2 hover:bg-[#ED1270] hover:text-white p-2 rounded'
                  >
                    <span className='size-8 shrink-0 text-2xl'>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                ))}
                <button
                  onClick={toggleProfile}
                  className='flex items-center gap-2 hover:bg-[#ED1270] hover:text-white p-2 rounded'
                >
                  <span className='size-8 shrink-0 text-2xl'>
                    <TbLogout2 />
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
