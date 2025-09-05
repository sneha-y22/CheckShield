"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import FormCard from "../components/FormCard"
import ScanCard from "../components/ScanCard"

const UrlCheck = () => {
  const [url, setUrl] = useState("")
  const [scanResult, setScanResult] = useState(null)
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = async () => {
    if (!url.trim()) return

    setIsScanning(true)

    setTimeout(() => {
      const isScam = Math.random() > 0.6
      const confidence = Math.floor(Math.random() * 20) + 80

      setScanResult({
        result: isScam ? "scam" : "safe",
        confidence: confidence,
        type: "Website URL",
        value: url,
        details: isScam
          ? "Website shows signs of fraudulent job posting activities"
          : "Website appears to be a legitimate job board or company site",
      })

      setIsScanning(false)
    }, 2500)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Website URL Verification</h1>
        <p className="text-lg text-slate-600">Analyze job posting websites and company URLs for authenticity</p>
      </div>

      <FormCard title="Enter Website URL" description="Check if a job posting website is legitimate">
        <div className="flex space-x-4">
          <input
            type="url"
            placeholder="Enter website URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          />
          <button
            onClick={handleScan}
            disabled={!url.trim() || isScanning}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <Search className="h-5 w-5" />
            <span>{isScanning ? "Analyzing..." : "Analyze"}</span>
          </button>
        </div>
      </FormCard>

      {scanResult && (
        <div className="mt-8">
          <ScanCard {...scanResult} />
        </div>
      )}
    </div>
  )
}

export default UrlCheck
