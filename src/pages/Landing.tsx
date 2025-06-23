
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
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-yellow-800/30 to-saffron-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/e6581078-5642-43c0-8ff3-7e5879730c80.png"
                alt="Sooryagayathri Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center hover:bg-saffron-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center hover:bg-saffron-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center hover:bg-saffron-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-end justify-center px-6 pb-32">
          <div className="text-center max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4 animate-fade-in tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
              Sooryagayathri
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8 animate-fade-in tracking-wider" style={{ animationDelay: '0.2s', fontFamily: 'Georgia, serif' }}>
              Classical Vocalist | Carnatic Music | Bhakti Sangeetham
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Next Concert Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-amber-300/20 shadow-2xl">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 mr-2 text-amber-300" />
                <h3 className="text-amber-300 font-semibold text-lg">Upcoming Concert</h3>
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                  Margazhi Music Festival 2024
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white/90">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-amber-300" />
                    <span>Dec 15, 2024 | 6:30 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-amber-300" />
                    <span>Chennai, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enter Site Button */}
            <div className="text-center">
              <Button
                onClick={handleEnterSite}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg px-12 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-amber-300/30"
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
