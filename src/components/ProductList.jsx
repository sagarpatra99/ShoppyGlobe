import ProductItem from "./ProductItem";
import { useFetchProducts } from "../hooks/FetchProducts";
import { useOutletContext } from "react-router-dom";

export default function ProductList() {
  const { search } = useOutletContext();
  const { products, error } = useFetchProducts();

  const filteredProducts = products.filter((item) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-red-600">
          Failed to load products. Please try again later.
        </h2>
        <p className="text-gray-600 mt-2">{error.message}</p>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Results Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {/* {searchTerm ? `Search Results for "${searchTerm}"` : 'All Products'} */}
              All Products
            </h2>
            <p className="text-gray-600 mt-2">
              {(search.trim() ? filteredProducts : products).length} product{(search.trim() ? filteredProducts : products).length !== 1 ? "s" : ""} found
            </p>
            {/*<p className="text-gray-600 mt-2">
              {(search.trim() ? filteredProducts || products).length} product{products.length !== 1 ? "s" : ""} found
            </p>*/}
          </div>

          {/* Category Filter could go here */}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
        {/* {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))} */}
        {(search.trim() ? filteredProducts : products).map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
