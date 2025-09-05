"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, MessageCircle, Flag, Calendar, User, AlertTriangle, CheckCircle } from "lucide-react"
import FormCard from "../components/FormCard"

const Community = () => {
  const [selectedTab, setSelectedTab] = useState("reports")
  const [newReport, setNewReport] = useState({ title: "", description: "", category: "" })

  // Sample community reports data
  const communityReports = [
    {
      id: 1,
      title: "Fake Amazon Remote Customer Service Jobs",
      description:
        "Multiple fake job postings claiming to be Amazon remote customer service positions. They ask for personal information and SSN during the 'application process'.",
      author: "JobSeeker_Sarah",
      date: "2 hours ago",
      category: "Identity Theft",
      upvotes: 23,
      downvotes: 1,
      comments: 8,
      verified: true,
      severity: "high",
    },
    {
      id: 2,
      title: "Suspicious LinkedIn Recruiter - TechCorp Solutions",
      description:
        "Received a message from someone claiming to be a recruiter at TechCorp Solutions. Profile looks fake and they're asking for bank details for 'direct deposit setup' before interview.",
      author: "DevGuy_Mike",
      date: "5 hours ago",
      category: "Phishing",
      upvotes: 18,
      downvotes: 0,
      comments: 12,
      verified: true,
      severity: "critical",
    },
    {
      id: 3,
      title: "Instagram 'Work From Home' Scam",
      description:
        "Instagram ads promoting work-from-home opportunities that require upfront payment for 'starter kits'. Multiple people in my network have been targeted.",
      author: "AlertUser_Jenny",
      date: "1 day ago",
      category: "Payment Scam",
      upvotes: 31,
      downvotes: 2,
      comments: 15,
      verified: false,
      severity: "medium",
    },
    {
      id: 4,
      title: "Fake Google Interview Process",
      description:
        "Received an email claiming to be from Google HR for a software engineer position. The email domain was suspicious and they wanted to conduct interview via WhatsApp.",
      author: "CodeWarrior_Alex",
      date: "2 days ago",
      category: "Fake Recruiter",
      upvotes: 45,
      downvotes: 1,
      comments: 22,
      verified: true,
      severity: "high",
    },
  ]

  const handleSubmitReport = (e) => {
    e.preventDefault()
    // Handle report submission
    console.log("New report submitted:", newReport)
    setNewReport({ title: "", description: "", category: "" })
  }

  const handleVote = (reportId, voteType) => {
    console.log(`Voted ${voteType} on report ${reportId}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Community Insights</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Join our community of job seekers sharing experiences and protecting each other from employment scams. Your
          reports help keep everyone safe.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedTab("reports")}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              selectedTab === "reports" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Community Reports
          </button>
          <button
            onClick={() => setSelectedTab("submit")}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              selectedTab === "submit" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-600 hover:text-slate-800"
            }`}
          >
            Submit Report
          </button>
        </div>
      </div>

      {selectedTab === "reports" && (
        <div className="space-y-6">
          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <FormCard className="text-center">
              <div className="text-3xl font-bold text-indigo-600">1,247</div>
              <div className="text-sm text-slate-600 mt-1">Total Reports</div>
            </FormCard>
            <FormCard className="text-center">
              <div className="text-3xl font-bold text-green-600">892</div>
              <div className="text-sm text-slate-600 mt-1">Verified Reports</div>
            </FormCard>
            <FormCard className="text-center">
              <div className="text-3xl font-bold text-slate-800">5,634</div>
              <div className="text-sm text-slate-600 mt-1">Community Members</div>
            </FormCard>
            <FormCard className="text-center">
              <div className="text-3xl font-bold text-orange-600">156</div>
              <div className="text-sm text-slate-600 mt-1">Active This Week</div>
            </FormCard>
          </div>

          {/* Reports List */}
          <div className="space-y-6">
            {communityReports.map((report) => (
              <FormCard key={report.id} className="hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-800">{report.title}</h3>
                        {report.verified && (
                          <CheckCircle className="h-5 w-5 text-green-500" title="Verified by moderators" />
                        )}
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            report.severity === "critical"
                              ? "bg-red-100 text-red-800"
                              : report.severity === "high"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {report.severity.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {report.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {report.date}
                        </div>
                        <span className="bg-slate-100 px-2 py-1 rounded text-xs">{report.category}</span>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <Flag className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <p className="text-slate-700 leading-relaxed">{report.description}</p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleVote(report.id, "up")}
                        className="flex items-center space-x-2 text-slate-600 hover:text-green-600 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm font-medium">{report.upvotes}</span>
                      </button>
                      <button
                        onClick={() => handleVote(report.id, "down")}
                        className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors"
                      >
                        <ThumbsDown className="h-4 w-4" />
                        <span className="text-sm font-medium">{report.downvotes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">{report.comments} comments</span>
                      </button>
                    </div>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
                  </div>
                </div>
              </FormCard>
            ))}
          </div>
        </div>
      )}

      {selectedTab === "submit" && (
        <div className="max-w-3xl mx-auto">
          <FormCard
            title="Submit a Scam Report"
            description="Help protect other job seekers by reporting suspicious job postings or recruiters"
          >
            <form onSubmit={handleSubmitReport} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Report Title</label>
                <input
                  type="text"
                  value={newReport.title}
                  onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
                  placeholder="Brief description of the scam (e.g., 'Fake Amazon Remote Jobs')"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select
                  value={newReport.category}
                  onChange={(e) => setNewReport({ ...newReport, category: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Fake Job Posts">Fake Job Posts</option>
                  <option value="Phishing Emails">Phishing Emails</option>
                  <option value="Fake Recruiters">Fake Recruiters</option>
                  <option value="Payment Scams">Payment Scams</option>
                  <option value="Identity Theft">Identity Theft</option>
                  <option value="MLM Schemes">MLM Schemes</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Detailed Description</label>
                <textarea
                  value={newReport.description}
                  onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
                  placeholder="Provide detailed information about the scam, including company names, contact information, and what made it suspicious..."
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Before submitting:</p>
                    <ul className="space-y-1">
                      <li>• Do not include personal information (yours or others)</li>
                      <li>• Provide factual information only</li>
                      <li>• Include specific details that can help others identify the scam</li>
                      <li>• Reports are reviewed by moderators before publication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setNewReport({ title: "", description: "", category: "" })}
                  className="px-6 py-3 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </FormCard>
        </div>
      )}
    </div>
  )
}

export default Community
