import React from 'react'
import CarouselDefault from '../User/Component/HomeCrousel/CrouselDefault'
import ProductCarousel from '../User/Component/HomeProductsCrousel/ProductsCrousel';
import Navbar from '../User/Component/Navbar/Navbar'
import Footer from '../User/Component/Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <CarouselDefault/>
      <ProductCarousel/>
      <ProductCarousel/>
      <ProductCarousel/>
      <Footer/>
    </div>
  )
}

export default HomePage;
