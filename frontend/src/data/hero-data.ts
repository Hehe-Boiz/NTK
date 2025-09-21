// Hero Section Data - Easy content customization
export const heroData = {
  // Main Heading
  title: {
    prefix: "Kỷ Niệm",
    highlight: "35 Năm",
    suffix: "Thành Lập",
    subtitle: "Khoa Công Nghệ Thông Tin"
  },

  // Description
  description: "Tự hào với 35 năm đào tạo và phát triển nhân lực CNTT chất lượng cao, góp phần vào sự phát triển của ngành công nghệ Việt Nam.",

  // Call to Action Buttons
  cta: {
    primary: {
      text: "Khám phá chương trình",
      href: "#chuong-trinh",
      icon: "ArrowRight"
    },
    secondary: {
      text: "Xem thành tựu",
      href: "#thanh-tuu", 
      icon: "Play"
    }
  },

  // Statistics
  stats: [
    {
      number: "15,000+",
      label: "Sinh viên tốt nghiệp",
      icon: "Users"
    },
    {
      number: "98%",
      label: "Tỷ lệ có việc làm",
      icon: "TrendingUp"
    },
    {
      number: "200+",
      label: "Doanh nghiệp đối tác",
      icon: "Building"
    },
    {
      number: "50+",
      label: "Dự án nghiên cứu",
      icon: "Lightbulb"
    }
  ],

  // Background Configuration
  background: {
    type: "gradient" as "gradient" | "image" | "video",
    gradient: {
      from: "#ffffff",
      to: "#f8fafc",
      direction: "to bottom right"
    },
    // For image background:
    // image: {
    //   src: "/hero-bg.jpg",
    //   alt: "Hero Background",
    //   overlay: "rgba(0, 0, 0, 0.3)"
    // }
  },

  // Additional Elements
  badge: {
    text: "Được Thành Lập Năm 1989",
    icon: "GraduationCap"
  },

  // Animation Configuration
  animations: {
    enabled: true,
    staggerDelay: 0.2,
    duration: 0.8
  }
} as const;

// Type exports
export type HeroData = typeof heroData;
export type HeroStat = typeof heroData.stats[0];
export type HeroCTA = typeof heroData.cta.primary;