import { useState, useEffect } from 'react';
import { useWishes } from './WishesContext';
import { Button } from './ui/button';
import { Eye, EyeOff, Heart, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWish {
  id: string;
  content: string;
  author: string;
  color: string;
  position: { x: number; y: number };
  animationDelay: number;
  duration: number;
}

export function WishBubbles() {
  const { wishes, showWishes, toggleWishesDisplay, getApprovedWishes } = useWishes();
  const [selectedWish, setSelectedWish] = useState<string | null>(null);
  const [floatingWishes, setFloatingWishes] = useState<FloatingWish[]>([]);

  // Auto-hide selected wish after 5 seconds
  useEffect(() => {
    if (selectedWish) {
      const timer = setTimeout(() => {
        setSelectedWish(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [selectedWish]);

  // Generate floating wishes with random positions and timings
  useEffect(() => {
    const approvedWishes = getApprovedWishes();
    if (approvedWishes.length > 0) {
      const floating = approvedWishes.slice(0, 8).map((wish, index) => {
        // Create a more distributed positioning system
        const baseX = (index % 4) * 25; // Divide screen into 4 sections: 0, 25, 50, 75
        const randomOffset = (Math.random() - 0.5) * 20; // Random offset ±10
        const finalX = Math.max(5, Math.min(95, baseX + randomOffset)); // Keep within 5-95%
        
        return {
          id: wish.id,
          content: wish.content,
          author: wish.author,
          color: wish.color,
          position: {
            x: finalX, // More evenly distributed X positions
            y: 100 // Start from bottom
          },
          animationDelay: index * 3 + Math.random() * 4, // Staggered delays 0-7 seconds
          duration: 16 + Math.random() * 6 // Duration between 16-22 seconds
        };
      });
      setFloatingWishes(floating);
    }
  }, [wishes, showWishes]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Toggle Button */}
      <div className="absolute top-4 right-4 z-50 pointer-events-auto">
        <Button
          onClick={toggleWishesDisplay}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-white shadow-lg"
        >
          {showWishes ? (
            <>
              <EyeOff className="h-4 w-4 mr-2" />
              Ẩn lời chúc
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-2" />
              Hiện lời chúc ({getApprovedWishes().length})
            </>
          )}
        </Button>
      </div>

      {/* Floating Wishes Container - spans full width */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {showWishes && floatingWishes.map((wishData, index) => (
            <motion.div
              key={`${wishData.id}-floating`}
              initial={{ 
                opacity: 0,
                y: "110vh", // Start from below viewport
                x: `${wishData.position.x}vw`, // Use viewport width units
                scale: 0.8,
                rotate: 0
              }}
              animate={{ 
                opacity: [0, 1, 1, 1, 0],
                y: [
                  "110vh", // Start from bottom
                  "-20vh", // Float up and out of view
                ],
                x: [
                  `${wishData.position.x}vw`,
                  `${wishData.position.x + (Math.random() - 0.5) * 15}vw` // Gentle drift
                ],
                scale: [0.8, 1, 1, 0.9],
                rotate: [0, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8] // Subtle rotation
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: wishData.duration,
                delay: wishData.animationDelay,
                repeat: Infinity,
                repeatDelay: Math.random() * 8, // Random delay between repeats
                ease: "linear",
                opacity: {
                  times: [0, 0.1, 0.8, 0.95, 1], // More gradual fade in/out
                  duration: wishData.duration
                },
                x: {
                  duration: wishData.duration,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: wishData.duration * 0.8,
                  ease: "easeInOut"
                }
              }}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                zIndex: 40 + index % 5, // Vary z-index for natural layering
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)' // Center the card on the position
              }}
              onClick={() => setSelectedWish(wishData.id)}
            >
              {/* Floating Wish Card */}
              <div 
                className="relative group"
                style={{
                  filter: selectedWish === wishData.id ? 'brightness(1.1)' : 'none'
                }}
              >
                {/* Wish Content Card */}
                <div
                  className="bg-white/98 backdrop-blur-md rounded-lg shadow-xl border-2 border-white/80 p-4 max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ 
                    borderLeftColor: wishData.color,
                    borderLeftWidth: '5px',
                    boxShadow: `0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px ${wishData.color}20`
                  }}
                >
                  {/* Wish Text */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-900 leading-relaxed line-clamp-3 font-medium">
                      "{wishData.content}"
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-2 text-xs text-gray-700">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: wishData.color }}
                    >
                      <Heart className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-semibold truncate">{wishData.author}</span>
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-30 animate-pulse"
                  style={{ 
                    backgroundColor: wishData.color,
                    filter: 'blur(12px)',
                    zIndex: -1,
                    transform: 'scale(1.1)'
                  }}
                />
                
                {/* Subtle inner glow */}
                <div
                  className="absolute inset-0 rounded-lg opacity-10"
                  style={{ 
                    backgroundColor: wishData.color,
                    zIndex: -1
                  }}
                />
              </div>

              {/* Expanded Wish Display */}
              <AnimatePresence>
                {selectedWish === wishData.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white rounded-lg shadow-xl border p-4 max-w-sm z-60 mb-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Arrow pointing down to wish */}
                    <div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b border-gray-200"
                      style={{ backgroundColor: 'white' }}
                    />
                    
                    {/* Full Wish Content */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: wishData.color }}
                        >
                          <Heart className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 text-sm leading-relaxed">
                            {wishData.content}
                          </p>
                        </div>
                      </div>

                      <div className="border-t pt-3 space-y-2">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <User className="h-3 w-3" />
                          <span className="font-medium">{wishData.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(wishes.find(w => w.id === wishData.id)?.timestamp || new Date())}</span>
                        </div>
                      </div>

                      {/* Close button */}
                      <Button
                        onClick={() => setSelectedWish(null)}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                      >
                        Đóng
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Wishes Counter (when hidden) */}
      {!showWishes && getApprovedWishes().length > 0 && (
        <div className="absolute top-16 right-4 bg-university-navy text-white px-3 py-2 rounded-lg shadow-lg text-sm pointer-events-auto">
          <Heart className="h-4 w-4 inline mr-1" />
          {getApprovedWishes().length} lời chúc
        </div>
      )}
    </div>
  );
}