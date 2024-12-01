import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Sidebar from './sidebar'
import Slider from './slider'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-5 mb-8 w-full h-full'>
      <div className='p-4 lg:p-8 lg:pb-0 2xl:pl-24'>
        <Sidebar />
      </div>
      <div className='w-2 hidden h-full lg:h-auto lg:block bg-black bg-opacity-30 '></div>
      <div className='p-4 lg:p-8 lg:pb-0 2xl:pr-24'>
        <Carousel
        
          autoPlay
          swipeable
          useKeyboardArrows
          statusFormatter={(current, total) => ``}
          showArrows={false}
        >
          <Slider img='/assets/slider1.jpg' />
          <Slider img='/assets/slider1.jpg' />
          <Slider img='/assets/slider1.jpg' />
        </Carousel>
      </div>
    </div>
  )
}

export default Hero
