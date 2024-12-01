
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Slider = ({ img }) => {
  return (
    <div className='flex flex-col lg:flex-row-reverse gap-8 p-4  lg:p-8 bg-black rounded w-full'>
      <div className='w-full lg:w-2/3 min-h-32'>
        <img src={img} alt='slider' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col items-start gap-3 w-full lg:w-1/2 justify-center '>
        <div className='flex items-center gap-5'>
          <div className='max-w-16 -ml-3'>
            <img
              src={'/assets/apple.png'}
              alt='slider'
              className='w-full h-full object-cover'
            />
          </div>
          <h3 className='text-white text-left text-lg'>iPhone 14 Series</h3>
        </div>
        <h1 className='text-5xl text-left text-white font-semibold'>
          Up to 10% off Voucher
        </h1>
        <Link to='#' className='text-white text-base hover:translate-x-2 transition-all duration-500 font-medium flex items-center gap-3 underline'>
          Shop Now <FaArrowRightLong size={25} className='mt-1' />{' '}
        </Link>
      </div>
    </div>
  )
}

export default Slider
