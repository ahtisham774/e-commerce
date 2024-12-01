export function OrderTimeline() {
  const timeline = [
    {
      status: 'Order Delivered',
      time: null,
      color: 'bg-green-500',
    },
    {
      status: 'On Delivery',
      time: 'Sat, 23 Jul 2020, 01:24 PM',
      color: 'bg-black',
    },
    {
      status: 'Payment Success',
      time: 'Fri, 22 Jul 2020, 03:44 AM',
      color: 'bg-black',
    },
    {
      status: 'Order Created',
      time: 'Thu, 21 Jul 2020, 11:48 AM',
      color: 'bg-black',
    },
  ]

  return (
    <div className="relative">
      {timeline.map((item, index) => (
        <div key={index} className="flex gap-3 mb-6 last:mb-0">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${item.color}`} />
            {index !== timeline.length - 1 && (
              <div className="absolute top-3 left-1.5 w-[1px] h-[calc(100%+12px)] bg-gray-200" />
            )}
          </div>
          <div>
            <div className="font-medium">{item.status}</div>
            {item.time && (
              <div className="text-sm text-gray-500">{item.time}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

