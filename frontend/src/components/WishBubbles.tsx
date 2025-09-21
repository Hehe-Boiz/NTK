import { useState, useEffect } from 'react';
import { useWishes } from './WishesContext';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Eye, EyeOff, Heart, Calendar, User, MessageCircle, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWish {
  id: string;
  content: string;
  author: string;
  color: string;
  position: { x: number; y: number };
  driftDirection: number;
  driftStrength: number;
  animationDelay: number;
  duration: number;
  icon: 'Heart' | 'Star' | 'MessageCircle' | 'Sparkles';
}

export function WishBubbles() {
  const { wishes, showWishes, toggleWishesDisplay, getApprovedWishes } = useWishes();
  const [floatingWishes, setFloatingWishes] = useState<FloatingWish[]>([]);
  
  const iconComponents = {
    Heart,
    Star, 
    MessageCircle,
    Sparkles
  };

  // Generate floating wishes with random positions and timings
  useEffect(() => {
    const approvedWishes = getApprovedWishes();
    console.log('Approved wishes:', approvedWishes.length); // Debug log
    
    if (approvedWishes.length > 0) {
      const icons: Array<'Heart' | 'Star' | 'MessageCircle' | 'Sparkles'> = ['Heart', 'Star', 'MessageCircle', 'Sparkles'];
      
      const floating = approvedWishes.slice(0, 8).map((wish, index) => {
        // Create positioning around timeline center (50%) - spread like tree roots both directions
        const positions = [25, 30, 35, 40, 50, 60, 65, 70, 75]; // Base positions spreading left and right from center
        const baseX = positions[index % positions.length]; // Cycle through spread positions
        const randomOffset = (Math.random() - 0.5) * 12; // Random offset ±6 for natural spread
        const finalX = Math.max(25, Math.min(75, baseX + randomOffset)); // Keep within safe bounds
        
        // Create random drift direction for each bubble
        const driftDirection = Math.random() > 0.5 ? 1 : -1; // Random left or right drift
        const driftStrength = 8 + Math.random() * 10; // Drift between 8-18%
        
        return {
          id: wish.id,
          content: wish.content,
          author: wish.author,
          color: wish.color,
          position: {
            x: finalX,
            y: 100
          },
          driftDirection,
          driftStrength,
          animationDelay: index * 1.5 + Math.random() * 2, // Faster staggered start
          duration: 12 + Math.random() * 3, // Much faster: 12-15 seconds
          icon: icons[index % icons.length] // Cycle through icons
        };
      });
      console.log('Generated floating wishes:', floating.length, floating.map(w => ({ id: w.id.slice(-2), x: w.position.x.toFixed(1), drift: w.driftDirection }))); // Debug log
      setFloatingWishes(floating);
    } else {
      console.log('No approved wishes found'); // Debug log
      setFloatingWishes([]);
    }
  }, [getApprovedWishes, showWishes]);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      {/* Toggle Button - positioned relative to timeline */}
      
      <div className="absolute top-4 right-4 z-50 pointer-events-auto">
        <Button
          onClick={toggleWishesDisplay}
          variant="outline"
          size="sm"
          className="bg-white/95 backdrop-blur-sm border-gray-300 hover:bg-white shadow-lg text-xs"
        >
          {showWishes ? (
            <>
              <EyeOff className="h-3 w-3 mr-1" />
              Ẩn lời chúc
            </>
          ) : (
            <>
              <Eye className="h-3 w-3 mr-1" />
              Lời chúc ({getApprovedWishes().length})
            </>
          )}
        </Button>
        
      </div>

      {/* Floating Wishes Icons Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {showWishes && floatingWishes.length > 0 && floatingWishes.map((wishData, index) => {
            const IconComponent = iconComponents[wishData.icon];
            
            if (!IconComponent) {
              console.log('Missing icon component for:', wishData.icon);
              return null;
            }
            
            return (
              <motion.div
                key={`${wishData.id}-floating-${index}`}
                initial={{ 
                  opacity: 0,
                  y: "110vh", // Start from below viewport
                  x: `${wishData.position.x}vw`,
                  scale: 0.3,
                  rotate: 0
                }}
                animate={{ 
                  opacity: [0, 0.4, 0.8, 1, 0.8, 0], // Quick fade in, then fade out at top
                  y: [
                    "120vh", // Start from below viewport
                    "80vh", // Fast ascent
                    "40vh", // Mid journey
                    "5vh", // Reach near top
                    "5vh" // Stay at top briefly before disappearing
                  ],
                  x: [
                    `${wishData.position.x}vw`,
                    `${wishData.position.x + wishData.driftDirection * 3}vw`,
                    `${wishData.position.x + wishData.driftDirection * wishData.driftStrength}vw`,
                    `${wishData.position.x + wishData.driftDirection * (wishData.driftStrength * 0.8)}vw`,
                    `${wishData.position.x + wishData.driftDirection * (wishData.driftStrength * 0.6)}vw`
                  ],
                  scale: [0.3, 0.6, 0.9, 1, 0.9],
                  rotate: [0, wishData.driftDirection * 8, wishData.driftDirection * 15, wishData.driftDirection * 12, wishData.driftDirection * 8]
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 12, // Much faster - 12 seconds instead of 22-28
                  delay: wishData.animationDelay,
                  repeat: Infinity,
                  repeatDelay: 3 + Math.random() * 4, // Shorter delay between cycles
                  ease: "easeOut", // Faster acceleration upward
                  times: [0, 0.3, 0.6, 0.9, 1] // Timing for each keyframe
                }}
                className="absolute"
                style={{
                  zIndex: 35,
                  left: 0,
                  top: 0,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Floating Icon with Popover */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="relative group p-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer pointer-events-auto"
                      style={{ 
                        backgroundColor: wishData.color,
                        boxShadow: `0 4px 15px ${wishData.color}40`
                      }}
                    >
                      <IconComponent className="h-4 w-4 text-white" />
                      
                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 rounded-full opacity-40 animate-pulse"
                        style={{ 
                          backgroundColor: wishData.color,
                          filter: 'blur(6px)',
                          zIndex: -1,
                          transform: 'scale(1.5)'
                        }}
                      />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-80 p-4"
                    side="top"
                    align="center"
                  >
                    <div className="space-y-3">
                      {/* Header with icon */}
                      <div className="flex items-start space-x-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: wishData.color }}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 text-sm leading-relaxed font-medium">
                            "{wishData.content}"
                          </p>
                        </div>
                      </div>

                      {/* Author and date info */}
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
                    </div>
                  </PopoverContent>
                </Popover>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      
    </div>
  );
}