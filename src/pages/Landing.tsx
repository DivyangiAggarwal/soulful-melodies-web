
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Calendar, Clock, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LatestReleaseModal from '@/components/LatestReleaseModal';

const Landing = () => {
  const [showModal, setShowModal] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    const scrollTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    let scrollCount = 0;
    const handleScroll = () => {
      scrollCount++;
      if (scrollCount >= 3) {
        navigate('/home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/91716218-fba1-44cc-b62f-410acd800072.png')`,
          filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-yellow-800/10 to-saffron-900/20" />
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
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
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

        {/* Main Content - Positioned to avoid face */}
        <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 pb-8 sm:pb-12 lg:pb-16">
          {/* Main Title and Concert Section - Positioned at top right to avoid face */}
          <div className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 animate-fade-in tracking-wide" style={{fontFamily: 'Playfair Display, serif', textShadow: '3px 3px 6px rgba(0,0,0,0.8)'}}>
              Sooryagayathri
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100 mb-4 sm:mb-6 animate-fade-in tracking-wider" style={{ animationDelay: '0.2s', fontFamily: 'Playfair Display, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Classical Vocalist | Carnatic Music | Bhakti Sangeetham
            </p>
            
            {/* Compact Concert Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 shadow-xl max-w-xs">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-4 h-4 mr-2 text-amber-200" />
                <h3 className="text-amber-200 font-bold text-sm" style={{fontFamily: 'Playfair Display, serif'}}>
                  Upcoming Concert
                </h3>
              </div>
              
              <div className="text-center">
                <h2 className="text-sm sm:text-base font-bold text-white mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  Margazhi Music Festival 2024
                </h2>
                <div className="space-y-1 text-white/90">
                  <div className="flex items-center justify-center text-xs">
                    <Clock className="w-3 h-3 mr-1 text-amber-300" />
                    <span>Dec 15, 2024 | 6:30 PM</span>
                  </div>
                  <div className="flex items-center justify-center text-xs">
                    <MapPin className="w-3 h-3 mr-1 text-amber-300" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to Enter Indicator */}
          {showScrollIndicator && (
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
              <div className="flex flex-col items-center text-white/80">
                <ArrowUp className="w-6 h-6 animate-bounce mb-2" />
                <p className="text-sm font-semibold" style={{fontFamily: 'Playfair Display, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                  Scroll to Enter Site
                </p>
              </div>
            </div>
          )}
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
