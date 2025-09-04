import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Loader2 } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function PhoneCheck() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!phone) return;
    setLoading(true);
    setResult(null);

    // TODO: connect to backend API
    setTimeout(() => {
      setResult({
        safe: 80,
        scam: 20,
        verdict: "✅ This number looks safe!",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center px-6">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold text-gray-800 mb-8"
      >
        Phone <span className="text-indigo-600">Check</span>
      </motion.h1>

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleCheck}
          disabled={loading}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Checking...
            </>
          ) : (
            "Check Number"
          )}
        </button>
      </div>

      {result && (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-8 bg-white shadow-md rounded-2xl p-6 w-full max-w-lg text-center"
      >
        <ShieldCheck className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Result</h2>

        <div className="flex justify-center items-center gap-10">
          {/* Safe Circle */}
          <div className="w-28">
            <CircularProgressbar
              value={result.safe}
              text={`${result.safe}%`}
              styles={buildStyles({
                textColor: "#22c55e",
                pathColor: "#22c55e",
                trailColor: "#e5e7eb",
                textSize: "16px",
              })}
            />
            <span className="text-green-600 font-medium block mt-2 text-sm">Safe</span>
          </div>

          {/* Scam Circle */}
          <div className="w-28">
            <CircularProgressbar
              value={result.scam}
              text={`${result.scam}%`}
              styles={buildStyles({
                textColor: "#ef4444",
                pathColor: "#ef4444",
                trailColor: "#e5e7eb",
                textSize: "16px",
              })}
            />
            <span className="text-red-600 font-medium block mt-2 text-sm">Scam</span>
          </div>
        </div>

        {/* Verdict Badge */}
        <div
          className={`mt-6 inline-block px-5 py-2 rounded-full text-sm font-semibold ${
            result.scam > 50
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {result.verdict}
        </div>
      </motion.div>
    )}
    </div>
  );
}
