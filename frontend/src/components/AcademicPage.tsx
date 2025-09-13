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
  Briefcase
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
      curriculum: {
        foundation: ['Toán rời rạc', 'Cấu trúc Dữ liệu & Giải thuật', 'Lập trình C/C++', 'OOP với Java'],
        core: ['Kỹ thuật Phần mềm', 'Cơ sở Dữ liệu', 'Mạng Máy tính', 'Hệ điều hành'],
        advanced: ['Kiến trúc Phần mềm', 'DevOps & CI/CD', 'Mobile Development', 'Cloud Computing'],
        capstone: ['Dự án Tốt nghiệp', 'Thực tập Doanh nghiệp', 'Seminar']
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
      curriculum: {
        foundation: ['Thống kê & Xác suất', 'Toán cao cấp', 'Python Programming', 'R Programming'],
        core: ['Machine Learning', 'Data Mining', 'Big Data Technologies', 'Database Systems'],
        advanced: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'MLOps'],
        capstone: ['Data Science Project', 'Industry Partnership', 'Research Thesis']
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
      curriculum: {
        foundation: ['Network Fundamentals', 'Operating Systems', 'Cryptography', 'Security Principles'],
        core: ['Network Security', 'Ethical Hacking', 'Digital Forensics', 'Security Management'],
        advanced: ['Malware Analysis', 'IoT Security', 'Cloud Security', 'Blockchain Security'],
        capstone: ['Security Assessment Project', 'Incident Response', 'Security Audit']
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
      curriculum: {
        foundation: ['Logic Toán học', 'Linear Algebra', 'Probability Theory', 'Programming Fundamentals'],
        core: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'Computer Vision'],
        advanced: ['Deep Learning', 'NLP', 'Robotics', 'Reinforcement Learning'],
        capstone: ['AI Research Project', 'Industry Application', 'Startup Incubation']
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
                      <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                          <TabsTrigger value="curriculum">Chương trình</TabsTrigger>
                          <TabsTrigger value="technology">Công nghệ</TabsTrigger>
                          <TabsTrigger value="career">Nghề nghiệp</TabsTrigger>
                          <TabsTrigger value="facilities">Cơ sở vật chất</TabsTrigger>
                        </TabsList>

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
                        </TabsContent>

                        <TabsContent value="curriculum" className="space-y-6">
                          <div className="space-y-6">
                            {Object.entries(currentProgram.curriculum).map(([category, subjects]) => (
                              <div key={category}>
                                <h4 className="font-semibold text-lg mb-3 capitalize">
                                  {category === 'foundation' ? 'Kiến thức nền tảng' :
                                   category === 'core' ? 'Chuyên ngành cốt lõi' :
                                   category === 'advanced' ? 'Chuyên ngành nâng cao' :
                                   'Dự án & Thực tập'}
                                </h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                  {subjects.map((subject, index) => (
                                    <Card key={index} className="hover:shadow-md transition-shadow">
                                      <CardContent className="pt-4">
                                        <div className="flex items-center space-x-3">
                                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                          <span className="font-medium text-sm">{subject}</span>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="technology" className="space-y-6">
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

                          <div>
                            <h3 className="text-lg font-semibold mb-4">Phòng thí nghiệm</h3>
                            <div className="grid gap-3">
                              {currentProgram.labs.map((lab, index) => (
                                <Card key={index}>
                                  <CardContent className="pt-4">
                                    <div className="flex items-center space-x-3">
                                      <Building className="h-5 w-5 text-gray-500" />
                                      <span>{lab}</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="career" className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Cơ hội nghề nghiệp</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                              {currentProgram.careerPaths.map((career, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow">
                                  <CardContent className="pt-4">
                                    <div className="flex items-center space-x-3">
                                      <Briefcase className="h-4 w-4 text-blue-500" />
                                      <span className="font-medium">{career}</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4">Đối tác tuyển dụng</h3>
                            <div className="flex flex-wrap gap-2">
                              {currentProgram.companies.map((company, index) => (
                                <Badge key={index} variant="outline" className="px-3 py-1">
                                  {company}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Card>
                            <CardContent className="pt-6">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-600 mb-2">
                                  {currentProgram.averageSalary}
                                </div>
                                <div className="text-sm text-gray-600 mb-4">Mức lương khởi điểm</div>
                                <Progress value={currentProgram.employmentRate} className="mb-2" />
                                <div className="text-sm text-gray-600">
                                  {currentProgram.employmentRate}% sinh viên có việc làm trong 6 tháng
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="facilities" className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-lg">Phòng thí nghiệm chuyên dụng</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  {currentProgram.labs.map((lab, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <Microscope className="h-4 w-4 text-blue-500" />
                                      <span className="text-sm">{lab}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardHeader>
                                <CardTitle className="text-lg">Trang thiết bị hiện đại</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2 text-sm">
                                  <div>• Máy tính cấu hình cao</div>
                                  <div>• Hệ thống mạng tốc độ cao</div>
                                  <div>• Cloud computing platform</div>
                                  <div>• Development tools mới nhất</div>
                                </div>
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
                      <CardTitle>Thông tin nhanh</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bằng cấp:</span>
                        <span>{currentProgram.level}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Thời gian:</span>
                        <span>{currentProgram.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tín chỉ:</span>
                        <span>{currentProgram.credits}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Điểm chuẩn:</span>
                        <span className="font-medium">{currentProgram.admissionScore}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Mức lương:</span>
                        <span className="text-green-600">{currentProgram.averageSalary}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tư vấn tuyển sinh</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>Tư vấn: Thứ 2-6, 8h-17h</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>Phòng Đào tạo, Tầng 3</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full">Đăng ký tư vấn</Button>
                        <Button variant="outline" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Tải brochure
                        </Button>
                      </div>
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
        <>
          {/* Research Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Lĩnh vực Nghiên cứu Trọng điểm
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  4 lĩnh vực nghiên cứu chính với đội ngũ chuyên gia hàng đầu và cơ sở vật chất hiện đại
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
                      } ${area.featured ? 'border-yellow-300' : ''}`}
                      onClick={() => setSelectedResearchArea(area.id)}
                    >
                      <CardHeader>
                        {area.featured && (
                          <Badge className="mb-2 bg-yellow-500 text-black w-fit">
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
                            <span className="font-medium">{area.publications}</span>
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
            </div>
          </section>

          {/* Research Details */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
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
                      <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                          <TabsTrigger value="research">Nghiên cứu</TabsTrigger>
                          <TabsTrigger value="facilities">Cơ sở vật chất</TabsTrigger>
                          <TabsTrigger value="partnerships">Đối tác</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                              <CardContent className="pt-6 text-center">
                                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                                <div className="font-semibold">{currentResearchArea.projects}</div>
                                <div className="text-sm text-gray-600">Dự án nghiên cứu</div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-6 text-center">
                                <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                <div className="font-semibold">{currentResearchArea.publications}</div>
                                <div className="text-sm text-gray-600">Công trình xuất bản</div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-6 text-center">
                                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                                <div className="font-semibold">{currentResearchArea.funding}</div>
                                <div className="text-sm text-gray-600">Kinh phí nghiên cứu</div>
                              </CardContent>
                            </Card>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4">Thành tựu nổi bật</h3>
                            <div className="space-y-3">
                              {currentResearchArea.achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                                  <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="research" className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Hướng nghiên cứu chính</h3>
                            <div className="grid gap-4">
                              {currentResearchArea.keyResearch.map((research, index) => (
                                <Card key={index}>
                                  <CardContent className="pt-4">
                                    <div className="flex items-center space-x-3">
                                      <Lightbulb className="h-5 w-5 text-blue-500" />
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
                                      <Building className="h-5 w-5 text-green-500" />
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
                            <h3 className="text-lg font-semibold mb-4">Đối tác hợp tác</h3>
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
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Thông tin nghiên cứu</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Dự án đang thực hiện:</span>
                        <span className="font-medium">{currentResearchArea.projects}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Công bố khoa học:</span>
                        <span className="font-medium">{currentResearchArea.publications}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Kinh phí nghiên cứu:</span>
                        <span className="text-green-600 font-medium">{currentResearchArea.funding}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Hợp tác nghiên cứu</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Chúng tôi luôn mở cửa cho các cơ hội hợp tác nghiên cứu với doanh nghiệp và tổ chức.
                      </p>
                      <div className="space-y-2">
                        <Button className="w-full">Liên hệ hợp tác</Button>
                        <Button variant="outline" className="w-full">
                          <FileText className="h-4 w-4 mr-2" />
                          Xem công trình
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}