import { Card } from './ui/card'
import {
  LineChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  Text
} from 'recharts'

const data = [
  { name: 'Jan', value2020: 10000, value2021: 30000 },
  { name: 'Feb', value2020: 25333, value2021: 25000 },
  { name: 'Mar', value2020: 35444, value2021: 40000 },
  { name: 'Apr', value2020: 30231, value2021: 45000 },
  { name: 'May', value2020: 40000, value2021: 60201 },
  { name: 'Jun', value2020: 6120, value2021: 30000 },
  { name: 'Jul', value2020: 45000, value2021: 40000 },
  { name: 'Aug', value2020: 40000, value2021: 3000 },
  { name: 'Sep', value2020: 35000, value2021: 45000 },
  { name: 'Oct', value2020: 4500, value2021: 60000 },
  { name: 'Nov', value2020: 40000, value2021: 35000 },
  { name: 'Dec', value2020: 35000, value2021: 45000 }
]

const customTick = tickObject => {
  console.log(tickObject)
  const {
    payload: { value }
  } = tickObject

  tickObject['fill'] = '#000'

  return (
    <Text {...tickObject} style={{ fontSize: 12, fontWeight: 700 }}>
      {`$${value / 1000 > 0 ? value / 1000 + 'k' : value}`}
    </Text>
  )
}

export default function RevenueChart () {
  return (
    <Card className='p-6 bg-[#EEDFE2]'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-lg font-semibold'>Total Revenue</h2>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center'>
            <div className='w-3 h-3 bg-pink-500 rounded-full mr-2'></div>
            <span className='text-sm'>2020</span>
          </div>
          <div className='flex items-center'>
            <div className='w-3 h-3 bg-cyan-500 rounded-full mr-2'></div>
            <span className='text-sm'>2021</span>
          </div>
        </div>
      </div>

      <div className='h-[300px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis axisLine={false} dataKey='name' />
            <YAxis
              axisLine={false}
              tick={tickObj => customTick(tickObj)}
            ></YAxis>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className='bg-white p-2 rounded-lg shadow-md'>
                      <h3 className='text-lg font-semibold'>
                        {payload[0].payload.name}
                      </h3>
                      <p className='text-sm font-semibold'>
                        2020: ${payload[0].payload.value2020}
                      </p>
                      <p className='text-sm font-semibold'>
                        2021: ${payload[0].payload.value2021}
                      </p>
                    </div>
                  )
                }
              }}
              formatter={(value, name, props) => {
                return `$${value}`
              }}
              contentStyle={{
                background: '#ED1270',
                color: '#333333',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
              }}
            />
            <CartesianGrid stroke='#F3F2F7' horizontal={false} />
            <Line
              type='monotone'
              dataKey='value2020'
              stroke='#ED1270'
              strokeWidth={2}
              dot={{ r: 0 }}
              activeDot={{ r: 8, fill: '#4F4F4F', strokeWidth: 4 }}
            />
            <Line
              type='monotone'
              dataKey='value2021'
              stroke='#00FFFF'
              dot={{ r: 0 }}
              strokeWidth={2}
              activeDot={{ r: 8, fill: '#BDBDBD', strokeWidth: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
