import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

const ScanCard = ({ result, confidence, type, value, details }) => {
  const getResultIcon = () => {
    switch (result) {
      case "safe":
        return <CheckCircle className="h-8 w-8 text-green-500" />
      case "scam":
        return <XCircle className="h-8 w-8 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-8 w-8 text-yellow-500" />
      default:
        return <AlertTriangle className="h-8 w-8 text-gray-500" />
    }
  }

  const getResultColor = () => {
    switch (result) {
      case "safe":
        return "bg-green-50 border-green-200"
      case "scam":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getResultText = () => {
    switch (result) {
      case "safe":
        return "Verified Safe"
      case "scam":
        return "Potential Scam Detected"
      case "warning":
        return "Proceed with Caution"
      default:
        return "Analysis Complete"
    }
  }

  return (
    <div className={`p-6 rounded-xl border-2 shadow-md bg-gradient-to-r from-white via-indigo-50/40 to-cyan-50/40 transition-all duration-300 ${getResultColor()}`}>
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
            {getResultIcon()}
            <div>
                <h3 className="text-lg font-semibold text-slate-800">{getResultText()}</h3>
                <p className="text-slate-600 font-mono text-sm">{value}</p>
            </div>
            </div>
            <div
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                result === "safe"
                ? "bg-green-100 text-green-800"
                : result === "scam"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
            }`}
            >
            {confidence}% Confidence
            </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
            className={`h-2 rounded-full transition-all duration-500 ${
                result === "safe" ? "bg-green-500" : result === "scam" ? "bg-red-500" : "bg-yellow-500"
            }`}
            style={{ width: `${confidence}%` }}
            ></div>
        </div>

        {details && (
            <div className="text-sm text-slate-700 bg-white/70 p-3 rounded-lg">
            <strong>Analysis Details:</strong> {details}
            </div>
        )}
        </div>
  )
}

export default ScanCard
