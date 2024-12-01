import { Phone, MapPin, X } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { OrderTimeline } from './components/order-timeline'
import { OrderItems } from './components/order-items'
import { DeliveryMap } from './components/delivery-map'
import { Avatar } from './components/ui/avatar'
import { Textarea } from './components/ui/textarea'

export default function OrderDetails() {
  return (
    <div className="min-h-screen  my-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6">
        {/* Left Sidebar */}
        <div className="space-y-6">
          <Card>
            <div className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200" />
              </Avatar>
              <h2 className="text-xl font-semibold mb-2">Wahyu Adi Kurniawan</h2>
              <Badge className="bg-pink-500">Customer</Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium">8 The Avenue, London</h3>
            </div>
            <p className="text-sm text-gray-500">EC50 4GN</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">History</h3>
            <OrderTimeline />
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Order ID #5552351</h1>
              <div className="text-sm text-gray-500">/ Order Details</div>
            </div>
            <div className="flex gap-3">
              <Button variant="destructive">
                <X className="w-4 h-4 mr-2" />
                Cancel Order
              </Button>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-white">
                On Delivery
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <OrderItems />

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Message</h3>
            <Textarea
              placeholder="Type your message here..."
              className="min-h-[100px]"
            />
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Track Orders</h3>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
            </div>
            <DeliveryMap />
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Delivery by</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                </Avatar>
                <div>
                  <h4 className="font-medium">Kevin Hobs Jr.</h4>
                  <p className="text-sm text-gray-500">ID: 485965</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2">
                  <Phone className="w-4 h-4" />
                  +12 345 6562 66
                </Button>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Delivery Time</div>
                  <div className="font-medium">12:52</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

