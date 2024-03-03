import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border mb-3 lg:ml-[4rem]  lg:mr-[5rem]'>
        <AddressCard />
      </div>
      <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative pt-3'>
          <div className='col-span-2'>
            <div className='p-3 shadow-lg border rounded-md'>
              <div className='flex items-center'>
                <div className='h-[7rem] w-[6rem] lg:h-[8rem] lg:w-[8rem] mb-3'>
                  <img className='w-full h-full object-cover object-top'
                    src="https://img3.junaroad.com/uiproducts/20397167/zoom_0-1696990448.jpg" alt="" />
                </div>
                <div className='ml-5'>
                  <p className='font-semibold'>Mens shooes</p>
                  <p className='opacity-70'>Size M, Black</p>
                  <p className='opacity-70'>Seller:Harry</p>
                  <div className=" items-center justify-between">
                    <p>
                      <span className="text-lg font-semibold text-slate-900">₹449</span>
                      <span className="text-md text-gray-500 p-2 line-through">₹699</span>
                      <span className="text-md text-green-500 p-2 ">50% Off</span>
                      <p className="text-md text-gray-500">quantity : 2</p>
                    </p>




                  </div>
                </div>

              </div>


            </div>
          </div>

          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className="border">
              <p className='p-3'>Price Details</p>
              <hr />
              <div className='space-y-3 font-semibold p-3'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span>₹599</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Delivery</span>
                  <span className='text-green-600'>Free</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Discount</span>
                  <span className='text-green-600'>-₹5999</span>
                </div>
                <hr />
                <div className='flex justify-between pt-3 text-black '>
                  <span className='font-bold'>Total Price</span>
                  <span>₹5999</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
