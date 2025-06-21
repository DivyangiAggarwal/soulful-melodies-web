
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-playfair font-semibold gradient-text">
              Soorya Gayathri
            </h3>
            <p className="text-sm text-muted-foreground">
              Traditional Bhajan Singer
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-spiritual-brown text-white rounded-full flex items-center justify-center hover:bg-spiritual-brown/80 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-spiritual-brown text-white rounded-full flex items-center justify-center hover:bg-spiritual-brown/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-spiritual-brown text-white rounded-full flex items-center justify-center hover:bg-spiritual-brown/80 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Soorya Gayathri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
