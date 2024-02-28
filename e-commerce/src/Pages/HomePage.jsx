import React from 'react'
import CarouselDefault from '../User/Component/HomeCrousel/CrouselDefault'
import ProductCarousel from '../User/Component/HomeProductsCrousel/ProductsCrousel';

const HomePage = () => {
  return (
    <div>
       <CarouselDefault sectionName={"Mens Shooes"}/>
       <ProductCarousel sectionName={"Mens Shooes"}/>
       <ProductCarousel sectionName={"Mens Shooes"}/>
       <ProductCarousel sectionName={"Mens Shooes"}/>
       <ProductCarousel sectionName={"Mens Shooes"}/>
      
    </div>
  )
}

export default HomePage;
