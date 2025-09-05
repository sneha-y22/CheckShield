import { Link } from "react-router-dom"
import { Phone, Mail, LinkIcon, Users, TrendingUp, AlertTriangle } from "lucide-react"
import Chart from "../components/Chart"
import FormCard from "../components/FormCard"

const Dashboard = () => {
  // Sample data for job seeker scam detection
  const scanData = [
    { name: "Safe Jobs", value: 73, color: "#10b981" },
    { name: "Scam Jobs", value: 27, color: "#ef4444" },
  ]

  const monthlyTrends = [
    { month: "Jan", scams: 89, safe: 312 },
    { month: "Feb", scams: 76, safe: 345 },
    { month: "Mar", scams: 102, safe: 298 },
    { month: "Apr", scams: 67, safe: 378 },
    { month: "May", scams: 94, safe: 356 },
    { month: "Jun", scams: 58, safe: 402 },
  ]

  const scamCategories = [
    { category: "Fake Job Posts", count: 156 },
    { category: "Phishing Emails", count: 134 },
    { category: "Fake Recruiters", count: 98 },
    { category: "Payment Scams", count: 87 },
    { category: "Identity Theft", count: 65 },
  ]

  const quickScanOptions = [
    {
      title: "Phone Verification",
      description: "Check if recruiter phone numbers are legitimate",
      icon: Phone,
      path: "/phone-check",
      color: "bg-blue-500",
    },
    {
      title: "Email Verification",
      description: "Verify job offer emails and recruiter addresses",
      icon: Mail,
      path: "/email-check",
      color: "bg-green-500",
    },
    {
      title: "Job Site Check",
      description: "Analyze job posting websites for authenticity",
      icon: LinkIcon,
      path: "/url-check",
      color: "bg-purple-500",
    },
    {
      title: "Social Media Check",
      description: "Verify LinkedIn/Instagram job posts and profiles",
      icon: Users,
      path: "/social-check",
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          Smart Scans. <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">Safer Job Hunting.</span>
        </h1>
        <p className="text-xl text-white-600 mb-8 max-w-3xl mx-auto">
          Protect yourself from job scams with our AI-powered verification system. Check recruiters, job posts, and
          company communications before you apply.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/social-check"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Start Job Scan
          </Link>
          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <FormCard className="text-center">
          <div className="text-3xl font-bold text-slate-800">1,247</div>
          <div className="text-sm text-slate-600 mt-1">Jobs Scanned Today</div>
          <div className="flex items-center justify-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+18% from yesterday</span>
          </div>
        </FormCard>

        <FormCard className="text-center">
          <div className="text-3xl font-bold text-red-600">337</div>
          <div className="text-sm text-slate-600 mt-1">Scams Detected</div>
          <div className="text-sm text-slate-600 mt-2">27% of scanned jobs</div>
        </FormCard>

        <FormCard className="text-center">
          <div className="text-3xl font-bold text-green-600">910</div>
          <div className="text-sm text-slate-600 mt-1">Job Seekers Protected</div>
          <div className="text-sm text-slate-600 mt-2">Safe applications verified</div>
        </FormCard>

        <FormCard className="text-center">
          <div className="text-3xl font-bold text-indigo-600">4.8/5</div>
          <div className="text-sm text-slate-600 mt-1">User Rating</div>
          <div className="text-sm text-slate-600 mt-2">Based on 2,340 reviews</div>
        </FormCard>
      </div>

      {/* Quick Scan Options */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Quick Job Safety Checks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickScanOptions.map((option, index) => (
            <Link key={index} to={option.path} className="group">
              <FormCard className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div
                    className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{option.title}</h3>
                  <p className="text-sm text-slate-600">{option.description}</p>
                </div>
              </FormCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Chart type="pie" data={scanData} title="Job Scan Results Distribution" />
        <Chart type="line" data={monthlyTrends} title="Monthly Job Scam Trends" />
      </div>

      {/* Scam Categories */}
      <div className="mb-12">
        <Chart type="bar" data={scamCategories} title="Top Job Scam Categories This Month" />
      </div>

      {/* Recent Alerts */}
      <FormCard title="Recent Job Scam Alerts" description="Stay informed about the latest job scam trends">
        <div className="space-y-4">
          {[
            {
              title: "Fake Remote Work Opportunities",
              severity: "high",
              time: "3 hours ago",
              description: "Scammers posting fake remote jobs requiring upfront payments for equipment",
            },
            {
              title: "LinkedIn Recruiter Impersonation",
              severity: "medium",
              time: "1 day ago",
              description: "Fake recruiters using stolen company logos to collect personal information",
            },
            {
              title: "Cryptocurrency Job Scams",
              severity: "high",
              time: "2 days ago",
              description: "Fraudulent crypto trading job offers targeting recent graduates",
            },
          ].map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
              <AlertTriangle
                className={`h-5 w-5 mt-0.5 ${alert.severity === "high" ? "text-red-500" : "text-yellow-500"}`}
              />
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">{alert.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{alert.description}</p>
                <span className="text-xs text-slate-500">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </FormCard>
    </div>
  )
}

export default Dashboard
