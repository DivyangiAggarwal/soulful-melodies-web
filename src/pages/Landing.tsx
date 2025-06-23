
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LatestReleaseModal from '@/components/LatestReleaseModal';

const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/91716218-fba1-44cc-b62f-410acd800072.png')`,
          filter: 'contrast(1.1) brightness(1.1) saturate(1.2)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-yellow-800/20 to-saffron-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/e6581078-5642-43c0-8ff3-7e5879730c80.png"
                alt="Sooryagayathri Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain"
              />
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center hover:bg-saffron-700 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center hover:bg-saffron-700 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center hover:bg-saffron-700 transition-colors"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-8 sm:pt-16">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-4 animate-fade-in tracking-wide" style={{fontFamily: 'Playfair Display, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Sooryagayathri
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-200 mb-6 sm:mb-8 animate-fade-in tracking-wider px-4" style={{ animationDelay: '0.2s', fontFamily: 'Playfair Display, serif', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Classical Vocalist | Carnatic Music | Bhakti Sangeetham
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 sm:p-6 pb-8 sm:pb-12">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Next Concert Card */}
            <div className="bg-gradient-to-r from-amber-800/80 to-orange-800/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-amber-400/40 shadow-2xl">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-amber-200" />
                <h3 className="text-amber-200 font-bold text-lg sm:text-xl" style={{fontFamily: 'Playfair Display, serif'}}>
                  Upcoming Concert
                </h3>
              </div>
              
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  Margazhi Music Festival 2024
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 md:space-x-12 text-white/90">
                  <div className="flex items-center text-sm sm:text-base md:text-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-amber-300" />
                    <span>Dec 15, 2024 | 6:30 PM</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base md:text-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-amber-300" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enter Site Button */}
            <div className="text-center">
              <Button
                onClick={handleEnterSite}
                className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 hover:from-amber-700 hover:via-orange-600 hover:to-red-700 text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 border-2 sm:border-3 border-amber-300/50"
                style={{fontFamily: 'Playfair Display, serif'}}
              >
                Enter Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Release Modal */}
      <LatestReleaseModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default Landing;
