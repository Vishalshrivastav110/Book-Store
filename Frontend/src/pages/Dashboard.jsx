import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaUser,
  FaBoxOpen,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">

      {/* MOBILE HEADER */}
      <div className="md:hidden flex justify-between items-center bg-white px-4 py-3 shadow">
        <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* SIDEBAR */}
      <aside
        className={`bg-white w-full md:w-64 p-6 shadow-lg ${
          open ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-6 hidden md:block">
          Dashboard
        </h2>

        <ul className="space-y-4">
          <li
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
          >
            <FaUser /> Profile
          </li>

          <li
            onClick={() => navigate("/orders")}
           className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FaBoxOpen /> My Orders
          </li>

          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
            <FaCog /> Settings
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 mt-4"
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Welcome, {user?.name}
        </h1>

        <p className="text-gray-600 mb-6">
          You are logged in to your Book Store Dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Profile Info</h3>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Quick Actions</h3>
            <ul className="space-y-2 text-blue-600">
              <li className="cursor-pointer">Update Profile</li>
              <li className="cursor-pointer">View Orders</li>
              <li className="cursor-pointer">Settings</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
