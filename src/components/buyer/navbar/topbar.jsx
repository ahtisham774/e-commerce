import Marquee from "react-fast-marquee"

const TopBar = () => {
  const languages = ['English', 'Spanish', 'French']
  return (
    <div className='flex items-center w-full p-5 lg:px-24 bg-black text-white'>
      <div className='flex items-center justify-center w-full mx-2 flex-1 overflow-hidden'>
        <Marquee
            pauseOnHover={true}
            speed={50}
            delay={2}
           
            
        >
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold ml-1 underline underline-offset-1'
            >
              ShopNow
            </a>
          </p>
        </Marquee>
      </div>

      <div className='flex items-center justify-center ml-auto'>
        <div className='flex items-center justify-center mr-5'>
          <select className='p-1 border-none outline-none bg-transparent'>
            {languages.map((language, index) => (
              <option key={index} className='bg-black border-none outline-none'>
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default TopBar
