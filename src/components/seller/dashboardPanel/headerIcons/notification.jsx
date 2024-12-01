import Dropdown from './dropdown'

function Notifications () {
  const notifications = [
    {
      id: 1,
      title: 'Notification 1',
      description: 'This is the first notification',
      date: 'Feb 12, 2024'
    },
    {
      id: 2,
      title: 'Notification 2',
      description: 'This is the second notification',
      date: 'Feb 12, 2024'
    },
    {
      id: 3,
      title: 'Notification 3',
      description: 'This is the third notification',
      date: 'Feb 12, 2024'
    }
  ]

  return (
    <Dropdown
      icon={
        <svg
          className='size-6'
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.66667 23.3333H11.6667C11.6667 23.9522 11.9125 24.5457 12.3501 24.9832C12.7877 25.4208 13.3812 25.6667 14 25.6667C14.6188 25.6667 15.2123 25.4208 15.6499 24.9832C16.0875 24.5457 16.3333 23.9522 16.3333 23.3333H23.3333C23.6428 23.3333 23.9395 23.2104 24.1583 22.9916C24.3771 22.7728 24.5 22.4761 24.5 22.1667C24.5 21.8572 24.3771 21.5605 24.1583 21.3417C23.9395 21.1229 23.6428 21 23.3333 21V12.8333C23.3333 10.358 22.35 7.98401 20.5997 6.23367C18.8493 4.48333 16.4754 3.5 14 3.5C11.5246 3.5 9.15068 4.48333 7.40034 6.23367C5.65 7.98401 4.66667 10.358 4.66667 12.8333V21C4.35725 21 4.0605 21.1229 3.84171 21.3417C3.62292 21.5605 3.5 21.8572 3.5 22.1667C3.5 22.4761 3.62292 22.7728 3.84171 22.9916C4.0605 23.2104 4.35725 23.3333 4.66667 23.3333ZM7 12.8333C7 10.9768 7.7375 9.19634 9.05025 7.88359C10.363 6.57083 12.1435 5.83333 14 5.83333C15.8565 5.83333 17.637 6.57083 18.9497 7.88359C20.2625 9.19634 21 10.9768 21 12.8333V21H7V12.8333Z'
            fill='#ED1270'
          />
        </svg>
      }
      unreadCount={21}
      title='Notifications'
      data={notifications}
      align='left'
      renderItem={notification => (
        <div className='flex items-center w-full gap-3'>
          <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
            <svg
              className='fill-current text-gray-500/80'
              width={16}
              height={16}
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M7 0a7 7 0 0 0-7 7c0 1.202.308 2.33.84 3.316l-.789 2.368a1 1 0 0 0 1.265 1.265l2.595-.865a1 1 0 0 0-.632-1.898l-.698.233.3-.9a1 1 0 0 0-.104-.85A4.97 4.97 0 0 1 2 7a5 5 0 0 1 5-5 4.99 4.99 0 0 1 4.093 2.135 1 1 0 1 0 1.638-1.148A6.99 6.99 0 0 0 7 0Z' />
              <path d='M11 6a5 5 0 0 0 0 10c.807 0 1.567-.194 2.24-.533l1.444.482a1 1 0 0 0 1.265-1.265l-.482-1.444A4.962 4.962 0 0 0 16 11a5 5 0 0 0-5-5Zm-3 5a3 3 0 0 1 6 0c0 .383-.087.746-.238 1.07a1 1 0 0 0-.104.85l.3.9-.698-.233a1 1 0 0 0-.632 1.898l2.595.865.789 2.368A4.968 4.968 0 0 1 11 10c-1.657 0-3 1.343-3 3Zm2-2a1 1 0 0 1 1 1v2.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1Zm1 5a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V15a1 1 0 0 1 1-1Z' />
            </svg>
          </div>
          <div className='grow flex items-end'>
            <div className='flex  flex-col justify-between'>
              <div className='text-sm font-medium text-gray-800'>
                {notification.title}
              </div>
              <div className='text-xs max-w-[10rem] text-gray-500 truncate'>
                {notification.description}
              </div>
            </div>
          </div>
            <div className='text-[9px] self-end font-medium text-gray-500'>
              {notification.date}
            </div>
        </div>
      )}
    />
  )
}

export default Notifications
