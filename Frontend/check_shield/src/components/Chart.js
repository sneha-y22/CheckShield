import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const pastelColors = ["#6366f1", "#a78bfa", "#22d3ee", "#fca5a5", "#34d399"]

const Chart = ({ type, data, title, className = "" }) => {
  const renderChart = () => {
    switch (type) {
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pastelColors[index % pastelColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )

      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="safe"
                stroke="#34d399"
                strokeWidth={3}
                dot={{ r: 5, fill: "#34d399" }}
              />
              <Line
                type="monotone"
                dataKey="scams"
                stroke="#fca5a5"
                strokeWidth={3}
                dot={{ r: 5, fill: "#fca5a5" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )

      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="category" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="count" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0.7} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        )

      default:
        return (
          <div className="flex items-center justify-center h-64 text-slate-500">
            Chart type not supported
          </div>
        )
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-white via-indigo-50 to-cyan-50 border border-indigo-100 rounded-xl shadow-md p-6 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-slate-800 mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
          {title}
        </h3>
      )}
      {renderChart()}
    </div>
  )
}

export default Chart
