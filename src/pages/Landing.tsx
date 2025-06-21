
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/50 to-indigo-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">♪</span>
              </div>
              <span className="text-yellow-300 font-playfair text-lg font-semibold">
                Sooryagayathri
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4 animate-fade-in">
              Soorya Gayathri
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Traditional Bhajan Singer
            </p>
            <p className="text-lg text-white/80 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Experience the spiritual journey through divine music and devotional melodies
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Next Concert */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4 md:mb-0 border border-white/20">
              <h3 className="text-orange-400 font-semibold mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Next Concert
              </h3>
              <p className="text-white text-sm">21 Jun 2025, 7:00 PM</p>
              <p className="text-white/80 text-sm">Upcoming Event, Virtual Event</p>
            </div>

            {/* Enter Site Button */}
            <Button
              onClick={handleEnterSite}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105"
            >
              Enter Site
            </Button>
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
