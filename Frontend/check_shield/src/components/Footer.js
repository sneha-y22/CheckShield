export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
        {/* Left - Branding */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">CheckShield</span>. All rights reserved.
        </p>

        {/* Right - Links */}
        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          <a href="#privacy" className="hover:text-indigo-600 transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
