// components/WishBubbles.tsx

import { useState, useEffect } from 'react';
import { useWishes } from './WishesContext';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Eye, EyeOff, Heart, Calendar, User, MessageCircle, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Cập nhật interface để id là number
interface FloatingWish {
  id: number;
  content: string;
  author: string;
  color: string;
  timestamp: Date; // Thêm timestamp
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

  useEffect(() => {
    const approvedWishes = getApprovedWishes();
    
    if (showWishes && approvedWishes.length > 0) {
      const icons: Array<'Heart' | 'Star' | 'MessageCircle' | 'Sparkles'> = ['Heart', 'Star', 'MessageCircle', 'Sparkles'];
      
      const floating = approvedWishes.slice(0, 15).map((wish, index) => {
        const positions = [25, 30, 35, 40, 50, 60, 65, 70, 75];
        const baseX = positions[index % positions.length];
        const randomOffset = (Math.random() - 0.5) * 12;
        const finalX = Math.max(25, Math.min(75, baseX + randomOffset));
        const driftDirection = Math.random() > 0.5 ? 1 : -1;
        const driftStrength = 8 + Math.random() * 10;
        
        return {
          id: wish.id,
          content: wish.content,
          author: wish.user?.name || 'Vô danh', // SỬA LỖI: Lấy tên từ user object
          color: wish.color || '#3b82f6', // Lấy màu từ context hoặc mặc định
          timestamp: new Date(wish.createdAt || Date.now()), // SỬA LỖI: Sử dụng createdAt
          position: {
            x: finalX,
            y: 100
          },
          driftDirection,
          driftStrength,
          animationDelay: index * 1.5 + Math.random() * 2,
          duration: 12 + Math.random() * 3,
          icon: icons[index % icons.length]
        };
      });
      
      // SỬA LỖI: Chuyển id sang string trước khi dùng slice cho mục đích debug
      console.log('Generated floating wishes:', floating.length, floating.map(w => ({ id: String(w.id).slice(-2), x: w.position.x.toFixed(1), drift: w.driftDirection })));
      
      setFloatingWishes(floating);
    } else {
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
      {/* Nút bật/tắt */}
      <div className="absolute top-4 right-4 z-50 pointer-events-auto">
        <Button
          onClick={toggleWishesDisplay}
          variant="outline"
          size="sm"
          className="bg-white/95 backdrop-blur-sm border-gray-300 hover:bg-white shadow-lg text-xs"
        >
          {showWishes ? (
            <><EyeOff className="h-3 w-3 mr-1" />Ẩn lời chúc</>
          ) : (
            <><Eye className="h-3 w-3 mr-1" />Lời chúc ({getApprovedWishes().length})</>
          )}
        </Button>
      </div>

      {/* Container cho các bong bóng */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {floatingWishes.map((wishData, index) => {
            const IconComponent = iconComponents[wishData.icon];
            if (!IconComponent) return null;
            
            return (
              <motion.div
                key={`${wishData.id}-floating-${index}`}
                // ... (phần animation không đổi)
                initial={{ opacity: 0, y: "110vh", x: `${wishData.position.x}vw`, scale: 0.3 }}
                animate={{ 
                  opacity: [0, 0.4, 0.8, 1, 0.8, 0],
                  y: ["120vh", "80vh", "40vh", "5vh", "5vh"],
                  x: [
                    `${wishData.position.x}vw`,
                    `${wishData.position.x + wishData.driftDirection * 3}vw`,
                    `${wishData.position.x + wishData.driftDirection * wishData.driftStrength}vw`,
                    `${wishData.position.x + wishData.driftDirection * (wishData.driftStrength * 0.8)}vw`,
                    `${wishData.position.x + wishData.driftDirection * (wishData.driftStrength * 0.6)}vw`
                  ],
                  scale: [0.3, 0.6, 0.9, 1, 0.9]
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: wishData.duration,
                  delay: wishData.animationDelay,
                  repeat: Infinity,
                  repeatDelay: 3 + Math.random() * 4,
                  ease: "easeOut",
                  times: [0, 0.3, 0.6, 0.9, 1]
                }}
                className="absolute"
                style={{ zIndex: 35, left: 0, top: 0, transform: 'translate(-50%, -50%)' }}
              >
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
                      <div
                        className="absolute inset-0 rounded-full opacity-40 animate-pulse"
                        style={{ backgroundColor: wishData.color, filter: 'blur(6px)', zIndex: -1, transform: 'scale(1.5)' }}
                      />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4" side="top" align="center">
                    <div className="space-y-3">
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
                      <div className="border-t pt-3 space-y-2">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <User className="h-3 w-3" />
                          <span className="font-medium">{wishData.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          {/* SỬA LỖI: Dùng timestamp trực tiếp từ wishData */}
                          <span>{formatDate(wishData.timestamp)}</span>
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