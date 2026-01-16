import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
  FaBoxOpen,
  FaCog,
} from "react-icons/fa";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">
          My Account
        </h2>

        <ul className="space-y-4">
          <li className="flex items-center gap-2 font-semibold text-gray-700">
            <FaUser className="text-blue-600" />
            {user.name}
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 mt-6"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">
          Profile Details
        </h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {/* NAME */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-2">
              <FaUser className="text-blue-600 text-xl" />
              <h3 className="font-semibold text-lg">Name</h3>
            </div>
            <p className="text-gray-700">{user.name}</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-blue-600 text-xl" />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
