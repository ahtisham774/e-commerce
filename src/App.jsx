import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import SignUp from './pages/signUp'
import Login from './pages/Login'
import ResetPassword from './pages/forgotPassword'
import EmailVerify from './pages/emailVerify'
import BuyerHome from './pages/buyerHome'
import BuyerDashboard from './pages/buyerDashboard'
import BecomeASeller from './pages/BecomeASeller'
import DashboardPanel from './components/seller/dashboardPanel/dashboard'
import OrdersList from './components/seller/orderList/orderList'
import SellerDashboard from './components/seller/dashboard/dashboard'
import CustomerList from './components/seller/generalCustomer/customerList'
import CustomerDetail from './components/seller/generalCustomer/customerDetail'
import Reviews from './components/seller/review/review'
import ChatLayout from './components/seller/chat-interface/chat-layout'
import Wallet from './components/seller/wallet/wallet'
import ProductDetails from './components/seller/product-details/product-details'
import ProductsView from './components/seller/allProducts/products-grid/products-view'
import OrderDetails from './components/seller/order-tracking/order-details'


function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='buyer' element={<BuyerHome />}>
          <Route index element={<BuyerDashboard />} />
        </Route>
        <Route path='/become-seller' element={<BecomeASeller />} />
        <Route path='seller' element={<DashboardPanel />}>
          <Route index element={<SellerDashboard />} />
          <Route path="chat" element={<ChatLayout />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="products" element={<ProductsView />} />

          <Route path="product-detail" element={<ProductDetails />} />
          <Route path='orders' element={<Outlet />}>
            <Route index element={<OrdersList />} />
            <Route path=":id/detail" element={<OrderDetails />} />

          </Route>
          <Route path='customers' element={<Outlet/>} >
            <Route index element={<CustomerList />} />
            <Route path=":id" element={<CustomerDetail />} />
          </Route>
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
