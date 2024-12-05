import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import SignUp from './pages/signUp'
import Login from './pages/Login'
import ResetPassword from './pages/forgotPassword'
import EmailVerify from './pages/emailVerify'
import BuyerHome from './pages/buyerHome'
import BuyerDashboard from './pages/buyerDashboard'
import BecomeASeller from './pages/becomeASeller'
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
import { useAuth } from './context/useAuth'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<LoginRoute />}>
          <Route path='/signUp' element={<SignUp />} />
        </Route>
        <Route element={<LoginRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<LoginRoute />}>
          <Route path='/reset-password' element={<ResetPassword />} />
        </Route>
        <Route element={<LoginRoute />}>
          <Route path='/resetpassword' element={<EmailVerify />} />
        </Route>
        <Route element={<PrivateRoute role='buyer' />}>
          <Route path='buyer' element={<BuyerHome />}>
            <Route index element={<BuyerDashboard />} />
          </Route>
        </Route>
        <Route element={<LoginRoute />}>
          <Route path='/become-seller' element={<BecomeASeller />} />
        </Route>
        <Route element={<PrivateRoute role='seller' />}>
          <Route path='seller' element={<DashboardPanel />}>
            <Route index element={<SellerDashboard />} />
            <Route path='chat' element={<ChatLayout />} />
            <Route path='wallet' element={<Wallet />} />
            <Route path='products' element={<ProductsView />} />
            <Route path='product-detail' element={<ProductDetails />} />
            <Route path='orders' element={<Outlet />}>
              <Route index element={<OrdersList />} />
              <Route path=':id/detail' element={<OrderDetails />} />
            </Route>
            <Route path='customers' element={<Outlet />}>
              <Route index element={<CustomerList />} />
              <Route path=':id' element={<CustomerDetail />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

const PrivateRoute = ({ role }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
 
  if (role && user?.role?.toLowerCase() !== role) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return <Outlet />
}

const LoginRoute = () => {
  const { user } = useAuth()
  const location = useLocation()
  if (user) {
    return <Navigate to='/' state={{ from: location }} replace />
  }
  return <Outlet />
}
