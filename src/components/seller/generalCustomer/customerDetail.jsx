import { Search, Star } from 'lucide-react'
import ShowTitle from '../../buyer/showTitle'
import CustomerCard from '../../landingPage/customerCard'
import { useRef } from 'react'
import ShowReviews from '../../../utils/showReviews'

const CustomerDetail = () => {
  const customersToShow = 3
 
  const customers = [
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr. 1',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    },
    {
      name: 'Roberto Jr.',
      role: 'Graphic Design',
      img: '/assets/profile.png',
      heading: 'Lorem ipsum dolor sit amet',
      subHeading: 'Subheading',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4.5
    }
  ]

  

  return (
    <div className='py-6 w-full flex flex-col gap-8'>
      <div className='flex justify-between items-center mb-6'>
        <div className='flex flex-col flex-1'>
          <h1 className='text-2xl font-bold'>Customer Details</h1>
          <p className='text-muted-foreground'>
            Here is your products summary with graph view
          </p>
        </div>
        <div className='flex gap-4 w-full flex-1'>
          <div className='flex items-center bg-white p-2 px-3 w-full relative rounded-lg shadow-sm gap-2'>
            <Search className='scale-x-[-1] size-5 text-[#828282] absolute' />
            <input
              type='search'
              placeholder='Search'
              className='bg-transparent border-none w-full pl-8 text-sm text-[#828282] focus:outline-none'
            />
          </div>
          <button className='p-4 bg-white rounded-lg'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M3 9.75H21V14.25H3V9.75Z' fill='#C2C2C2' />
              <path
                d='M3 19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V15.75H3V19.5Z'
                fill='#C2C2C2'
              />
              <path
                d='M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V8.25H21V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3Z'
                fill='#C2C2C2'
              />
            </svg>
          </button>
          <button className='p-4 bg-white rounded-lg'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 2H5C3.34315 2 2 3.34315 2 5V8C2 9.65685 3.34315 11 5 11H8C9.65685 11 11 9.65685 11 8V5C11 3.34315 9.65685 2 8 2Z'
                fill='#828282'
              />
              <path
                d='M19 2H16C14.3431 2 13 3.34315 13 5V8C13 9.65685 14.3431 11 16 11H19C20.6569 11 22 9.65685 22 8V5C22 3.34315 20.6569 2 19 2Z'
                fill='#828282'
              />
              <path
                d='M8 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H8C9.65685 22 11 20.6569 11 19V16C11 14.3431 9.65685 13 8 13Z'
                fill='#828282'
              />
              <path
                d='M19 13H16C14.3431 13 13 14.3431 13 16V19C13 20.6569 14.3431 22 16 22H19C20.6569 22 22 20.6569 22 19V16C22 14.3431 20.6569 13 19 13Z'
                fill='#828282'
              />
            </svg>
          </button>
          <button className='flex items-center gap-2 px-4 py-3 bg-primary-1 font-bold text-white whitespace-nowrap rounded-lg'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.1573 13.3281H7.8173C6.27166 13.33 4.78985 13.9448 3.69692 15.0377C2.60398 16.1307 1.98916 17.6125 1.9873 19.1581V20.9381C1.9873 21.0707 2.03998 21.1979 2.13375 21.2917C2.22752 21.3854 2.3547 21.4381 2.4873 21.4381H18.4873C18.6199 21.4381 18.7471 21.3854 18.8409 21.2917C18.9346 21.1979 18.9873 21.0707 18.9873 20.9381V19.1581C18.9857 17.6124 18.371 16.1304 17.278 15.0374C16.185 13.9445 14.703 13.3297 13.1573 13.3281Z'
                fill='white'
              />
              <path
                d='M10.4868 11.4385C12.9721 11.4385 14.9868 9.42376 14.9868 6.93848C14.9868 4.4532 12.9721 2.43848 10.4868 2.43848C8.00154 2.43848 5.98682 4.4532 5.98682 6.93848C5.98682 9.42376 8.00154 11.4385 10.4868 11.4385Z'
                fill='white'
              />
              <path
                d='M21 10H19.5V8.5C19.5 8.23478 19.3946 7.98043 19.2071 7.79289C19.0196 7.60536 18.7652 7.5 18.5 7.5C18.2348 7.5 17.9804 7.60536 17.7929 7.79289C17.6054 7.98043 17.5 8.23478 17.5 8.5V10H16C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11C15 11.2652 15.1054 11.5196 15.2929 11.7071C15.4804 11.8946 15.7348 12 16 12H17.5V13.5C17.5 13.7652 17.6054 14.0196 17.7929 14.2071C17.9804 14.3946 18.2348 14.5 18.5 14.5C18.7652 14.5 19.0196 14.3946 19.2071 14.2071C19.3946 14.0196 19.5 13.7652 19.5 13.5V12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10Z'
                fill='white'
              />
            </svg>
            New Product
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-[35%_62%] w-full gap-8'>
        <div className='flex flex-col bg-black p-4 items-center justify-center gap-8 flex-1 rounded'>
          <div className='shrink-0 size-24 rounded-full bg-[#EBFDFF]'></div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-5'>
              <div className='flex items-center gap-1'>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className={`w-4 h-4 text-[#FFAD33] fill-[#FFAD33]`}
                  />
                ))}
              </div>
              <span className='ml-2 text-sm text-white opacity-60'>
                (150 Reviews)
              </span>
            </div>
            <div className='flex flex-col sm:flex-row gap-5 w-full'>
              <button className='px-6 py-2 flex-1 whitespace-nowrap bg-primary-1 text-white font-bold rounded'>
                Send Message
              </button>
              <button className='px-6 py-2 flex-1 whitespace-nowrap bg-white font-bold rounded'>
                Block/Report
              </button>
            </div>
            <div className='flex flex-col gap-2 text-[10px] font-semibold text-white w-full px-6 items-center justify-center'>
              <div className='flex items-center justify-between flex-wrap gap-3 w-full'>
                <p>Location</p>
                <p>Canada</p>
              </div>
              <div className='flex items-center justify-between flex-wrap gap-3 w-full'>
                <p>Average Response Time</p>
                <p>24 hours</p>
              </div>
              <div className='flex items-center justify-between flex-wrap gap-3 w-full'>
                <p>Orders placed in last 30 days</p>
                <p>12</p>
              </div>
            </div>
            <div className='flex flex-col px-6 mt-4 font-semibold text-white gap-3 w-full'>
              <p>About Me</p>
              <p className='font-normal text-justify'>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-[#EBFDFF] rounded'></div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <ShowTitle text='Reviews Given' />
       <ShowReviews data={customers} />
      </div>
    </div>
  )
}

export default CustomerDetail
