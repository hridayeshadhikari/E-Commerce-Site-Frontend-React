import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { usersCart } from '../../../Redux/Cart/Action';

const Cart = () => {
    const navigate=useNavigate();
    const {cart}=useSelector(store=>store)
    const dispatch=useDispatch();
    const handleCheckout=()=>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(usersCart());
    },[cart.updateCartItem,cart.deleteCartItem])



    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative pt-3'>
                <div className='col-span-2'>
                    {cart.cart?.cartItems.map((item)=><CartItem item={item}/>)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className="border">
                        <p className='p-3'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold p-3'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>₹{cart.cart?.totalPrice}</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Delivery</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Discount</span>
                                <span className='text-green-600'>-₹{cart.cart?.discount}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between pt-3 text-black '>
                                <span className='font-bold'>Total Price</span>
                                <span>{cart.cart?.discountPrice}</span>
                            </div>
                        </div>
                        
                    </div>
                    <button
                        onClick={handleCheckout}
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent
                         bg-lime-600 px-8 py-3 text-base text-white
                          hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 font-semibold"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
