import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { orderHistory } from '../../../Redux/Order/Action';

const Order = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { order } = useSelector(store => store);
    
    useEffect(() => {
        dispatch(orderHistory());
    }, []);

    console.log("-----", order);

    return (
        <div>
            {order.orders.map(orderItem => (
                <div key={orderItem.id} onClick={() => navigate(`/account/order/${orderItem.id}`)} className="cursor-pointer container mt-8 lg:mx-auto mb-3 p-4 border shadow-md rounded-e-md justify-center">
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        {orderItem.orderItems.map(item => (
                            <React.Fragment key={item.productId}>
                                <Grid item xs={12} sm={6}>
                                    <div className='flex'>
                                        <img src={item.product.imageUrl} alt="Product" className="w-[8rem] h-auto" />
                                        <div className='flex flex-col p-2'>
                                            <p className='mt-3 font-semibold'>{item.product.title}</p>
                                            <p className='mt-2 font-semibold text-gray-500'>Size {item.size}</p>
                                            <p className='font-semibold text-gray-500'>Color: {item.product.color}</p>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={12} sm={3} className='font-semibold'>
                                    <p>Price ₹{item.discountedPrice}</p>
                                </Grid>
                            </React.Fragment>
                        ))}
                        <Grid item xs={12} sm={3}>
                            <p className='font-semibold'>
                                <AdjustIcon sx={{ color: "#66BB6A", marginRight: 1 }} />
                                Expected Delivery on March 15
                                <p className='text-sm font-medium'>Your item is on the way</p>
                            </p>
                        </Grid>
                    </Grid>
                </div>
            ))}
        </div>
    );
};

export default Order;
