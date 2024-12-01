import { SlidersHorizontal } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui/select'
import { useState } from 'react'
import ShowReviews from '../../../utils/showReviews'
import OtherReviews from './otherReviews'

const Reviews = () => {
  const [dateFilter, setDateFilter] = useState('today')
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
      <div className='flex justify-between items-center '>
        <div>
          <h1 className='text-2xl font-bold'>Reviews</h1>
          <p className='text-muted-foreground'>Customer Reviews</p>
        </div>
        <div className='flex gap-4'>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className='w-[180px]'>
              <SlidersHorizontal className='mr-2 mt-1 h-4 w-4' />

              <SelectValue placeholder='Filter Periode' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all' handleSelect={setDateFilter}>
                All Time
              </SelectItem>
              <SelectItem value='today' handleSelect={setDateFilter}>
                Today
              </SelectItem>
              <SelectItem value='week' handleSelect={setDateFilter}>
                This Week
              </SelectItem>
              <SelectItem value='month' handleSelect={setDateFilter}>
                This Month
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <ShowReviews data={customers} />
      <OtherReviews />
    </div>
  )
}

export default Reviews
