import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Phone, Link as LinkIcon, Mail, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Pie Chart Data
  const pieData = [
    { name: "Safe", value: 70 },
    { name: "Scam", value: 25 },
    { name: "Other", value: 5 },
  ];
  const COLORS = ["#22c55e", "#ef4444", "#94a3b8"];

  // Trend Data (Dummy - replace with backend later)
  const trendData = [
    { month: "Jan", scams: 30 },
    { month: "Feb", scams: 45 },
    { month: "Mar", scams: 20 },
    { month: "Apr", scams: 50 },
    { month: "May", scams: 40 },
    { month: "Jun", scams: 60 },
  ];

  // Scam Risk Level (progress bar)
  const scamRisk = 25; // % of scam reports

  const scanOptions = [
    { icon: <Phone size={28} />, label: "Phone Check", link: "/phone" },
    { icon: <LinkIcon size={28} />, label: "URL Check", link: "/url" },
    { icon: <Mail size={28} />, label: "Email Check", link: "/email" },
    { icon: <Users size={28} />, label: "Social Media", link: "/social" },
  ];

  return (
    <div className="pt-24 px-6 min-h-screen bg-gray-50 flex flex-col items-center">
      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Smart Scans. <span className="text-indigo-600">Safer Clicks.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Protect yourself from fraud calls, phishing links, fake job emails, and scam posts —
          all in one place.
        </p>
        <button
          onClick={() => navigate("/social")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Start Scanning
        </button>
      </motion.div>

      {/* ✅ Pie Chart Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mb-10"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Verification Insights
        </h2>
        <PieChart width={320} height={280}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </motion.div>

      {/* ✅ Scam Risk Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mb-10"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Scam Risk Level</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full ${
              scamRisk > 50 ? "bg-red-500" : "bg-green-500"
            }`}
            style={{ width: `${scamRisk}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {scamRisk}% scam reports detected
        </p>
      </motion.div>

      {/* ✅ Scam Trend Graph */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-3xl mb-10"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Scam Trends (Last 6 Months)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="scams"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 5, fill: "#ef4444" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ✅ Scan Options */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        {scanOptions.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(item.link)}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:shadow-lg transition"
          >
            <div className="text-indigo-600">{item.icon}</div>
            <p className="font-medium text-gray-700">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
