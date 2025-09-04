import { motion } from "framer-motion";
import { Upload, ShieldCheck, Loader2 } from "lucide-react";
import { useState } from "react";

export default function SocialCheck() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setResult(null);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);
    setResult(null);

    // Simulate AI scan
    setTimeout(() => {
      setResult({
        safe: 72,
        scam: 28,
        verdict: "⚠️ Suspicious job post, proceed carefully!",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center px-6">
      {/* Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl font-bold text-gray-800 mb-8"
      >
        Social Media <span className="text-indigo-600">Check</span>
      </motion.h1>

      {/* Upload Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg flex flex-col items-center"
      >
        <label
          htmlFor="file-upload"
          className="cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-6 w-full flex flex-col items-center hover:border-indigo-500 transition"
        >
          {!preview ? (
            <>
              <Upload className="w-10 h-10 text-gray-400 mb-3" />
              <p className="text-gray-600">
                {file ? file.name : "Upload screenshot (PNG, JPG)"}
              </p>
            </>
          ) : (
            <img
              src={preview}
              alt="Preview"
              className="max-h-60 rounded-lg shadow-sm object-contain"
            />
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <button
          onClick={handleUpload}
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition flex items-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Post"
          )}
        </button>
      </motion.div>

      {/* Result Section */}
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
