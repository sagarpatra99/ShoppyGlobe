import { Smile, ShieldCheck, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <div className="bg-white min-h-screen px-[6vw] py-10 sm:py-16">
      <section className="text-center space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold">
          About <span className="text-orange-600">Shoppy Globe</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg font-medium">
          At ShoppyGlobe, we’re passionate about helping you discover
          top-quality products from trusted brands across the world. We combine
          speed, security, and service to redefine your online shopping
          experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 text-center">
        <div className="p-6 bg-orange-50 rounded-2xl shadow hover:shadow-xl transition">
          <Truck className="w-10 h-10 mx-auto text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Fast & Reliable Delivery
          </h3>
          <p className="text-gray-600 text-sm">
            Get your products at lightning speed with our optimized shipping
            network.
          </p>
        </div>

        <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-xl transition">
          <ShieldCheck className="w-10 h-10 mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Safe & Secure Payments</h3>
          <p className="text-gray-600 text-sm">
            Your data and payments are protected with our encrypted checkout
            process.
          </p>
        </div>

        <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-xl transition">
          <Smile className="w-10 h-10 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
          <p className="text-gray-600 text-sm">
            We’re committed to keeping you happy with 24/7 support and easy
            returns.
          </p>
        </div>

        <div className="p-6 bg-purple-50 rounded-2xl shadow hover:shadow-xl transition">
          <Award className="w-10 h-10 mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Top Quality Brands</h3>
          <p className="text-gray-600 text-sm">
            We partner only with reliable brands to ensure the best for our
            customers.
          </p>
        </div>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Ready to explore our products?
        </h2>
        <div className="pt-8">
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 pt-2.5 pb-3 rounded-xl transition"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
