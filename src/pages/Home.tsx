
import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LatestReleaseModal from '@/components/LatestReleaseModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-saffron-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative">
              <img
                src="/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png"
                alt="Soorya Gayathri"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover spiritual-shadow animate-scale-in"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center animate-float">
                <span className="text-white text-sm">♪</span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-4">
                Soorya Gayathri
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Traditional Bhajan Singer
              </p>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Experience the spiritual journey through divine music and devotional melodies 
                that touch the soul and connect hearts with the divine essence of devotional singing.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Concert Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8 gradient-text">
            Upcoming Concert
          </h2>
          
          <Card className="max-w-2xl mx-auto spiritual-shadow bg-gradient-to-br from-card to-saffron-50 border-saffron-200">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-center gradient-text">
                Divine Melodies Concert
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-saffron-600" />
                  <span>21 Jun 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-saffron-600" />
                  <span>7:00 PM</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 mr-2 text-saffron-600" />
                <span className="text-muted-foreground">Virtual Event</span>
              </div>
              
              <p className="text-foreground/80">
                Join us for an evening of traditional bhajans and devotional songs 
                that will transport you to a realm of spiritual bliss.
              </p>
              
              <Button className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700">
                Get Tickets
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Music Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8 gradient-text">
            Musical Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="spiritual-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">♪</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Traditional Bhajans</h3>
                <p className="text-muted-foreground">
                  Sacred songs that invoke divine presence and spiritual awakening
                </p>
              </CardContent>
            </Card>
            
            <Card className="spiritual-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-spiritual-orange to-spiritual-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">♫</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Devotional Melodies</h3>
                <p className="text-muted-foreground">
                  Heartfelt compositions that connect the soul with the divine
                </p>
              </CardContent>
            </Card>
            
            <Card className="spiritual-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-spiritual-purple to-spiritual-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">♬</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">Classical Renditions</h3>
                <p className="text-muted-foreground">
                  Timeless classical pieces presented with authentic traditional style
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      
      <LatestReleaseModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default Home;
