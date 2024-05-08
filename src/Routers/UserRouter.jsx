import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Cart from "../Component/Cart/Cart";
import Product from "../Component/Product/Product";
import CategoryFilter from "../Component/Product/CategoryFilter";
import Checkout from "../Component/Checkout/Checkout";
import Order from "../Component/Order/Order";
import OrderDetail from "../Component/Order/OrderDetail";
import FAQ from "../Component/Footer/FooterLinks/FAQ";
import Payments from "../Component/Footer/FooterLinks/Payments";
import PrivacyPolicy from "../Component/Footer/FooterLinks/PrivacyPolicy";
import Security from "../Component/Footer/FooterLinks/Security";
import Sitemap from "../Component/Footer/FooterLinks/Sitemap";
import TermsOfUse from "../Component/Footer/FooterLinks/TermsOfUse";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Payment from "../Component/Payment/Payment";
import RateProduct from "../Component/Rating/RateProduct";
import ScrollToTop from "../Component/Scroll/ScrollToTop";
import ProfilePage from "../Pages/ProfilePage";

const UserRouter = () => {
  return (
    <div>
      <ScrollToTop />
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/signup" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<CategoryFilter />}
        ></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>
        <Route path="/payment/:orderId" element={<Payment />}></Route>
        <Route path="/account/profile" element={<ProfilePage />}></Route>
        <Route
          path="/account/rate/:productId"
          element={<RateProduct />}
        ></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/paymentf" element={<Payments />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/security" element={<Security />}></Route>
        <Route path="/site-map" element={<Sitemap />}></Route>
        <Route path="/terms-of-use" element={<TermsOfUse />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserRouter;
