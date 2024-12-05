import { Search, Grid, List, Plus } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import ProductCard from './components/product-card'
import { Pagination } from './components/ui/pagination'

export default function ProductGrid ({ products }) {
  // Generate 15 products for the grid

  return (
    <div className=' py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
        {products?.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    
    </div>
  )
}
