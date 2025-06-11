import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/FetchProducts";
import { useState } from "react";
import Reviews from "./Review";
import Loading from "./ui/Loading"

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  // console.log(id);

  const { products, error } = useFetchProducts();
  // console.log(products);

  const product = products.find((item) => item.id.toString() === id);
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-elegant p-8">
          <h2 className="text-2xl font-bold text-red-600">Error</h2>
          <p className="text-gray-600 mt-4">{error.message}</p>
        </div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/products"
          className="inline-flex items-center font-medium text-blue-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={product.images[selectedImage] || product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === index
                        ? "border-shoppy-blue"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <span className={`${product.brand ? "bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium" : "p-0 m-0"}`}>
                    {product.brand}
                  </span>
                  <span className={`text-gray-500 px-2 py-1 rounded-full text-sm ${!product.brand && "bg-orange-500 text-white px-4"}`}>
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-orange-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium text-gray-900">
                  {product.rating}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-green-600 font-medium">
                  {product.stock} in stock
                </span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline space-x-4">
                  <span className="text-4xl font-bold text-orange-600">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="text-2xl text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.discountPercentage > 0 && (
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save ${(product.price - discountedPrice).toFixed(2)} (
                    {Math.round(product.discountPercentage)}% off)
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <label className="text-lg font-medium text-gray-900">
                  Quantity
                </label>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center border border-gray-300 rounded-xl px-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-3 font-medium text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        setQuantity(Math.min(product.stock, quantity + 1))
                      }
                      className="p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    {product.stock < 10 && `Only ${product.stock} left!`}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-6">
                  <button
                      // onClick={handleAddToCart}
                    className="w-full bg-[#FF9F00] hover:shadow-xl duration-300 rounded-xl cursor-pointer text-white font-medium text-sm sm:text-lg py-4 flex items-center justify-center space-x-3"
                    disabled={product.stock === 0}
                  >
                    <ShoppingCart className="h-6 w-6" />
                    <span>
                      {product.stock === 0 ? "Out of Stock" : "ADD TO CART"}
                    </span>
                  </button>
                  <button
                    //   onClick={handleAddToCart}
                    className="w-full bg-[#FB641B] hover:shadow-xl duration-300 rounded-xl cursor-pointer text-white font-medium text-sm sm:text-lg py-4 flex items-center justify-center space-x-3"
                    disabled={product.stock === 0}
                  >
                    <ShoppingBag className="h-6 w-6" />
                    <span>
                      {product.stock === 0 ? "Out of Stock" : "BUY NOW"}
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="border-2 border-amber-600 text-amber-600 font-medium cursor-pointer py-3 flex items-center justify-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                  <button className="border-2 border-amber-600 text-amber-600 font-medium cursor-pointer py-3 flex items-center justify-center space-x-2">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-6 w-6 text-orange-600" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-gray-600">
                        On orders over $50
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="h-6 w-6 text-orange-600" />
                    <div>
                      <p className="font-medium">Easy Returns</p>
                      <p className="text-sm text-gray-600">
                        30-day return policy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="h-6 w-6 text-orange-600" />
                    <div>
                      <p className="font-medium">Secure Payment</p>
                      <p className="text-sm text-gray-600">100% protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews reviews={product.reviews} />
    </div>
  );
}
