import { Switch } from './ui/switch'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { MoreVertical } from 'lucide-react'
import { Checkbox } from './ui/checkbox'

export function ProductList({ products }) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-[auto,2fr,1fr,1fr,1fr,1fr,auto] gap-4 p-4 border-b bg-gray-900 text-white rounded-t-lg">
        <div className="flex items-center">
          <Checkbox />
        </div>
        <div>Product name</div>
        <div>Brand</div>
        <div>Stock</div>
        <div>Sales</div>
        <div>Price</div>
        <div>Status</div>
        <div></div>
      </div>
      
      {products.map((product) => (
        <div 
          key={product.id}
          className="grid grid-cols-[auto,2fr,1fr,1fr,1fr,1fr,auto] gap-4 p-4 border-b items-center hover:bg-gray-50"
        >
          <div>
            <Checkbox />
          </div>
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-medium">{product.name}</span>
          </div>
          <div>{product.brand}</div>
          <div>{product.stock}</div>
          <div>{product.sales}</div>
          <div>${product.price.toFixed(2)}</div>
          <div>
            <Switch checked={product.status} />
          </div>
          <div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

