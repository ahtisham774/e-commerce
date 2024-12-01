import { config, useSpring, animated } from '@react-spring/web'
import clsx from 'clsx'
import { useState } from 'react'
import { Image } from './image'
import { Icon } from './icon'
import { IconButton } from './iconButton'
import { MenuItem } from './menuItem'

const Sidebar = ({ onSidebarHide, showSidebar }) => {
  const sidebarItems = [
    [
      { id: '0', title: 'Dashboard',path:"/seller", notifications: false },
      { id: '1', title: 'Order List', path:"/seller/orders", notifications: false },
      { id: '2', title: 'Customer',path:"/seller/customers", notifications: false },
      { id: '3', title: 'Reviews',path:"/seller/reviews", notifications: false },
      { id: '4', title: 'Products',path:"/seller/products", notifications: false },
      { id: '5', title: 'Product Detail',path:"/seller/product-detail", notifications: false },
      { id: '6', title: 'Chat',path:"/seller/chat", notifications: false },
      { id: '7', title: 'Wallet',path:"/seller/wallet", notifications: false }
    ]
  ]

  const [selected, setSelected] = useState(localStorage.getItem('mItem') || '0')
  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses
  })
  return (
    <div
      className={clsx(
        'fixed inset-y-0 left-0 flex bg-black text-white w-full sm:w-20 lg:w-60 sm:flex flex-col z-10 lg:px-4 transition-all cubic duration-700',
        showSidebar ? 'translate-x-0' : '-translate-x-full sm:-translate-x-0'
      )}
    >
      <div className='flex-shrink-0 overflow-hidden p-2'>
        <div className='flex items-center h-full sm:justify-center lg:justify-start p-2 sidebar-separator-top'>
          <div className='flex w-full justify-center items-start lg:hidden'>
            <div className='size-14'>
              <img
                src='/assets/logo_icon.png'
                className='object-cover max-w-full h-full'
                alt='logo'
              />
            </div>
          </div>
          <div className='lg:flex w-full justify-center items-start hidden'>
            <div className='size-24'>
              <img
                src='/assets/logo.png'
                className='object-cover max-w-full h-full'
                alt='logo'
              />
            </div>
          </div>
          <div className='flex-grow sm:hidden lg:block' />
          <IconButton
            icon='res-react-dash-sidebar-close'
            className='block sm:hidden'
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className='flex-grow overflow-x-hidden overflow-y-auto flex flex-col'>
        {sidebarItems[0].map(i => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className='flex-grow' />
        <div className='w-full p-3 h-28 hidden lg:block sm:h-20 lg:h-40'>
          <div className='rounded-xl w-full h-full bg-white px-3 sm:px-0 lg:px-3 overflow-hidden'>
            <div className='block sm:hidden lg:block pt-3'>
              <div className='font-bold text-black text-sm'>CTA</div>
              <div className='text-gray-500 text-xs mt-3'>CTA Text HERE</div>
              <button className='p-3 px-12 rounded bg-primary-1 text-black my-3'>
                CTA
              </button>
            </div>
          </div>
        </div>
        <div className='w-full p-3  hidden lg:flex flex-col gap-2 text-[#969BA0]'>
            <p className='font-bold text-xs'>User to User Sales Dashboard</p>
            <span className='text-[9px]'>© 2020 All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
