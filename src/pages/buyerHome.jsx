import { Outlet } from 'react-router-dom'
import TopNavbar from '../components/buyer/navbar/navbar'
import TopBar from '../components/buyer/navbar/topbar'

const BuyerHome = () => {
  return (
    <>
      <TopBar />
      <TopNavbar />
      <Outlet />
    </>
  )
}

export default BuyerHome
