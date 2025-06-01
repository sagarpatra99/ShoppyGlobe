import { MoveRight } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import { useFetchProducts } from "../hooks/FetchProducts";
import ProductItem from "./ProductItem";
import FeatureCard from "./ui/FeatureCard";
import Loading from "./ui/Loading";

export default function Home() {
  const { search } = useOutletContext();
  const { products, error } = useFetchProducts();
  const popularProducts = products.filter((item) => item.rating >= 4);

  const filteredProducts = popularProducts.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const brand = item.brand?.toLowerCase() || "";
    const category = item.category?.toLowerCase() || "";

    return (
      title.includes(search.toLowerCase()) ||
      brand.includes(search.toLowerCase()) ||
      category.includes(search.toLowerCase())
    );
  });

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error fetching products: {error.message}
      </div>
    );
  }
  if (!products || products.length === 0) return <Loading />;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-amber-600 text-white text-center pt-10 pb-16 space-y-5">
        <h1 className="text-2xl sm:text-5xl font-semibold sm:font-bold">
          Welcome to <span className="text-yellow-300">ShoppyGlobe</span>
        </h1>
        <p className="text-sm sm:text-xl text-center px-[22vw]">
          Discover amazing products from around the world. Shop with confidence
          and enjoy the best deals on quality items.
        </p>

        <div className="text-center space-x-6 pt-5">
          <Link
            to={"/products"}
            className="bg-white text-orange-500 border-2 border-white font-semibold py-3 px-6 rounded-xl cursor-pointer hover:scale-105 transition-transform"
          >
            Shop Now
          </Link>
          <Link
            to={"/learn-more"}
            className="text-white border-2 font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-orange-500 hover:border-white transition-colors duration-300 cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-white py-16">
        <FeatureCard />
      </section>
      {/* Products Section */}
      <section className="px-[4vw]">
        <div className="flex items-center justify-between py-5">
          <div>
            <h2 className="text-2xl font-semibold">Popular Products</h2>
            <p className="text-gray-600">
              {(search.trim() ? filteredProducts : popularProducts).length}{" "}
              products found
            </p>
          </div>
          <Link
            to={"/products"}
            className="flex items-center gap-4 text-blue-500"
          >
            <span className="font-semibold">View all</span> <MoveRight />
          </Link>
        </div>
        {(search.trim() ? filteredProducts : popularProducts).length === 0 ? (
          <div className="text-center text-gray-600 py-10">
            <div className="text-2xl">
              No products found matching "
              <span className="font-semibold">{search}</span>"
            </div>
            <p className="text-xl">Try searching another product</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {(search.trim() ? filteredProducts : popularProducts).map(
              (item) => (
                <ProductItem key={item.id} product={item} />
              )
            )}
          </div>
        )}
      </section>
    </div>
  );
}
