import React, { useEffect } from 'react';
import { Box} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { orderHistory } from '../../../Redux/Order/Action';
import OrderCard from './OrderCard';



const Order = () => {
    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    useEffect(() => {
        dispatch(orderHistory());
    }, []);

    console.log("-----", order);

    return (
        <div className='mt-10 mb-5'>
            <Box className="px-10">
                <div className='container'>
                    
                    <div className='p-5'>
                        <Box className="space-y-5 ">
                            {order.orders?.length > 0 && order.orders?.map((order) => {
                                return order?.orderItems?.map((item, index) => <OrderCard item={item} order={order} />)
                            })}
                        </Box>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Order;
