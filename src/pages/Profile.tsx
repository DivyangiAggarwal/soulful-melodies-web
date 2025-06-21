
import { Award, Star, Music, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Profile = () => {
  const achievements = [
    {
      year: '2020',
      title: 'Best Traditional Singer Award',
      description: 'Recognized for excellence in traditional bhajan singing',
      icon: Award,
    },
    {
      year: '2021',
      title: 'Cultural Heritage Ambassador',
      description: 'Appointed as ambassador for preserving traditional music',
      icon: Star,
    },
    {
      year: '2022',
      title: 'International Concert Tour',
      description: 'Successful concert tour across major cities',
      icon: Music,
    },
    {
      year: '2023',
      title: 'Devotional Music Excellence',
      description: 'Award for outstanding contribution to devotional music',
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-saffron-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Profile Header */}
        <section className="text-center mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <img
              src="/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png"
              alt="Soorya Gayathri"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover spiritual-shadow"
            />
            
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                About Soorya Gayathri
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional Bhajan Singer & Cultural Ambassador
              </p>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="mb-12">
          <Card className="spiritual-shadow bg-gradient-to-br from-card to-saffron-50 border-saffron-200">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair gradient-text">Biography</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                Soorya Gayathri is a renowned traditional bhajan singer who has dedicated her life to preserving 
                and promoting the rich heritage of Indian devotional music. Born into a family of musicians, 
                she began her musical journey at a young age under the guidance of her grandmother, who was 
                herself a respected classical vocalist.
              </p>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Her distinctive voice and authentic rendition of traditional bhajans have touched thousands of 
                hearts across the globe. She specializes in the compositions of saint-poets like Purandara Dasa, 
                Tyagaraja, and other devotional masters, bringing their timeless messages to contemporary audiences 
                while maintaining the sanctity and traditional essence of the compositions.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Through her performances, Soorya Gayathri aims to create a bridge between the divine and the 
                earthly, allowing listeners to experience the transformative power of devotional music. Her 
                concerts are not just musical performances but spiritual experiences that leave lasting impressions 
                on the hearts and minds of her audience.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Awards & Achievements */}
        <section>
          <h2 className="text-3xl font-playfair font-bold text-center mb-8 gradient-text">
            Awards & Achievements
          </h2>
          
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="spiritual-shadow hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-card to-saffron-50 border-saffron-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-saffron-600 bg-saffron-100 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                        <h3 className="text-xl font-playfair font-semibold gradient-text">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
