// Programs Section Data - Educational programs information
export const programsData = {
  // Section Header
  header: {
    badge: {
      text: "6 Chuyên Ngành Đào Tạo",
      icon: "BookOpen"
    },
    title: "Chương Trình Đào Tạo",
    description: "Các chương trình đào tạo hiện đại, cập nhật theo xu hướng công nghệ mới nhất"
  },

  // Undergraduate Programs
  undergraduate: {
    title: "Chương Trình Đại Học",
    programs: [
      {
        icon: "Code",
        title: "Kỹ Thuật Phần Mềm",
        duration: "4 năm",
        level: "Đại học",
        description: "Đào tạo kỹ sư phần mềm chuyên nghiệp, thành thạo các công nghệ lập trình hiện đại và kiến trúc hệ thống.",
        highlights: ["Java/Spring Boot", "React/Node.js", "Mobile Development", "DevOps", "Microservices"],
        students: "1,200+",
        employment: "99%",
        salary: "25M",
        featured: true
      },
      {
        icon: "Database",
        title: "Hệ Thống Thông Tin",
        duration: "4 năm",
        level: "Đại học",
        description: "Thiết kế và quản lý hệ thống thông tin doanh nghiệp, phân tích dữ liệu lớn và business intelligence.",
        highlights: ["Database Design", "Business Intelligence", "ERP Systems", "Data Analytics", "Power BI"],
        students: "800+",
        employment: "97%",
        salary: "22M"
      },
      {
        icon: "Shield",
        title: "An Toàn Thông Tin",
        duration: "4 năm",
        level: "Đại học",
        description: "Chuyên gia bảo mật mạng, phát hiện và ngăn chặn các mối đe dọa an ninh mạng trong kỷ nguyên số.",
        highlights: ["Network Security", "Ethical Hacking", "Cryptography", "Incident Response", "Forensics"],
        students: "600+",
        employment: "98%",
        salary: "28M"
      },
      {
        icon: "Brain",
        title: "Trí Tuệ Nhân Tạo",
        duration: "4 năm",
        level: "Đại học",
        description: "Nghiên cứu và phát triển các ứng dụng AI, machine learning và deep learning cho tương lai.",
        highlights: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Robotics"],
        students: "500+",
        employment: "100%",
        salary: "35M",
        featured: true
      },
      {
        icon: "Smartphone",
        title: "Công Nghệ Di Động",
        duration: "4 năm",
        level: "Đại học",
        description: "Phát triển ứng dụng di động đa nền tảng cho iOS, Android và các công nghệ cross-platform tiên tiến.",
        highlights: ["iOS Development", "Android Native", "React Native", "Flutter", "IoT"],
        students: "700+",
        employment: "96%",
        salary: "24M"
      },
      {
        icon: "Globe",
        title: "Công Nghệ Web",
        duration: "4 năm",
        level: "Đại học",
        description: "Chuyên sâu về phát triển web, từ frontend đến backend, cloud computing và công nghệ Web3.",
        highlights: ["Full-stack Development", "Cloud Computing", "Microservices", "Web3", "Blockchain"],
        students: "900+",
        employment: "98%",
        salary: "26M"
      }
    ]
  },

  // Postgraduate Programs
  postgraduate: {
    title: "Chương Trình Sau Đại Học",
    description: "Nâng cao trình độ chuyên môn với các chương trình thạc sĩ và tiến sĩ được thiết kế dành cho những ai muốn trở thành chuyên gia hàng đầu.",
    programs: [
      {
        icon: "GraduationCap",
        title: "Thạc Sĩ CNTT",
        duration: "2 năm",
        description: "Chương trình thạc sĩ chuyên sâu với định hướng nghiên cứu và ứng dụng công nghệ tiên tiến",
        students: "150+",
        tracks: ["AI & Machine Learning", "Cybersecurity", "Software Engineering", "Data Science"]
      },
      {
        icon: "Award",
        title: "Tiến Sĩ CNTT",
        duration: "3-4 năm",
        description: "Đào tạo nhà nghiên cứu và chuyên gia hàng đầu trong lĩnh vực CNTT với tầm nhìn quốc tế",
        students: "80+",
        tracks: ["Research & Innovation", "Advanced AI", "Quantum Computing", "Blockchain Technology"]
      }
    ],
    highlights: [
      { icon: "Users", text: "Giảng viên có trình độ tiến sĩ, giáo sư từ các trường đại học hàng đầu" },
      { icon: "Target", text: "Nghiên cứu ứng dụng thực tế với các dự án từ doanh nghiệp" },
      { icon: "TrendingUp", text: "Hợp tác với các trung tâm nghiên cứu và đại học quốc tế" },
      { icon: "Award", text: "Cơ hội học bổng và trao đổi sinh viên toàn cầu" }
    ],
    stats: [
      { value: "4,000+", label: "Sinh viên" },
      { value: "98%", label: "Có việc làm" }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMGxhcHRvcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MTg3ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Programming and Technology"
    }
  }
} as const;

// Type exports
export type ProgramsData = typeof programsData;
export type UndergraduateProgram = typeof programsData.undergraduate.programs[0];
export type PostgraduateProgram = typeof programsData.postgraduate.programs[0];
export type ProgramHighlight = typeof programsData.postgraduate.highlights[0];