import { Card } from './ui/card'
import { Button } from './ui/button'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'
import { ArrowDownToLine } from 'lucide-react'

const data = [
  { name: 'Sunday', value: 30 },
  { name: 'Monday', value: 45 },
  { name: 'Tuesday', value: 35 },
  { name: 'Wednesday', value: 50 },
  { name: 'Thursday', value: 40 },
  { name: 'Friday', value: 48 },
  { name: 'Saturday', value: 42 }
]

export default function OrderChart () {
  return (
    <Card className='p-6 bg-[#EEDFE2]'>
      <div className='flex justify-between flex-col sm:flex-row gap-3 flex-wrap sm:items-center mb-6'>
        <div>
          <h2 className='text-lg font-semibold'>Chart Order</h2>
          <p className='text-sm text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipis
          </p>
        </div>
        <Button variant='outline'>
          <ArrowDownToLine className='mr-2' />
          Download Report
        </Button>
      </div>

      <div className=' h-[300px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 26, bottom: 0 }}>
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#ED1270' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#FFFFFF' stopOpacity={0} />
              </linearGradient>
              
            </defs>
            <XAxis dataKey='name' includeHidden />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='value'
              stroke='#00FFFF'
              strokeWidth={2}
             fill="url(#colorUv)"
             activeDot={{ fill: '#ED1270', strokeWidth: 4, stroke:"#FFF", r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
