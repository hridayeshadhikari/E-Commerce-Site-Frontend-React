import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../Redux/Cart/Action';


const CartItem = ({ item }) => {
    const dispatch = useDispatch();    

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item.id));
    };
    const handleUpdateCartItem = (num) => {
        const data = { data: { quantity: item.quantity + num }, cartItemId: item?.id}
        dispatch(updateCartItem(data))
    }

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='h-[7rem] w-[6rem] lg:h-[8rem] lg:w-[8rem] mb-3'>
                    <img className='w-full h-full object-cover object-top'
                        src={item.product?.imageUrl} alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>{item.product?.title}</p>
                    <p className='opacity-70'>Size {item.size}, {item.product?.color}</p>
                    <p className='opacity-70 mt-2'>Seller:{item.product?.brand}</p>
                    <div className="mt-2 mb-1 flex items-center justify-between">
                        <p>
                            <span className="text-lg font-semibold text-slate-900">₹{item.discountPrice}</span>
                            <span className="text-md text-gray-500 p-2 line-through">₹{item.price}</span>
                            <span className="text-md text-green-500 p-2 ">₹{item.price - item.discountPrice} Off</span>
                        </p>


                    </div>
                </div>

            </div>
            <div className="flex items-center lg:space-x-8">
                <button className='text-gray-400 hover:text-gray-600' onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                    <RemoveCircleOutlineIcon />
                </button>
                <span className="px-7 border rounded-md">{item.quantity}</span>
                <button className='text-gray-400 hover:text-gray-600' onClick={()=>handleUpdateCartItem(1)}>
                    <ControlPointIcon />
                </button>
                <div><button className='ml-5 text-indigo-500 hover:text-indigo-800 font-semibold' onClick={handleRemoveCartItem}>Remove</button></div>

            </div>

        </div>
    )
}

export default CartItem
