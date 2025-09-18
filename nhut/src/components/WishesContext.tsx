import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Wish {
  id: string;
  content: string;
  author: string;
  authorId: string;
  timestamp: Date;
  position: {
    x: number;
    y: number;
  };
  color: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface WishesContextType {
  wishes: Wish[];
  showWishes: boolean;
  addWish: (content: string, author: string, authorId: string) => void;
  toggleWishesDisplay: () => void;
  approveWish: (wishId: string) => void;
  rejectWish: (wishId: string) => void;
  deleteWish: (wishId: string) => void;
  getPendingWishes: () => Wish[];
  getApprovedWishes: () => Wish[];
  getRejectedWishes: () => Wish[];
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

// Sample initial wishes
const initialWishes: Wish[] = [
  {
    id: '1',
    content: 'Chúc mừng Khoa CNTT tròn 35 tuổi! Cảm ơn các thầy cô đã tận tình giảng dạy trong suốt những năm qua 🎉',
    author: 'Nguyễn Văn An',
    authorId: 'sv001',
    timestamp: new Date('2024-01-15'),
    position: { x: 15, y: 20 },
    color: '#3b82f6',
    status: 'approved'
  },
  {
    id: '2',
    content: '35 năm phát triển thật tuyệt vời! Chúc khoa ngày càng phát triển mạnh mẽ và đào tạo ra thêm nhiều nhân tài 🚀',
    author: 'Trần Thị Bích Ngọc',
    authorId: 'sv002',
    timestamp: new Date('2024-01-16'),
    position: { x: 70, y: 35 },
    color: '#10b981',
    status: 'approved'
  },
  {
    id: '3',
    content: 'Tự hào là sinh viên của Khoa CNTT! Những kiến thức học được ở đây đã giúp em có công việc tốt. Happy 35th anniversary! 💻',
    author: 'Lê Văn Cường',
    authorId: 'sv003',
    timestamp: new Date('2024-01-17'),
    position: { x: 25, y: 60 },
    color: '#f59e0b',
    status: 'approved'
  },
  {
    id: '4',
    content: 'Cảm ơn khoa đã mang đến kiến thức quý báu và môi trường học tập tuyệt vời cho chúng em ❤️',
    author: 'Phạm Thị Diễm',
    authorId: 'sv004',
    timestamp: new Date('2024-01-18'),
    position: { x: 80, y: 75 },
    color: '#ef4444',
    status: 'approved'
  },
  {
    id: '5',
    content: 'Chúc khoa luôn đi đầu trong đào tạo công nghệ thông tin và trở thành điểm sáng của giáo dục đại học! 🎓',
    author: 'Hoàng Văn Đức',
    authorId: 'sv005',
    timestamp: new Date('2024-01-19'),
    position: { x: 45, y: 25 },
    color: '#8b5cf6',
    status: 'pending'
  },
  {
    id: '6',
    content: 'Kỷ niệm 35 năm thành lập - một chặng đường dài với nhiều thành tựu đáng tự hào! Chúc khoa tiếp tục vươn xa 🌟',
    author: 'Vũ Thị Hương',
    authorId: 'sv006',
    timestamp: new Date('2024-01-20'),
    position: { x: 30, y: 40 },
    color: '#06b6d4',
    status: 'approved'
  },
  {
    id: '7',
    content: 'Từ một sinh viên đã tốt nghiệp, em chân thành cảm ơn và chúc khoa ngày càng phát triển! 🙏',
    author: 'Ngô Minh Tuấn',
    authorId: 'sv007',
    timestamp: new Date('2024-01-21'),
    position: { x: 60, y: 55 },
    color: '#f97316',
    status: 'pending'
  },
  {
    id: '8',
    content: 'Chúc mừng 35 năm! Hy vọng khoa sẽ tiếp tục là ngôi nhà thứ hai của nhiều thế hệ sinh viên 🏠',
    author: 'Lý Thị Mai',
    authorId: 'sv008',
    timestamp: new Date('2024-01-22'),
    position: { x: 20, y: 80 },
    color: '#84cc16',
    status: 'approved'
  },
  {
    id: '9',
    content: 'Khoa CNTT - nơi đã cho em những kiến thức vững chắc để bước vào thế giới công nghệ. Cảm ơn và chúc mừng! 💪',
    author: 'Đặng Văn Long',
    authorId: 'sv009',
    timestamp: new Date('2024-01-23'),
    position: { x: 75, y: 15 },
    color: '#ec4899',
    status: 'approved'
  },
  {
    id: '10',
    content: 'Chúc khoa luôn là nơi ươm mầm những ý tưởng sáng tạo và đổi mới trong lĩnh vực công nghệ! 💡',
    author: 'Bùi Thị Lan Anh',
    authorId: 'sv010',
    timestamp: new Date('2024-01-24'),
    position: { x: 50, y: 70 },
    color: '#6366f1',
    status: 'pending'
  },
  {
    id: '11',
    content: '35 năm - một hành trình đáng nhớ! Chúc khoa tiếp tục gặt hái nhiều thành công trong tương lai 🏆',
    author: 'Tạ Minh Khoa',
    authorId: 'sv011',
    timestamp: new Date('2024-01-25'),
    position: { x: 35, y: 30 },
    color: '#8b5cf6',
    status: 'rejected'
  },
  {
    id: '12',
    content: 'Cảm ơn tất cả thầy cô và khoa đã tạo nên một môi trường học tập tuyệt vời. Happy Birthday! 🎂',
    author: 'Phan Văn Hải',
    authorId: 'sv012',
    timestamp: new Date('2024-01-26'),
    position: { x: 65, y: 45 },
    color: '#10b981',
    status: 'approved'
  }
];

export function WishesProvider({ children }: { children: ReactNode }) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [showWishes, setShowWishes] = useState(true);

  // Load wishes from localStorage on mount
  useEffect(() => {
    const savedWishes = localStorage.getItem('anniversaryWishes');
    if (savedWishes) {
      try {
        const parsedWishes = JSON.parse(savedWishes).map((wish: any) => ({
          ...wish,
          timestamp: new Date(wish.timestamp)
        }));
        setWishes(parsedWishes);
      } catch (error) {
        console.error('Error loading saved wishes:', error);
      }
    }

    const savedShowWishes = localStorage.getItem('showWishes');
    if (savedShowWishes !== null) {
      setShowWishes(JSON.parse(savedShowWishes));
    }
  }, []);

  // Save wishes to localStorage whenever wishes change
  useEffect(() => {
    localStorage.setItem('anniversaryWishes', JSON.stringify(wishes));
  }, [wishes]);

  // Save showWishes preference
  useEffect(() => {
    localStorage.setItem('showWishes', JSON.stringify(showWishes));
  }, [showWishes]);

  const addWish = (content: string, author: string, authorId: string) => {
    const newWish: Wish = {
      id: Date.now().toString(),
      content,
      author,
      authorId,
      timestamp: new Date(),
      position: {
        x: Math.random() * 80 + 10, // 10-90% from left
        y: Math.random() * 70 + 15, // 15-85% from top
      },
      color: wishColors[Math.floor(Math.random() * wishColors.length)],
      status: 'pending'
    };

    setWishes(prev => [newWish, ...prev]);
  };

  const toggleWishesDisplay = () => {
    setShowWishes(prev => !prev);
  };

  const approveWish = (wishId: string) => {
    setWishes(prev => prev.map(wish => 
      wish.id === wishId ? { ...wish, status: 'approved' } : wish
    ));
  };

  const rejectWish = (wishId: string) => {
    setWishes(prev => prev.map(wish => 
      wish.id === wishId ? { ...wish, status: 'rejected' } : wish
    ));
  };

  const deleteWish = (wishId: string) => {
    setWishes(prev => prev.filter(wish => wish.id !== wishId));
  };

  const getPendingWishes = () => {
    return wishes.filter(wish => wish.status === 'pending');
  };

  const getApprovedWishes = () => {
    return wishes.filter(wish => wish.status === 'approved');
  };

  const getRejectedWishes = () => {
    return wishes.filter(wish => wish.status === 'rejected');
  };

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