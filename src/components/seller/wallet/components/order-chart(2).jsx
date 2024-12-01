'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Sunday', value: 30 },
  { name: 'Monday', value: 45 },
  { name: 'Tuesday', value: 35 },
  { name: 'Wednesday', value: 50 },
  { name: 'Thursday', value: 40 },
  { name: 'Friday', value: 48 },
  { name: 'Saturday', value: 42 },
]

export default function OrderChart() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Chart Order</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <Button variant="outline">Download Report</Button>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#FF1493" 
              strokeWidth={2}
              dot={{ fill: '#FF1493', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

