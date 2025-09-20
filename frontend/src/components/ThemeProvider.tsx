import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Calendar, Trophy, Globe, GraduationCap, Monitor, Brain, Smartphone, Star } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  color: string;
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
  milestones : [
    {
      year: "1989",
      title: "Thành lập Khoa CNTT",
      description: "Khoa Công nghệ thông tin được thành lập với 5 giảng viên và 50 sinh viên đầu tiên.",
      icon: "Building",
      color: "from-blue-500 to-blue-700",
    },
    {
      year: "1995",
      title: "Mở rộng chương trình đào tạo",
      description: "Bổ sung thêm các chuyên ngành Kỹ thuật phần mềm và Hệ thống thông tin.",
      icon: 'GraduationCap',
      color: "from-cyan-400 to-cyan-600",
    },
    {
      year: "2000",
      title: "Chuẩn hóa chất lượng",
      description: "Được công nhận đạt chuẩn chất lượng đào tạo đại học theo tiêu chuẩn quốc gia.",
      icon: 'Globe',
      color: "from-amber-500 to-amber-500",
    },
    {
      year: "2005",
      title: "Hợp tác quốc tế",
      description: "Ký kết các thỏa thuận hợp tác với các trường đại học hàng đầu thế giới.",
      icon: 'Award',
      color: "from-purple-500 to-indigo-600",
    },
    {
      year: "2010",
      title: "Phòng lab hiện đại",
      description: "Đầu tư xây dựng hệ thống phòng thí nghiệm với trang thiết bị hiện đại.",
      icon: 'Lightbulb',
      color: "from-green-500 to-emerald-600",
    },
    {
      year: "2015",
      title: "Chương trình thạc sĩ",
      description: "Mở chương trình đào tạo thạc sĩ và tiến sĩ chuyên ngành CNTT.",
      icon: 'TrendingUp',
      color: "from-rose-500 to-pink-600",
    },
    {
      year: "2020",
      title: "Chuyển đổi số",
      description: "Triển khai toàn diện chương trình chuyển đổi số trong giảng dạy và quản lý.",
      icon: 'Target',
      color: "from-teal-500 to-teal-600",
    },
    {
      year: "2024",
      title: "Kỷ niệm 35 năm",
      description: "Tự hào kỷ niệm 35 năm thành lập với nhiều thành tựu đáng tự hào.",
      icon: 'Trophy',
      color: "from-yellow-500 to-orange-500",
    },
  ],
};
export function GetDefaultTheme(){
  return defaultTheme
}
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