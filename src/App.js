import React from "react";

export default function ChurchWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Church Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold">Presbyterian Church of Nigeria</h1>
              <p className="text-sm">Museyo Congregation, Lekki Parish</p>
            </div>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#activities" className="hover:text-blue-600">Activities</a>
            <a href="#arms" className="hover:text-blue-600">Church Arms</a>
            <a href="#minister" className="hover:text-blue-600">Minister</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Our Church
        </h2>
        <p className="max-w-xl mx-auto">
          A place of worship, fellowship, and spiritual growth in Christ.
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          The Presbyterian Church of Nigeria, Museyo Congregation, Lekki Parish,
          is committed to spreading the Gospel, nurturing believers, and
          building a strong community of faith.
        </p>
      </section>

      {/* Activities */}
      <section id="activities" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Weekly Activities</h2>
          <ul className="space-y-3">
            <li>Monday: Prayer Band (6:00 PM - 7:00 PM)</li>
            <li>Tuesday: Midweek Service (6:00 PM - 7:00 PM)</li>
            <li>Thursday: Bible Study (6:00 PM - 7:00 PM)</li>
            <li>Sunday: Divine Service (9:00 AM - 12:00 PM)</li>
          </ul>
        </div>
      </section>

      {/* Church Arms */}
      <section id="arms" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Church Arms</h2>
        <ul className="space-y-3">
          <li>MCA – Men Christian Association</li>
          <li>Women’s Guild</li>
          <li>PYPAN – Presbyterian Young People’s Association of Nigeria</li>
          <li>CGIT – Christian Girls in Training</li>
        </ul>
      </section>

      {/* Minister */}
      <section id="minister" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Minister</h2>
          <img
            src="/minister.jpg"
            alt="Rev Emmanuel Joseph"
            className="mx-auto h-48 w-48 object-cover rounded-full mb-4"
          />
          <p className="font-medium">Rev. Emmanuel Joseph A.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Presbyterian Church of Nigeria, Museyo
          Congregation, Lekki Parish. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

