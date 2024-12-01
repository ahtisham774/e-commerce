import { HiMiniArrowSmallDown } from 'react-icons/hi2'
import { Card } from './ui/card'

export default function MetricCard ({
  title,
  value,
  percent,
  isIncreased,
  days,
  className
}) {
  return (
    <Card className={`p-6 ${className} `}>
      <p className='text-3xl font-bold '>{value}</p>
      <div className=' flex flex-col gap-1 items-baseline'>
        <h3 className='text-sm text-gray-600'>{title}</h3>
        <span className=' text-xs text-gray-500 flex items-center gap-2'>
         
          <span className='size-3 rounded-full shrink-0 flex items-center justify-center bg-[#BDBDBD] text-[#333333]'>
            <HiMiniArrowSmallDown
              size={10}
              className={isIncreased ? 'rotate-180' : 'rotate-0' }
            />
          </span>{' '}
          {percent}%
          ({days})
        </span>
      </div>
    </Card>
  )
}
