import { Smartphone, Wifi, Battery, Cloud, Bell, MapPin, Sun, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Monitor your soil data anytime, anywhere with our intuitive mobile application',
    },
    {
      icon: Wifi,
      title: 'Wireless Connectivity',
      description: 'Seamless Bluetooth and Wi-Fi connection for instant data transfer',
    },
    {
      icon: Battery,
      title: 'Long Battery Life',
      description: 'Up to 6 months of continuous monitoring on a single charge',
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'All your data securely stored and accessible from any device',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Receive notifications when soil conditions change or require attention',
    },
    {
      icon: MapPin,
      title: 'Multi-Location',
      description: 'Manage multiple fields and compare soil data across locations',
    },
    {
      icon: Sun,
      title: 'Weather Integration',
      description: 'Combines soil data with weather forecasts for better planning',
    },
    {
      icon: Shield,
      title: 'Waterproof Design',
      description: 'Durable and weather-resistant for all farming conditions',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wide">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Powerful Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for intelligent farming in one smart device
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Mobile App Features</h3>
            <ul className="space-y-4">
              {[
                'Real-time soil data visualization',
                'Historical data tracking and trends',
                'AI-powered crop recommendations',
                'Customizable alerts and notifications',
                'Multi-device synchronization',
                'Offline mode for remote locations',
                'Export reports in PDF format',
                'Community sharing features',
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-green-50">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex space-x-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-center flex-1">
                <div className="text-sm text-green-100">Available on</div>
                <div className="font-bold mt-1">iOS & Android</div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AGRIPEN?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Save Money</h4>
                    <p className="text-gray-600 text-sm">Reduce water waste and optimize fertilizer usage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Increase Yields</h4>
                    <p className="text-gray-600 text-sm">Make data-driven decisions for better harvests</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Save Time</h4>
                    <p className="text-gray-600 text-sm">Instant results instead of waiting days for lab tests</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Sustainable</h4>
                    <p className="text-gray-600 text-sm">Promote eco-friendly farming practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">3 Year</div>
              <div className="text-gray-700 font-semibold">Warranty Included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
