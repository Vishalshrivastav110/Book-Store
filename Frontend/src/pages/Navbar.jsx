import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes, FaUser } from "react-icons/fa";

export default function Navbar() {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
    setQuery("");
    setOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          📚 BookStore
        </Link>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* LINKS */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-6 md:p-0`}
        >
          {/* NAV LINKS */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-0">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/allbooks" onClick={() => setOpen(false)}>
              All Books
            </Link>
            
          </div>

          {/* SEARCH BAR */}
          <form
            onSubmit={handleSearch}
            className="flex bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm mb-4 md:mb-0"
          >
            <input
              type="text"
              placeholder="Search books..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-2 text-black outline-none w-full md:w-56"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 text-white hover:bg-blue-700"
            >
              🔍
            </button>
          </form>

          {/* RIGHT SECTION */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            {!user ? (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* CART */}
                <Link
                  to="/cart"
                  className="relative"
                  onClick={() => setOpen(false)}
                >
                  <FaShoppingCart className="text-2xl" />
                  Cart
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>

                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  <FaUser className="text-lg" />
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
