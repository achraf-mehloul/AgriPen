import { Droplet, Thermometer, Activity, Zap, Download, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    {
      icon: Droplet,
      label: 'Soil Humidity',
      value: '62%',
      status: 'optimal',
      color: 'blue',
    },
    {
      icon: Thermometer,
      label: 'Temperature',
      value: '19°C',
      status: 'good',
      color: 'orange',
    },
    {
      icon: Activity,
      label: 'pH Level',
      value: '6.5',
      status: 'neutral',
      color: 'green',
    },
    {
      icon: Zap,
      label: 'Salinity',
      value: '0.7 dS/m',
      status: 'low',
      color: 'yellow',
    },
  ];

  const recommendations = [
    {
      crop: 'Tomatoes',
      icon: '🍅',
      suitability: 95,
      reason: 'Perfect pH and humidity levels',
    },
    {
      crop: 'Olive Trees',
      icon: '🫒',
      suitability: 88,
      reason: 'Excellent drainage and mineral content',
    },
    {
      crop: 'Mint',
      icon: '🌱',
      suitability: 82,
      reason: 'Good moisture retention',
    },
  ];

  return (
    <section id="dashboard" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wide">Live Demo</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Dashboard Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time soil data visualization and AI-powered recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Soil Analysis Report</h3>
              <p className="text-gray-500 mt-1">Location: Field A-23 • Last updated: 2 minutes ago</p>
            </div>
            <button className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-5 h-5" />
              <span>Export PDF</span>
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-green-500 transition-colors">
                <div className={`w-12 h-12 bg-${metric.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-${metric.color}-500`}></div>
                  <span className="text-xs text-gray-600 capitalize">{metric.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">AI Recommendations</h4>
            </div>

            <p className="text-gray-700 mb-8 text-lg">
              Based on your soil analysis, here are the best crops for optimal yield:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4 text-center">{rec.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2 text-center">{rec.crop}</h5>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Suitability</span>
                      <span className="font-semibold text-green-600">{rec.suitability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${rec.suitability}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 text-center">{rec.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-2">Irrigation Alert</h5>
                <p className="text-gray-700">
                  Humidity levels are expected to drop by 12% next week. Recommended irrigation on Tuesday to maintain optimal soil moisture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold mb-2">24/7</div>
            <div className="text-green-100">Real-time Monitoring</div>
          </div>
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold mb-2">15+</div>
            <div className="text-blue-100">Data Points Analyzed</div>
          </div>
          <div className="bg-amber-600 text-white rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold mb-2">AI</div>
            <div className="text-amber-100">Powered Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
