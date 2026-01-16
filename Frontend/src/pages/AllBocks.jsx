import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")  // backend API
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {books.map(book => (
          <Link
            key={book._id}
            to={`/books/${book._id}`}
            className="bg-white rounded-xl shadow p-4 block hover:shadow-lg transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="h-48 w-full object-cover rounded-lg mb-3"
            />
            <h2 className="font-semibold text-lg">{book.title}</h2>
            <p className="text-gray-500">{book.author}</p>
            <p className="font-bold text-blue-600">₹{book.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
