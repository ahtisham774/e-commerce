import { useRef } from 'react'
import CountDown from './countDown'
import Product from './product'
import ShowTitle from './showTitle'
import { GoArrowLeft } from 'react-icons/go'
import Category from './category'

const Categories = () => {
  const time = 312312

  const scrollRef = useRef(null)

  const categories = [
    {
      name: 'Phones',
      image: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_580_459)">
        <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="#ED1270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.6666 7H31.1354" stroke="#00FFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="15.1666" y1="39.8333" x2="40.8333" y2="39.8333" stroke="#00FFFF" stroke-width="2"/>
        </g>
        <defs>
        <clipPath id="clip0_580_459">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
      )
    },
    {
      name: 'Computers',
      image: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_580_476)">
<path d="M46.6667 9.33333H9.33333C8.04467 9.33333 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33333 46.6667 9.33333Z" stroke="#ED1270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3334 46.6667H39.6667" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 37.3333V46.6667" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 37.3333V46.6667" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 32H48" stroke="#01FFFE" stroke-width="2" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_580_476">
<rect width="56" height="56" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      name: 'SmartWatch',
      image: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_580_5163)">
<path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="#ED1270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 42V49H35V42" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 14V7H35V14" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="24" y1="23" x2="24" y2="34" stroke="#01FFFE" stroke-width="2" stroke-linecap="round"/>
<line x1="28" y1="28" x2="28" y2="34" stroke="#01FFFE" stroke-width="2" stroke-linecap="round"/>
<line x1="32" y1="26" x2="32" y2="34" stroke="#01FFFE" stroke-width="2" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_580_5163">
<rect width="56" height="56" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      name: 'Camera',
      image: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_580_496)">
        <path d="M11.6667 16.3333H14C15.2377 16.3333 16.4247 15.8417 17.2998 14.9665C18.175 14.0913 18.6667 12.9043 18.6667 11.6667C18.6667 11.0478 18.9125 10.4543 19.3501 10.0167C19.7877 9.57916 20.3812 9.33333 21 9.33333H35C35.6188 9.33333 36.2123 9.57916 36.6499 10.0167C37.0875 10.4543 37.3333 11.0478 37.3333 11.6667C37.3333 12.9043 37.825 14.0913 38.7002 14.9665C39.5753 15.8417 40.7623 16.3333 42 16.3333H44.3333C45.571 16.3333 46.758 16.825 47.6332 17.7002C48.5083 18.5753 49 19.7623 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2998C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2998C7.49167 44.4247 7 43.2377 7 42V21C7 19.7623 7.49167 18.5753 8.36683 17.7002C9.242 16.825 10.429 16.3333 11.6667 16.3333" stroke="#ED1270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 37.3333C31.866 37.3333 35 34.1993 35 30.3333C35 26.4673 31.866 23.3333 28 23.3333C24.134 23.3333 21 26.4673 21 30.3333C21 34.1993 24.134 37.3333 28 37.3333Z" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_580_496">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
      )
    },
    {
      name: 'HeadPhones',
      image: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_580_435)">
        <path d="M16.3334 30.3333H14C11.4227 30.3333 9.33337 32.4227 9.33337 35V42C9.33337 44.5773 11.4227 46.6667 14 46.6667H16.3334C18.9107 46.6667 21 44.5773 21 42V35C21 32.4227 18.9107 30.3333 16.3334 30.3333Z" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.33337 35V28C9.33337 23.0493 11.3 18.3013 14.8007 14.8007C18.3014 11.3 23.0493 9.33333 28 9.33333C32.9507 9.33333 37.6987 11.3 41.1994 14.8007C44.7 18.3013 46.6667 23.0493 46.6667 28V35" stroke="#ED1270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_580_435">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
      )
    },
    {
      name: 'Gaming',
      image: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_580_507)">
        <path d="M46.6667 14H9.33335C6.75602 14 4.66669 16.0893 4.66669 18.6667V37.3333C4.66669 39.9107 6.75602 42 9.33335 42H46.6667C49.244 42 51.3334 39.9107 51.3334 37.3333V18.6667C51.3334 16.0893 49.244 14 46.6667 14Z" stroke="#ED1270" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 28H23.3333M18.6667 23.3333V32.6667" stroke="#01FFFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35 25.6667V25.6908" stroke="#01FFFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 30.3333V30.3574" stroke="#01FFFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_580_507">
        <rect width="56" height="56" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
      )
    },
    
  ]

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
    <div className='flex flex-col gap-5 w-full '>
      <ShowTitle text='Categories' />
      <div className='flex flex-col items-start md:flex-row md:items-center gap-5 justify-between w-full'>
        <div className='flex'>
          <h1 className='text-4xl font-semibold'>Browse By Category</h1>
        </div>
        <div className='flex items-center gap-3 self-end'>
          <button
            onClick={handleGoBack}
            className='size-12 bg-light-gray text-primary-1 hover:bg-gray-200 transition-all focus:bg-gray-200 rounded-full flex items-center justify-center'
          >
            <GoArrowLeft size={25} />
          </button>
          <button
            onClick={handleGoNext}
            className='size-12 bg-light-gray text-primary-1 rounded-full hover:bg-gray-200 transition-all focus:bg-gray-200 flex items-center justify-center'
          >
            <GoArrowLeft className='-scale-[1]' size={25} />
          </button>
        </div>
      </div>

      <div className='overflow-hidden '>
        <div
          ref={scrollRef}
          className='flex gap-5 overflow-x-auto lg:justify-center shrink-0 snap-x hide-scrollbar'
        >
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>

      <hr />
    </div>
  )
}

export default Categories
