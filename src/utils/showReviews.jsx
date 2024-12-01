import { useRef } from "react"
import CustomerCard from "../components/landingPage/customerCard"

const ShowReviews = ({ data }) => {
    const scrollRef = useRef(null)
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
    <>
      <div className='overflow-hidden'>
        <div
          ref={scrollRef}
          className='flex overflow-x-auto hide-scrollbar gap-5'
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {data.map((item, i) => (
            <CustomerCard key={i} item={item} />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-end gap-4 mt-4'>
        <button
          onClick={handleGoBack}
          className='bg-[#EF098E] text-white px-5 py-2 rounded-full'
        >
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.40723 1.86128L1.38824 7.24589L7.40723 12.6305'
              stroke='#00FFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <button
          onClick={handleGoNext}
          className='bg-[#EF098E] text-white px-5 py-2 rounded-full'
        >
          <svg
            width='9'
            height='14'
            viewBox='0 0 9 14'
            className='-scale-[1]'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.40723 1.86128L1.38824 7.24589L7.40723 12.6305'
              stroke='#00FFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default ShowReviews
