import { useEffect, useState } from 'react'

const ShowNumbers = ({ children }) => {
  const [showNumbers, setShowNumbers] = useState(false)
  const [counting, setCounting] = useState(0)

  // set counting to random number between 1 and 10 every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounting(Math.floor(Math.random() * 10) + 1)
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (counting > 0) {
      setShowNumbers(true)
    } else {
      setShowNumbers(false)
    }
  }, [counting])

  const handleReset = () => {
    setCounting(0)

  }

  return (
    <div className='relative' onClick={handleReset}>
      {showNumbers && (
        <div className='absolute -top-1 -right-1 bg-gray-600 text-white text-xs font-normal border-2 border-[#F3F2F7] rounded-full h-6 w-6 flex items-center justify-center'>
          {counting}
        </div>
      )}
      {children}
    </div>
  )
}

export default ShowNumbers
