'use client'

import { Card } from "@/components/ui/card"
import MetricCard from "./components/metric-card"
import PieChartSection from "./components/pie-chart-section"
import OrderChart from "./components/order-chart"
import RevenueChart from "./components/revenue-chart"
import CustomerMap from "./components/customer-map"
import CustomerReview from "./components/customer-review"
import { formatCurrency } from "./utils/format"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
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
          subtext="(+15% this week)"
          className="bg-pink-50"
        />
        <MetricCard
          title="Total Delivered"
          value="00"
          subtext="(+12% this week)"
          className="bg-cyan-50"
        />
        <MetricCard
          title="Total Cancelled"
          value="00"
          subtext="(+11% this week)"
          className="bg-pink-50"
        />
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(0)}
          subtext="(+12% this week)"
          className="bg-cyan-50"
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

