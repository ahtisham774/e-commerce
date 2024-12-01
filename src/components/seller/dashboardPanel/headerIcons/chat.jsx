import Dropdown from './dropdown'

function Chat () {
  const chatMessages = [
    {
      id: 1,
      sender: 'John Doe',
      message: 'Hey, how are you?',
      date: 'Feb 12, 2024'
    },
    {
      id: 2,
      sender: 'Jane Smith',
      message: 'Can we catch up later?',
      date: 'Feb 12, 2024'
    },
    {
      id: 3,
      sender: 'Mark Allen',
      message: 'Don’t forget about the meeting.dasdasdasdasdasdas asdasdasd asdasdas ddasdasdasd    asdasdas asdasd',
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
            d='M13.9997 13.9994C14.644 13.9994 15.1663 13.477 15.1663 12.8327C15.1663 12.1884 14.644 11.666 13.9997 11.666C13.3553 11.666 12.833 12.1884 12.833 12.8327C12.833 13.477 13.3553 13.9994 13.9997 13.9994Z'
            fill='#333333'
          />
          <path
            d='M9.33366 13.9994C9.97799 13.9994 10.5003 13.477 10.5003 12.8327C10.5003 12.1884 9.97799 11.666 9.33366 11.666C8.68933 11.666 8.16699 12.1884 8.16699 12.8327C8.16699 13.477 8.68933 13.9994 9.33366 13.9994Z'
            fill='#333333'
          />
          <path
            d='M18.6667 13.9994C19.311 13.9994 19.8333 13.477 19.8333 12.8327C19.8333 12.1884 19.311 11.666 18.6667 11.666C18.0223 11.666 17.5 12.1884 17.5 12.8327C17.5 13.477 18.0223 13.9994 18.6667 13.9994Z'
            fill='#333333'
          />
          <path
            d='M3.55809 25.515C3.80228 25.6157 4.06395 25.6673 4.32809 25.6667C4.5886 25.668 4.84672 25.617 5.08719 25.5168C5.32765 25.4166 5.54559 25.2692 5.72809 25.0833L8.64476 22.1667H19.8331C21.3802 22.1667 22.8639 21.5521 23.9579 20.4581C25.0518 19.3642 25.6664 17.8804 25.6664 16.3333V9.33333C25.6664 7.78624 25.0518 6.30251 23.9579 5.20854C22.8639 4.11458 21.3802 3.5 19.8331 3.5H8.16643C6.61933 3.5 5.1356 4.11458 4.04164 5.20854C2.94768 6.30251 2.33309 7.78624 2.33309 9.33333V23.6717C2.3294 24.0662 2.44416 24.4528 2.66255 24.7814C2.88094 25.1101 3.1929 25.3656 3.55809 25.515ZM4.66643 9.33333C4.66643 8.40508 5.03518 7.51484 5.69155 6.85846C6.34793 6.20208 7.23817 5.83333 8.16643 5.83333H19.8331C20.7614 5.83333 21.6516 6.20208 22.308 6.85846C22.9643 7.51484 23.3331 8.40508 23.3331 9.33333V16.3333C23.3331 17.2616 22.9643 18.1518 22.308 18.8082C21.6516 19.4646 20.7614 19.8333 19.8331 19.8333H8.16643C8.01289 19.8324 7.86068 19.8619 7.71854 19.9199C7.57639 19.978 7.44711 20.0635 7.33809 20.1717L4.66643 22.855V9.33333Z'
            fill='#ED1270'
          />
        </svg>
      }
      unreadCount={5}
      title='Chat'
      align='left'
      data={chatMessages}
      renderItem={chat => (
        <div className='flex items-center w-full gap-3'>
          <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-[#ED1270]'>
            {chat.sender.charAt(0)}
          </div>
          <div className='grow flex items-end'>
            <div className='flex flex-col justify-between'>
              <div className='text-sm font-medium text-gray-800'>
                {chat.sender}
              </div>
              <div className='text-xs max-w-[10rem] text-gray-500 truncate'>
                {chat.message}
              </div>
            </div>
          </div>
          <div className='text-[9px] self-end font-medium text-gray-500'>
            {chat.date}
          </div>
        </div>
      )}
    />
  )
}

export default Chat
