import React from 'react';

const DefaultProductCard = () => {
  return (
    <div className="cursor-pointer mt-5 items-center mx-3 flex h-[20rem] w-[15rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-[13rem] w-[13rem] overflow-hidden rounded-xl" >
        <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
      </div>
      <div className="mt-2 px-5 pb-5">
        <a href="#">
          <h5 className=" tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
        </a>
        <div className="mt-2 mb-1 flex items-center justify-between">
          <p>
            <span className="text-lg font-semibold text-slate-900">₹449</span>
            <span className="text-sm text-slate-900 line-through">₹699</span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default DefaultProductCard;
