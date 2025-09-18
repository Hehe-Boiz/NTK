import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AcademicPage() {
  const [activeSection, setActiveSection] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState('software-engineering');
  const [selectedResearchArea, setSelectedResearchArea] = useState('artificial-intelligence');
  const [searchTerm, setSearchTerm] = useState('');

  const programs = [
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
      featured: false,
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

  const researchAreas = [
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
      featured: false,
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

  const currentProgram = programs.find(p => p.id === selectedProgram) || programs[0];
  const currentResearchArea = researchAreas.find(r => r.id === selectedResearchArea) || researchAreas[0];

  const filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSubjectTypeColor = (type: string) => {
    switch (type) {
      case 'foundation': return 'bg-blue-100 text-blue-800';
      case 'core': return 'bg-green-100 text-green-800';
      case 'major': return 'bg-purple-100 text-purple-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      case 'elective': return 'bg-gray-100 text-gray-800';
      case 'internship': return 'bg-orange-100 text-orange-800';
      case 'capstone': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubjectTypeName = (type: string) => {
    switch (type) {
      case 'foundation': return 'Nền tảng';
      case 'core': return 'Cốt lõi';
      case 'major': return 'Chuyên ngành';
      case 'advanced': return 'Nâng cao';
      case 'elective': return 'Tự chọn';
      case 'internship': return 'Thực tập';
      case 'capstone': return 'Tốt nghiệp';
      case 'general': return 'Đại cương';
      default: return 'Khác';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 text-lg">
              🎓 Đào tạo & Nghiên cứu Xuất sắc
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chương trình Đào tạo & Nghiên cứu
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Hệ thống đào tạo hiện đại kết hợp nghiên cứu khoa học tiên tiến, 
              tạo nền tảng vững chắc cho sự nghiệp công nghệ của bạn.
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <BookOpen className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <div className="text-2xl font-bold mb-1">4</div>
                <div className="text-sm">Chương trình Cử nhân</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Microscope className="h-8 w-8 mx-auto mb-3 text-green-300" />
                <div className="text-2xl font-bold mb-1">54</div>
                <div className="text-sm">Dự án nghiên cứu</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                <div className="text-2xl font-bold mb-1">200+</div>
                <div className="text-sm">Công bố khoa học</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-purple-300" />
                <div className="text-2xl font-bold mb-1">96%</div>
                <div className="text-sm">Tỷ lệ có việc làm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full lg:w-auto">
              <TabsList className="grid w-full grid-cols-2 lg:w-auto">
                <TabsTrigger value="programs" className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Chương trình Đào tạo</span>
                </TabsTrigger>
                <TabsTrigger value="research" className="flex items-center space-x-2">
                  <Microscope className="h-4 w-4" />
                  <span>Nghiên cứu Khoa học</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Bộ lọc
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {activeSection === 'programs' && (
        <>
          {/* Programs Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Chương trình Đào tạo Cử nhân
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  4 chuyên ngành hiện đại với chương trình học cập nhật theo xu hướng công nghệ mới nhất
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-6 mb-12">
                {filteredPrograms.map((program) => {
                  const Icon = program.icon;
                  const isSelected = program.id === selectedProgram;
                  return (
                    <Card 
                      key={program.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        isSelected ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' : ''
                      } ${program.featured ? 'border-yellow-300' : ''}`}
                      onClick={() => setSelectedProgram(program.id)}
                    >
                      <CardHeader>
                        {program.featured && (
                          <Badge className="mb-2 bg-yellow-500 text-black w-fit">
                            <Star className="h-3 w-3 mr-1" />
                            Nổi bật
                          </Badge>
                        )}
                        <div className={`w-12 h-12 bg-${program.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                          <Icon className={`h-6 w-6 text-${program.color}-600`} />
                        </div>
                        <CardTitle className="text-lg">{program.name}</CardTitle>
                        <CardDescription className="line-clamp-3">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Điểm chuẩn:</span>
                            <span className="font-medium">{program.admissionScore}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tỷ lệ có việc:</span>
                            <span className="text-green-600 font-medium">{program.employmentRate}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mức lương:</span>
                            <span className="text-blue-600 font-medium">{program.averageSalary}</span>
                          </div>
                        </div>
                        <Button 
                          variant={isSelected ? 'default' : 'outline'} 
                          className="w-full mt-4"
                        >
                          {isSelected ? 'Đang xem' : 'Chi tiết'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Program Details */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl">{currentProgram.name}</CardTitle>
                          <CardDescription className="text-lg mt-2">
                            {currentProgram.description}
                          </CardDescription>
                        </div>
                        <div className={`w-16 h-16 bg-${currentProgram.color}-100 rounded-xl flex items-center justify-center`}>
                          <currentProgram.icon className={`h-8 w-8 text-${currentProgram.color}-600`} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="curriculum" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="curriculum">Chương trình học</TabsTrigger>
                          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                          <TabsTrigger value="career">Nghề nghiệp</TabsTrigger>
                          <TabsTrigger value="facilities">Cơ sở vật chất</TabsTrigger>
                        </TabsList>

                        <TabsContent value="curriculum" className="space-y-6">
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-4">Chương trình học theo năm</h3>
                            <p className="text-gray-600 mb-6">
                              Chương trình được thiết kế theo tiến trình 4 năm, từ nền tảng đến chuyên sâu
                            </p>
                          </div>

                          {Object.entries(currentProgram.yearlyProgram).map(([year, yearData]) => (
                            <div key={year} className="mb-8">
                              <div className="flex items-center mb-4">
                                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                                <h4 className="text-xl font-semibold">
                                  {year === 'year1' ? 'Năm thứ 1' :
                                   year === 'year2' ? 'Năm thứ 2' :
                                   year === 'year3' ? 'Năm thứ 3' : 'Năm thứ 4'}
                                </h4>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(yearData).map(([semester, subjects]) => (
                                  <Card key={semester} className="border-l-4 border-blue-500">
                                    <CardHeader className="pb-3">
                                      <CardTitle className="text-lg">
                                        {semester === 'semester1' ? 'Học kỳ 1' : 'Học kỳ 2'}
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                      {subjects.map((subject, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                          <div className="flex-1">
                                            <div className="font-medium text-sm">{subject.name}</div>
                                            <div className="text-xs text-gray-500">{subject.code}</div>
                                          </div>
                                          <div className="flex items-center space-x-2">
                                            <Badge 
                                              variant="secondary" 
                                              className={`text-xs ${getSubjectTypeColor(subject.type)}`}
                                            >
                                              {getSubjectTypeName(subject.type)}
                                            </Badge>
                                            <span className="text-sm font-medium">{subject.credits} TC</span>
                                          </div>
                                        </div>
                                      ))}
                                      <div className="mt-3 pt-3 border-t">
                                        <div className="text-sm font-medium text-gray-600">
                                          Tổng: {subjects.reduce((sum, subject) => sum + subject.credits, 0)} tín chỉ
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          ))}

                          {/* Summary */}
                          <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="pt-6">
                              <h4 className="font-semibold mb-4">Tổng kết chương trình</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                  <div className="text-2xl font-bold text-blue-600">{currentProgram.credits}</div>
                                  <div className="text-sm text-gray-600">Tổng tín chỉ</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-green-600">8</div>
                                  <div className="text-sm text-gray-600">Học kỳ</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-purple-600">{currentProgram.duration}</div>
                                  <div className="text-sm text-gray-600">Thời gian</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-orange-600">1</div>
                                  <div className="text-sm text-gray-600">Thực tập + Đồ án</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="overview" className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Mục tiêu đào tạo</h3>
                            <div className="grid gap-3">
                              {currentProgram.objectives.map((objective, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                  </div>
                                  <span className="text-gray-700">{objective}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-4 gap-4">
                            <Card>
                              <CardContent className="pt-4 text-center">
                                <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                <div className="font-semibold text-sm">{currentProgram.duration}</div>
                                <div className="text-xs text-gray-600">Thời gian</div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-4 text-center">
                                <BookOpen className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <div className="font-semibold text-sm">{currentProgram.credits} TC</div>
                                <div className="text-xs text-gray-600">Tín chỉ</div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-4 text-center">
                                <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                                <div className="font-semibold text-sm">{currentProgram.employmentRate}%</div>
                                <div className="text-xs text-gray-600">Có việc làm</div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-4 text-center">
                                <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                                <div className="font-semibold text-sm">{currentProgram.admissionScore}</div>
                                <div className="text-xs text-gray-600">Điểm chuẩn</div>
                              </CardContent>
                            </Card>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4">Công nghệ & Công cụ</h3>
                            <div className="grid grid-cols-3 gap-3 mb-6">
                              {currentProgram.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="justify-center py-2 text-sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="career" className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Cơ hội nghề nghiệp</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                              {currentProgram.careerPaths.map((career, index) => (
                                <Card key={index}>
                                  <CardContent className="pt-4">
                                    <div className="flex items-center space-x-3">
                                      <Briefcase className="h-5 w-5 text-blue-600" />
                                      <span className="font-medium">{career}</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4">Đối tác tuyển dụng</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {currentProgram.companies.map((company, index) => (
                                <Badge key={index} variant="outline" className="justify-center py-2 text-sm">
                                  {company}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Card className="bg-green-50 border-green-200">
                            <CardContent className="pt-6">
                              <div className="flex items-center mb-4">
                                <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                                <h4 className="font-semibold">Thông tin việc làm</h4>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <div className="text-2xl font-bold text-green-600">{currentProgram.employmentRate}%</div>
                                  <div className="text-sm text-gray-600">Tỷ lệ có việc làm</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-blue-600">{currentProgram.averageSalary}</div>
                                  <div className="text-sm text-gray-600">Mức lương khởi điểm</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="facilities" className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Phòng thí nghiệm</h3>
                            <div className="grid gap-4">
                              {currentProgram.labs.map((lab, index) => (
                                <Card key={index}>
                                  <CardContent className="pt-4">
                                    <div className="flex items-center space-x-3">
                                      <Building className="h-6 w-6 text-gray-500" />
                                      <div>
                                        <div className="font-medium">{lab}</div>
                                        <div className="text-sm text-gray-600">Trang thiết bị hiện đại, đầy đủ</div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                              <CardContent className="pt-6">
                                <ImageWithFallback
                                  src="https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGFib3JhdG9yeSUyMGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwxfHx8fDE3NTgxOTI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                  alt="Computer Lab"
                                  className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h4 className="font-semibold">Phòng Lab Máy tính</h4>
                                <p className="text-sm text-gray-600">100+ máy tính hiệu năng cao</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-6">
                                <ImageWithFallback
                                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTgxOTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                  alt="Study Area"
                                  className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h4 className="font-semibold">Khu vực Học tập</h4>
                                <p className="text-sm text-gray-600">Không gian hiện đại, thoải mái</p>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Thông tin tuyển sinh</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Điểm chuẩn 2024:</span>
                        <span className="font-semibold">{currentProgram.admissionScore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Số lượng tuyển sinh:</span>
                        <span className="font-semibold">120 chỉ tiêu</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phương thức xét tuyển:</span>
                        <span className="font-semibold">THPT + Đánh giá năng lực</span>
                      </div>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Tải brochure
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tư vấn trực tuyến</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Nhận tư vấn chi tiết về chương trình học, cơ hội nghề nghiệp và quy trình tuyển sinh
                      </p>
                      <Button className="w-full" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Đăng ký tư vấn
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Research Section */}
      {activeSection === 'research' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nghiên cứu Khoa học
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                4 lĩnh vực nghiên cứu trọng điểm với 54 dự án đang triển khai và hơn 200 công bố khoa học
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {researchAreas.map((area) => {
                const Icon = area.icon;
                const isSelected = area.id === selectedResearchArea;
                return (
                  <Card 
                    key={area.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      isSelected ? 'ring-2 ring-purple-500 shadow-lg transform scale-105' : ''
                    } ${area.featured ? 'border-purple-300' : ''}`}
                    onClick={() => setSelectedResearchArea(area.id)}
                  >
                    <CardHeader>
                      {area.featured && (
                        <Badge className="mb-2 bg-purple-500 text-white w-fit">
                          <Star className="h-3 w-3 mr-1" />
                          Trọng điểm
                        </Badge>
                      )}
                      <div className={`w-12 h-12 bg-${area.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 text-${area.color}-600`} />
                      </div>
                      <CardTitle className="text-lg">{area.name}</CardTitle>
                      <CardDescription className="line-clamp-3">{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dự án:</span>
                          <span className="font-medium">{area.projects}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Công bố:</span>
                          <span className="text-blue-600 font-medium">{area.publications}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kinh phí:</span>
                          <span className="text-green-600 font-medium">{area.funding}</span>
                        </div>
                      </div>
                      <Button 
                        variant={isSelected ? 'default' : 'outline'} 
                        className="w-full mt-4"
                      >
                        {isSelected ? 'Đang xem' : 'Chi tiết'}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Research Area Details */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{currentResearchArea.name}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {currentResearchArea.description}
                    </CardDescription>
                  </div>
                  <div className={`w-16 h-16 bg-${currentResearchArea.color}-100 rounded-xl flex items-center justify-center`}>
                    <currentResearchArea.icon className={`h-8 w-8 text-${currentResearchArea.color}-600`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="research" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="research">Nghiên cứu</TabsTrigger>
                    <TabsTrigger value="facilities">Cơ sở</TabsTrigger>
                    <TabsTrigger value="partnerships">Đối tác</TabsTrigger>
                    <TabsTrigger value="achievements">Thành tựu</TabsTrigger>
                  </TabsList>

                  <TabsContent value="research" className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <Card>
                        <CardContent className="pt-4 text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">{currentResearchArea.projects}</div>
                          <div className="text-sm text-gray-600">Dự án đang triển khai</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-4 text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{currentResearchArea.publications}</div>
                          <div className="text-sm text-gray-600">Công bố khoa học</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-4 text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{currentResearchArea.funding}</div>
                          <div className="text-sm text-gray-600">Kinh phí nghiên cứu</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Hướng nghiên cứu chính</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {currentResearchArea.keyResearch.map((research, index) => (
                          <Card key={index}>
                            <CardContent className="pt-4">
                              <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                <span className="font-medium">{research}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="facilities" className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Cơ sở vật chất</h3>
                      <div className="grid gap-4">
                        {currentResearchArea.facilities.map((facility, index) => (
                          <Card key={index}>
                            <CardContent className="pt-4">
                              <div className="flex items-center space-x-3">
                                <Building className="h-5 w-5 text-gray-500" />
                                <span>{facility}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="partnerships" className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Đối tác nghiên cứu</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {currentResearchArea.partnerships.map((partner, index) => (
                          <Card key={index}>
                            <CardContent className="pt-4">
                              <div className="flex items-center space-x-3">
                                <Globe className="h-5 w-5 text-blue-500" />
                                <span className="font-medium">{partner}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="achievements" className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Thành tựu nổi bật</h3>
                      <div className="space-y-4">
                        {currentResearchArea.achievements.map((achievement, index) => (
                          <Card key={index}>
                            <CardContent className="pt-4">
                              <div className="flex items-start space-x-3">
                                <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                                <span>{achievement}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}