import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../Redux/Order/Action';
import { useLocation } from 'react-router-dom';
import CheckoutOrderItems from './CheckoutOrderItems';
import { createPayment } from '../../../Redux/Payment/Action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(store => store)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCheckout=()=>{
    dispatch(createPayment(orderId));
  }

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border mb-3 mr-5'>
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div className='lg:grid grid-cols-3 lg:px-0 relative pt-3'>
          <div className="lg:col-span-2 ">
            <div className=" space-y-3">
            {order?.order?.orderItems &&
                order.order.orderItems.map((item) => (
                  <CheckoutOrderItems key={item.id} item={item} showButton={false} />
                ))}
            </div>
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className="border">
              <p className='p-3'>Price Details</p>
              <hr />
              <div className='space-y-3 font-semibold p-3'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>₹{order.order?.price}</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Delivery</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Discount</span>
                  <span className='text-green-600'>-₹{order.order?.discount}</span>
                </div>
                <hr />
                <div className='flex justify-between pt-3 text-black '>
                  <span className='font-bold'>Total Price</span>
                  <span>₹{order.order?.discountPrice}</span>
                </div>

              </div>

            </div>
            <div> <button
              onClick={handleCheckout}
              type="submit"
              className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent
                         bg-lime-600 px-8 py-3 text-base text-white
                          hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 font-semibold"
            >
              Payment
            </button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
