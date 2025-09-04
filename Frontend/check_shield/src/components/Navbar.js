import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          CheckShield
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">Dashboard</Link>
          <Link to="/phone" className="hover:text-indigo-600 transition">Phone Check</Link>
          <Link to="/url" className="hover:text-indigo-600 transition">URL Check</Link>
          <Link to="/email" className="hover:text-indigo-600 transition">Email Check</Link>
          <Link to="/social" className="hover:text-indigo-600 transition">Social Media</Link>
        </div>
      </div>
    </nav>
  );
}
