
import { ExternalLink, Calendar, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Press = () => {
  const pressArticles = [
    {
      id: 1,
      title: "Rising Star in Traditional Music: Soorya Gayathri's Journey",
      publication: "The Hindu",
      date: "March 10, 2024",
      excerpt: "Soorya Gayathri brings fresh energy to traditional bhajan singing while maintaining authentic classical roots...",
      readTime: "5 min read",
      url: "https://thehindu.com/article1"
    },
    {
      id: 2,
      title: "Preserving Musical Heritage Through Devotional Songs",
      publication: "Deccan Chronicle",
      date: "February 15, 2024",
      excerpt: "In an era of rapid modernization, artists like Soorya Gayathri are crucial in maintaining our cultural heritage...",
      readTime: "4 min read",
      url: "https://deccanchronicle.com/article2"
    },
    {
      id: 3,
      title: "Concert Review: A Night of Spiritual Bliss",
      publication: "Times of India",
      date: "January 28, 2024",
      excerpt: "Soorya Gayathri's performance at the Chennai Music Hall was nothing short of transformative...",
      readTime: "3 min read",
      url: "https://timesofindia.com/article3"
    },
    {
      id: 4,
      title: "Traditional Bhajan Singer Wins Cultural Heritage Award",
      publication: "Indian Express",
      date: "December 5, 2023",
      excerpt: "Recognition for outstanding contribution to preserving and promoting traditional Indian devotional music...",
      readTime: "2 min read",
      url: "https://indianexpress.com/article4"
    },
    {
      id: 5,
      title: "Interview: The Voice Behind Divine Melodies",
      publication: "Outlook Magazine",
      date: "November 20, 2023",
      excerpt: "An exclusive conversation with Soorya Gayathri about her musical journey and spiritual connection...",
      readTime: "8 min read",
      url: "https://outlookindia.com/article5"
    },
    {
      id: 6,
      title: "Modern Technology Meets Ancient Traditions",
      publication: "The Wire",
      date: "October 15, 2023",
      excerpt: "How digital platforms are helping traditional artists like Soorya Gayathri reach global audiences...",
      readTime: "6 min read",
      url: "https://thewire.in/article6"
    }
  ];

  const handleReadMore = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-saffron-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8 gradient-text">
          Press & Media
        </h1>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover what critics and music enthusiasts are saying about Soorya Gayathri's 
          contributions to traditional Indian music and her impact on the devotional music scene.
        </p>

        {/* Press Articles Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressArticles.map((article) => (
            <Card 
              key={article.id}
              className="spiritual-shadow hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-saffron-50 border-saffron-200 flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-sm font-semibold text-saffron-600 bg-saffron-100 px-3 py-1 rounded-full">
                    {article.publication}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-lg font-playfair leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <FileText className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                  
                  <Button
                    size="sm"
                    onClick={() => handleReadMore(article.url)}
                    className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Media Kit Section */}
        <section className="mt-16">
          <Card className="spiritual-shadow bg-gradient-to-br from-card to-saffron-50 border-saffron-200">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair gradient-text text-center">
                Media Kit
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                For press inquiries, interviews, or media collaborations, please contact our media team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('mailto:press@sooryagayathri.com', '_blank')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download Press Kit
                </Button>
                <Button 
                  onClick={() => window.open('mailto:media@sooryagayathri.com', '_blank')}
                  className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Media Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
