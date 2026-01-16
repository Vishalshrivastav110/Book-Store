import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AllBooks from "./pages/AllBocks";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
       
      </Routes>

      <Footer />
    </>
  );
}
