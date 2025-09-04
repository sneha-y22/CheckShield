import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          CheckShield
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">
            Dashboard
          </Link>
          <Link to="/phone" className="text-gray-700 hover:text-indigo-600">
            Phone Check
          </Link>
          <Link to="/url" className="text-gray-700 hover:text-indigo-600">
            URL Check
          </Link>
          <Link to="/email" className="text-gray-700 hover:text-indigo-600">
            Email Check
          </Link>
          <Link to="/social" className="text-gray-700 hover:text-indigo-600">
            Social Media
          </Link>
        </div>
      </div>
    </nav>
  );
}
