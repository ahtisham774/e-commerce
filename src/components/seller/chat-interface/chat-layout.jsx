import Sidebar from './components/sidebar'
import ChatArea from './components/chat-area'

export default function ChatLayout() {
  return (
    <div className="flex h-screen bg-gray-50 w-full my-6">
      <Sidebar />
      <ChatArea />
    </div>
  )
}

