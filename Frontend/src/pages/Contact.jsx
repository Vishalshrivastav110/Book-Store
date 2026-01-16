export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white shadow rounded-2xl p-8">

        {/* LEFT INFO */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h1>

          <p className="text-gray-600 mb-6">
            Have a question, feedback, or need support?  
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📧 Email: support@bookstore.com</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📍 Location: India</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
