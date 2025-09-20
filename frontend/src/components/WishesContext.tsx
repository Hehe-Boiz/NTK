import { createContext, useContext, useCallback, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

export interface Wish {
  id: number;
  userName: string;
  content: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

interface ClientWish extends Wish {
  author: string;
  timestamp: Date;
  color: string;
}

interface WishesContextType {
  wishes: ClientWish[];
  showWishes: boolean;
  addWish: (content: string) => Promise<void>;
  toggleWishesDisplay: () => void;
  approveWish: (wishId: number) => Promise<void>
  rejectWish: (wishId: number) => Promise<void>
  deleteWish: (wishId: number) => Promise<void>
  getPendingWishes: () => ClientWish[];
  getApprovedWishes: () => ClientWish[];
  getRejectedWishes: () => ClientWish[];
}

const WishesContext = createContext<WishesContextType | undefined>(undefined);

// Predefined colors for wish bubbles
const wishColors = [
  '#3b82f6', // blue
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
  '#8b5cf6', // violet
  '#06b6d4', // cyan
  '#f97316', // orange
  '#84cc16', // lime
  '#ec4899', // pink
  '#6366f1', // indigo
];

const transformWish = (wish: any): ClientWish => ({
  ...wish,
  id: wish.id,
  author: wish.user?.fullName || wish.userName,
  timestamp: new Date(wish.createdAt || Date.now()),
  color: wishColors[wish.id % wishColors.length],
});

export function WishesProvider({ children }: { children: ReactNode }) {
  const [wishes, setWishes] = useState<ClientWish[]>([]);
  const [showWishes, setShowWishes] = useState(true);

  const fetchWishes = useCallback(async () => {
    try {
      const response = await axios.get('/wish');
      // Backend trả về Wish[], cần join với User để có author.name
      // Tạm thời sẽ cần backend trả về thông tin user lồng nhau
      const transformedWishes = response.data.map(transformWish);
      setWishes(transformedWishes);
    } catch (error) {
      console.error('Lỗi khi tải danh sách lời chúc:', error);
    }
  }, []);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes]);

  const addWish = async (content: string) => {
    try {
      const response = await axios.post('/wish', { content });
      // Thêm lời chúc mới vào đầu danh sách sau khi tạo thành công
      setWishes(prev => [transformWish(response.data), ...prev]);
    } catch (error) {
      console.error('Lỗi khi gửi lời chúc:', error);
      throw error; // Ném lỗi để component WishForm có thể bắt
    }
  };

  const updateWishStatus = async (wishId: number, status: 'APPROVED' | 'REJECTED') => {
    try {
      await axios.patch(`/wish/${wishId}`, { status });
      setWishes(prev =>
        prev.map(wish =>
          wish.id === wishId ? { ...wish, status } : wish
        )
      );
    } catch (error) {
      console.error(`Lỗi khi cập nhật trạng thái lời chúc ${wishId}:`, error);
      throw error;
    }
  };

  const approveWish = (wishId: number) => updateWishStatus(wishId, 'APPROVED');
  const rejectWish = (wishId: number) => updateWishStatus(wishId, 'REJECTED');

  const deleteWish = async (wishId: number) => {
    try {
      await axios.delete(`/wish/${wishId}`);
      setWishes(prev => prev.filter(wish => wish.id !== wishId));
    } catch (error) {
      console.error(`Lỗi khi xóa lời chúc ${wishId}:`, error);
      throw error;
    }
  };

  const toggleWishesDisplay = () => setShowWishes(prev => !prev);

  const getPendingWishes = () => wishes.filter(wish => wish.status === 'PENDING');
  const getApprovedWishes = () => wishes.filter(wish => wish.status === 'APPROVED');
  const getRejectedWishes = () => wishes.filter(wish => wish.status === 'REJECTED');

  const value: WishesContextType = {
    wishes,
    showWishes,
    addWish,
    toggleWishesDisplay,
    approveWish,
    rejectWish,
    deleteWish,
    getPendingWishes,
    getApprovedWishes,
    getRejectedWishes
  };

  return (
    <WishesContext.Provider value={value}>
      {children}
    </WishesContext.Provider>
  );
}

export function useWishes() {
  const context = useContext(WishesContext);
  if (context === undefined) {
    throw new Error('useWishes must be used within a WishesProvider');
  }
  return context;
}