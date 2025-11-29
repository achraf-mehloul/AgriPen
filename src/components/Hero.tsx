import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-600">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Leaf className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float">
          <Leaf className="w-24 h-24 text-white" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float-delayed">
          <Leaf className="w-14 h-14 text-white" />
        </div>
      </div>

      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            Hello
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AGRIPEN
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-4 max-w-3xl mx-auto">
            القلم الزراعي الذكي
          </p>

          <p className="text-lg md:text-xl text-green-50 mb-12 max-w-2xl mx-auto">
            An intelligent pen that analyzes your soil with AI and tells you everything you need for perfect farming
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="group bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>Discover Agripen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all transform hover:scale-105"
            >
              Pre-Order Now
            </button>
          </div>
        </div>

        <div className="mt-20 relative">
  <div className="w-64 h-64 mx-auto flex items-center justify-center animate-bounce-slow shadow-2xl">
    <img src="/logo.png" alt="AgriPen Logo" className="w-48 h-48 object-contain rounded-3xl shadow-2xl"/>
  </div>
</div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
