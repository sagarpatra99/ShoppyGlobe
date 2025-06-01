import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice"

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.product.id));
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <img src={item.product.thumbnail} alt={item.product.title} className="w-20 h-20 object-cover rounded" />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.product.title}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
      </div>
      <button
        onClick={handleRemove}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
}
