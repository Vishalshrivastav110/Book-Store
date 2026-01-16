import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            📚 BookStore
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop destination to explore, buy, and enjoy books across
            all genres. Discover knowledge, stories, and inspiration.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/allbooks" className="hover:text-white">All Books</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Help Center</a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER + SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Stay Connected
          </h3>

          {/* Newsletter */}
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l bg-gray-800 text-sm text-white outline-none w-full"
            />
            <button className="bg-blue-600 px-4 rounded-r text-white">
              <FaEnvelope />
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">BookStore</span>.  
        Made with ❤️ by Vishal
      </div>
    </footer>
  );
}
