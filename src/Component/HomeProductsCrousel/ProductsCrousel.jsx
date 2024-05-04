import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import DefaultProductCard from "../HomeSectionCard/DefaultProductCard";

const responsive = {
  0: { items: 1.5 },
  568: { items: 2.5 },
  1024: { items: 5 },
};
const ProductCarousel = ({ sectionName, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    carousel.slidePrev();
  };
  const handleNextClick = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
    carousel.slideNext();
  };
  let carousel = null;
  const items =
    data && data.map((item) => <DefaultProductCard product={item} />);

  return (
    <div className=" px-4 lg:px-8 mt-5 mb-5">
      <h2 className="text-2xl font-extrabold text-gray-800">{sectionName}</h2>
      <div className="relative ">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          disableDotsControls
          buttonsDisabled={true}
          ref={(el) => (carousel = el)}
        />
        {activeIndex !== 0 && (
          <button onClick={handlePrevClick} className="left-arrow">
            &lt;
          </button>
        )}
        {activeIndex !== items?.length - 1 && (
          <button onClick={handleNextClick} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
