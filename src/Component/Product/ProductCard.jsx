import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import { Grid } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findById } from "../../Redux/Product/Action";
import { addToCart } from "../../Redux/Cart/Action";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { grey } from "@mui/material/colors";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, auth } = useSelector((store) => store);
  const {loading} = useSelector(state=>state.products)
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    dispatch(findById(productId));
  }, []);

  const imgArr = products.product?.extraImageUrl;
  // console.log("======>", imgArr)

  useEffect(() => {
    if (
      products.product?.extraImageUrl &&
      products.product.extraImageUrl.length > 0
    ) {
      setMainImage(products.product.extraImageUrl[0]);
    }
  }, [products.product?.extraImageUrl]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    const data = { productId: productId, size: selectedSize.name };
    console.log("data----", data);
    dispatch(addToCart(data));
    if (auth.user !== null) {
      toast.success("Item added to cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("please login first", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  var result = Math.round(
    ((products.product?.price - products.product?.discountedPrice) /
      products.product?.price) *
      100
  );
  function findAverage(rating) {
    rating?.forEach((item) => {
      if (item.rating !== null) {
        totalRating += item.rating;
      }
    });

    return totalRating / rating?.length;
  }
  let totalRating = 0;
  var rating = products?.product?.rating;
  var average = findAverage(rating);
  // console.log("average rating ",average)

  return (
    <div className="bg-white">
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
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <div className="mr-0 text-sm font-medium text-gray-900">
                  <div className="mr-0 text-sm font-medium text-gray-900">
                    {
                      products.product?.category?.parentCategory?.parentCategory
                        ?.name
                    }
                  </div>
                </div>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
                <div className="mr-0 text-sm font-medium text-gray-900">
                  <div className="mr-0 text-sm font-medium text-gray-900">
                    {products.product?.category?.parentCategory?.name}
                  </div>
                </div>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                onClick={() => navigate(products?.product?.category?.name)}
                aria-current="page"
                className="cursor-pointer font-medium text-gray-500 hover:text-gray-600"
              >
                {products?.product?.category?.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={mainImage}
                alt={products.product?.imageUrl[0].alt}
                className="lg:h-[28rem] lg:w-[25rem] object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center ">
              {products.product?.extraImageUrl?.map((item, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    onClick={() => handleImageClick(item)}
                    src={item}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="col-span-1 px-4 pb-15 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 max-w-2xl">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="mt-2 mb-1 flex items-center justify-between">
                <p>
                  <span className="text-2xl font-semibold text-slate-900">
                    ₹{products.product?.discountedPrice}
                  </span>
                  <span className="text-lg text-gray-500 p-1 line-through">
                    ₹{products.product?.price}
                  </span>
                  <span className="text-lg text-green-500 p-1 ">
                    {result}% Off
                  </span>
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6 flex">
                <div className="flex items-center space-x-5">
                  <Rating
                    name="read-only"
                    value={average}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-50 text-sm">
                    {products.product?.rating.length} ratings
                  </p>
                  <p className="text-sm text-indigo-600 hover:text-indigo-500">
                    {products.product?.review.length} review
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                {products?.product?.size.filter((size) => size.quantity > 0)
                  .length > 0 && (
                  <div className="mt-10 mb-12">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 w-[10rem] h-[3rem]">
                        {products?.product?.size
                          ?.sort((a, b) => {
                            const sizeOrder = { S: 1, M: 2, L: 3, XL: 4 };
                            return sizeOrder[a.name] - sizeOrder[b.name];
                          })
                          .map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size} // Pass the entire size object as the value
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  size.inStock
                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  active ? "ring-2 ring-indigo-500" : "",
                                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                )
                              }
                              onClick={() => setSelectedSize(size)}
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-indigo-500"
                                          : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-md"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}
                <div className="flex gap-5">
                  <div className="item-center ali">
                    <LocalShippingIcon
                      sx={{
                        fontSize: "3rem",
                        marginLeft: "1rem",
                        color: grey[700],
                      }}
                    />
                    <p className="text-gray-600 text-sm">Free Delivery</p>
                  </div>
                  <div>
                    <SecurityIcon
                      sx={{
                        fontSize: "3rem",
                        marginLeft: "1.5rem",
                        color: grey[700],
                      }}
                    />
                    <p className="text-gray-600 text-sm">1 year warrenty</p>
                  </div>
                  <div>
                    <PublishedWithChangesIcon
                      sx={{
                        fontSize: "3rem",
                        marginLeft: "2.5rem",
                        color: grey[700],
                      }}
                    />
                    <p className="text-gray-600 text-sm">10 days replacement</p>
                  </div>
                  <div>
                    <FlashOnIcon
                      sx={{
                        fontSize: "3rem",
                        marginLeft: "1rem",
                        color: grey[700],
                      }}
                    />
                    <p className="text-gray-600 text-sm">Fast Delivery</p>
                  </div>
                </div>

                {!products?.product?.size.filter((size) => size.quantity > 0)
                  .length > 0 || selectedSize ? (
                  <button
                    onClick={handleAddToCart}
                    type="button"
                    className="mt-10 flex w-[11rem] items-center justify-center rounded-md border border-transparent bg-lime-600 px-8 py-3 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                  >
                    <AddShoppingCartIcon />
                    Add to cart
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-10 flex w-[11rem] items-center justify-center rounded-md border border-transparent bg-gray-300 px-8 py-3 text-base font-medium text-gray-500 cursor-not-allowed"
                  >
                    <AddShoppingCartIcon />
                    Add to cart
                  </button>
                )}
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Details</h3>

                <div className="space-y-6 mt-4">
                  <p className="text-sm text-gray-600">
                    {products.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {products.product?.highlights?.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="font-semibold text-lg pb-4 ml-4">
            Recent ratings and reviews
          </h1>
          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {products.product?.review?.map((item, index) => (
                    <ProductReviewCard
                      key={index}
                      item={item}
                      rating={products.product.rating}
                    />
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
}
