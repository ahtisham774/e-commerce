'use client'

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Total Order', value: 81 },
  { name: 'Remaining', value: 19 },
]

const customerData = [
  { name: 'Growth', value: 22 },
  { name: 'Remaining', value: 78 },
]

const revenueData = [
  { name: 'Revenue', value: 62 },
  { name: 'Remaining', value: 38 },
]

const COLORS = ['#FF1493', '#F3F4F6']
const CYAN_COLORS = ['#00CED1', '#F3F4F6']
const GRAY_COLORS = ['#4A5568', '#F3F4F6']

export default function PieChartSection() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Pie Chart</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Chart
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Show Value
          </label>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2">Total Order</p>
          <p className="text-xl font-bold">81%</p>
        </div>

        <div className="text-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={customerData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CYAN_COLORS[index % CYAN_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2">Customer Growth</p>
          <p className="text-xl font-bold">22%</p>
        </div>

        <div className="text-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={revenueData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GRAY_COLORS[index % GRAY_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2">Total Revenue</p>
          <p className="text-xl font-bold">62%</p>
        </div>
      </div>
    </Card>
  )
}

