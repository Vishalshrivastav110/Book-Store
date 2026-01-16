import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register: signup } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await signup({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      navigate("/dashboard");
    } catch {
      alert("Register failed");
    }
  };

  return (
    <div className="w-full min-h-screen bg-red-100 flex items-center justify-center">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      {/* Name */}
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

      {/* Email */}
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
        className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

      {/* Password */}
      <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters required" },
          })}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 cursor-pointer text-gray-500"
        >
          👁️
        </span>
      </div>
      {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

      {/* Confirm Password */}
      <div className="relative mb-6">
        <input
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmPassword", {
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-3 cursor-pointer text-gray-500"
        >
          👁️
        </span>
      </div>
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mb-4">
          {errors.confirmPassword.message}
        </p>
      )}

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
      >
        Register
      </button>

      {/* Login link */}
      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </form>
    </div>
  );
}
