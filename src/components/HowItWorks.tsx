import { Zap, Radio, LineChart, Sprout } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Sprout,
      title: 'Insert into Soil',
      description: 'Simply push the AGRIPEN into the ground at your desired location. The device activates automatically.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Smart Analysis',
      description: 'Advanced sensors measure humidity, pH, salinity, temperature, and mineral content in real-time.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Radio,
      title: 'Wireless Transfer',
      description: 'Data is instantly transmitted via Bluetooth or Wi-Fi to your mobile app or web dashboard.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: LineChart,
      title: 'AI Recommendations',
      description: 'Get intelligent insights and crop recommendations based on your soil analysis and local conditions.',
      color: 'from-green-600 to-green-700',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wide">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            How AGRIPEN Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to transform your farming with intelligent soil analysis
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-blue-200 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-gray-100 hover:border-green-500 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What We Measure
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Soil Humidity', value: 'Optimal water content analysis' },
                  { label: 'pH Level', value: 'Acidity and alkalinity balance' },
                  { label: 'Salinity', value: 'Salt concentration measurement' },
                  { label: 'Temperature', value: 'Soil thermal conditions' },
                  { label: 'Mineral Content', value: 'NPK and micronutrients' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-b from-green-500 to-green-700 rounded-full mx-auto mb-6 relative shadow-2xl">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-300 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-full"></div>
                  </div>
                  <p className="text-gray-700 font-semibold text-lg">AGRIPEN Device</p>
                  <p className="text-gray-500 text-sm mt-2">Smart Soil Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
