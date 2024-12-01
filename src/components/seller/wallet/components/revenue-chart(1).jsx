'use client'

import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value2020: 20, value2021: 30 },
  { name: 'Feb', value2020: 25, value2021: 25 },
  { name: 'Mar', value2020: 35, value2021: 40 },
  { name: 'Apr', value2020: 30, value2021: 45 },
  { name: 'May', value2020: 40, value2021: 35 },
  { name: 'Jun', value2020: 35, value2021: 30 },
  { name: 'Jul', value2020: 45, value2021: 40 },
  { name: 'Aug', value2020: 40, value2021: 35 },
  { name: 'Sep', value2020: 35, value2021: 45 },
  { name: 'Oct', value2020: 45, value2021: 40 },
  { name: 'Nov', value2020: 40, value2021: 35 },
  { name: 'Dec', value2020: 35, value2021: 45 },
]

export default function RevenueChart() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Total Revenue</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
            <span className="text-sm">2020</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
            <span className="text-sm">2021</span>
          </div>
        </div>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="value2020" 
              stroke="#FF1493" 
              fill="#FF1493" 
              fillOpacity={0.2} 
            />
            <Area 
              type="monotone" 
              dataKey="value2021" 
              stroke="#00CED1" 
              fill="#00CED1" 
              fillOpacity={0.2} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

