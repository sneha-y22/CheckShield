import { TrendingUp, AlertTriangle, Users } from "lucide-react"
import Chart from "../components/Chart"
import FormCard from "../components/FormCard"

const Reports = () => {
  // Monthly job scam trends data
  const monthlyTrends = [
    { month: "Jul", scams: 145, safe: 389, reports: 67 },
    { month: "Aug", scams: 132, safe: 412, reports: 89 },
    { month: "Sep", scams: 167, safe: 356, reports: 94 },
    { month: "Oct", scams: 189, safe: 334, reports: 112 },
    { month: "Nov", scams: 156, safe: 378, reports: 87 },
    { month: "Dec", scams: 198, safe: 298, reports: 134 },
  ]

  // Scam distribution by category
  const scamCategories = [
    { category: "Fake Remote Jobs", count: 234 },
    { category: "MLM Schemes", count: 189 },
    { category: "Phishing Emails", count: 167 },
    { category: "Identity Theft", count: 145 },
    { category: "Payment Scams", count: 123 },
    { category: "Fake Recruiters", count: 98 },
  ]

  // Platform distribution
  const platformData = [
    { name: "LinkedIn", value: 45, color: "#0077b5" },
    { name: "Indeed", value: 28, color: "#2557a7" },
    { name: "Facebook", value: 15, color: "#1877f2" },
    { name: "Instagram", value: 12, color: "#e4405f" },
  ]

  // Geographic distribution
  const geographicData = [
    { category: "North America", count: 456 },
    { category: "Europe", count: 234 },
    { category: "Asia Pacific", count: 189 },
    { category: "Latin America", count: 123 },
    { category: "Africa", count: 67 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Job Scam Reports & Trends</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive analytics and insights into job scam patterns, helping job seekers stay informed about the
          latest threats.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <FormCard className="text-center">
          <div className="text-3xl font-bold text-red-600">1,456</div>
          <div className="text-sm text-slate-600 mt-1">Total Scams Detected</div>
          <div className="flex items-center justify-center mt-2">
            <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-sm text-red-600">+23% this month</span>
          </div>
        </FormCard>

        <FormCard className="text-center">
          <div className="text-3xl font-bold text-green-600">3,247</div>
          <div className="text-sm text-slate-600 mt-1">Job Seekers Protected</div>
          <div className="text-sm text-slate-600 mt-2">Verified safe applications</div>
        </FormCard>

        <FormCard className="text-center">
          <div className="text-3xl font-bold text-indigo-600">583</div>
          <div className="text-sm text-slate-600 mt-1">Community Reports</div>
          <div className="text-sm text-slate-600 mt-2">User-submitted alerts</div>
        </FormCard>

        <FormCard className="text-center">
          <div className="text-3xl font-bold text-slate-800">94.2%</div>
          <div className="text-sm text-slate-600 mt-1">Detection Accuracy</div>
          <div className="text-sm text-slate-600 mt-2">AI verification rate</div>
        </FormCard>
      </div>

      {/* Monthly Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Chart type="line" data={monthlyTrends} title="Monthly Job Scam Detection Trends" />
        <Chart type="pie" data={platformData} title="Scams by Platform Distribution" />
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Chart type="bar" data={scamCategories} title="Top Job Scam Categories (Last 6 Months)" />
        <Chart type="bar" data={geographicData} title="Scam Reports by Region" />
      </div>

      {/* Recent Threat Intelligence */}
      <FormCard title="Latest Threat Intelligence" description="Recent job scam patterns and emerging threats">
        <div className="space-y-6">
          {[
            {
              title: "AI-Generated Fake Company Profiles",
              severity: "critical",
              date: "Dec 15, 2024",
              description:
                "Scammers using AI to create convincing fake company websites and LinkedIn profiles for remote job scams.",
              impact: "High - 156 reports in the last week",
              recommendation: "Always verify company registration and cross-check multiple sources before applying.",
            },
            {
              title: "Cryptocurrency Training Job Scams",
              severity: "high",
              date: "Dec 12, 2024",
              description: "Fraudulent job offers for cryptocurrency trading positions targeting college graduates.",
              impact: "Medium - 89 reports across social media platforms",
              recommendation: "Be wary of jobs requiring upfront cryptocurrency investments or training fees.",
            },
            {
              title: "Fake Recruiter Email Campaigns",
              severity: "medium",
              date: "Dec 10, 2024",
              description:
                "Mass phishing emails impersonating major tech company recruiters to steal personal information.",
              impact: "Medium - 67 reports from job seekers",
              recommendation:
                "Verify recruiter identity through official company channels before sharing personal data.",
            },
          ].map((threat, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-6 py-4 bg-slate-50 rounded-r-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-slate-800 text-lg">{threat.title}</h4>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      threat.severity === "critical"
                        ? "bg-red-100 text-red-800"
                        : threat.severity === "high"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {threat.severity.toUpperCase()}
                  </span>
                  <span className="text-sm text-slate-500">{threat.date}</span>
                </div>
              </div>
              <p className="text-slate-700 mb-3">{threat.description}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Impact: {threat.impact}</span>
                </div>
                <div className="flex items-start">
                  <Users className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-slate-700">Recommendation: {threat.recommendation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FormCard>

      {/* Weekly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormCard title="This Week's Summary" className="md:col-span-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-red-800">New Scam Alerts</h4>
                <p className="text-sm text-red-600">67 new job scam reports verified</p>
              </div>
              <div className="text-2xl font-bold text-red-600">+67</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-green-800">Jobs Verified Safe</h4>
                <p className="text-sm text-green-600">234 legitimate job opportunities confirmed</p>
              </div>
              <div className="text-2xl font-bold text-green-600">+234</div>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-blue-800">Community Reports</h4>
                <p className="text-sm text-blue-600">45 user-submitted scam reports processed</p>
              </div>
              <div className="text-2xl font-bold text-blue-600">+45</div>
            </div>
          </div>
        </FormCard>

        <FormCard title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
              Download Full Report
            </button>
            <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg font-semibold transition-colors">
              Subscribe to Alerts
            </button>
            <button className="w-full border border-slate-300 text-slate-600 hover:bg-slate-50 py-3 px-4 rounded-lg font-semibold transition-colors">
              Export Data (CSV)
            </button>
          </div>
        </FormCard>
      </div>
    </div>
  )
}

export default Reports
