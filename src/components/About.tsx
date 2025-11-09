import { Target, Leaf, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const goals = [
    {
      icon: Globe,
      title: 'Sustainable Agriculture',
      description: 'Supporting environmentally-friendly farming practices for a healthier planet',
    },
    {
      icon: TrendingUp,
      title: 'Increase Productivity',
      description: 'Boosting farmers\' yields with data-driven insights and recommendations',
    },
    {
      icon: Leaf,
      title: 'Food Security',
      description: 'Contributing to global food security through smarter farming',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-semibold uppercase tracking-wide">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About AGRIPEN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing agriculture through intelligent soil analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Unknown soil composition leads to poor crop choices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Water waste from inefficient irrigation practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Low productivity and failed harvests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Expensive soil testing that takes days to get results</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-lg mb-4">
                AGRIPEN is an intelligent device that analyzes soil in real-time using multiple sensors and AI technology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Instant soil analysis in seconds, not days</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>AI-powered crop recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Real-time monitoring and alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Data-driven farming decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Goals</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <goal.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h4>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-50 to-green-50 p-12 rounded-3xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why AGRIPEN?
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Because <span className="font-bold text-green-700">healthy soil</span> is the foundation of
              successful farming. With AGRIPEN, farmers can make informed decisions,
              save resources, and grow the <span className="font-bold text-green-700">right crops</span> in
              the <span className="font-bold text-green-700">right soil</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
