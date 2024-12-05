import { Search, Grid, List, Plus } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import ProductCard from './components/product-card'
import { Pagination } from './components/ui/pagination'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../../context/useAuth'
import { API_URL } from '../../../API'

export default function Products() {


  const [loading, setLoading] = useState(false)
  const [details,setDetails] = useState(null)
  const {user} = useAuth()

  useEffect(()=>{
    if(user){
        fetch(`${API_URL}/seller/${user._id}/getProducts/1`)
        .then(res => res.json())
        .then(data => {
          
          setDetails(data)
        })
        .catch(err => console.log(err))
    }
  },[user])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-500">Here is your menus summary with graph value</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search here..." 
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <List className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Grid className="h-5 w-5" />
            </Button>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              <Plus className="h-4 w-4 mr-2" />
              New Product
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {details?.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm text-gray-500">Showing 12 from 48 data</p>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

