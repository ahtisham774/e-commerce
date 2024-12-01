import { useRef } from 'react'
import CountDown from './countDown'
import Product from './product'
import ShowTitle from './showTitle'
import { GoArrowLeft } from 'react-icons/go'
import { imagePath } from './products'

const OurProducts = () => {
  const scrollRef = useRef(null)
  const productsToShow = 8

  const products = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/dogfood.jpg`,
      price: 120,
      originalPrice: 160,
      topTitle: '-40%',
      rating: 4.5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/keyboard.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/monitor.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/chair.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/chair.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/keyboard.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/gamepad.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/keyboard.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/shirt.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: `${imagePath}/keyboard.png`,
      price: 960,
      originalPrice: 1160,
      topTitle: '-35%',
      rating: 5,
      reviewsCount: 10
    }
  ]

  const totalProducts = products.length
  const pages = Math.ceil(totalProducts / productsToShow)

  const handleGoBack = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: 'smooth'
    })
  }
  const handleGoNext = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full">
    <ShowTitle text="Our Products" />
    <div className="flex flex-col items-start md:flex-row md:items-center gap-5 justify-between w-full">
      <h1 className="text-4xl mb-1 font-semibold">Explore Our Products</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={handleGoBack}
          className="size-12 bg-light-gray text-primary-1 hover:bg-gray-200 transition-all focus:bg-gray-200 rounded-full flex items-center justify-center"
        >
          <GoArrowLeft size={25} />
        </button>
        <button
          onClick={handleGoNext}
          className="size-12 bg-light-gray text-primary-1 rounded-full hover:bg-gray-200 transition-all focus:bg-gray-200 flex items-center justify-center"
        >
          <GoArrowLeft className="-scale-[1]" size={25} />
        </button>
      </div>
    </div>

    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {[...Array(pages)].map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="grid grid-cols-4 gap-5 min-w-full snap-center"
          >
            {products
              .slice(
                pageIndex * productsToShow,
                (pageIndex + 1) * productsToShow
              )
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
        ))}
      </div>
    </div>

    <button className="px-10 py-2 self-center my-3 bg-primary-1 text-center rounded text-white font-normal w-fit">
      Sign up/Log in to View All Products
    </button>
  </div>
  )
}

export default OurProducts
