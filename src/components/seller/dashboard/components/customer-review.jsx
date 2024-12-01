import { Star } from 'lucide-react'
import { Card } from './ui/card'
import { useRef } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Jons Sena',
    time: '2 days ago',
    rating: 4.5,
    comment:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
  },
  {
    id: 2,
    name: 'Sofia',
    time: '2 days ago',
    rating: 4.0,
    comment:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
  },
  {
    id: 3,
    name: 'Anandreansyah',
    time: '3 days ago',
    rating: 4.5,
    comment:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
  },
  {
    id: 3,
    name: 'Anandreansyah',
    time: '3 days ago',
    rating: 4.5,
    comment:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
  },
  {
    id: 3,
    name: 'Anandreansyah',
    time: '3 days ago',
    rating: 4.5,
    comment:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
  },
  {
    id: 3,
    name: 'Anandreansyah',
    time: '3 days ago',
    rating: 4.5,
    comment:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text"
  },
]

function Rating ({ value }) {
  return (
    <div className='flex'>
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className='ml-2 text-sm text-gray-600'>{value}</span>
    </div>
  )
}

export default function CustomerReview () {

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
    <div className=' w-full flex flex-col'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h2 className='text-lg font-semibold'>Customer Review</h2>
          <p className='text-sm text-gray-500'>
            Eum fuga consequuntur utadipi et
          </p>
        </div>
        <div className='flex space-x-2'>
          <button  onClick={handleGoBack} className='p-2 px-3 rounded-lg bg-pink-500 text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <button  onClick={handleGoNext} className='p-2 px-3 rounded-lg bg-pink-500 text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='overflow-hidden'>
        <div
          ref={scrollRef}
          className='flex gap-10 overflow-x-auto  shrink-0 snap-x snap-mandatory hide-scrollbar'
        >
          {reviews.map(review => (
            <div
              key={review.id}
              className=' snap-center shrink-0 w-fit flex items-center  relative mr-16'
            >
              <div className='bg-[#EEDFE2] rounded-xl  max-w-[400px]  p-6'>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-12 h-12 bg-[#C4C4C4] rounded-full'></div>
                  <div>
                    <h3 className='font-semibold'>{review.name}</h3>
                    <p className='text-sm text-gray-500'>{review.time}</p>
                  </div>
                </div>
                <p className='text-sm text-gray-600 mb-4 w-full max-w-[70%] whitespace-pre-line'>{review.comment}</p>
                <Rating value={review.rating} />
              </div>
              <div className='w-[180px] h-[80%] absolute -translate-x-[75%] top-1/2 -translate-y-1/2 -right-1/2 rounded-full shrink-0 bg-[#C4C4C4]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
