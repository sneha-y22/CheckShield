"use client"

import { useState } from "react"
import { Upload, Camera, CheckCircle, XCircle } from "lucide-react"
import FormCard from "../components/FormCard"
import ScanCard from "../components/ScanCard"

const SocialCheck = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [scanResult, setScanResult] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleFileSelect = (file) => {
    setSelectedFile(file)
    setScanResult(null)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleScan = async () => {
    if (!selectedFile) return

    setIsScanning(true)

    // Simulate AI analysis
    setTimeout(() => {
      const isScam = Math.random() > 0.6
      const confidence = Math.floor(Math.random() * 20) + 80

      const scamReasons = [
        "Job requires upfront payment for training materials",
        "Salary range seems unrealistic for the position level",
        "Company profile created recently with limited information",
        "Job description contains multiple spelling errors",
        "Recruiter profile has suspicious activity patterns",
      ]

      const safeReasons = [
        "Company has verified business registration and LinkedIn presence",
        "Job requirements match industry standards",
        "Recruiter profile shows legitimate work history",
        "Salary range is appropriate for the role and location",
        "Job posting follows professional formatting standards",
      ]

      setScanResult({
        result: isScam ? "scam" : "safe",
        confidence: confidence,
        type: "Social Media Job Post",
        value: selectedFile.name,
        details: isScam
          ? scamReasons[Math.floor(Math.random() * scamReasons.length)]
          : safeReasons[Math.floor(Math.random() * safeReasons.length)],
      })

      setIsScanning(false)
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Social Media Job Post Verification</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Upload screenshots of job posts from LinkedIn, Instagram, or other social platforms to verify their
          authenticity and protect yourself from job scams.
        </p>
      </div>

      {/* Upload Section */}
      <FormCard title="Upload Job Post Screenshot" description="Supported formats: JPG, PNG, PDF. Max size: 10MB">
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragActive ? "border-indigo-500 bg-indigo-50" : "border-slate-300 hover:border-indigo-400 hover:bg-slate-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Camera className="h-12 w-12 text-green-500" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-800">{selectedFile.name}</p>
                <p className="text-sm text-slate-600">File size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  {isScanning ? "Analyzing..." : "Analyze Job Post"}
                </button>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="border border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Remove File
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Upload className="h-12 w-12 text-slate-400" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-800 mb-2">Drop your job post screenshot here</p>
                <p className="text-slate-600 mb-4">or click to browse files</p>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer transition-colors inline-block"
                >
                  Choose File
                </label>
              </div>
            </div>
          )}
        </div>
      </FormCard>

      {/* Scanning Progress */}
      {isScanning && (
        <div className="mt-8">
          <FormCard>
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <h3 className="text-lg font-semibold text-slate-800">Analyzing Job Post...</h3>
              <p className="text-slate-600">
                Our AI is checking for scam indicators, company verification, and job authenticity.
              </p>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
            </div>
          </FormCard>
        </div>
      )}

      {/* Results */}
      {scanResult && (
        <div className="mt-8">
          <ScanCard {...scanResult} />
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-12">
        <FormCard title="Job Scam Red Flags to Watch For" description="Common warning signs in social media job posts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-red-600 flex items-center">
                <XCircle className="h-5 w-5 mr-2" />
                Warning Signs
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Requests for upfront payments or personal financial information</li>
                <li>• Unrealistic salary promises (e.g., $5000/week for part-time work)</li>
                <li>• Poor grammar, spelling errors, or unprofessional formatting</li>
                <li>• Vague job descriptions or company information</li>
                <li>• Pressure to respond immediately or "limited time offers"</li>
                <li>• Requests to communicate outside the platform immediately</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Legitimate Job Signs
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Clear company name with verifiable business registration</li>
                <li>• Detailed job description with specific requirements</li>
                <li>• Professional communication and proper grammar</li>
                <li>• Realistic salary ranges for the industry and location</li>
                <li>• Company website and established social media presence</li>
                <li>• Standard application process through official channels</li>
              </ul>
            </div>
          </div>
        </FormCard>
      </div>
    </div>
  )
}

export default SocialCheck
