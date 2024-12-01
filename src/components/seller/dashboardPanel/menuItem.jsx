import clsx from 'clsx'
import { SidebarIcons } from './sidebarIcons'
import { useNavigate } from 'react-router-dom'

export function MenuItem ({
  item: { id, title, notifications, path },
  onClick,
  selected
}) {
  const navigate = useNavigate()

  const handleClick = id => {
    if (path) {
      navigate(path)
    }
    onClick(id)
    localStorage.setItem("mItem", id)
  }
  
  return (
    <div
      className={clsx(
        'w-full  flex items-center py-2 hover:bg-white/20 px-3 sm:px-0 lg:px-3 justify-start sm:justify-center lg:justify-start  cursor-pointer',
        selected == id ? 'bg-white/20' : 'sidebar-item'
      )}
      onClick={() => handleClick(id)}
    >
      <SidebarIcons id={id} />
      <div className='block sm:hidden lg:block ml-2'>{title}</div>
      <div className='block sm:hidden lg:block flex-grow' />
      {notifications && (
        <div className=' sm:hidden lg:flex bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2'>
          <div className='text-white text-sm'>{notifications}</div>
        </div>
      )}
    </div>
  )
}
