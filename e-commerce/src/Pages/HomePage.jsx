import React from 'react'
import CarouselDefault from '../User/Component/HomeCrousel/CrouselDefault'
import ProductCarousel from '../User/Component/HomeProductsCrousel/ProductsCrousel';
import Navbar from '../User/Component/Navbar/Navbar'
import Footer from '../User/Component/Footer/Footer';
import Product from '../User/Component/Product/Product';
import CategoryFilter from '../User/Component/Product/CategoryFilter';
import Cart from '../User/Component/Cart/Cart';
import Checkout from '../User/Component/Checkout/Checkout';
import Order from '../User/Component/Order/Order';
import OrderDetail from '../User/Component/Order/OrderDetail';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      {/* <CarouselDefault/>
      <ProductCarousel/>
      <ProductCarousel/>
      <ProductCarousel/> 
      <CategoryFilter/>
  <Product/> 
      <Cart/>
      <Checkout/>
      <Order/>*/}
      <OrderDetail/>
      <Footer/>
    </div>
  )
}

export default HomePage;
