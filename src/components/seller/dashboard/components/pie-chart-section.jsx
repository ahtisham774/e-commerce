
import { Card } from "./ui/card"
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

const COLORS = ['#ED1270', '#FF5B5B26']
const CYAN_COLORS = ['#00FFFF', '#EEDFE2']
const GRAY_COLORS = ['#3e4444', '#0000007A']

export default function PieChartSection() {
  return (
    <Card className="p-6 bg-[#EBFDFF]">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div className="text-center relative">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={45}
                outerRadius={85}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2 font-semibold text-[#464255]">Total Order</p>
          <p className="text-xl font-bold absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-full">81%</p>
        </div>

        <div className="text-center relative ">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={customerData}
                innerRadius={45}
                outerRadius={85}
                paddingAngle={0}
                dataKey="value"
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CYAN_COLORS[index % CYAN_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2 font-semibold text-[#464255]">Customer Growth</p>
          <p className="text-xl font-bold absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-full">22%</p>
        </div>

        <div className="text-center relative col-span-full 2xl:col-span-1">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={revenueData}
                innerRadius={45}
                outerRadius={85}
                paddingAngle={0}
                dataKey="value"
              >
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GRAY_COLORS[index % GRAY_COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2 font-semibold text-[#464255]">Total Revenue</p>
          <p className="text-xl font-bold absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-full">62%</p>
        </div>
      </div>
    </Card>
  )
}

