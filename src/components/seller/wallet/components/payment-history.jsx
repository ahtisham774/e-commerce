import { Card } from './ui/card'
import { Badge } from './ui/badge'

const transactions = [
  {
    id: 1,
    name: 'Peterdraw',
    type: 'Online Shop',
    date: 'June 5, 2020, 08:22 AM',
    amount: '+$5,553',
    card: 'MasterCard 404',
    status: 'pending'
  },
  {
    id: 2,
    name: 'Olivia Brownlee',
    type: 'Online Shop',
    date: 'June 4, 2020, 08:22 AM',
    amount: '+$5,553',
    card: 'MasterCard 404',
    status: 'completed'
  }
  // Add more transactions as needed
]

export default function PaymentHistory () {
  return (
    <Card>
      <div className='p-6 border-b bg-white rounded'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Payment History</h2>
          <div className='flex gap-4'>
            <button className='text-sm text-gray-500 hover:text-gray-900'>
              Monthly
            </button>
            <button className='text-sm text-gray-500 hover:text-gray-900'>
              Weekly
            </button>
            <button className='text-sm font-medium'>Today</button>
          </div>
        </div>
      </div>

      <div className='divide-y'>
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className='p-6 flex items-center justify-between'
          >
            <div className='flex items-center gap-4'>
              <div className='size-12 bg-[#C4C4C4] rounded-full shrink-0 flex items-center justify-center'>
                {transaction.name[0]}
              </div>
              <div>
                <h3 className='font-medium'>{transaction.name}</h3>
                <p className='text-sm text-gray-500'>{transaction.type}</p>
              </div>
            </div>
            <p className='font-normal'>{transaction.date}</p>
            <p className='font-medium'>{transaction.amount}</p>
            <p className='text-sm text-gray-500'>{transaction.card}</p>
            <Badge variant={transaction.status}>{transaction.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
