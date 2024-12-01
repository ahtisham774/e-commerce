const Footer = () => {
  return (
    <div className='flex w-full items-center flex-col gap-3 sm:flex-row  p-4 lg:px-8 bg-[#EEDFE2]'>
      <div className='flex flex-1 justify-center  pl-8 gap-5 items-center'>
        <p className='uppercase font-bold text-lg'>FOLLOW US</p>
        <div className='size-6'>
          <img
            src='/assets/insta.png'
            className='object-cover max-w-full h-full'
            alt='instagram'
          />
        </div>
        <div className='size-6'>
          <img
            src='/assets/fb.png'
            className='object-cover max-w-full h-full'
            alt='facebook'
          />
        </div>
      </div>
      <div className="flex items-center">
        <p>
            &copy; {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </div>
  )
}

export default Footer
