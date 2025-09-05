import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from "./pages/Dashboard"
import PhoneCheck from "./pages/PhoneCheck"
import EmailCheck from "./pages/EmailCheck"
import UrlCheck from "./pages/UrlCheck"
import SocialCheck from "./pages/SocialCheck"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 animate-fade-in p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/phone-check" element={<PhoneCheck />} />
            <Route path="/email-check" element={<EmailCheck />} />
            <Route path="/url-check" element={<UrlCheck />} />
            <Route path="/social-check" element={<SocialCheck />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
