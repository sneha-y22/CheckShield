import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { Phone, Link as LinkIcon, Mail, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // Dummy chart data (later this will come from backend)
  const data = [
    { name: "Safe", value: 75 },
    { name: "Scam", value: 20 },
    { name: "Other", value: 5 },
  ];
  const COLORS = ["#22c55e", "#ef4444", "#94a3b8"];

  const scanOptions = [
    { icon: <Phone size={28} />, label: "Phone Check", link: "/phone" },
    { icon: <LinkIcon size={28} />, label: "URL Check", link: "/url" },
    { icon: <Mail size={28} />, label: "Email Check", link: "/email" },
    { icon: <Users size={28} />, label: "Social Media", link: "/social" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center px-6">
      {/* Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Welcome to <span className="text-indigo-600">CheckShield</span>
      </motion.h1>

      {/* Pie Chart Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mb-10"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Scam Insights
        </h2>
        <PieChart width={320} height={280}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </motion.div>

      {/* Scan Options */}
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
