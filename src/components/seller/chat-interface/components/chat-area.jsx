import { Bell, Search, Clock, MoreVertical } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar } from './ui/avatar'
import { Textarea } from './ui/textarea'
import { Toolbar } from './ui/toolbar'

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-between border-b px-6 py-4 bg-white">
        <div className="flex items-center gap-3">
          <Avatar>
            <div className="w-10 h-10 rounded-full bg-pink-500" />
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Roberto</h2>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Clock className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <div className="max-w-lg">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
          </div>

          <div className="max-w-lg ml-auto">
            <div className="bg-pink-50 rounded-lg p-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-right">10:35 AM</p>
          </div>
        </div>
      </div>

      <div className="border-t p-4 bg-white">
        <Toolbar />
        <Textarea
          placeholder="Write your message here..."
          className="mt-2"
          rows={3}
        />
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-pink-500 hover:bg-pink-600">Send</Button>
        </div>
      </div>
    </div>
  )
}

