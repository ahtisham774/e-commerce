import { Card } from "./ui/card"
import { DonutChart } from "./charts/donut-chart"
import { LineChart } from "./charts/line-chart"

export default function MainBalance() {
  const earningData = [
    { name: "Income", value: 30, color: "#FF1493" },
    { name: "Expenses", value: 40, color: "#00F5FF" },
    { name: "Unknown", value: 10, color: "#A3A3A3" },
  ]

  const weeklyData = [
    { day: "Sun", value: 30, value2: 20 },
    { day: "Mon", value: 45,  value2: 35 },
    { day: "Tue", value: 35,  value2: 25},
    { day: "Wed", value: 50,  value2: 40},
    { day: "Thu", value: 40,  value2: 30},
    { day: "Fri", value: 45,  value2: 35},
    { day: "Sat", value: 35,  value2: 25},
  ]

  return (
    <Card className="p-6 px-10 h-full flex flex-col justify-center bg-[#EEDFE2]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-sm font-medium text-[#ED0A8A]">Main Balance</h2>
          <p className="text-3xl font-bold mt-1">$673,412.66</p>
        </div>
        <div className="flex items-center font-bold gap-8">
          <div className="text-right">
            <div className="text-sm text-[#ED0A8A]">VALID THRU</div>
            <div>08/21</div>
          </div>
          <div>
          <div className="text-sm text-[#ED0A8A]">CARD HOLDER</div>
          <div>Samantha Anderson</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-[#ED0A8A]">CARD NUMBER</div>
          <div>**** **** **** 1234</div>
        </div>
        </div>
      </div>
      
     

      <div className="flex gap-6 w-full h-full">
        <div className="flex items-center flex-1">
          <DonutChart data={earningData} />
        </div>
        <div className="flex-1">
          <LineChart data={weeklyData} />
        </div>
      </div>
    </Card>
  )
}

