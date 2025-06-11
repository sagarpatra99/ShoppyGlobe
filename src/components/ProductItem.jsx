import { ShoppingCart, Star, Tag } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../redux/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
    // dispatch(addToCart(product));
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} has been added to your cart.`);
  } catch {
    toast.error("Something went wrong while adding to cart.");
  }
  };

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-2xl bg-gray-100">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          {/* Discount Badge */}
          {product.discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-lg text-sm font-semibold flex items-center space-x-1">
              <Tag className="h-3 w-3" />
              <span>{Math.round(product.discountPercentage)}% OFF</span>
            </div>
          )}

          {/* Quick Add Button - appears on hover */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 bg-white text-orange-600 hover:text-white hover:bg-orange-500 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Brand & Category */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-orange-600 font-medium uppercase tracking-wide">
              {product.brand}
            </span>
            <span className="text-xs text-orange-600 bg-yellow-300 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="h-12 font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-orange-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.stock} in stock)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-600">
                ${discountedPrice.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-6 pb-6">
        <button
          onClick={handleAddToCart}
          className="w-full bg-amber-600 hover:bg-amber-700 duration-300 rounded-xl cursor-pointer text-white py-2 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
