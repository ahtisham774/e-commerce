import { SlidersHorizontal } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui/select'
import { useState } from 'react'

const OtherReviews = () => {
  const [dateFilter, setDateFilter] = useState('latest')
  const itemsToShow = 5
  const [breakPoint, setBreakPoint] = useState(itemsToShow)

  const [showMore, setShowMore] = useState(true)

  const reviews = [
    {
      id: 1,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 2,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    },
    {
      id: 1,
      name: 'James Kowalski',
      designation: 'Head Marketing',
      date: '24 June 2020',
      tags: ['Good Services', 'Good Places', 'Excelent'],
      rating: 3.5,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    }
  ]

  const handleLoadMore = () => {
    if (breakPoint >= reviews.length) {
      setShowMore(false)
    }

    setBreakPoint(prev => prev + itemsToShow)
  }

  return (
    <div className='flex flex-col w-full rounded-xl bg-white shadow-sm gap-8 p-6'>
      <div className='flex justify-between items-center '>
        <div>
          <h1 className='text-2xl font-bold'>Others review</h1>
          <p className='text-[#969BA0]'>
            Here is customer review about your restaurant{' '}
          </p>
        </div>
        <div className='flex gap-4'>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className='w-[180px]'>
              <SlidersHorizontal className='mr-2 mt-1 h-4 w-4' />

              <SelectValue placeholder='Latest' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='latest' handleSelect={setDateFilter}>
                Latest
              </SelectItem>
              <SelectItem value='oldest' handleSelect={setDateFilter}>
                Oldest
              </SelectItem>
              <SelectItem value='highest' handleSelect={setDateFilter}>
                Highest Rating
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='flex flex-col gap-3 w-full'>
        {reviews.slice(0, breakPoint).map(review => (
          <div
            key={review.id}
            className='flex flex-col md:flex-row items-start gap-5 w-full bg-[#EEDFE2] p-4 rounded-xl'
          >
            <div className='flex h-full items-start'>
              <div className='size-12 rounded-full shrink-0 bg-[#FE0094]'></div>
            </div>
            <div className='flex w-full flex-col gap-4 text-[#3E4954]'>
              <div className='w-full flex items-center justify-between flex-wrap gap-8'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-lg font-bold'>{review.name}</h2>
                  <div className='flex items-center gap-1'>
                    <p className='text-xs'>{review.designation}</p>
                    <span className='font-bold text-3xl -mt-4'>.</span>
                    <p className='text-xs'>{review.date}</p>
                  </div>
                </div>
                <div className='flex flex-wrap gap-3 '>
                  {review.tags.map((tag, index) => (
                    <div
                      key={index}
                      className='bg-[#FE0094] text-black rounded-full font-semibold p-1 px-3'
                    >
                      <p className=''>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className='w-full whitespace-pre-line font-medium'>
                {review.description}
              </p>
            </div>
            <div className='h-full  p-6 px-8 flex flex-col justify-start items-center gap-3'>
              <h3 className='font-semibold text-3xl'>{review.rating}</h3>
              <div className='flex items-center'>
                {Array(Math.ceil(review.rating))
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className='text-3xl text-yellow-500'>
                      &#9733;
                    </span>
                  ))}
                {Array(5 - Math.ceil(review.rating))
                  .fill(0)
                  .map((_, index) => (
                    <span key={index} className='text-3xl text-gray-400'>
                      &#9733;
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showMore && (
        <button
          onClick={handleLoadMore}
          className='flex items-center gap-1 px-6 py-2 bg-[#FE0094] text-white w-fit self-end font-semibold rounded-lg'
        >
          Load More{' '}
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 12.8418L12 18.8418L6 12.8418'
              stroke='#D3D6E4'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M18 5.8418L12 11.8418L6 5.8418'
              stroke='#D3D6E4'
              strokeOpacity='0.35'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default OtherReviews
