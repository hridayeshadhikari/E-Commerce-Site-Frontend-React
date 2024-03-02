import React from 'react'
import CarouselDefault from '../User/Component/HomeCrousel/CrouselDefault'
import ProductCarousel from '../User/Component/HomeProductsCrousel/ProductsCrousel';
import Navbar from '../User/Component/Navbar/Navbar'
import Footer from '../User/Component/Footer/Footer';
import Product from '../User/Component/Product/Product';
import CategoryFilter from '../User/Component/Product/CategoryFilter';
import Cart from '../User/Component/Cart/Cart';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      {/* <CarouselDefault/>
      <ProductCarousel/>
      <ProductCarousel/>
      <ProductCarousel/> 
      <CategoryFilter/>
      <Product/> */}
      <Cart/>
      <Footer/>
    </div>
  )
}

export default HomePage;
