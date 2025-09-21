
import { 
  BookOpen, 
  Code, 
  Database, 
  Shield, 
  Brain,
  Microscope,
  Users,
  Award,
  TrendingUp,
  Clock,
  Star,
  Target,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  Search,
  Filter,
  ChevronRight,
  Play,
  FileText,
  Lightbulb,
  Building,
  Globe,
  GraduationCap,
  Briefcase,
  Phone
} from 'lucide-react';
export  const programs = [
    {
      id: 'software-engineering',
      name: 'Kỹ thuật Phần mềm',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Chương trình đào tạo kỹ sư phần mềm với kiến thức sâu về thiết kế, phát triển và quản lý dự án phần mềm quy mô lớn.',
      icon: Code,
      color: 'blue',
      featured: true,
      admissionScore: '26.5',
      employmentRate: 98,
      averageSalary: '18-35 triệu',
      objectives: [
        'Phát triển ứng dụng web, mobile và desktop chất lượng cao',
        'Áp dụng các mẫu thiết kế và kiến trúc phần mềm hiện đại',
        'Quản lý dự án phần mềm theo phương pháp Agile/DevOps',
        'Đảm bảo chất lượng và bảo mật trong phát triển phần mềm'
      ],
      yearlyProgram: {
        year1: {
          semester1: [
            { code: 'IT1001', name: 'Nhập môn Lập trình', credits: 3, type: 'core' },
            { code: 'MA1101', name: 'Toán cao cấp A1', credits: 4, type: 'foundation' },
            { code: 'PH1101', name: 'Vật lý đại cương A1', credits: 3, type: 'foundation' },
            { code: 'FL1101', name: 'Tiếng Anh 1', credits: 3, type: 'general' },
            { code: 'ML1101', name: 'Triết học Mác-Lênin', credits: 3, type: 'general' }
          ],
          semester2: [
            { code: 'IT1002', name: 'Lập trình C/C++', credits: 3, type: 'core' },
            { code: 'MA1102', name: 'Toán cao cấp A2', credits: 4, type: 'foundation' },
            { code: 'PH1102', name: 'Vật lý đại cương A2', credits: 3, type: 'foundation' },
            { code: 'FL1102', name: 'Tiếng Anh 2', credits: 3, type: 'general' },
            { code: 'ML1102', name: 'Kinh tế chính trị Mác-Lênin', credits: 2, type: 'general' }
          ]
        },
        year2: {
          semester1: [
            { code: 'IT2001', name: 'Cấu trúc Dữ liệu & Giải thuật', credits: 4, type: 'core' },
            { code: 'IT2002', name: 'Lập trình Hướng đối tượng', credits: 3, type: 'core' },
            { code: 'MA2001', name: 'Toán rời rạc', credits: 3, type: 'foundation' },
            { code: 'MA2002', name: 'Xác suất Thống kê', credits: 3, type: 'foundation' },
            { code: 'ML2001', name: 'Chủ nghĩa xã hội khoa học', credits: 2, type: 'general' }
          ],
          semester2: [
            { code: 'IT2003', name: 'Cơ sở Dữ liệu', credits: 3, type: 'core' },
            { code: 'IT2004', name: 'Kiến trúc Máy tính', credits: 3, type: 'core' },
            { code: 'IT2005', name: 'Mạng Máy tính', credits: 3, type: 'core' },
            { code: 'IT2006', name: 'Hệ điều hành', credits: 3, type: 'core' },
            { code: 'ML2002', name: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 2, type: 'general' }
          ]
        },
        year3: {
          semester1: [
            { code: 'SE3001', name: 'Kỹ thuật Phần mềm', credits: 4, type: 'major' },
            { code: 'SE3002', name: 'Kiến trúc Phần mềm', credits: 3, type: 'major' },
            { code: 'SE3003', name: 'Phát triển Web', credits: 3, type: 'major' },
            { code: 'SE3004', name: 'Testing & QA', credits: 3, type: 'major' },
            { code: 'EL3001', name: 'Môn học tự chọn 1', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'SE3005', name: 'Mobile App Development', credits: 3, type: 'major' },
            { code: 'SE3006', name: 'DevOps & CI/CD', credits: 3, type: 'major' },
            { code: 'SE3007', name: 'Cloud Computing', credits: 3, type: 'major' },
            { code: 'SE3008', name: 'Agile Project Management', credits: 3, type: 'major' },
            { code: 'EL3002', name: 'Môn học tự chọn 2', credits: 3, type: 'elective' }
          ]
        },
        year4: {
          semester1: [
            { code: 'SE4001', name: 'Microservices Architecture', credits: 3, type: 'advanced' },
            { code: 'SE4002', name: 'Software Security', credits: 3, type: 'advanced' },
            { code: 'SE4003', name: 'AI in Software Development', credits: 3, type: 'advanced' },
            { code: 'IN4001', name: 'Thực tập Doanh nghiệp', credits: 4, type: 'internship' },
            { code: 'EL4001', name: 'Môn học tự chọn 3', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'SE4004', name: 'Dự án Tốt nghiệp', credits: 6, type: 'capstone' },
            { code: 'SE4005', name: 'Seminar', credits: 2, type: 'capstone' },
            { code: 'SE4006', name: 'Entrepreneurship', credits: 2, type: 'advanced' },
            { code: 'EL4002', name: 'Môn học tự chọn 4', credits: 3, type: 'elective' }
          ]
        }
      },
      technologies: ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Docker', 'AWS', 'MongoDB'],
      careerPaths: [
        'Full-stack Developer',
        'Software Architect',
        'DevOps Engineer',
        'Technical Lead',
        'Product Manager',
        'Solution Consultant'
      ],
      companies: ['FPT', 'VinGroup', 'Tiki', 'VNG', 'Grab', 'Google', 'Microsoft'],
      labs: ['Software Engineering Lab', 'Web Development Lab', 'Mobile Development Lab']
    },
    {
      id: 'data-science',
      name: 'Khoa học Dữ liệu',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Chương trình tiên phong đào tạo chuyên gia phân tích dữ liệu, machine learning và business intelligence.',
      icon: Database,
      color: 'green',
      featured: true,
      admissionScore: '27.0',
      employmentRate: 95,
      averageSalary: '22-45 triệu',
      objectives: [
        'Thu thập, làm sạch và phân tích dữ liệu quy mô lớn',
        'Xây dựng mô hình Machine Learning và Deep Learning',
        'Phát triển hệ thống Business Intelligence và Dashboard',
        'Ứng dụng AI trong các lĩnh vực thực tế'
      ],
      yearlyProgram: {
        year1: {
          semester1: [
            { code: 'DS1001', name: 'Nhập môn Khoa học Dữ liệu', credits: 3, type: 'core' },
            { code: 'MA1101', name: 'Toán cao cấp A1', credits: 4, type: 'foundation' },
            { code: 'ST1101', name: 'Xác suất Thống kê', credits: 3, type: 'foundation' },
            { code: 'FL1101', name: 'Tiếng Anh 1', credits: 3, type: 'general' },
            { code: 'ML1101', name: 'Triết học Mác-Lênin', credits: 3, type: 'general' }
          ],
          semester2: [
            { code: 'DS1002', name: 'Python Programming', credits: 3, type: 'core' },
            { code: 'MA1102', name: 'Toán cao cấp A2', credits: 4, type: 'foundation' },
            { code: 'ST1102', name: 'Thống kê ứng dụng', credits: 3, type: 'foundation' },
            { code: 'FL1102', name: 'Tiếng Anh 2', credits: 3, type: 'general' },
            { code: 'ML1102', name: 'Kinh tế chính trị Mác-Lênin', credits: 2, type: 'general' }
          ]
        },
        year2: {
          semester1: [
            { code: 'DS2001', name: 'R Programming', credits: 3, type: 'core' },
            { code: 'DS2002', name: 'Data Structures & Algorithms', credits: 4, type: 'core' },
            { code: 'MA2001', name: 'Đại số tuyến tính', credits: 3, type: 'foundation' },
            { code: 'DS2003', name: 'Database Systems', credits: 3, type: 'core' },
            { code: 'ML2001', name: 'Chủ nghĩa xã hội khoa học', credits: 2, type: 'general' }
          ],
          semester2: [
            { code: 'DS2004', name: 'Data Mining', credits: 3, type: 'core' },
            { code: 'DS2005', name: 'Machine Learning Basics', credits: 4, type: 'core' },
            { code: 'DS2006', name: 'Data Visualization', credits: 3, type: 'core' },
            { code: 'DS2007', name: 'Big Data Fundamentals', credits: 3, type: 'core' },
            { code: 'ML2002', name: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 2, type: 'general' }
          ]
        },
        year3: {
          semester1: [
            { code: 'DS3001', name: 'Advanced Machine Learning', credits: 4, type: 'major' },
            { code: 'DS3002', name: 'Deep Learning', credits: 4, type: 'major' },
            { code: 'DS3003', name: 'Natural Language Processing', credits: 3, type: 'major' },
            { code: 'DS3004', name: 'Business Intelligence', credits: 3, type: 'major' },
            { code: 'EL3001', name: 'Môn học tự chọn 1', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'DS3005', name: 'Computer Vision', credits: 3, type: 'major' },
            { code: 'DS3006', name: 'Big Data Technologies', credits: 3, type: 'major' },
            { code: 'DS3007', name: 'Time Series Analysis', credits: 3, type: 'major' },
            { code: 'DS3008', name: 'MLOps', credits: 3, type: 'major' },
            { code: 'EL3002', name: 'Môn học tự chọn 2', credits: 3, type: 'elective' }
          ]
        },
        year4: {
          semester1: [
            { code: 'DS4001', name: 'Advanced Analytics', credits: 3, type: 'advanced' },
            { code: 'DS4002', name: 'AI Ethics & Governance', credits: 3, type: 'advanced' },
            { code: 'DS4003', name: 'Industry Applications', credits: 3, type: 'advanced' },
            { code: 'IN4001', name: 'Thực tập Doanh nghiệp', credits: 4, type: 'internship' },
            { code: 'EL4001', name: 'Môn học tự chọn 3', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'DS4004', name: 'Dự án Tốt nghiệp', credits: 6, type: 'capstone' },
            { code: 'DS4005', name: 'Research Methodology', credits: 2, type: 'capstone' },
            { code: 'DS4006', name: 'Data Science Career', credits: 2, type: 'advanced' },
            { code: 'EL4002', name: 'Môn học tự chọn 4', credits: 3, type: 'elective' }
          ]
        }
      },
      technologies: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Spark', 'Hadoop', 'Tableau'],
      careerPaths: [
        'Data Scientist',
        'ML Engineer',
        'Data Analyst',
        'Business Intelligence Developer',
        'AI Research Scientist',
        'Data Engineer'
      ],
      companies: ['VinAI', 'Zalo AI', 'ViettelAI', 'Banking Sector', 'E-commerce', 'Healthcare'],
      labs: ['Big Data Lab', 'AI/ML Lab', 'Visualization Lab']
    },
    {
      id: 'cybersecurity',
      name: 'An toàn Thông tin',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Đào tạo chuyên gia bảo mật với kiến thức toàn diện về an ninh mạng và bảo vệ thông tin.',
      icon: Shield,
      color: 'red',
      featured: true,
      admissionScore: '25.5',
      employmentRate: 97,
      averageSalary: '20-40 triệu',
      objectives: [
        'Phân tích và đánh giá rủi ro an ninh mạng',
        'Thiết kế và triển khai hệ thống bảo mật',
        'Ứng phó với các cuộc tấn công mạng',
        'Quản lý chính sách bảo mật doanh nghiệp'
      ],
      yearlyProgram: {
        year1: {
          semester1: [
            { code: 'CS1001', name: 'Nhập môn An toàn Thông tin', credits: 3, type: 'core' },
            { code: 'MA1101', name: 'Toán cao cấp A1', credits: 4, type: 'foundation' },
            { code: 'IT1001', name: 'Nhập môn Lập trình', credits: 3, type: 'foundation' },
            { code: 'FL1101', name: 'Tiếng Anh 1', credits: 3, type: 'general' },
            { code: 'ML1101', name: 'Triết học Mác-Lênin', credits: 3, type: 'general' }
          ],
          semester2: [
            { code: 'CS1002', name: 'Network Fundamentals', credits: 3, type: 'core' },
            { code: 'MA1102', name: 'Toán cao cấp A2', credits: 4, type: 'foundation' },
            { code: 'IT1002', name: 'Lập trình C/C++', credits: 3, type: 'foundation' },
            { code: 'FL1102', name: 'Tiếng Anh 2', credits: 3, type: 'general' },
            { code: 'ML1102', name: 'Kinh tế chính trị Mác-Lênin', credits: 2, type: 'general' }
          ]
        },
        year2: {
          semester1: [
            { code: 'CS2001', name: 'Cryptography', credits: 4, type: 'core' },
            { code: 'CS2002', name: 'Operating Systems Security', credits: 3, type: 'core' },
            { code: 'MA2001', name: 'Toán rời rạc', credits: 3, type: 'foundation' },
            { code: 'CS2003', name: 'Security Principles', credits: 3, type: 'core' },
            { code: 'ML2001', name: 'Chủ nghĩa xã hội khoa học', credits: 2, type: 'general' }
          ],
          semester2: [
            { code: 'CS2004', name: 'Network Security', credits: 4, type: 'core' },
            { code: 'CS2005', name: 'Web Security', credits: 3, type: 'core' },
            { code: 'CS2006', name: 'Database Security', credits: 3, type: 'core' },
            { code: 'CS2007', name: 'Risk Assessment', credits: 3, type: 'core' },
            { code: 'ML2002', name: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 2, type: 'general' }
          ]
        },
        year3: {
          semester1: [
            { code: 'CS3001', name: 'Ethical Hacking', credits: 4, type: 'major' },
            { code: 'CS3002', name: 'Digital Forensics', credits: 4, type: 'major' },
            { code: 'CS3003', name: 'Malware Analysis', credits: 3, type: 'major' },
            { code: 'CS3004', name: 'Security Management', credits: 3, type: 'major' },
            { code: 'EL3001', name: 'Môn học tự chọn 1', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'CS3005', name: 'IoT Security', credits: 3, type: 'major' },
            { code: 'CS3006', name: 'Cloud Security', credits: 3, type: 'major' },
            { code: 'CS3007', name: 'Blockchain Security', credits: 3, type: 'major' },
            { code: 'CS3008', name: 'Incident Response', credits: 3, type: 'major' },
            { code: 'EL3002', name: 'Môn học tự chọn 2', credits: 3, type: 'elective' }
          ]
        },
        year4: {
          semester1: [
            { code: 'CS4001', name: 'Advanced Penetration Testing', credits: 3, type: 'advanced' },
            { code: 'CS4002', name: 'Security Architecture', credits: 3, type: 'advanced' },
            { code: 'CS4003', name: 'Compliance & Governance', credits: 3, type: 'advanced' },
            { code: 'IN4001', name: 'Thực tập Doanh nghiệp', credits: 4, type: 'internship' },
            { code: 'EL4001', name: 'Môn học tự chọn 3', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'CS4004', name: 'Dự án Tốt nghiệp', credits: 6, type: 'capstone' },
            { code: 'CS4005', name: 'Security Audit', credits: 2, type: 'capstone' },
            { code: 'CS4006', name: 'Cybersecurity Career', credits: 2, type: 'advanced' },
            { code: 'EL4002', name: 'Môn học tự chọn 4', credits: 3, type: 'elective' }
          ]
        }
      },
      technologies: ['Kali Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'SIEM', 'Firewall', 'IDS/IPS'],
      careerPaths: [
        'Security Analyst',
        'Penetration Tester',
        'Security Consultant',
        'CISO',
        'Forensics Specialist',
        'Security Architect'
      ],
      companies: ['Viettel Cyber Security', 'BKAV', 'FPT Security', 'Banks', 'Government', 'Consulting'],
      labs: ['Cybersecurity Lab', 'Digital Forensics Lab', 'Penetration Testing Lab']
    },
    {
      id: 'artificial-intelligence',
      name: 'Trí tuệ Nhân tạo',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Chương trình đào tạo về AI, deep learning và các ứng dụng thông minh trong thời đại 4.0.',
      icon: Brain,
      color: 'purple',
      featured: true,
      admissionScore: '27.5',
      employmentRate: 93,
      averageSalary: '25-50 triệu',
      objectives: [
        'Phát triển các hệ thống AI và robot thông minh',
        'Nghiên cứu và ứng dụng Machine Learning nâng cao',
        'Xây dựng chatbot và virtual assistant',
        'Ứng dụng AI trong healthcare, fintech, autonomous systems'
      ],
      yearlyProgram: {
        year1: {
          semester1: [
            { code: 'AI1001', name: 'Nhập môn Trí tuệ Nhân tạo', credits: 3, type: 'core' },
            { code: 'MA1101', name: 'Toán cao cấp A1', credits: 4, type: 'foundation' },
            { code: 'IT1001', name: 'Logic Toán học', credits: 3, type: 'foundation' },
            { code: 'FL1101', name: 'Tiếng Anh 1', credits: 3, type: 'general' },
            { code: 'ML1101', name: 'Triết học Mác-Lênin', credits: 3, type: 'general' }
          ],
          semester2: [
            { code: 'AI1002', name: 'Programming Fundamentals', credits: 3, type: 'core' },
            { code: 'MA1102', name: 'Đại số tuyến tính', credits: 4, type: 'foundation' },
            { code: 'ST1101', name: 'Probability Theory', credits: 3, type: 'foundation' },
            { code: 'FL1102', name: 'Tiếng Anh 2', credits: 3, type: 'general' },
            { code: 'ML1102', name: 'Kinh tế chính trị Mác-Lênin', credits: 2, type: 'general' }
          ]
        },
        year2: {
          semester1: [
            { code: 'AI2001', name: 'Artificial Intelligence', credits: 4, type: 'core' },
            { code: 'AI2002', name: 'Machine Learning', credits: 4, type: 'core' },
            { code: 'CS2001', name: 'Data Structures & Algorithms', credits: 3, type: 'foundation' },
            { code: 'ST2001', name: 'Statistics for AI', credits: 3, type: 'foundation' },
            { code: 'ML2001', name: 'Chủ nghĩa xã hội khoa học', credits: 2, type: 'general' }
          ],
          semester2: [
            { code: 'AI2003', name: 'Neural Networks', credits: 4, type: 'core' },
            { code: 'AI2004', name: 'Computer Vision Basics', credits: 3, type: 'core' },
            { code: 'AI2005', name: 'Pattern Recognition', credits: 3, type: 'core' },
            { code: 'CS2002', name: 'Database Systems', credits: 3, type: 'foundation' },
            { code: 'ML2002', name: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 2, type: 'general' }
          ]
        },
        year3: {
          semester1: [
            { code: 'AI3001', name: 'Deep Learning', credits: 4, type: 'major' },
            { code: 'AI3002', name: 'Natural Language Processing', credits: 4, type: 'major' },
            { code: 'AI3003', name: 'Computer Vision Advanced', credits: 3, type: 'major' },
            { code: 'AI3004', name: 'Robotics', credits: 3, type: 'major' },
            { code: 'EL3001', name: 'Môn học tự chọn 1', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'AI3005', name: 'Reinforcement Learning', credits: 3, type: 'major' },
            { code: 'AI3006', name: 'AI Applications', credits: 3, type: 'major' },
            { code: 'AI3007', name: 'Knowledge Systems', credits: 3, type: 'major' },
            { code: 'AI3008', name: 'AI Ethics', credits: 3, type: 'major' },
            { code: 'EL3002', name: 'Môn học tự chọn 2', credits: 3, type: 'elective' }
          ]
        },
        year4: {
          semester1: [
            { code: 'AI4001', name: 'Advanced AI Research', credits: 3, type: 'advanced' },
            { code: 'AI4002', name: 'Autonomous Systems', credits: 3, type: 'advanced' },
            { code: 'AI4003', name: 'AI in Industry', credits: 3, type: 'advanced' },
            { code: 'IN4001', name: 'Thực tập Doanh nghiệp', credits: 4, type: 'internship' },
            { code: 'EL4001', name: 'Môn học tự chọn 3', credits: 3, type: 'elective' }
          ],
          semester2: [
            { code: 'AI4004', name: 'Dự án Tốt nghiệp', credits: 6, type: 'capstone' },
            { code: 'AI4005', name: 'Research Methodology', credits: 2, type: 'capstone' },
            { code: 'AI4006', name: 'Startup Incubation', credits: 2, type: 'advanced' },
            { code: 'EL4002', name: 'Môn học tự chọn 4', credits: 3, type: 'elective' }
          ]
        }
      },
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLTK', 'ROS', 'CUDA', 'Keras'],
      careerPaths: [
        'AI Engineer',
        'Research Scientist',
        'Computer Vision Engineer',
        'NLP Engineer',
        'Robotics Engineer',
        'AI Product Manager'
      ],
      companies: ['VinAI Research', 'FPT AI', 'ViettelAI', 'Tech Startups', 'Research Institutes'],
      labs: ['AI Research Lab', 'Computer Vision Lab', 'Robotics Lab']
    }
  ];
export  const graduatePrograms = [
    {
      id: 'master-artificial-intelligence',
      name: 'Thạc sĩ Trí tuệ Nhân tạo',
      level: 'Thạc sĩ',
      duration: '2 năm',
      credits: 60,
      description: 'Chương trình nâng cao, tập trung vào nghiên cứu chuyên sâu, phát triển các mô hình AI đột phá và lãnh đạo các dự án công nghệ thông minh.',
      icon: Brain,
      color: 'purple',
      featured: true,
      admissionRequirements: [
        'Tốt nghiệp Cử nhân ngành phù hợp với GPA > 3.2/4.0',
        'Chứng chỉ Tiếng Anh IELTS 6.5+ hoặc tương đương',
        'Bài luận thể hiện định hướng nghiên cứu',
        '02 thư giới thiệu từ các giáo sư hoặc chuyên gia'
      ],
      employmentRate: 99,
      averageSalary: '40-80 triệu',
      objectives: [
        'Nghiên cứu và phát triển các thuật toán AI mới',
        'Công bố các bài báo khoa học tại các hội nghị uy tín',
        'Xây dựng và triển khai các hệ thống AI phức tạp',
        'Dẫn dắt các nhóm nghiên cứu và phát triển AI'
      ],
      yearlyProgram: {
        year1: {
          semester1: [
            { code: 'AI5001', name: 'Lý thuyết Học máy Nâng cao', credits: 4, type: 'core' },
            { code: 'AI5002', name: 'Kiến trúc Mạng Nơ-ron Sâu', credits: 4, type: 'core' },
            { code: 'RS5001', name: 'Phương pháp Nghiên cứu Khoa học', credits: 3, type: 'core' }
          ],
          semester2: [
            { code: 'AI5003', name: 'Học Tăng cường (Reinforcement Learning)', credits: 4, type: 'specialization' },
            { code: 'AI5004', name: 'Xử lý Ngôn ngữ Tự nhiên Nâng cao', credits: 4, type: 'specialization' },
            { code: 'AI5005', name: 'Hội thảo Sau đại học về AI', credits: 2, type: 'seminar' }
          ]
        },
        year2: {
          semester1: [
            { code: 'AI6001', name: 'Đạo đức và Trách nhiệm trong AI', credits: 3, type: 'specialization' },
            { code: 'EL6001', name: 'Môn học tự chọn Sau đại học', credits: 3, type: 'elective' },
            { code: 'TH6001', name: 'Nghiên cứu Luận văn Thạc sĩ 1', credits: 5, type: 'thesis' }
          ],
          semester2: [
            { code: 'TH6002', name: 'Nghiên cứu Luận văn Thạc sĩ 2 và Bảo vệ', credits: 8, type: 'thesis' }
          ]
        }
      },
      technologies: ['JAX', 'Advanced PyTorch/TensorFlow', 'Hugging Face Transformers', 'Kubeflow', 'MLFlow'],
      careerPaths: [
        'AI Research Scientist',
        'Senior Machine Learning Engineer',
        'AI Architect',
        'Giảng viên/Nghiên cứu viên',
        'AI Consultant'
      ],
      companies: ['VinAI Research', 'Zalo AI Lab', 'Google DeepMind', 'OpenAI', 'Các trường Đại học và Viện nghiên cứu'],
      labs: ['Deep Learning Lab', 'Computational Linguistics Lab', 'Robotics & AI Lab']
    },
    {
      id: 'master-cybersecurity',
      name: 'Thạc sĩ An toàn Thông tin',
      level: 'Thạc sĩ',
      duration: '2 năm',
      credits: 60,
      description: 'Đào tạo chuyên gia An toàn thông tin cấp cao với khả năng lãnh đạo, xây dựng chiến lược bảo mật, nghiên cứu các mối đe dọa mới và ứng phó sự cố cấp cao.',
      icon: Shield,
      color: 'red',
      featured: false,
      admissionRequirements: [
        'Tốt nghiệp Cử nhân ngành phù hợp với GPA > 3.0/4.0',
        'Chứng chỉ Tiếng Anh IELTS 6.0+ hoặc tương đương',
        'Kinh nghiệm làm việc trong ngành là một lợi thế',
        '02 thư giới thiệu'
      ],
      employmentRate: 98,
      averageSalary: '45-90 triệu',
      objectives: [
        'Thiết kế kiến trúc bảo mật cho các hệ thống quy mô lớn',
        'Nghiên cứu và phân tích các kỹ thuật tấn công APT',
        'Xây dựng và quản lý các chính sách An toàn thông tin (GRC)',
        'Chỉ huy đội ứng cứu sự cố an ninh mạng'
      ],
      yearlyProgram: {
        year1: {
          semester1: [
            { code: 'CS5001', name: 'Mật mã học Nâng cao và Ứng dụng', credits: 4, type: 'core' },
            { code: 'CS5002', name: 'Thiết kế Hệ thống Bảo mật', credits: 4, type: 'core' },
            { code: 'CS5003', name: 'Phân tích và Tình báo Mối đe dọa', credits: 3, type: 'core' }
          ],
          semester2: [
            { code: 'CS5004', name: 'An ninh Mạng Tấn công và Khai thác lỗ hổng', credits: 4, type: 'specialization' },
            { code: 'CS5005', name: 'Điều tra số và Ứng cứu Sự cố (DFIR)', credits: 4, type: 'specialization' },
            { code: 'CS5006', name: 'Hội thảo về các Vấn đề An ninh mạng Hiện đại', credits: 2, type: 'seminar' }
          ]
        },
        year2: {
          semester1: [
            { code: 'CS6001', name: 'Quản trị, Rủi ro và Tuân thủ (GRC)', credits: 3, type: 'specialization' },
            { code: 'EL6001', name: 'Môn học tự chọn Sau đại học', credits: 3, type: 'elective' },
            { code: 'TH6001', name: 'Nghiên cứu Luận văn Thạc sĩ 1', credits: 5, type: 'thesis' }
          ],
          semester2: [
            { code: 'TH6002', name: 'Nghiên cứu Luận văn Thạc sĩ 2 và Bảo vệ', credits: 8, type: 'thesis' }
          ]
        }
      },
      technologies: ['Advanced Ghidra/IDA Pro', 'Threat Intelligence Platforms (TIPs)', 'Cloud-native Security (Falco, Wazuh)', 'SOAR', 'EDR'],
      careerPaths: [
        'Security Architect',
        'Chief Information Security Officer (CISO)',
        'Lead Penetration Tester',
        'Threat Hunter',
        'DFIR Lead',
        'Security Researcher'
      ],
      companies: ['Mandiant (Google Cloud)', 'CrowdStrike', 'KPMG Cybersecurity', 'PwC', 'Các cơ quan chính phủ', 'Tập đoàn tài chính'],
      labs: ['Threat Intelligence Lab', 'Malware Reverse Engineering Lab', 'Hardware Security Lab']
    }
  ];

export  const researchAreas = [
    {
      id: 'artificial-intelligence',
      name: 'Trí tuệ Nhân tạo & Machine Learning',
      description: 'Nghiên cứu tiên tiến về AI, deep learning và các ứng dụng thông minh',
      icon: Brain,
      color: 'purple',
      projects: 18,
      publications: 65,
      funding: '3.2 tỷ VND',
      featured: true,
      keyResearch: [
        'Computer Vision for Medical Diagnosis',
        'Natural Language Processing cho tiếng Việt',
        'Autonomous Systems và IoT',
        'Explainable AI và AI Ethics'
      ],
      facilities: [
        'GPU Cluster với 100+ GPU units',
        'High-Performance Computing System',
        'AI Development Platform',
        'Robotics Testing Environment'
      ],
      partnerships: [
        'VinAI Research',
        'Google AI Vietnam',
        'Microsoft AI',
        'NVIDIA AI'
      ],
      achievements: [
        'Best Paper Award tại AAAI 2024',
        'Giải Nhất cuộc thi AI4VN 2023',
        '15 bằng sáng chế được cấp',
        '3 sản phẩm AI được thương mại hóa'
      ]
    },
    {
      id: 'cybersecurity',
      name: 'An toàn Thông tin & Blockchain',
      description: 'Nghiên cứu bảo mật mạng, mật mã học và công nghệ blockchain',
      icon: Shield,
      color: 'red',
      projects: 14,
      publications: 52,
      funding: '2.5 tỷ VND',
      featured: true,
      keyResearch: [
        'Blockchain for E-Government',
        'IoT Security và Privacy',
        'Quantum Cryptography',
        'Digital Forensics Technologies'
      ],
      facilities: [
        'Cybersecurity Testing Lab',
        'Blockchain Development Platform',
        'Digital Forensics Lab',
        'Network Security Monitoring Center'
      ],
      partnerships: [
        'Viettel Cyber Security',
        'BKAV Corporation', 
        'National Cyber Security Center',
        'International Security Institutes'
      ],
      achievements: [
        'Top 10 Cybersecurity Research in ASEAN',
        'Government Digital ID Project',
        '20+ security patents',
        'National Cybersecurity Awards'
      ]
    },
    {
      id: 'data-science',
      name: 'Khoa học Dữ liệu & Big Data',
      description: 'Nghiên cứu xử lý dữ liệu lớn, analytics và business intelligence',
      icon: Database,
      color: 'blue',
      projects: 12,
      publications: 48,
      funding: '2.1 tỷ VND',
      featured: true,
      keyResearch: [
        'Smart City Data Analytics',
        'Healthcare Big Data',
        'Financial Data Mining',
        'Social Media Analytics'
      ],
      facilities: [
        'Big Data Processing Cluster',
        'Data Visualization Lab',
        'Cloud Computing Infrastructure',
        'Real-time Analytics Platform'
      ],
      partnerships: [
        'FPT Software',
        'Vingroup Big Data',
        'Smart City Projects',
        'Healthcare Institutions'
      ],
      achievements: [
        'Smart Traffic System for HCM City',
        'COVID-19 Data Analytics Platform',
        'Banking Fraud Detection System',
        'E-commerce Recommendation Engine'
      ]
    },
    {
      id: 'software-engineering',
      name: 'Kỹ thuật Phần mềm & Cloud Computing',
      description: 'Nghiên cứu kiến trúc phần mềm, cloud computing và DevOps',
      icon: Code,
      color: 'green',
      projects: 10,
      publications: 35,
      funding: '1.8 tỷ VND',
      featured: false,
      keyResearch: [
        'Microservices Architecture',
        'Container Orchestration',
        'Serverless Computing',
        'Software Quality Assurance'
      ],
      facilities: [
        'Cloud Development Lab',
        'DevOps Automation Lab',
        'Software Testing Lab',
        'Performance Monitoring Center'
      ],
      partnerships: [
        'Amazon Web Services',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Local Software Companies'
      ],
      achievements: [
        'Enterprise Cloud Migration Framework',
        'Open Source Contributions',
        'DevOps Best Practices Guide',
        'Cloud Native Applications'
      ]
    }
  ];

