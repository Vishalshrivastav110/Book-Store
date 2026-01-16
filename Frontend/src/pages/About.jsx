export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center mb-6">
          About <span className="text-blue-600">BookStore</span>
        </h1>

        <p className="text-gray-600 text-lg text-center mb-10">
          Your trusted destination for discovering, buying, and enjoying books
          across all genres.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">📚 Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              BookStore is an online platform built for book lovers.  
              We believe books have the power to educate, inspire, and transform lives.
              Our mission is to make quality books accessible to everyone.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">🚀 Our Mission</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide a wide range of books</li>
              <li>Simple and secure shopping experience</li>
              <li>Support authors and readers</li>
              <li>Build a community of learners</li>
            </ul>
          </div>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 text-center">
          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600">Books</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600">Happy Users</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600">100+</h3>
            <p className="text-gray-600">Authors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
