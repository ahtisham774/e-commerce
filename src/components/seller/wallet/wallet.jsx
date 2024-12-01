import { Card } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"
import MainBalance from "./components/main-balance"
import WalletBalance from "./components/wallet-balance"
import PaymentHistory from "./components/payment-history"
import OrdersSent from "./components/orders-sent"

export default function Wallet() {
  return (
    <div className="min-h-screen my-6 w-full">
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <MainBalance />
          </div>
          <div className="h-full">
            <WalletBalance />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <PaymentHistory />
          </div>
          <div>
            <OrdersSent />
          </div>
        </div>
      </div>
    </div>
  )
}

