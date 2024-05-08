import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CrouselData } from "./CrouselData";

const CarouselDefault = () => {
  const items = CrouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));
  return (
    <div>
      <AliceCarousel
        autoPlayDirection="lrt"
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
      />
    </div>
  );
};

export default CarouselDefault;
