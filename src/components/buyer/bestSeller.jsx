import { useRef } from 'react'
import CountDown from './countDown'
import Product from './product'
import ShowTitle from './showTitle'
import { GoArrowLeft } from 'react-icons/go'
import { imagePath } from './products'

const BestSeller = () => {
  const products = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      image:
        `${imagePath}/coat.png`,
      price: 120,
      originalPrice: 160,
      topTitle: '',
      rating: 4.5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image:
        `${imagePath}/bag.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: "",
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image:
        `${imagePath}/cpu_cooler.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: "",
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image:
        `${imagePath}/bookrack.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: "",
      rating: 5,
      reviewsCount: 10
    }
  ]

  return (
    <div className='flex flex-col gap-5 w-full '>
      <ShowTitle text='This Month' />
      <div className='flex flex-col items-start md:flex-row md:items-center gap-5 justify-between w-full'>
        <div className='flex flex-col  md:flex-row w-full lg:w-fit md:items-end gap-5 lg:gap-24'>
          <h1 className='text-4xl mb-1 font-semibold'>Best Seller</h1>
        </div>
        <div className='flex items-center gap-3 self-end'>
          <button className='px-10 py-2 self-center whitespace-nowrap my-3 bg-primary-1 text-center rounded text-white font-normal w-fit'>
            View All
          </button>
        </div>
      </div>

      <div className='overflow-hidden '>
        <div className='flex gap-2 overflow-x-auto  shrink-0 snap-x snap-mandatory hide-scrollbar'>
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>

      <hr />
    </div>
  )
}

export default BestSeller
