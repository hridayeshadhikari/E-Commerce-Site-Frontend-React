import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { orderHistory } from "../../Redux/Order/Action";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";
import noordersimg from "../../Assets/noorders.jpg"

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  const navigate =useNavigate();

  useEffect(() => {
    dispatch(orderHistory());
  }, []);

  console.log("-----", order);

  return (
    <div className="mt-10 mb-5">
      <Box className="px-10">
        <div className="container">
          <div className="p-5">
            <Box className="space-y-5 ">
              {order.orders?.length > 0 ?
                order.orders?.map((order) => {
                  return order?.orderItems?.map((item, index) => (
                    <OrderCard item={item} order={order} />
                  ));
                }) :
                <div className="flex mt-0 justify-center items-center flex-col">
                  <img src={noordersimg} alt="" />
                  <h1 className="mt-2 font-bold">No orders found!</h1>
                  <p className="text-sm mb-6">Looks like you haven't placed any order yet.</p>
                  <Button variant="contained" onClick={()=>navigate("/")}>Shop now</Button>
                </div>
              }
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Order;
