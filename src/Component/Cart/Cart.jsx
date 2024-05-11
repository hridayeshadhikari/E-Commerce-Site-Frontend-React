import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersCart } from "../../Redux/Cart/Action";
import { Button } from "@mui/material";
import emptyCart from "../../Assets/emptycart.png";
import HashLoader from "react-spinners/HashLoader";

const Cart = () => {
  const navigate = useNavigate();
  const {cart } = useSelector((state) => state);
  const { loading} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(usersCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <HashLoader 
          color="#2196F3"
          size={70}
          />
        </div>
      )}
      {cart?.cart?.cartItems.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative pt-3">
          <div className="col-span-2">
            {cart.cart?.cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="p-3">Price Details</p>
              <hr />
              <div className="space-y-3 font-semibold p-3">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{cart.cart?.discount}</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 text-black ">
                  <span className="font-bold">Total Price</span>
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
      ) : (
        <div className="flex mt-0 justify-center items-center flex-col mb-5">
          <img src={emptyCart} alt="" className="w-[25rem] h-[26rem]" />
          <h1 className="mt-2 font-bold mb-6">Your cart is empty!!</h1>
          <Button variant="contained" onClick={() => navigate("/")}>
            Shop now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
