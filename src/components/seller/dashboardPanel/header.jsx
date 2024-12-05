import { useAuth } from '../../../context/useAuth'
import Chat from './headerIcons/chat'
import Notifications from './headerIcons/notification'
import Settings from './headerIcons/setting'
import Wallet from './headerIcons/wallet'
import { Icon } from './icon'
import { IconButton } from './iconButton'

const Header = ({ onClick }) => {
  const {user} = useAuth()
  return (
    <div className='w-full flex  items-center gap-5'>
      <div className='w-full flex flex-col-reverse gap-5 md:flex-row justify-between items-center'>
        <div className='flex-1 relative w-full flex bg-white rounded items-center'>
          <form action='#' method='POST' className='w-full'>
            <input
              type='text'
              name='company_website'
              id='company_website'
              className='pr-12 py-2 pl-2 bg-transparent  border-none outline-none w-full'
              placeholder='search'
            />
          </form>
          <Icon
            path='res-react-dash-search'
            className='w-5 h-5 search-icon right-3 absolute'
          />
        </div>

        <div className='flex flex-1 items-center justify-between w-full'>
          <IconButton
            icon='res-react-dash-sidebar-open'
            className='block sm:hidden'
            onClick={onClick}
          />

          <div className='flex-1 flex items-center justify-end gap-8 w-full   divide-x-2'>
            <div className='flex  gap-3 '>
              <Notifications />
              <Chat />
              <Wallet />
              <Settings />
            </div>
            <div className='flex items-center gap-5  pl-2'>
              <p className='hidden sm:block'>
                Hello, <span className='font-bold'>{user?.name}</span>
              </p>
              <div className='flex items-center justify-center shrink-0 size-12 bg-[#C4C4C4] border-4 border-white rounded-full'>
                {/* <img
                    src=''
                    alt='avatar'
                    className='object-cover max-w-full h-full'
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
