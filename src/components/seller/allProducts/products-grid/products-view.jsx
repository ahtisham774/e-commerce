'use client'

import { useEffect, useState } from 'react'
import { Search, Grid, List, Plus, MoreVertical } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select } from './components/ui/select'
import { ProductList } from './components/product-list'
import { ProductModal } from './components/product-modal'
import { Pagination } from './components/ui/pagination'
import ProductGrid from '../../products-grid/products'
import { useAuth } from '../../../../context/useAuth'
import { API_URL } from '../../../API'

// const products = [
//   {
//     id: 1,
//     name: 'Watch Nike Series 7',
//     image: '/placeholder.svg?height=40&width=40',
//     brand: 'Apple',
//     category: 'Electronics',
//     stock: 100,
//     sales: 1234,
//     price: 399.00,
//     status: true
//   },
//   {
//     id: 2,
//     name: 'iPhone 13 Pro',
//     image: '/placeholder.svg?height=40&width=40',
//     brand: 'Apple',
//     category: 'Electronics',
//     stock: 2,

//     sales: 500,

//     price: 2999.00,
//     status: true
//   },
//   // Add more products...
// ]

export default function ProductsView () {
  const [view, setView] = useState('list')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      setLoading(true)
      fetch(`${API_URL}/seller/${user._id}/getProducts/${currentPage}`)
        .then(res => res.json())
        .then(data => {
          setDetails(data)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [user, currentPage])

  return (
    <div className='min-h-screen  my-6 w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center gap-4'>
            <Select defaultValue='best-sellers'>
              <option value='best-sellers'>Best sellers</option>
            </Select>
            <Select defaultValue='all'>
              <option value='all'>All Categories</option>
            </Select>
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon' onClick={() => setView('list')}>
              <List
                className={`h-5 w-5 ${view === 'list' ? 'text-pink-500' : ''}`}
              />
            </Button>
            <Button variant='ghost' size='icon' onClick={() => setView('grid')}>
              <Grid
                className={`h-5 w-5 ${view === 'grid' ? 'text-pink-500' : ''}`}
              />
            </Button>
            <Button
              className='!bg-pink-600 hover:bg-pink-600 text-white'
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className='h-4 w-4 mr-2' />
              New Product
            </Button>
          </div>
        </div>

        {loading ? (
          <div className='flex justify-center w-full items-center h-screen'>
            <div className='animate-spin inline-block w-8 h-8 border-4 border-t-[#ed1270] rounded-full'></div>
          </div>
        ) : view === 'list' ? (
          <ProductList products={details?.products} />
        ) : (
          <ProductGrid products={details?.products} />
        )}

        <div className='mt-8 flex justify-between items-center'>
          <p className='text-sm text-gray-500'>
            Showing {details?.totalProducts < 12 ? details?.totalProducts : 12 * currentPage} from {details?.totalProducts || 0} data
          </p>
          <Pagination
            currentPage={details?.currentPage}
            totalPages={details?.totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <ProductModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
