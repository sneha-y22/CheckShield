import { motion } from "framer-motion";
import { Mail, ShieldCheck, Loader2 } from "lucide-react";
import { useState } from "react";

export default function EmailCheck() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!email) return;
    setLoading(true);
    setResult(null);

    // TODO: connect to backend API
    setTimeout(() => {
      setResult({
        safe: 55,
        scam: 45,
        verdict: "⚠️ This email/domain may be fraudulent.",
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
        Email <span className="text-indigo-600">Check</span>
      </motion.h1>

      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter email or domain"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            "Check Email"
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
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Result</h2>
          <p className="text-gray-600">{result.verdict}</p>
          <div className="mt-4 flex justify-around">
            <div className="text-green-600 font-bold">Safe: {result.safe}%</div>
            <div className="text-red-600 font-bold">Scam: {result.scam}%</div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
