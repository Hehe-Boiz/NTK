// Site Configuration - Easily customizable for different organizations
export const siteConfig = {
  // Basic Site Information
  name: "Khoa Công Nghệ Thông Tin",
  description: "35 năm đào tạo và phát triển nhân lực CNTT chất lượng cao",
  url: "https://yoursite.com",
  
  // Organization Details
  organization: {
    name: "Khoa Công Nghệ Thông Tin",
    shortName: "CNTT",
    establishedYear: 1989,
    currentYear: new Date().getFullYear(),
    anniversary: 35,
  },

  // Contact Information
  contact: {
    address: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh",
    phone: "+84 28 1234 5678",
    email: "info@cntt.edu.vn",
    website: "https://cntt.edu.vn",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/cntt",
    youtube: "https://youtube.com/cntt",
    linkedin: "https://linkedin.com/school/cntt",
    zalo: "https://zalo.me/cntt",
  },

  // Navigation Menu
  navigation: [
    { name: "Trang chủ", href: "#", id: "home" },
    { name: "Giới thiệu", href: "#gioi-thieu", id: "about" },
    { name: "Lịch sử", href: "#lich-su", id: "history" },
    { name: "Thành tựu", href: "#thanh-tuu", id: "achievements" },
    { name: "Chương trình", href: "#chuong-trinh", id: "programs" },
    { name: "Liên hệ", href: "#lien-he", id: "contact" },
  ],

  // Footer Links
  footer: {
    sections: [
      {
        title: "Về chúng tôi",
        links: [
          { name: "Giới thiệu", href: "#gioi-thieu" },
          { name: "Lịch sử phát triển", href: "#lich-su" },
          { name: "Thành tựu", href: "#thanh-tuu" },
          { name: "Đội ngũ giảng viên", href: "#" },
        ],
      },
      {
        title: "Đào tạo",
        links: [
          { name: "Chương trình đại học", href: "#chuong-trinh" },
          { name: "Chương trình sau đại học", href: "#chuong-trinh" },
          { name: "Tuyển sinh", href: "#" },
          { name: "Học phí", href: "#" },
        ],
      },
      {
        title: "Nghiên cứu",
        links: [
          { name: "Dự án nghiên cứu", href: "#" },
          { name: "Công bố khoa học", href: "#" },
          { name: "Hợp tác quốc tế", href: "#" },
          { name: "Phòng thí nghiệm", href: "#" },
        ],
      },
      {
        title: "Sinh viên",
        links: [
          { name: "Thông tin tuyển sinh", href: "#" },
          { name: "Học bổng", href: "#" },
          { name: "Hoạt động sinh viên", href: "#" },
          { name: "Cựu sinh viên", href: "#" },
        ],
      },
    ],
  },

  // Feature Flags
  features: {
    enableDarkMode: true,
    enableAnimations: true,
    enableAnalytics: false,
    enableNewsletterSignup: true,
    enableLanguageSwitcher: false,
  },

  // SEO Configuration
  seo: {
    defaultTitle: "Khoa Công Nghệ Thông Tin - 35 năm đào tạo CNTT",
    titleTemplate: "%s | Khoa CNTT",
    description: "Khoa Công Nghệ Thông Tin - 35 năm đào tạo và phát triển nhân lực CNTT chất lượng cao, đạt chuẩn quốc tế.",
    keywords: ["công nghệ thông tin", "đào tạo CNTT", "khoa học máy tính", "kỹ thuật phần mềm"],
    openGraph: {
      type: "website",
      locale: "vi_VN",
      siteName: "Khoa Công Nghệ Thông Tin",
    },
  },
} as const;

// Type exports for TypeScript support
export type SiteConfig = typeof siteConfig;
export type NavigationItem = typeof siteConfig.navigation[0];
export type FooterSection = typeof siteConfig.footer.sections[0];