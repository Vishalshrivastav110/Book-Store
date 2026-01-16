import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`) // Backend single book endpoint
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    addToCart(book);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <img
        src={book.image}
        alt={book.title}
        className="w-full rounded-2xl shadow-lg"
      />

      <div>
        <h1 className="text-4xl font-bold mb-3">{book.title}</h1>
        <p className="text-gray-600 mb-2">by {book.author}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {book.category}</p>
        <p className="text-lg mb-6">{book.description}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl font-bold text-blue-600">
            ₹{book.price}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
