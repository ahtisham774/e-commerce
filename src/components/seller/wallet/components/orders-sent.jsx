import { Card } from "./ui/card"
import { Button } from "./ui/button"

const orders = [
  {
    id: 1,
    name: "Steven Store",
    time: "2d ago",
    amount: "$582",
  },
  {
    id: 2,
    name: "David Ipnis",
    time: "2d ago",
    amount: "$672",
  },
  // Add more orders as needed
]

export default function OrdersSent() {
  return (
    <Card className="p-6 bg-[#EEDFE2]">
      <h2 className="text-lg font-semibold mb-4">Orders Sent</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C4C4C4] rounded-full" />
              <div>
                <p className="font-medium">{order.name}</p>
                <p className="text-sm text-gray-500">{order.time}</p>
              </div>
            </div>
            <p className="font-medium">{order.amount}</p>
          </div>
        ))}
      </div>
      <Button className="w-full mt-6 bg-[#ED0A8A] hover:bg-pink-600 rounded-xl text-white">
        View More
      </Button>
    </Card>
  )
}

