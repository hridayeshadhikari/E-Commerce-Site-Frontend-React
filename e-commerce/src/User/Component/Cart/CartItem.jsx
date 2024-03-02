import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';

const CartItem = () => {
    const [quantity, setQuantity] = useState(1); // Assuming initial quantity is 1

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='h-[7rem] w-[6rem] lg:h-[8rem] lg:w-[8rem] mb-3'>
                    <img className='w-full h-full object-cover object-top'
                        src="https://img3.junaroad.com/uiproducts/20397167/zoom_0-1696990448.jpg" alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Mens shooes</p>
                    <p className='opacity-70'>Size M, Black</p>
                    <p className='opacity-70 mt-2'>Seller:Harry</p>
                    <div className="mt-2 mb-1 flex items-center justify-between">
                        <p>
                            <span className="text-lg font-semibold text-slate-900">₹449</span>
                            <span className="text-md text-gray-500 p-2 line-through">₹699</span>
                            <span className="text-md text-green-500 p-2 ">50% Off</span>
                        </p>


                    </div>
                </div>

            </div>
            <div className="flex items-center lg:space-x-8">
                <button className='text-gray-400 hover:text-gray-600' onClick={decreaseQuantity}>
                    <RemoveCircleOutlineIcon />
                </button>
                <span className="px-7 border rounded-md">{quantity}</span>
                <button className='text-gray-400 hover:text-gray-600' onClick={increaseQuantity}>
                    <ControlPointIcon />
                </button>
                <div><button className='ml-5 text-indigo-500 hover:text-indigo-800 font-semibold'>Remove</button></div>
                
            </div>

        </div>
    )
}

export default CartItem
