import { Button } from './button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination({currentPage, totalPages, onPageChange}) {


  const handlePageChange = (page) => {
    onPageChange(page)
  }






  return (
    <div className="flex items-center gap-2">
      <Button 
      onClick={() => currentPage > 1 &&  handlePageChange(currentPage - 1)}
      variant="ghost" size="icon" className="h-8 w-8">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {
        Array.from({length: totalPages}, (_, i) => i + 1)
      .map((page) => (
        <Button
          key={page}
          variant="ghost"
          onClick={() => handlePageChange(page)}
          size="sm"
          className={`h-8 w-8 ${page === 1 ? 'bg-gray-100' : ''}`}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
       variant="ghost" size="icon" className="h-8 w-8">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

