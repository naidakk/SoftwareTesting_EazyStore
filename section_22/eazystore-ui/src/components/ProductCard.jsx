import React from "react";
import Price from "./Price";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-slice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="w-72 rounded-md mx-auto border border-gray-300 dark:border-gray-600 shadow-md overflow-hidden flex flex-col bg-white dark:bg-gray-800 hover:border-primary dark:hover:border-lighter transition">
      <Link
        to={`/products/${product.productId}`}
        state={{ product }}
        className="relative w-full h-72 border-b border-gray-300 dark:border-gray-600"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </Link>
      <div className="relative h-48 p-4 flex flex-col font-primary">
        <h2 className="text-xl font-semibold text-primary dark:text-light mb-2">
          {product.name}
        </h2>
        <p className="text-base text-gray-600 dark:text-lighter mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="bg-lighter dark:bg-light text-primary font-medium text-sm py-2 px-4 rounded-tl-md">
            <Price currency="$" price={product.price} />
          </div>
          <button
            className="bg-primary dark:bg-light text-white dark:text-primary font-medium text-sm py-2 px-4 rounded-md hover:cursor-pointer"
            onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
