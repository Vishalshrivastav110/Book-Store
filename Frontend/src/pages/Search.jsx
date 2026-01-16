import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [query]);

  if (loading) return <div className="text-center py-20">Searching...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {books.length === 0 ? (
        <p>No books found ❌</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link
              key={book._id}
              to={`/books/${book._id}`}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
            >
              <img
                src={book.image}
                className="h-48 w-full object-cover rounded mb-3"
              />
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="font-bold text-blue-600">₹{book.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
