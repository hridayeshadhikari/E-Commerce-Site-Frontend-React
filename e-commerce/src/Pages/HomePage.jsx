import React from 'react'
import CarouselDefault from '../User/Component/HomeCrousel/CrouselDefault';
import ProductsCrousel from '../User/Component/HomeProductsCrousel/ProductsCrousel'
import { mens_jacket, mobile_laptop, watches} from '../Assets/Data/Data';

const HomePage = () => {
  return (
    <div>
      <div>
      <CarouselDefault/>
      </div>
      <div>
        <ProductsCrousel sectionName="Jackets" data={mens_jacket}/>
        <ProductsCrousel sectionName="Watches" data={watches}/>
        <ProductsCrousel sectionName="Mobiles & Laptops" data={mobile_laptop}/>
        
      </div>
    </div>
  )
}

export default HomePage;
