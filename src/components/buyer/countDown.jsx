import { useEffect, useState } from 'react'

const CountDown = ({ time }) => {
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
      <div className='flex flex-col'>
        <span className='font-medium text-xs'>Days</span>
        <span className='text-[32px] font-bold'>
          {timeLeft.days > 9 ? timeLeft.days : `0${timeLeft.days}`}
        </span>
      </div>
      <div className='flex items-center justify-center text-3xl font-semibold text-primary-1'>
        :
      </div>
      <div className='flex flex-col'>
        <span className='font-medium text-xs'>Hours</span>
        <span className='text-[32px] font-bold'>
          {timeLeft.hours > 9 ? timeLeft.hours : `0${timeLeft.hours}`}
        </span>
      </div>
      <div className='flex items-center justify-center text-3xl font-semibold text-primary-1'>
        :
      </div>
      <div className='flex flex-col'>
        <span className='font-medium text-xs'>Minutes</span>
        <span className='text-[32px] font-bold'>
          {timeLeft.minutes > 9 ? timeLeft.minutes : `0${timeLeft.minutes}`}
        </span>
      </div>
      <div className='flex items-center justify-center text-3xl font-semibold text-primary-1'>
        :
      </div>
      <div className='flex flex-col'>
        <span className='font-medium text-xs'>Seconds</span>
        <span className='text-[32px] font-bold'>
          {timeLeft.seconds > 9 ? timeLeft.seconds : `0${timeLeft.seconds}`}
        </span>
      </div>
    </div>
  )
}

export default CountDown
