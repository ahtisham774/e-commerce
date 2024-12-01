import { Card } from './ui/card'
import { Eye, Edit, Share2, Trash } from 'lucide-react'
import { Button } from './ui/button'

export default function ProductCard({ name, category, image }) {
  return (
    <Card className="bg-pink-50 p-6 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full bg-white shadow-lg mb-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{category}</p>
      
      <div className="flex justify-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white">
          <Eye className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white">
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

