import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./ui/EmptyCart";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-300 py-16">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
    </div>
  );
}
