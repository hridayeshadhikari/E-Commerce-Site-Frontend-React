import React from 'react'
import Navbar from '../User/Component/Navbar/Navbar'
import Footer from '../User/Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Cart from '../User/Component/Cart/Cart'
import Product from '../User/Component/Product/Product'
import CategoryFilter from '../User/Component/Product/CategoryFilter'
import Checkout from '../User/Component/Checkout/Checkout'
import Order from '../User/Component/Order/Order'
import OrderDetail from '../User/Component/Order/OrderDetail'
import FAQ from '../User/Component/Footer/FooterLinks/FAQ';
import Payments from '../User/Component/Footer/FooterLinks/Payments';
import PrivacyPolicy from '../User/Component/Footer/FooterLinks/PrivacyPolicy';
import Security from '../User/Component/Footer/FooterLinks/Security';
import Sitemap from '../User/Component/Footer/FooterLinks/Sitemap';
import TermsOfUse from '../User/Component/Footer/FooterLinks/TermsOfUse';
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Payment from '../User/Component/Payment/Payment'
import RateProduct from '../User/Component/Rating/RateProduct'

const UserRouter = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/signup' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<CategoryFilter/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
        <Route path="/payment/:orderId" element={<Payment/>}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct/>}></Route>

        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/paymentf' element={<Payments/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/security' element={<Security />}></Route>
        <Route path='/site-map' element={<Sitemap />}></Route>
        <Route path='/terms-of-use' element={<TermsOfUse/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default UserRouter
