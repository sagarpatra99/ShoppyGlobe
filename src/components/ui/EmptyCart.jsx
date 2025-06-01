import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="h-[545px] bg-gray-300 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-elegant p-12">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Looks like you haven't added anything to your cart yet. Start
              shopping to fill it up!
            </p>
            <Link
              to="/"
              className="bg-orange-500 text-white py-3 px-5 rounded-xl inline-flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
