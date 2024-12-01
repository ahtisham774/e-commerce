import { Button } from './button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {[1, 2, 3, 4].map((page) => (
        <Button
          key={page}
          variant="ghost"
          size="sm"
          className={`h-8 w-8 ${page === 1 ? 'bg-gray-100' : ''}`}
        >
          {page}
        </Button>
      ))}
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

