import { useState } from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import { IconButton } from './iconButton'
import { Icon } from './icon'
import Header from './header'

const DashboardPanel = () => {
  const [showSidebar, onSetShowSidebar] = useState(false)
  return (
    <div className='flex bg-[#F3F2F7] barlow'>
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false)
        }}
        showSidebar={showSidebar}
      />
      <div className='flex w-full'>
        <div className='w-full h-screen hidden sm:block sm:w-20 lg:w-60 flex-shrink-0'>
          .
        </div>
        <div className=' h-screen w-full flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-6'>
          <Header
            onClick={() => {
              onSetShowSidebar(true)
            }}
          />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardPanel
