import React from 'react'
import OrderTracker from './OrderTracker'
import AddressCard from '../AddressCard/AddressCard'
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderDetail = () => {
    return (
        <div>
            <div>
                <h1 className='text-lg font-bold lg:mt-[3rem] lg:ml-[4rem]'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='mt-[3rem]'>
                <OrderTracker />
            </div>
            <div>
                <div className="container mt-8 lg:mx-auto mb-3 p-4 border shadow-md rounded-e-md  justify-center">
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item xs={12} sm={6}>
                            <div className='flex'>
                                <img src="https://image.made-in-china.com/2f0j00ceFlBLZnwzrO/New-Style-Casual-Men-Light-Running-Air-Cushion-Shoes-Hot-Selling-Shooes.webp" alt="Product" className="w-[8rem] h-auto" />
                                <div className='flex flex-col p-2'>
                                    <p className='mt-3 font-semibold'>Mens Shooes</p>
                                    <p className='mt-2 font-semibold text-gray-500'>Size M</p>
                                    <p className='font-semibold text-gray-500'>color : Black</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={3} className='font-semibold'>
                            <p>Price ₹5999</p>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <p className='font-semibold'>
                                <AdjustIcon sx={{ color: "#66BB6A", marginRight: 1 }} />
                                Expected Delhivery on March 15
                                <p className='text-sm font-medium'>Your item is on the way</p>
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
