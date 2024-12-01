import { useEffect, useState } from 'react'
import { imagePath } from './products'

export const CountDown = ({ time }) => {
  // Calculate the initial time left in seconds
  const calculateTimeLeft = () => {
    const now = Math.floor(Date.now() / 1000) // Current time in seconds
    const diff = time - now // Difference in seconds

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(diff / 86400),
      hours: Math.floor((diff % 86400) / 3600),
      minutes: Math.floor((diff % 3600) / 60),
      seconds: diff % 60,
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(timer)
  }, [time])

  // If the countdown is over, display a message or handle logic
  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return <div className='text-lg font-semibold'>Time's up!</div>
  }

  return (
    <div className='flex items-center gap-5'>
     <div className='flex flex-col items-center size-16 justify-center  bg-[#EBFDFF] rounded-full shrink-0' >
       
        <span className='text-base font-bold'>
          {timeLeft.days > 9 ? timeLeft.days : `0${timeLeft.days}`}
        </span>
        <span className='font-medium text-[11px]'>Days</span>
      </div>
     
      <div className='flex flex-col items-center size-16 justify-center  bg-[#EBFDFF] rounded-full shrink-0 '>
        
        <span className='text-base font-bold'>
          {timeLeft.hours > 9 ? timeLeft.hours : `0${timeLeft.hours}`}
        </span>
        <span className='font-medium text-[11px]'>Hours</span>
      </div>
      
      <div className='flex flex-col items-center size-16 justify-center  bg-[#EBFDFF] rounded-full shrink-0 '>
        
        <span className='text-base font-bold'>
          {timeLeft.minutes > 9 ? timeLeft.minutes : `0${timeLeft.minutes}`}
        </span>
        <span className='font-medium text-[11px]'>Minutes</span>
      </div>
     
      <div className='flex flex-col items-center size-16 justify-center  bg-[#EBFDFF] rounded-full shrink-0 '>
       
        <span className='text-base font-bold'>
          {timeLeft.seconds > 9 ? timeLeft.seconds : `0${timeLeft.seconds}`}
        </span>
        <span className='font-medium text-[11px]'>Seconds</span>
      </div>
    </div>
  )
}

const NewsLetter = () => {
  const time = Math.floor(Date.now() / 1000) + 5 * 24 * 60 * 60
  return (
    <div className='flex flex-col-reverse gap-5 w-full items-center lg:flex-row  p-4 md:p-8 bg-[#EEDFE2]'>
      <div className='flex flex-col gap-8'>
        <p className='text-primary-1 text-base font-bold'>Categories</p>
        <h1 className='text-5xl 2xl:text-6xl font-bold'>
          Enhance Your Music Experience
        </h1>
        <CountDown time={time} />
        <button className='px-10 py-2 bg-primary-1 text-center rounded text-white w-fit'>
            Buy Now!
        </button>
      </div>
      <div className=''>
        <img src={`${imagePath}/speaker.png`} className='max-w-full  h-full object-cover' alt='speaker' />
      </div>
    </div>
  )
}

export default NewsLetter
