import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { User } from './AuthContext'; // Import User interface từ AuthContext

// Cập nhật interface Wish để khớp với Prisma Schema và dữ liệu trả về từ backend
export interface Wish {
  id: number;
  content: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  userName: string;
  user?: User; // Thông tin user được include từ backend
  createdAt?: string; // Prisma trả về createdAt và updatedAt dưới dạng string
  updatedAt?: string;

  // Thuộc tính chỉ có ở client-side
  color?: string; 
}

interface WishesContextType {
  wishes: Wish[];
  showWishes: boolean;
  addWish: (content: string) => Promise<void>;
  toggleWishesDisplay: () => void;
  approveWish: (wishId: number) => Promise<void>;
  rejectWish: (wishId: number) => Promise<void>;
  deleteWish: (wishId: number) => Promise<void>;
  getPendingWishes: () => Wish[];
  getApprovedWishes: () => Wish[];
  getRejectedWishes: () => Wish[];
}

const WishesContext = createContext<WishesContextType | undefined>(undefined);

export function WishesProvider({ children }: { children: ReactNode }) {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showWishes, setShowWishes] = useState(true);

  // Lấy danh sách lời chúc từ backend khi component được khởi tạo
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const response = await axios.get<Wish[]>('/wish');
        // Thêm màu sắc ngẫu nhiên cho các lời chúc ở client-side
        const wishesWithColor = response.data.map(wish => ({
          ...wish,
          color: wishColors[Math.floor(Math.random() * wishColors.length)],
        }));
        setWishes(wishesWithColor);
      } catch (error) {
        console.error('Lỗi khi tải danh sách lời chúc:', error);
        toast.error('Không thể tải danh sách lời chúc.');
      }
    };

    fetchWishes();
  }, []);

  // Gửi lời chúc mới lên server
  const addWish = async (content: string) => {
    try {
      const response = await axios.post<Wish>('/wish', { content });
      const newWish = {
        ...response.data,
        color: wishColors[Math.floor(Math.random() * wishColors.length)],
      };
      setWishes(prev => [newWish, ...prev]);
    } catch (error) {
      console.error('Lỗi khi gửi lời chúc:', error);
      throw error; // Ném lỗi để form xử lý
    }
  };

  // Cập nhật trạng thái lời chúc (Duyệt/Từ chối)
  const updateWishStatus = async (wishId: number, status: 'APPROVED' | 'REJECTED') => {
    try {
      await axios.patch(`/wish/${wishId}`, { status });
      setWishes(prev =>
        prev.map(w => (w.id === wishId ? { ...w, status } : w))
      );
    } catch (error) {
      console.error(`Lỗi khi cập nhật lời chúc ${wishId}:`, error);
      toast.error('Cập nhật trạng thái thất bại.');
    }
  };

  const approveWish = async (wishId: number) => {
    await updateWishStatus(wishId, 'APPROVED');
  };

  const rejectWish = async (wishId: number) => {
    await updateWishStatus(wishId, 'REJECTED');
  };

  // Xóa lời chúc
  const deleteWish = async (wishId: number) => {
    try {
      await axios.delete(`/wish/${wishId}`);
      setWishes(prev => prev.filter(wish => wish.id !== wishId));
    } catch (error) {
      console.error(`Lỗi khi xóa lời chúc ${wishId}:`, error);
      toast.error('Xóa lời chúc thất bại.');
    }
  };

  const toggleWishesDisplay = () => setShowWishes(prev => !prev);
  const getPendingWishes = () => wishes.filter(w => w.status === 'PENDING');
  const getApprovedWishes = () => wishes.filter(w => w.status === 'APPROVED');
  const getRejectedWishes = () => wishes.filter(w => w.status === 'REJECTED');

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
    getRejectedWishes,
  };

  return <WishesContext.Provider value={value}>{children}</WishesContext.Provider>;
}

export function useWishes() {
  const context = useContext(WishesContext);
  if (context === undefined) {
    throw new Error('useWishes must be used within a WishesProvider');
  }
  return context;
}

const wishColors = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
  '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1',
];