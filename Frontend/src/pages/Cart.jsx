import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <div className="text-center py-20">Cart is empty 🛒</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-16 object-cover rounded"
            />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-bold">₹{item.price * item.quantity}</p>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={clearCart}
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
      >
        Clear Cart
      </button>
    </div>
  );
}
