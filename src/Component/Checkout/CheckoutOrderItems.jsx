import React from "react";

const CheckoutOrderItems = ({ item }) => {
  return (
    <div>
      <div className="p-3 shadow-lg border rounded-md">
        <div className="flex items-center">
          <div className="h-[7rem] w-[6rem] lg:h-[8rem] lg:w-[8rem] mb-3">
            <img
              className="w-full h-full object-cover object-top"
              src={item.product?.imageUrl}
              alt=""
            />
          </div>
          <div className="ml-5">
            <p className="font-semibold">{item.product.title}</p>
            <p className="opacity-70">
              Size {item.size}, {item.product.color}
            </p>
            <p className="opacity-70">Seller:{item.product.brand}</p>
            <div className=" items-center justify-between">
              <p>
                <span className="text-lg font-semibold text-slate-900">
                  ₹{item.product.discountedPrice}
                </span>
                <span className="text-md text-gray-500 p-2 line-through">
                  ₹{item.product.price}
                </span>
                <span className="text-md text-green-500 p-2 ">
                  ₹{item.product.price - item.product.discountedPrice} Off
                </span>
                <p className="text-md text-gray-500">
                  quantity : {item.quantity}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderItems;
