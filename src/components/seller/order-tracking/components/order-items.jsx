import { Card } from './ui/card'
import { X } from 'lucide-react'

export function OrderItems() {
  const items = [
    {
      id: 1,
      image: '/placeholder.svg?height=60&width=60',
      title: 'Title - Description',
      qty: '1x',
      price: '$10.8',
      total: '$50.8',
    },
    {
      id: 2,
      image: '/placeholder.svg?height=60&width=60',
      title: 'Title - Description',
      qty: '1x',
      price: '$5.79',
      total: '$20.8',
    },
  ]

  return (
    <Card>
      <div className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 p-4 bg-black text-white rounded-t-lg">
        <div>Items</div>
        <div>Qty</div>
        <div>Price</div>
        <div>Total Price</div>
        <div></div>
      </div>
      <div className="divide-y">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[2fr,1fr,1fr,1fr,auto] gap-4 p-4 items-center"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-lg bg-gray-100"
              />
              <span>{item.title}</span>
            </div>
            <div>{item.qty}</div>
            <div>{item.price}</div>
            <div className="text-pink-500">{item.total}</div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  )
}

