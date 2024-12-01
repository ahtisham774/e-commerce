import { Card } from "@/components/ui/card"

export default function MetricCard({ title, value, subtext, className }) {
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-sm text-gray-600">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold">{value}</p>
        <span className="ml-2 text-xs text-gray-500">{subtext}</span>
      </div>
    </Card>
  )
}

