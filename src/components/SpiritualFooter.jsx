import React from 'react';

const SpiritualFooter = () => {
  const footerSections = [
    {
      title: 'Sacred Collection',
      titleHindi: 'पवित्र संग्रह',
      links: [
        { name: 'Aarti Sangrah', hindi: 'आरती संग्रह' },
        { name: 'Chalisa Sangrah', hindi: 'चालीसा संग्रह' },
        { name: 'Bhajan', hindi: 'भजन' },
        { name: 'Mantra', hindi: 'मंत्र' }
      ]
    },
    {
      title: 'Devotional Content',
      titleHindi: 'भक्ति सामग्री',
      links: [
        { name: 'Stotram', hindi: 'स्तोत्रम्' },
        { name: 'Katha', hindi: 'कथा' },
        { name: 'Shloka', hindi: 'श्लोक' },
        { name: 'Prarthana', hindi: 'प्रार्थना' }
      ]
    },
    {
      title: 'Resources',
      titleHindi: 'संसाधन',
      links: [
        { name: 'Daily Aarti', hindi: 'दैनिक आरती' },
        { name: 'Festival Calendar', hindi: 'त्योहार कैलेंडर' },
        { name: 'Temple Guide', hindi: 'मंदिर गाइड' },
        { name: 'Audio Library', hindi: 'ऑडियो पुस्तकालय' }
      ]
    },
    {
      title: 'Connect',
      titleHindi: 'जुड़ें',
      links: [
        { name: 'About Us', hindi: 'हमारे बारे में' },
        { name: 'Contact', hindi: 'संपर्क करें' },
        { name: 'Community', hindi: 'समुदाय' },
        { name: 'Support', hindi: 'सहायता' }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-600 text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🕉️</div>
        <div className="absolute top-20 right-20 text-5xl">🪔</div>
        <div className="absolute bottom-10 left-1/4 text-5xl">🙏</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">✨</div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Top Decorative Border */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent w-full max-w-4xl"></div>
          <div className="mx-6 text-2xl text-yellow-200">ॐ</div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent w-full max-w-4xl"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-3">
              {/* Section Title */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-yellow-200 mb-1" style={{fontFamily: 'Georgia, serif'}}>
                  {section.title}
                </h3>
                <p className="text-xs text-orange-100 font-semibold">
                  {section.titleHindi}
                </p>
              </div>

              {/* Links */}
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="group flex flex-col hover:text-yellow-200 transition-colors duration-300"
                    >
                      <span className="text-xs font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <span className="text-xs text-orange-200 group-hover:text-yellow-100">
                        {link.hindi}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a
            href="#"
            className="bg-orange-700 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-xl"
            aria-label="Instagram"
          >
            📷
          </a>
          <a
            href="#"
            className="bg-orange-700 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-xl"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="#"
            className="bg-orange-700 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-xl"
            aria-label="Facebook"
          >
            📘
          </a>
          <a
            href="#"
            className="bg-orange-700 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-xl"
            aria-label="YouTube"
          >
            ▶️
          </a>
        </div>

        {/* Bottom Decorative Border */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent w-full max-w-3xl"></div>
        </div>

        {/* Copyright Section */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="text-xl text-yellow-300">🙏</span>
            <p className="text-base font-semibold text-orange-100" style={{fontFamily: 'Georgia, serif'}}>
              Har Har Mahadev
            </p>
            <span className="text-xl text-yellow-300">🙏</span>
          </div>
          
          <p className="text-xs text-orange-200">
            © 2024 Sacred Collection. All rights reserved.
          </p>
          <p className="text-xs text-orange-300 italic">
            सत्यं शिवं सुन्दरम् • Truth, Goodness, Beauty
          </p>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-50"></div>
    </footer>
  );
};
export default SpiritualFoot;

