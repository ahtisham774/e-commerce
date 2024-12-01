import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight, Paperclip, Image } from 'lucide-react'
import { Button } from './button'

export function Toolbar() {
  return (
    <div className="flex items-center gap-1 border rounded-lg p-1">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Underline className="h-4 w-4" />
      </Button>
      <div className="w-px h-6 bg-gray-200" />
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <List className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <AlignRight className="h-4 w-4" />
      </Button>
      <div className="flex-1" />
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Paperclip className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Image className="h-4 w-4" />
      </Button>
    </div>
  )
}

