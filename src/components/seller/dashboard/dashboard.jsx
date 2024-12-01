
import MetricCard from "./components/metric-card"
import PieChartSection from "./components/pie-chart-section"
import OrderChart from "./components/order-chart"
import RevenueChart from "./components/revenue-chart"
import CustomerMap from "./components/customer-map"
import CustomerReview from "./components/customer-review"
import { formatCurrency } from "./utils/format"

export default function SellerDashboard() {
  return (
    <div className="py-6 space-y-6 barlow w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="font-medium">Hi, Samantha. Welcome to your dashboard</p>
        </div>
        <div className="relative">
          <select className="pl-4 pr-8 py-2 border rounded-lg appearance-none bg-white">
            <option>(1 Apr 2021 - 31 Dec 2021)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Orders"
          value="00"
          percent="4"
          isIncreased={true}
          days="30 days"
          className="bg-[#EEDFE2]"
        />
        <MetricCard
          title="Total Delivered"
          value="00"
          percent="4"
          isIncreased={true}
          days="30 days"
         
          className="bg-[#EBFDFF]"
        />
        <MetricCard
          title="Total Cancelled"
          value="00"
          percent="25"
          isIncreased={false}
          days="30 days"
          className="bg-[#EEDFE2]"
        />
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(0)}
         
          percent="12"
          isIncreased={false}
          days="30 days"
          
          className="bg-[#EBFDFF]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartSection />
        <OrderChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <CustomerMap />
      </div>

      <CustomerReview />
    </div>
  )
}

