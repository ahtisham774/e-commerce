import BestSeller from '../components/buyer/bestSeller'
import Categories from '../components/buyer/categories'
import Hero from '../components/buyer/hero/hero'
import NewsLetter from '../components/buyer/newsLetter'
import OurProducts from '../components/buyer/ourProducts'
import Products from '../components/buyer/products'
import Container from '../utils/container'

const BuyerDashboard = () => {
  return (
    <>
      <Hero />
      <Container>
        <Products />
        <Categories />
        <BestSeller />
        <NewsLetter />
        <OurProducts />
      </Container>
    </>
  )
}

export default BuyerDashboard
