import { BsHeart } from 'react-icons/bs'
import { PiEye } from 'react-icons/pi'
import Rating from './rating'

const Product = ({ product }) => {
  const { name, image, price, originalPrice, topTitle, rating, reviewsCount } =
    product

  return (
    <div className='p-4 rounded snap-center shrink-0 flex flex-col gap-1 w-[270px] group/card'>
      <div className='relative bg-light-gray w-full overflow-hidden flex items-center justify-center h-[250px]'>
        <div className='w-[150px] h-[140px] '>
          <img
            src={image}
            alt={name}
            className='max-w-full h-full object-cover  mix-blend-multiply'
          />
        </div>
        {topTitle != '' && (
          <div className='px-3 py-1.5 bg-primary-1 text-white rounded text-xs absolute top-3 left-3'>
            {topTitle}
          </div>
        )}
        <div className='flex flex-col gap-2 absolute right-3 top-3'>
          <button className='size-8 bg-white rounded-full flex items-center justify-center text-primary-1'>
            <BsHeart />
          </button>
          <button className='size-8 bg-white rounded-full flex items-center justify-center text-primary-1'>
            <PiEye />
          </button>
        </div>

        <button
          className={`w-full absolute h-0 bottom-0 bg-[#01FFFC] text-center font-medium text-base group-hover/card:h-10 transition-all`}
        >
          Add to Cart
        </button>
      </div>
      <h3 className='text-base font-medium'>{name}</h3>
      <div className='flex items-center gap-2'>
        <p className='text-secondary-1 text-base font-medium'>${price}</p>
        {originalPrice && (
          <p className='text-secondary-1 text-base font-medium opacity-50 line-through'>
            ${originalPrice}
          </p>
        )}
      </div>
      <div className='flex items-center gap-2'>
        <Rating rating={rating} />
        <span className='text-gray-600 text-[14px] font-medium'>
          ({reviewsCount})
        </span>
      </div>
    </div>
  )
}

export default Product
