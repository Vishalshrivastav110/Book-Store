import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your Next{" "}
              <span className="text-yellow-300">Favorite Book</span>
            </h1>

            <p className="text-lg mb-6 text-indigo-100">
              Explore thousands of books across all genres. From bestsellers to
              hidden gems – all in one place.
            </p>

            <div className="flex gap-4">
              <Link
                to="/allbooks"
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-300"
              >
                View All Books
              </Link>

              <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600">
                Browse Categories
              </button>
            </div>
          </div>

          {/* Right Image (Hero Banner) */}
          <div className="flex justify-center">
            {books.length > 0 && (
              <img
                src={books[0].image}
                alt="Books Banner"
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            )}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Books
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <Link
              key={book._id}
              to={`/books/${book._id}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />

              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.author}</p>
              <p className="mt-2 font-bold text-indigo-600">
                ₹{book.price}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
