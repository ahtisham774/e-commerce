import { Search, Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Avatar } from './ui/avatar'
import { ScrollArea } from './ui/scroll-area'

const messages = [
  {
    id: 1,
    name: 'Robert Johanson',
    message: 'Hi David, can you send your...',
    time: '20m ago',
    pinned: true,
    unread: 2,
  },
  {
    id: 2,
    name: 'Chloe Jess',
    message: 'I have done my task last week...',
    time: '1h ago',
    pinned: true,
  },
  {
    id: 3,
    name: 'Roberto',
    message: 'Last week, do you remember?',
    time: '12:34 AM',
  },
  {
    id: 4,
    name: 'Lisa Blakcurent',
    message: 'My boss give me that task last...',
    time: '2 min ago',
  },
  // Add more messages as needed
]

export default function Sidebar() {
  return (
    <div className="w-80 border-r bg-white">
      <div className="p-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search here..." className="pl-8" />
          </div>
          <Button size="icon" className="bg-pink-500 hover:bg-pink-600">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="px-4 py-2">
        <h2 className="text-sm font-semibold text-gray-500">Pinned Message</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-140px)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
          >
            <Avatar>
              <div className="w-10 h-10 rounded-full bg-gray-200" />
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{message.name}</p>
                <p className="text-xs text-gray-500">{message.time}</p>
              </div>
              <p className="text-sm text-gray-500 truncate">{message.message}</p>
            </div>
            {message.unread && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
                {message.unread}
              </span>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

