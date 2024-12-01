'use client'

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Sun', value: 60 },
  { name: 'Sun', value: 40 },
  { name: 'Sun', value: 50 },
  { name: 'Sun', value: 65 },
  { name: 'Sun', value: 45 },
  { name: 'Sun', value: 55 },
  { name: 'Sun', value: 40 },
]

export default function CustomerMap() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Customer Map</h2>
        <select className="border rounded-lg px-3 py-1">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00CED1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

