import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div>
            <div className='lg:grid grid-cols-3'>
                <CartItem />
            </div>
        </div>
    )
}

export default Cart
