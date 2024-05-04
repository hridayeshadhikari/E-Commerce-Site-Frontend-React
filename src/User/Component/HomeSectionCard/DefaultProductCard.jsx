import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

export default function DefaultProductCard({ product }) {
  const navigate = useNavigate();
  var result = Math.round(((product?.price - product?.discountedPrice) / product?.price) * 100);

  return (
    <div onClick={() => navigate(`/product/${product?.productId}`)}>
      <Card sx={{ maxWidth: 345 }} className="cursor-pointer mt-5 items-center mx-3 flex h-[20rem] w-[15rem] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">

        <CardMedia className="relative mx-3 mt-3 flex h-[17rem] w-[13rem] overflow-hidden rounded-xl" >
          <img className="object-cover h-full w-full" src={product?.imageUrl} alt="product image" />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{result}% OFF</span>
        </CardMedia>
        <div className="mt-3 px-5 pb-5">
          <a href="#">
            <h5 className=" tracking-tight text-slate-900">{product?.title}</h5>
          </a>
          <div className="mt-2 mb-1 flex items-center justify-between">
            <p>
              <span className="text-lg font-semibold text-slate-900">₹{product?.discountedPrice}</span>
              <span className="text-sm text-green-500 p-1 line-through">₹{product?.price}</span>
            </p>

          </div>

        </div>

      </Card>
    </div>
  );
}
