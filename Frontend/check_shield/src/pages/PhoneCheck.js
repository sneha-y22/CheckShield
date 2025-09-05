"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import FormCard from "../components/FormCard"
import ScanCard from "../components/ScanCard"

const PhoneCheck = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [scanResult, setScanResult] = useState(null)
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = async () => {
    if (!phoneNumber.trim()) return

    setIsScanning(true)

    // Simulate phone verification
    setTimeout(() => {
      const isScam = Math.random() > 0.7
      const confidence = Math.floor(Math.random() * 20) + 80

      setScanResult({
        result: isScam ? "scam" : "safe",
        confidence: confidence,
        type: "Phone Number",
        value: phoneNumber,
        details: isScam
          ? "This number has been reported for job scam activities"
          : "Number appears to be from a legitimate business",
      })

      setIsScanning(false)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Phone Number Verification</h1>
        <p className="text-lg text-slate-600">Verify recruiter and company phone numbers to avoid job scam calls</p>
      </div>

      <FormCard title="Enter Phone Number" description="Check if a recruiter's phone number is legitimate">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="tel"
                placeholder="Enter phone number (e.g., +1-555-123-4567)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              />
            </div>
            <button
              onClick={handleScan}
              disabled={!phoneNumber.trim() || isScanning}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>{isScanning ? "Checking..." : "Verify"}</span>
            </button>
          </div>
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

export default PhoneCheck
