import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      title: "AgriPen — Smart Soil Analyzer",
      subtitle:
        "Instant, AI-powered soil diagnostics in a pocket-sized device. Make smarter planting decisions and maximize yields.",
      cta: "See Demo (coming soon)",
      aboutTitle: "About AgriPen",
      about:
        "AgriPen is a pen-shaped IoT device that performs rapid multi-sensor soil analysis. Powered by AI, it provides immediate, data-driven recommendations on fertility, nutrient deficiencies, and the best crops or trees for the land.",
      problemTitle: "Problem",
      problem:
        "Farmers often plant without precise knowledge of their soil. Traditional lab tests are slow, expensive, and hard to access in rural areas.",
      solutionTitle: "Solution",
      solution:
        "AgriPen brings an affordable, on-site diagnostic tool that delivers instant insights to improve productivity and reduce waste.",
      featuresTitle: "Key Features",
      features: [
        "Instant multi-sensor analysis (pH, moisture, macro/micronutrients)",
        "AI-based crop and fertilizer recommendations",
        "Connected mobile app with historical tracking",
        "Low-cost, rugged and portable for field use"
      ],
      techTitle: "Technology",
      tech:
        "Combines precision sensors, edge computing, and cloud-AI models trained on regional soil datasets. Secure IoT communication and an intuitive mobile dashboard.",
      teamTitle: "Team",
      team: ["Achref Mehloul — Founder & AI Engineer", "Ayoub Laani — Hardware & IoT"],
      contactTitle: "Contact",
      contact:
        "Email us: achraf.dev.ai@gmail.com — We’re building a demo and pilot program for Algerian farmers.",
      footer: "© AgriPen Team — Built for sustainable farming"
    },
    ar: {
      title: "AgriPen — القلم الذكي لتحليل التربة",
      subtitle:
        "تشخيص فوري للتربة مدعوم بالذكاء الاصطناعي في جهاز صغير الحجم. قرارات زراعية أذكى وإنتاج أعلى.",
      cta: "شاهد العرض (قريبًا)",
      aboutTitle: "عن AgriPen",
      about:
        "AgriPen هو جهاز على شكل قلم يقوم بتحليل التربة عبر حساسات متعددة. مدعوم بالذكاء الاصطناعي، يمنح توصيات فورية حول الخصوبة ونقص العناصر وأنسب المحاصيل أو الأشجار.",
      problemTitle: "المشكلة",
      problem:
        "الفلاحون يزرعون غالبًا دون معرفة دقيقة بحالة التربة. تحاليل المختبر التقليدية بطيئة ومكلفة وصعبة الوصول في المناطق الريفية.",
      solutionTitle: "الحل",
      solution:
        "AgriPen يوفّر أداة تشخيص ميدانية ميسورة التكلفة تعطى بيانات فورية لرفع الإنتاجية وتقليل الهدر.",
      featuresTitle: "المميزات الرئيسية",
      features: [
        "تحليل فوري متعدد الحساسات (الـpH، الرطوبة، العناصر الكبرى والصغرى)",
        "توصيات محاصيل وأسمدة مبنية على الذكاء الاصطناعي",
        "تطبيق متصل يعرض السجل والتوصيات",
        "قابل للحمل، متين ومناسب للعمل في الحقول"
      ],
      techTitle: "التقنية",
      tech:
        "يجمع بين حساسات دقيقة، حوسبة على الحافة ونماذج سحابية مدربة على قواعد بيانات تربة محلية. اتصالات آمنة وواجهة تطبيق سهلة الاستخدام.",
      teamTitle: "الفريق",
      team: ["أشرف المهلول — مؤسس ومهندس ذكاء اصطناعي", "أيوب لاني — الأجهزة وإنترنت الأشياء"],
      contactTitle: "اتصل بنا",
      contact:
        "البريد: achraf.dev.ai@gmail.com — نحن بصدد بناء نسخة تجريبية وبرنامج تجريبي للمزارعين الجزائريين.",
      footer: "© فريق AgriPen — لبناء فلاحة مستدامة"
    }
  };

  const data = t[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-400 flex items-center justify-center text-white font-bold">AP</div>
          <div>
            <h1 className="text-lg font-semibold">AgriPen</h1>
            <p className="text-xs text-gray-500">Smart Soil Analyzer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#tech" className="hover:underline">Technology</a>
            <a href="#team" className="hover:underline">Team</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="px-3 py-1 border rounded-full text-sm" aria-label="Toggle language">
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a href="#contact" className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm">Contact</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{data.title}</h2>
            <p className="mt-4 text-gray-600">{data.subtitle}</p>

            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-medium shadow">{data.cta}</a>
              <a href="#about" className="inline-block px-5 py-3 rounded-lg border">Learn more</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold">Use-case</div>
                <div className="text-xs mt-1">Field-ready soil diagnostics</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold">Target</div>
                <div className="text-xs mt-1">Small & medium farms</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="320" height="320" rx="24" fill="white" stroke="#E6EEF2" />
              <g transform="translate(60,40)">
                <path d="M40 8 L72 40 L24 88 L0 64 L48 16 Z" fill="#34D399" opacity="0.9" />
                <rect x="90" y="30" width="12" height="80" rx="6" fill="#4B5563" />
                <rect x="86" y="110" width="20" height="8" rx="4" fill="#374151" />
                <circle cx="40" cy="80" r="6" fill="#10B981" />
              </g>
            </svg>
          </div>
        </section>

        <section id="about" className="bg-white rounded-2xl p-8 shadow mt-8">
          <h3 className="text-xl font-semibold">{data.aboutTitle}</h3>
          <p className="mt-3 text-gray-600">{data.about}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">{data.problemTitle}</h4>
              <p className="text-sm text-gray-600 mt-2">{data.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold">{data.solutionTitle}</h4>
              <p className="text-sm text-gray-600 mt-2">{data.solution}</p>
            </div>
          </div>
        </section>

        <section id="features" className="mt-8">
          <h3 className="text-xl font-semibold">{data.featuresTitle}</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.features.map((f, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-medium">{i + 1}. {f}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="tech" className="bg-white rounded-2xl p-8 shadow mt-8">
          <h3 className="text-xl font-semibold">{data.techTitle}</h3>
          <p className="mt-3 text-gray-600">{data.tech}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg border">
              <div className="font-semibold">Sensors</div>
              <div className="text-gray-600 mt-1">High-precision pH, moisture & nutrient sensors</div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="font-semibold">Edge AI</div>
              <div className="text-gray-600 mt-1">On-device inference for instant recommendations</div>
            </div>
            <div className="p-4 rounded-lg border">
              <div className="font-semibold">Cloud & Mobile</div>
              <div className="text-gray-600 mt-1">Central dataset, analytics and farmer dashboard</div>
            </div>
          </div>
        </section>

        <section id="team" className="mt-8">
          <h3 className="text-xl font-semibold">{data.teamTitle}</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.team.map((m, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-semibold text-emerald-700">{m.split(" ")[0][0]}</div>
                <div>
                  <div className="font-medium">{m}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white rounded-2xl p-8 shadow mt-8 mb-12">
          <h3 className="text-xl font-semibold">{data.contactTitle}</h3>
          <p className="mt-3 text-gray-600">{data.contact}</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input placeholder={lang === "en" ? "Your name" : "اسمك"} className="p-3 border rounded" />
            <input placeholder="Email" className="p-3 border rounded" />
            <textarea placeholder={lang === "en" ? "Message" : "رسالة"} className="p-3 border rounded md:col-span-2" />
            <button className="md:col-span-2 bg-emerald-600 text-white px-4 py-3 rounded">Send message</button>
          </form>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6">{data.footer}</footer>
      </main>
    </div>
  );
}
