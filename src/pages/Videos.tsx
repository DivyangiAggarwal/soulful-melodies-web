
import { Play, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Videos = () => {
  const videoChannels = [
    {
      name: "Traditional Bhajans",
      videos: [
        {
          id: 1,
          title: "Ambigaa Naa Ninna Nambide",
          thumbnail: "/lovable-uploads/fe43c149-b742-4f7e-94af-5fe36e3098c7.png",
          duration: "5:23",
          views: "12K views"
        },
        {
          id: 2,
          title: "Purandara Dasa Compositions",
          thumbnail: "/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png",
          duration: "7:45",
          views: "8.5K views"
        },
        {
          id: 3,
          title: "Krishna Bhajans",
          thumbnail: "/lovable-uploads/8c616844-b425-471b-829b-afe30a583df4.png",
          duration: "6:12",
          views: "15K views"
        },
      ]
    },
    {
      name: "Live Concerts",
      videos: [
        {
          id: 4,
          title: "Chennai Concert 2024",
          thumbnail: "/lovable-uploads/91716218-fba1-44cc-b62f-410acd800072.png",
          duration: "45:30",
          views: "25K views"
        },
        {
          id: 5,
          title: "Spiritual Evening Mumbai",
          thumbnail: "/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png",
          duration: "38:15",
          views: "18K views"
        },
        {
          id: 6,
          title: "Virtual Concert Series",
          thumbnail: "/lovable-uploads/fe43c149-b742-4f7e-94af-5fe36e3098c7.png",
          duration: "52:20",
          views: "30K views"
        },
      ]
    },
    {
      name: "Devotional Series",
      videos: [
        {
          id: 7,
          title: "Morning Ragas",
          thumbnail: "/lovable-uploads/8c616844-b425-471b-829b-afe30a583df4.png",
          duration: "12:40",
          views: "22K views"
        },
        {
          id: 8,
          title: "Evening Prayers",
          thumbnail: "/lovable-uploads/91716218-fba1-44cc-b62f-410acd800072.png",
          duration: "15:30",
          views: "19K views"
        },
        {
          id: 9,
          title: "Festival Specials",
          thumbnail: "/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png",
          duration: "20:15",
          views: "35K views"
        },
      ]
    }
  ];

  const handleVideoClick = (videoId: number) => {
    window.open('https://youtube.com', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-saffron-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8 gradient-text">
          Videos
        </h1>

        {videoChannels.map((channel, channelIndex) => (
          <section key={channelIndex} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-playfair font-semibold gradient-text">
                {channel.name}
              </h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://youtube.com', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4">
              {channel.videos.map((video) => (
                <Card 
                  key={video.id}
                  className="flex-shrink-0 w-80 spiritual-shadow hover:scale-105 transition-transform duration-300 cursor-pointer bg-gradient-to-br from-card to-saffron-50 border-saffron-200"
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {video.views} • Soorya Gayathri
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
