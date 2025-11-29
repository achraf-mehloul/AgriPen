import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="AgriPen Logo"className="w-12 h-12 object-contain"/>
                </div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Revolutionizing agriculture through intelligent soil analysis. From soil to artificial intelligence,
              we're building the future of smart farming.
            </p>
            <div className="flex space-x-4">
              {['L', 'I', 'T', 'F'].map((letter, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Social media"
                >
                  <span className="font-semibold">{letter}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'How It Works', 'Dashboard', 'Features'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">achref.dev.ai@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+213 782675199</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Innovation Center, AgriTech Hub</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 AGRIPEN. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
