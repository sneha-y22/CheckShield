import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Shield, Menu, X, Phone, Mail, Link as LinkIcon, Users, LayoutDashboard } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Dashboard"},
    { path: "/phone-check", label: "Phone Check", icon: <Phone className="h-4 w-4" /> },
    { path: "/email-check", label: "Email Check", icon: <Mail className="h-4 w-4" /> },
    { path: "/url-check", label: "URL Check", icon: <LinkIcon className="h-4 w-4" /> },
    { path: "/social-check", label: "Social Check", icon: <Users className="h-4 w-4" /> },
  ]

  return (
    <nav className="bg-gradient-to-r from-indigo-100 via-purple-100 to-cyan-100 backdrop-blur-md border-b border-indigo-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">
              CheckShield
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
