import React from "react";
import CarouselDefault from "../Component/HomeCrousel/CrouselDefault";
import ProductsCrousel from "../Component/HomeProductsCrousel/ProductsCrousel";
import { mens_jacket, mobile_laptop, watches } from "../Assets/Data/Data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  if (auth?.user && auth?.user?.roles[0]?.name === "ROLE_ADMIN") {
    setTimeout(() => {
      navigate("/admin");
    }, 1000);
  }

  return (
    <div>
      <div>
        <CarouselDefault />
      </div>
      <div>
        <ProductsCrousel sectionName="Jackets" data={mens_jacket} />
        <ProductsCrousel sectionName="Watches" data={watches} />
        <ProductsCrousel sectionName="Mobiles & Laptops" data={mobile_laptop} />
      </div>
    </div>
  );
};

export default HomePage;
