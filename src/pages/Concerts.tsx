
import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Concerts = () => {
  const [showUpcomingModal, setShowUpcomingModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUpcomingModal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const pastConcerts = [
    {
      id: 1,
      title: "Divine Harmony Concert",
      date: "March 15, 2024",
      location: "Chennai Music Hall",
      audience: "500+",
      description: "An evening of traditional bhajans featuring compositions by Purandara Dasa and Tyagaraja.",
      image: "/lovable-uploads/8c616844-b425-471b-829b-afe30a583df4.png",
      recordings: ["https://youtube.com/watch1", "https://youtube.com/watch2"]
    },
    {
      id: 2,
      title: "Spiritual Melodies",
      date: "January 20, 2024",
      location: "Bangalore Cultural Center",
      audience: "350+",
      description: "A soulful journey through devotional music that touched hearts and elevated spirits.",
      image: "/lovable-uploads/fe43c149-b742-4f7e-94af-5fe36e3098c7.png",
      recordings: ["https://youtube.com/watch3"]
    },
    {
      id: 3,
      title: "Traditional Bhajan Night",
      date: "December 10, 2023",
      location: "Mumbai Arts Theatre",
      audience: "600+",
      description: "A magnificent performance showcasing the beauty of traditional Indian devotional music.",
      image: "/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png",
      recordings: ["https://youtube.com/watch4", "https://youtube.com/watch5"]
    },
  ];

  const openConcertModal = (concert: any) => {
    setSelectedConcert(concert);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-saffron-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8 gradient-text">
          Concerts
        </h1>

        {/* Past Concerts */}
        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-6 text-center">
            Past Concerts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastConcerts.map((concert) => (
              <Card 
                key={concert.id}
                className="spiritual-shadow hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br from-card to-saffron-50 border-saffron-200"
                onClick={() => openConcertModal(concert)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={concert.image}
                    alt={concert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair font-semibold text-lg">
                      {concert.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-saffron-600" />
                      <span>{concert.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-saffron-600" />
                      <span>{concert.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-saffron-600" />
                      <span>{concert.audience} attendees</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Upcoming Concert Modal */}
      <Dialog open={showUpcomingModal} onOpenChange={setShowUpcomingModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-background to-saffron-50 border-2 border-saffron-200">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-playfair gradient-text">
              Upcoming Concert
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center space-y-4">
            <div className="relative overflow-hidden rounded-lg spiritual-shadow">
              <img
                src="/lovable-uploads/8c616844-b425-471b-829b-afe30a583df4.png"
                alt="Upcoming Concert"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-playfair font-semibold text-lg">Divine Melodies</h4>
                <p className="text-white/80 text-sm">An evening of spiritual music</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2 text-saffron-600" />
                <span>21 Jun 2025, 7:00 PM</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-saffron-600" />
                <span>Virtual Event</span>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700">
              Register for Concert
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Concert Detail Modal */}
      <Dialog open={!!selectedConcert} onOpenChange={() => setSelectedConcert(null)}>
        <DialogContent className="sm:max-w-2xl bg-gradient-to-br from-background to-saffron-50 border-2 border-saffron-200">
          {selectedConcert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-playfair gradient-text">
                  {selectedConcert.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <img
                  src={selectedConcert.image}
                  alt={selectedConcert.title}
                  className="w-full h-64 object-cover rounded-lg spiritual-shadow"
                />
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-saffron-600" />
                    <span>{selectedConcert.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-saffron-600" />
                    <span>{selectedConcert.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-saffron-600" />
                    <span>{selectedConcert.audience}</span>
                  </div>
                </div>
                
                <p className="text-foreground/80">
                  {selectedConcert.description}
                </p>
                
                {selectedConcert.recordings.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Recordings:</h4>
                    <div className="space-y-2">
                      {selectedConcert.recordings.map((recording: string, index: number) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(recording, '_blank')}
                          className="w-full justify-start"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Watch Recording {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Concerts;
