import { Card } from './ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid
} from 'recharts'

const data = [
  { name: 'Sun', value: 60, color: '#ED1270' },
  { name: 'Mon', value: 40, color: '#00FFFF' },
  { name: 'Tue', value: 50, color: '#ED1270' },
  { name: 'Wed', value: 65, color: '#00FFFF' },
  { name: 'Thu', value: 45, color: '#ED1270' },
  { name: 'Fri', value: 55, color: '#00FFFF' },
  { name: 'Sat', value: 40, color: '#ED1270' }
]

export default function CustomerMap () {
  return (
    <Card className='p-6 bg-[#EBFDFF]'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-lg font-semibold'>Customer Map</h2>
        <select className='border rounded-lg px-3 py-1'>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className='h-[300px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis  dataKey='name'
              axisLine={false}
              tickLine={false}
             
             />
            <YAxis 
              axisLine={false}
              tickLine={false}
              
            />
           
            <Tooltip />
            <Bar dataKey='value' barSize={15}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
