import Dropdown from './dropdown'

function Wallet () {
  const walletItems = [
    {
      id: 1,
      title: 'Balance',
      description: 'Your current balance is $150',
      date: 'Nov 27, 2024'
    },
    {
      id: 2,
      title: 'Transaction 1',
      description: 'You sent $50 to John',
      date: 'Nov 26, 2024'
    },
    {
      id: 3,
      title: 'Transaction 2',
      description: 'Received $200 from Alice',
      date: 'Nov 25, 2024'
    }
  ]

  return (
    <Dropdown
      icon={
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.625 6.12494H22.75V2.62494C22.75 2.47256 22.7102 2.32283 22.6345 2.19056C22.5589 2.05829 22.45 1.94807 22.3186 1.87081C22.1873 1.79355 22.0381 1.75193 21.8857 1.75007C21.7333 1.7482 21.5831 1.78616 21.4499 1.86019L14 5.99902L6.55007 1.86019C6.41688 1.78616 6.26667 1.7482 6.11431 1.75007C5.96194 1.75193 5.8127 1.79355 5.68136 1.87081C5.55002 1.94807 5.44113 2.05829 5.36547 2.19056C5.28981 2.32283 5.25001 2.47256 5.25 2.62494V6.12494H4.375C3.67904 6.1257 3.01181 6.40251 2.51969 6.89463C2.02757 7.38674 1.75076 8.05398 1.75 8.74994V11.3749C1.75076 12.0709 2.02757 12.7381 2.51969 13.2302C3.01181 13.7224 3.67904 13.9992 4.375 13.9999H5.25V23.6249C5.25076 24.3209 5.52757 24.9881 6.01969 25.4802C6.51181 25.9724 7.17904 26.2492 7.875 26.2499H20.125C20.821 26.2492 21.4882 25.9724 21.9803 25.4802C22.4724 24.9881 22.7492 24.3209 22.75 23.6249V13.9999H23.625C24.321 13.9992 24.9882 13.7224 25.4803 13.2302C25.9724 12.7381 26.2492 12.0709 26.25 11.3749V8.74994C26.2492 8.05398 25.9724 7.38674 25.4803 6.89463C24.9882 6.40251 24.321 6.1257 23.625 6.12494ZM21 6.12494H17.3769L21 4.11244V6.12494ZM7 4.11244L10.6231 6.12494H7V4.11244ZM7 23.6249V13.9999H13.125V24.4999H7.875C7.64303 24.4996 7.42064 24.4073 7.25661 24.2433C7.09258 24.0793 7.0003 23.8569 7 23.6249ZM21 23.6249C20.9997 23.8569 20.9074 24.0793 20.7434 24.2433C20.5794 24.4073 20.357 24.4996 20.125 24.4999H14.875V13.9999H21V23.6249ZM24.5 11.3749C24.4997 11.6069 24.4074 11.8293 24.2434 11.9933C24.0794 12.1574 23.857 12.2496 23.625 12.2499H4.375C4.14303 12.2496 3.92064 12.1574 3.75661 11.9933C3.59258 11.8293 3.5003 11.6069 3.5 11.3749V8.74994C3.5003 8.51796 3.59258 8.29558 3.75661 8.13155C3.92064 7.96752 4.14303 7.87524 4.375 7.87494H23.625C23.857 7.87524 24.0794 7.96752 24.2434 8.13155C24.4074 8.29558 24.4997 8.51796 24.5 8.74994V11.3749Z'
            fill='#ED1270'
          />
        </svg>
      }
      unreadCount={3}
      title='Wallet'
      align='left'
      data={walletItems}
      renderItem={walletItem => (
        <div className='flex items-center w-full gap-3'>
          <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
          <svg
              className='fill-current text-gray-500/80'
              width={16}
              height={16}
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M8 0C3.588 0 0 3.588 0 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8Zm0 14.4c-3.52 0-6.4-2.88-6.4-6.4S4.48 1.6 8 1.6s6.4 2.88 6.4 6.4-2.88 6.4-6.4 6.4Z' />
              <path d='M8 3.2a4.8 4.8 0 1 0 0 9.6A4.8 4.8 0 0 0 8 3.2Zm0 8a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z' />
            </svg>
          </div>
          <div className='grow flex items-end'>
            <div className='flex  flex-col justify-between'>
              <div className='text-sm font-medium text-gray-800'>
                {walletItem.title}
              </div>
              <div className='text-xs max-w-[10rem] text-gray-500 truncate'>
                {walletItem.description}
              </div>
            </div>
          </div>
            <div className='text-[9px] self-end font-medium text-gray-500'>
              {walletItem.date}
            </div>
        </div>
        
      )}
    />
  )
}

export default Wallet
