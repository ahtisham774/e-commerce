import { useState, useMemo } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../../components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../../components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../../components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../../../components/ui/pagination'
import { Button } from '../../../components/ui/button'
import { Badge } from '../../../components/ui/badge'
import {
  Calendar,
  ChevronDown,
  CircleCheckBig,
  CircleX,
  File,
  MoreHorizontal
} from 'lucide-react'
import { formatCurrency, formatDate } from '../../../utils/format'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

// Sample data
const orders = [
  {
    id: '#555231',
    date: '2020-03-26T12:42:00',
    customerName: 'Mikasa Ackerman',
    location: 'Corner Street 5th London',
    amount: 164.52,
    status: 'New Order'
  },
  {
    id: '#555232',
    date: '2020-03-26T11:42:00',
    customerName: 'Eren Yeager',
    location: "John's Road London 671",
    amount: 184.52,
    status: 'On Delivery'
  },
  {
    id: '#555233',
    date: '2020-03-26T12:22:00',
    customerName: 'Grisha Yeager',
    location: '31 The Green London',
    amount: 364.52,
    status: 'Delivered'
  },
  {
    id: '#555234',
    date: '2020-03-26T10:42:00',
    customerName: 'Historia Reuss',
    location: '11 Church Road London',
    amount: 184.52,
    status: 'New Order'
  },
  {
    id: '#555235',
    date: '2020-03-26T12:00:00',
    customerName: 'Levi Ackerman',
    location: '21 King Street London',
    amount: 564.52,
    status: 'On Delivery'
  },
  {
    id: '#555236',
    date: '2020-03-26T13:42:00',
    customerName: 'Armin Melaney',
    location: '14 The Drive London',
    amount: 166.52,
    status: 'New Order'
  },
  {
    id: '#555237',
    date: '2020-03-26T14:42:00',
    customerName: 'Ronald Jamez',
    location: "69 Station's Road London",
    amount: 164.0,
    status: 'New Order'
  },
  {
    id: '#555238',
    date: '2020-03-26T15:42:00',
    customerName: 'Anandreansyah',
    location: '45 Brighton Hills London',
    amount: 164.02,
    status: 'Delivered'
  },
  {
    id: '#555239',
    date: '2020-03-26T16:42:00',
    customerName: 'Putra Prawira',
    location: '15 Leicester Street Road',
    amount: 164.6,
    status: 'On Delivery'
  },
  {
    id: '#555310',
    date: '2020-03-26T18:42:00',
    customerName: 'John Snow',
    location: '7th The Avenue Apartment',
    amount: 164.42,
    status: 'New Order'
  },
  {
    id: '#555311',
    date: '2020-03-26T21:42:00',
    customerName: 'Snowden Spy',
    location: '72 Manchester Street',
    amount: 344.52,
    status: 'Delivered'
  },
  {
    id: '#555312',
    date: '2020-03-26T22:42:00',
    customerName: 'John Wickerman',
    location: '12 Chelsea Road London',
    amount: 74.55,
    status: 'On Delivery'
  }
]

export default function OrdersList () {
  const [status, setStatus] = useState('all')
  const [dateFilter, setDateFilter] = useState('today')
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc'
  })

  const itemsPerPage = 12

  // Filter orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const statusMatch = status === 'all' ? true : order.status === status
      const dateMatch =
        dateFilter === 'all'
          ? true
          : new Date(order.date).toDateString() === new Date().toDateString()
      return statusMatch || dateMatch
    })
  }, [status, dateFilter])

  // Sort orders
  const sortedOrders = useMemo(() => {
    return [...filteredOrders].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredOrders, sortConfig])

  // Paginate orders
  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return sortedOrders.slice(start, end)
  }, [sortedOrders, currentPage])

  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage)

  const handleSort = key => {
    console.log('Sort by', key)
    setSortConfig(current => ({
      key,
      direction:
        current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const getStatusBadge = status => {
    const variants = {
      'New Order': '#FE00946B',
      'On Delivery': '#00FFFF6B',
      Delivered: '#4EBC1A6B'
    }
    return <Badge variant={variants[status]}>{status}</Badge>
  }

  return (
    <div className='py-6 w-full'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-2xl font-bold'>Your Orders</h1>
          <p className='text-muted-foreground'>This is your order list data</p>
        </div>
        <div className='flex gap-4'>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='All Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all' handleSelect={setStatus}>
                All Status
              </SelectItem>
              <SelectItem value='New Order' handleSelect={setStatus}>
                New Order
              </SelectItem>
              <SelectItem value='On Delivery' handleSelect={setStatus}>
                On Delivery
              </SelectItem>
              <SelectItem value='Delivered' handleSelect={setStatus}>
                Delivered
              </SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className='w-[180px]'>
              <Calendar className='mr-2 h-4 w-4' />
              <SelectValue placeholder='Today' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all' handleSelect={setDateFilter}>
                All Time
              </SelectItem>
              <SelectItem value='today' handleSelect={setDateFilter}>
                Today
              </SelectItem>
              <SelectItem value='week' handleSelect={setDateFilter}>
                This Week
              </SelectItem>
              <SelectItem value='month' handleSelect={setDateFilter}>
                This Month
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='overflow-x-auto scroll-smooth scroll-hidden'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort('id')}>
                <div className='flex items-center gap-1'>
                  Order ID{' '}
                  <div className='flex flex-col'>
                    <IoMdArrowDropup
                      className={`size-4
                        ${
                          sortConfig.key == 'id' &&
                          sortConfig.direction === 'asc'
                            ? 'opacity-100'
                            : 'opacity-50'
                        }
                        `}
                    />
                    <IoMdArrowDropdown
                      className={`size-4 -mt-2.5 ${
                        sortConfig.key == 'id' &&
                        sortConfig.direction === 'desc'
                          ? 'opacity-100'
                          : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('date')}>
                <div className='flex items-center gap-1'>
                  Date{' '}
                  <div className='flex flex-col'>
                    <IoMdArrowDropup
                      className={`size-4
                        ${
                          sortConfig.key == 'date' &&
                          sortConfig.direction === 'asc'
                            ? 'opacity-100'
                            : 'opacity-50'
                        }
                        `}
                    />
                    <IoMdArrowDropdown
                      className={`size-4 -mt-2.5 ${
                        sortConfig.key == 'date' &&
                        sortConfig.direction === 'desc'
                          ? 'opacity-100'
                          : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('customerName')}>
                <div className='flex items-center gap-1'>
                  Customer Name{' '}
                  <div className='flex flex-col'>
                    <IoMdArrowDropup
                      className={`size-4
                        ${
                          sortConfig.key == 'customerName' &&
                          sortConfig.direction === 'asc'
                            ? 'opacity-100'
                            : 'opacity-50'
                        }
                        `}
                    />
                    <IoMdArrowDropdown
                      className={`size-4 -mt-2.5 ${
                        sortConfig.key == 'customerName' &&
                        sortConfig.direction === 'desc'
                          ? 'opacity-100'
                          : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('location')}>
                <div className='flex items-center gap-1'>
                  Location{' '}
                  <div className='flex flex-col'>
                    <IoMdArrowDropup
                      className={`size-4
                        ${
                          sortConfig.key == 'location' &&
                          sortConfig.direction === 'asc'
                            ? 'opacity-100'
                            : 'opacity-50'
                        }
                        `}
                    />
                    <IoMdArrowDropdown
                      className={`size-4 -mt-2.5 ${
                        sortConfig.key == 'location' &&
                        sortConfig.direction === 'desc'
                          ? 'opacity-100'
                          : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('amount')}>
                <div className='flex items-center gap-1'>
                  Amount{' '}
                  <div className='flex flex-col'>
                    <IoMdArrowDropup
                      className={`size-4
                        ${
                          sortConfig.key == 'amount' &&
                          sortConfig.direction === 'asc'
                            ? 'opacity-100'
                            : 'opacity-50'
                        }
                        `}
                    />
                    <IoMdArrowDropdown
                      className={`size-4 -mt-2.5 ${
                        sortConfig.key == 'amount' &&
                        sortConfig.direction === 'desc'
                          ? 'opacity-100'
                          : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead onClick={() => handleSort('status')}>
                <div className='flex items-center gap-1'>
                  Status Order{' '}
                  <div className='flex flex-col'>
                    <IoMdArrowDropup
                      className={`size-4
                        ${
                          sortConfig.key == 'status' &&
                          sortConfig.direction === 'asc'
                            ? 'opacity-100'
                            : 'opacity-50'
                        }
                        `}
                    />
                    <IoMdArrowDropdown
                      className={`size-4 -mt-2.5 ${
                        sortConfig.key == 'status' &&
                        sortConfig.direction === 'desc'
                          ? 'opacity-100'
                          : 'opacity-50'
                      }`}
                    />
                  </div>
                </div>
              </TableHead>
              <TableHead className='w-[50px]'></TableHead>
            </TableRow>
          </TableHeader>
          <div className='py-4'></div>
          <TableBody>
            {paginatedOrders.map((order, i) => (
              <TableRow
                key={order.id}
                bg={i % 2 === 0 ? '#EBFDFF' : '#FFFFFF'}
                hover='hover:!bg-[#EEDFE2]'
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.location}</TableCell>
                <TableCell>{formatCurrency(order.amount)}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' className='h-8 w-8 p-0'>
                        <MoreHorizontal className='h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem
                        handleClick={() =>
                          navigate(`/seller/orders/${i}/detail`)
                        }
                      >
                        <div className='flex items-center gap-2'>
                          <File size={20} />
                          View Order Details
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className='flex items-center gap-2'>
                          <CircleCheckBig size={20} />
                          Accept Order
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className='text-destructive'>
                        <div className='flex items-center gap-2'>
                          <CircleX color='#FF5B5B' size={20} />
                          Reject Order
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className='flex items-center justify-between mt-8'>
        <p className='text-sm text-muted-foreground'>
          Showing {paginatedOrders.length} from {sortedOrders.length} data
        </p>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
