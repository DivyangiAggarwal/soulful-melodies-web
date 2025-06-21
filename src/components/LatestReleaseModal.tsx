
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
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-playfair text-amber-800">
            Latest Release
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <h3 className="text-lg font-playfair text-amber-700">
            Ambigaa Naa Ninna Nambide | Purandara Dasa | Sooryagayathri
          </h3>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/lovable-uploads/152da2b0-cd8d-454d-94d2-d5e73ddcb0bd.png"
              alt="Ambigaa - Latest Release"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-white font-playfair font-semibold text-lg">Ambigaa</h4>
              <p className="text-amber-100 text-sm">Sooryagayathri</p>
            </div>
          </div>
          
          <Button
            onClick={() => window.open('https://youtube.com', '_blank')}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-medium shadow-lg"
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
