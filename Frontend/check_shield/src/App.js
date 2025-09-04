import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import PhoneCheck from "./pages/PhoneCheck";
import UrlCheck from "./pages/UrlCheck";
import EmailCheck from "./pages/EmailCheck";
import SocialCheck from "./pages/SocialCheck";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/phone" element={<PhoneCheck />} />
        <Route path="/url" element={<UrlCheck />} />
        <Route path="/email" element={<EmailCheck />} />
        <Route path="/social" element={<SocialCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
