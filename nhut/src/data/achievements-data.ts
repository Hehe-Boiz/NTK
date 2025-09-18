// Achievements Section Data - Accomplishments and milestones
export const achievementsData = {
  // Section Header
  header: {
    badge: {
      text: "35 Năm Đồng Hành & Phát Triển",
      icon: "Trophy"
    },
    title: "Thành Tựu Nổi Bật",
    description: "Những cột mốc đáng tự hào trong hành trình 35 năm xây dựng và phát triển khoa CNTT hàng đầu cả nước"
  },

  // Major Achievements
  achievements: [
    {
      icon: "Crown",
      title: "Top 5 Khoa CNTT Hàng Đầu",
      description: "Được xếp hạng trong top 5 khoa CNTT tốt nhất cả nước bởi Bộ Giáo dục và Đào tạo",
      year: "2023",
      category: "Xếp hạng",
      featured: true
    },
    {
      icon: "Sparkles",
      title: "Chứng Nhận AUN-QA",
      description: "Đạt chứng nhận chất lượng AUN-QA quốc tế cho chương trình đào tạo CNTT",
      year: "2022",
      category: "Chất lượng"
    },
    {
      icon: "Star",
      title: "150+ Công Trình Nghiên Cứu",
      description: "Xuất bản hơn 150 công trình nghiên cứu trên các tạp chí khoa học quốc tế uy tín",
      year: "2024",
      category: "Nghiên cứu"
    },
    {
      icon: "Trophy",
      title: "Giải Thưởng Sáng Tạo",
      description: "Đạt giải nhất cuộc thi sáng tạo công nghệ sinh viên toàn quốc 3 năm liên tiếp",
      year: "2021-2023",
      category: "Sáng tạo"
    }
  ],

  // Statistics
  stats: {
    targets: {
      graduates: 15000,
      employment: 98,
      teachers: 120,
      partners: 200,
      projects: 50,
      experience: 35
    },
    display: [
      { 
        key: "graduates",
        label: "Sinh viên tốt nghiệp", 
        icon: "Users",
        format: "number" // number, percentage
      },
      { 
        key: "employment",
        label: "Tỷ lệ có việc làm", 
        icon: "TrendingUp",
        format: "percentage"
      },
      { 
        key: "teachers",
        label: "Giảng viên", 
        icon: "Target",
        format: "number"
      },
      { 
        key: "partners",
        label: "Doanh nghiệp đối tác", 
        icon: "CheckCircle",
        format: "number"
      },
      { 
        key: "projects",
        label: "Dự án nghiên cứu", 
        icon: "Award",
        format: "number"
      },
      { 
        key: "experience",
        label: "Năm kinh nghiệm", 
        icon: "Medal",
        format: "number"
      }
    ]
  },

  // Timeline / Milestones
  timeline: {
    title: "Cột Mốc Phát Triển",
    milestones: [
      { year: "1989", event: "Thành lập khoa CNTT với 50 sinh viên đầu tiên" },
      { year: "1995", event: "Mở rộng chương trình đào tạo, đạt 500 sinh viên" },
      { year: "2005", event: "Đạt chuẩn kiểm định chất lượng giáo dục quốc gia" },
      { year: "2015", event: "Thành lập trung tâm nghiên cứu AI và IoT" },
      { year: "2020", event: "Chuyển đổi số toàn diện trong giảng dạy" },
      { year: "2024", event: "Trở thành khoa CNTT hàng đầu khu vực" }
    ]
  },

  // Success Story
  successStory: {
    title: "Câu Chuyện Thành Công",
    content: "Từ những ngày đầu thành lập với 50 sinh viên, khoa CNTT đã vượt qua nhiều thách thức để trở thành một trong những khoa hàng đầu cả nước với hàng nghìn sinh viên và cầu nối quan trọng giữa nhà trường và doanh nghiệp.",
    features: [
      { 
        title: "Đào tạo chất lượng cao", 
        desc: "98% sinh viên có việc làm sau 6 tháng tốt nghiệp" 
      },
      { 
        title: "Nghiên cứu ứng dụng", 
        desc: "Hàng trăm dự án nghiên cứu được triển khai thực tế" 
      },
      { 
        title: "Hợp tác doanh nghiệp", 
        desc: "Đối tác với hơn 200 công ty công nghệ hàng đầu" 
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1716337563114-365568c4db60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBzdWNjZXNzJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU4MTg3ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Graduation Success"
    }
  }
} as const;

// Type exports
export type AchievementsData = typeof achievementsData;
export type Achievement = typeof achievementsData.achievements[0];
export type Milestone = typeof achievementsData.timeline.milestones[0];
export type StatItem = typeof achievementsData.stats.display[0];
export type SuccessFeature = typeof achievementsData.successStory.features[0];