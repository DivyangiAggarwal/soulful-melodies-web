
import { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface LatestReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LatestReleaseModal = ({ isOpen, onClose }: LatestReleaseModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-background to-saffron-50 border-2 border-saffron-200">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-playfair gradient-text">
            Latest Release
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <h3 className="text-lg font-playfair text-muted-foreground">
            Ambigaa Naa Ninna Nambide | Purandara Dasa | Sooryagayathri
          </h3>
          
          <div className="relative overflow-hidden rounded-lg spiritual-shadow">
            <img
              src="/lovable-uploads/fe43c149-b742-4f7e-94af-5fe36e3098c7.png"
              alt="Ambigaa - Latest Release"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-white font-playfair font-semibold text-lg">Ambigaa</h4>
              <p className="text-white/80 text-sm">Sooryagayathri</p>
            </div>
          </div>
          
          <Button
            onClick={() => window.open('https://youtube.com', '_blank')}
            className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-medium"
          >
            <Play className="w-4 h-4 mr-2" />
            Click to Listen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LatestReleaseModal;
