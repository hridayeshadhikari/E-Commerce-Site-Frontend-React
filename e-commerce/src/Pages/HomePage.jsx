import React from 'react'
import CarouselDefault from '../User/Component/HomeCrousel/CrouselDefault';
import ProductsCrousel from '../User/Component/HomeProductsCrousel/ProductsCrousel'

const HomePage = () => {
  return (
    <div>
      <div>
      <CarouselDefault/>
      </div>
      <div>
        <ProductsCrousel sectionName="Jackets"/>
        <ProductsCrousel sectionName="Watches"/>
        <ProductsCrousel sectionName="Mobiles"/>
        <ProductsCrousel sectionName="Laptop"/>
      </div>
    </div>
  )
}

export default HomePage;
