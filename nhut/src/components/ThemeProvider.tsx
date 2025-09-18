import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  logoText: string;
  universityName: string;
  facultyName: string;
  establishedYear: string;
  motto: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  // 35th Anniversary Content
  anniversaryYear: string;
  anniversarySlogan: string;
  mission: string;
  vision: string;
  coreValues: string;
  milestones: Milestone[];
}

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
  isCustomized: boolean;
}

const defaultTheme: ThemeConfig = {
  primaryColor: '#1e40af',
  secondaryColor: '#7c3aed',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  logoText: 'Khoa Công nghệ Thông tin',
  universityName: 'Trường Đại học XYZ',
  facultyName: 'Khoa Công nghệ Thông tin',
  establishedYear: '1990',
  motto: '35 năm đồng hành cùng sự phát triển của ngành Công nghệ Thông tin Việt Nam',
  contactInfo: {
    phone: '(028) 1234 5678',
    email: 'cntt@university.edu.vn',
    address: '123 Đường ABC, Quận 1, TP.HCM'
  },
  // 35th Anniversary Content
  anniversaryYear: '2025',
  anniversarySlogan: '35 năm kiến tạo tương lai số',
  mission: 'Đào tạo nguồn nhân lực công nghệ thông tin chất lượng cao, thúc đẩy nghiên cứu khoa học và chuyển giao công nghệ, đóng góp vào sự phát triển của xã hội số.',
  vision: 'Trở thành một trong 10 khoa công nghệ thông tin hàng đầu Đông Nam Á, được quốc tế công nhận về chất lượng đào tạo và nghiên cứu khoa học.',
  coreValues: 'Chất lượng - Đổi mới - Hợp tác - Phát triển bền vững',
  milestones: [
    {
      year: '1990',
      title: 'Thành lập Khoa CNTT',
      description: 'Khoa Công nghệ Thông tin được thành lập với sứ mệnh đào tạo nhân lực chất lượng cao',
      icon: 'Building'
    },
    {
      year: '1995',
      title: 'Chương trình Cử nhân',
      description: 'Triển khai chương trình đào tạo Cử nhân Công nghệ Thông tin đạt chuẩn quốc gia',
      icon: 'GraduationCap'
    },
    {
      year: '2000',
      title: 'Hợp tác quốc tế',
      description: 'Thiết lập quan hệ đối tác với các trường đại học hàng đầu trên thế giới',
      icon: 'Globe'
    },
    {
      year: '2005',
      title: 'Chương trình Thạc sĩ',
      description: 'Mở rộng hệ thống đào tạo với chương trình Thạc sĩ và nghiên cứu khoa học',
      icon: 'Award'
    },
    {
      year: '2010',
      title: 'Đổi mới giáo dục',
      description: 'Triển khai phương pháp giảng dạy hiện đại và học tập tích cực',
      icon: 'Lightbulb'
    },
    {
      year: '2015',
      title: 'Chuyển đổi số',
      description: 'Tiên phong trong ứng dụng công nghệ số vào giáo dục và quản lý',
      icon: 'TrendingUp'
    },
    {
      year: '2020',
      title: 'Nghiên cứu AI',
      description: 'Thành lập trung tâm nghiên cứu Trí tuệ Nhân tạo và Machine Learning',
      icon: 'Target'
    },
    {
      year: '2025',
      title: 'Kỷ niệm 35 năm',
      description: 'Đạt mốc 15,000+ cử nhân tốt nghiệp và định hướng phát triển bền vững',
      icon: 'Trophy'
    }
  ]
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('university-theme');
      return saved ? JSON.parse(saved) : defaultTheme;
    }
    return defaultTheme;
  });
  const [isCustomized, setIsCustomized] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('university-theme') !== null;
    }
    return false;
  });

  // Apply CSS custom properties
  const applyCSSProperties = (themeData: ThemeConfig) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--color-primary', themeData.primaryColor);
      root.style.setProperty('--color-secondary', themeData.secondaryColor);
      root.style.setProperty('--color-background', themeData.backgroundColor);
      root.style.setProperty('--color-foreground', themeData.textColor);
      root.style.setProperty('--university-navy', themeData.primaryColor);
      root.style.setProperty('--university-blue', themeData.secondaryColor);
    }
  };

  // Apply CSS on mount
  useEffect(() => {
    applyCSSProperties(theme);
  }, [theme]);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    const newTheme = { ...theme, ...updates };
    setTheme(newTheme);
    setIsCustomized(true);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('university-theme', JSON.stringify(newTheme));
    }

    applyCSSProperties(newTheme);
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    setIsCustomized(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('university-theme');
    }
    
    applyCSSProperties(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme, isCustomized }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}