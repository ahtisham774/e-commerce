'use client'

import { useState } from 'react'
import { Search, Grid, List, Plus, MoreVertical } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select } from './components/ui/select'
import { ProductList } from './components/product-list'
import { ProductGrid } from './components/product-grid'
import { ProductModal } from './components/product-modal'
import { Pagination } from './components/ui/pagination'

const products = [
  {
    id: 1,
    name: 'Watch Nike Series 7',
    image: '/placeholder.svg?height=40&width=40',
    brand: 'Apple',
    stock: 100,
    sales: 1234,
    price: 399.00,
    status: true
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    image: '/placeholder.svg?height=40&width=40',
    brand: 'Apple',
    stock: 2,
    sales: 500,
    price: 2999.00,
    status: true
  },
  // Add more products...
]

export default function ProductsView() {
  const [view, setView] = useState('list')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Select defaultValue="best-sellers">
              <option value="best-sellers">Best sellers</option>
            </Select>
            <Select defaultValue="all">
              <option value="all">All Categories</option>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setView('list')}>
              <List className={`h-5 w-5 ${view === 'list' ? 'text-pink-500' : ''}`} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setView('grid')}>
              <Grid className={`h-5 w-5 ${view === 'grid' ? 'text-pink-500' : ''}`} />
            </Button>
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Product
            </Button>
          </div>
        </div>

        {view === 'list' ? (
          <ProductList products={products} />
        ) : (
          <ProductGrid products={products} />
        )}

        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm text-gray-500">Showing 12 from 48 data</p>
          <Pagination />
        </div>
      </div>

      <ProductModal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

