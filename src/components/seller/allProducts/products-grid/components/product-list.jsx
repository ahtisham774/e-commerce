import { Switch } from './ui/switch'

import { Button } from './ui/button'
import { MoreHorizontal, MoreVertical } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../../../ui/dropdown-menu'

export function ProductList ({ products }) {
  return (
    <div className='bg-white rounded-lg shadow'>
      <div className='grid grid-cols-[auto,2fr,1fr,1fr,1fr,1fr,auto] gap-4 p-4 border-b bg-gray-900 text-white rounded-t-lg'>
        <div className='flex items-center'>
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

      {products?.map(product => (
        <div
          key={product.id}
          className='grid grid-cols-[auto,2fr,1fr,1fr,1fr,1fr,auto,auto] gap-4 p-4 border-b items-center hover:bg-gray-50'
        >
          <div>
            <Checkbox />
          </div>
          <div className='flex items-center gap-3'>
            <img
              src={product.image}
              alt={product?.productName}
              className='w-10 h-10 rounded-lg bg-gray-200 object-cover'
            />
            <span className='font-medium'>{product.productName}</span>
          </div>
          <div>{product?.brand}</div>
          <div>{product?.stock || 0}</div>
          <div>{product?.sales || 0}</div>
          <div>${product.price.toFixed(2)}</div>
          <div>
            <Switch checked={product.status} />
          </div>
          <div >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='h-8 w-8 p-0 !text-black'>
                  <MoreVertical className='h-4 w-4 !text-black'  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem
                
                >
                  <div className='flex items-center gap-2'>View Details</div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className='flex items-center gap-2'>Edit</div>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-destructive'>
                  <div className='flex items-center gap-2'>Delete</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}
