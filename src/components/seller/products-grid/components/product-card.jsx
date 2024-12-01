import { Card } from './ui/card'
import { Eye, Edit, Share2, Trash, CirclePlus } from 'lucide-react'
import { Button } from './ui/button'

export default function ProductCard ({ name, category, image }) {
  return (
    <Card className='!bg-[#EEDFE2] p-6 flex flex-col items-center h-fit '>
      <div className='w-32 h-32 -translate-y-1/2 rounded-full bg-[#EBFDFF] shadow-lg overflow-hidden'>
        <img src={image} className='w-full h-full object-cover' />
      </div>

      <h3 className='font-bold text-gray-900 mb-4'>{name}</h3>
      <p className='text-sm text-gray-500 mb-4'>{category}</p>

      <div className='flex justify-center gap-2'>
        <div className='flex flex-col items-center gap-1'>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 bg-[#000000] hover:bg-[#000000ad] text-[#00FFFF]'
          >
            <Eye className='h-4 w-4' />
          </Button>
          <span className='text-[10px] text-[#5E6C93]'>View</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 bg-[#000000] hover:bg-[#000000ad] text-[#00FFFF]'
          >
            <Edit className='h-4 w-4' />
          </Button>
          <span className='text-[10px] text-[#5E6C93]'>Edit</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 bg-[#000000] hover:bg-[#000000ad] text-[#00FFFF]'
          >
            <Trash className='h-4 w-4' />
          </Button>
          <span className='text-[10px] text-[#5E6C93]'>Delete</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 bg-[#000000] hover:bg-[#000000ad] text-[#00FFFF]'
          >
            <CirclePlus className='h-4 w-4' />
          </Button>
          <span className='text-[10px] text-[#5E6C93]'>Duplicate</span>
        </div>
      </div>
    </Card>
  )
}
