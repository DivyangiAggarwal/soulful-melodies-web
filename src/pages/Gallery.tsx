
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png",
      alt: "Soorya Gayathri Traditional Performance",
      title: "Traditional Performance"
    },
    {
      id: 2,
      src: "/lovable-uploads/fe43c149-b742-4f7e-94af-5fe36e3098c7.png",
      alt: "Ambigaa Concert",
      title: "Ambigaa Concert"
    },
    {
      id: 3,
      src: "/lovable-uploads/8c616844-b425-471b-829b-afe30a583df4.png",
      alt: "Live Performance",
      title: "Live Performance"
    },
    {
      id: 4,
      src: "/lovable-uploads/91716218-fba1-44cc-b62f-410acd800072.png",
      alt: "Traditional Attire",
      title: "Traditional Attire"
    },
    // Duplicate some images to show more in gallery
    {
      id: 5,
      src: "/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png",
      alt: "Concert Performance",
      title: "Concert Performance"
    },
    {
      id: 6,
      src: "/lovable-uploads/fe43c149-b742-4f7e-94af-5fe36e3098c7.png",
      alt: "Studio Recording",
      title: "Studio Recording"
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-saffron-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8 gradient-text">
          Gallery
        </h1>

        {/* Main Image Display */}
        <section className="mb-8">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg spiritual-shadow">
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-playfair font-semibold text-xl">
                  {images[selectedImageIndex].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {selectedImageIndex + 1} of {images.length}
                </p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              onClick={handleNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Thumbnail Strip */}
        <section>
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 justify-center">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                  index === selectedImageIndex
                    ? 'ring-4 ring-saffron-400 scale-105'
                    : 'hover:scale-105 hover:ring-2 hover:ring-saffron-300'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg spiritual-shadow"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground">
            Click on thumbnails to view different images
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
