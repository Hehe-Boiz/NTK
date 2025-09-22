import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  Code,
  Database,
  Shield,
  Brain,
  Smartphone,
  Globe,
  ChevronRight,
  Star,
  Download,
  Calendar,
  MapPin
} from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

export function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState('software-engineering');

  const programs = [
    {
      id: 'software-engineering',
      name: 'Kỹ thuật Phần mềm',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Chương trình đào tạo kỹ sư phần mềm chuyên nghiệp với kiến thức sâu về thiết kế, phát triển và quản lý dự án phần mềm.',
      icon: Code,
      color: 'blue',
      featured: true,
      objectives: [
        'Thiết kế và phát triển các ứng dụng phần mềm phức tạp',
        'Quản lý dự án phần mềm theo các phương pháp Agile/Scrum',
        'Áp dụng các mẫu thiết kế và kiến trúc phần mềm',
        'Đảm bảo chất lượng và bảo mật trong phát triển phần mềm'
      ],
      subjects: [
        { name: 'Cấu trúc Dữ liệu & Giải thuật', credits: 4, semester: 2 },
        { name: 'Lập trình Hướng đối tượng', credits: 4, semester: 3 },
        { name: 'Cơ sở Dữ liệu', credits: 4, semester: 4 },
        { name: 'Kỹ thuật Phần mềm', credits: 4, semester: 5 },
        { name: 'Phát triển Web', credits: 4, semester: 6 },
        { name: 'Mobile Development', credits: 4, semester: 7 }
      ],
      technologies: ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Docker'],
      careerPaths: [
        'Software Developer',
        'Full-stack Developer', 
        'Technical Lead',
        'Solution Architect',
        'Product Manager'
      ],
      salary: '15-30 triệu VND',
      employmentRate: 95
    },
    {
      id: 'data-science',
      name: 'Khoa học Dữ liệu',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Chương trình tiên phong về phân tích dữ liệu, machine learning và trí tuệ nhân tạo.',
      icon: Database,
      color: 'green',
      featured: true,
      objectives: [
        'Thu thập, xử lý và phân tích dữ liệu lớn',
        'Xây dựng mô hình Machine Learning và AI',
        'Trực quan hóa dữ liệu và báo cáo thông minh',
        'Đưa ra quyết định kinh doanh dựa trên dữ liệu'
      ],
      subjects: [
        { name: 'Thống kê & Xác suất', credits: 4, semester: 2 },
        { name: 'Python for Data Science', credits: 4, semester: 3 },
        { name: 'Machine Learning', credits: 4, semester: 4 },
        { name: 'Big Data Analytics', credits: 4, semester: 5 },
        { name: 'Deep Learning', credits: 4, semester: 6 },
        { name: 'Data Visualization', credits: 4, semester: 7 }
      ],
      technologies: ['Python', 'R', 'SQL', 'Pandas', 'TensorFlow', 'PyTorch', 'Tableau', 'Spark'],
      careerPaths: [
        'Data Scientist',
        'Data Analyst',
        'ML Engineer',
        'Business Intelligence Analyst',
        'Research Scientist'
      ],
      salary: '20-40 triệu VND',
      employmentRate: 92
    },
    {
      id: 'cybersecurity',
      name: 'An toàn Thông tin',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Đào tạo chuyên gia bảo mật mạng và an toàn thông tin với kiến thức toàn diện.',
      icon: Shield,
      color: 'red',
      featured: false,
      objectives: [
        'Phân tích và đánh giá rủi ro bảo mật',
        'Thiết kế hệ thống bảo mật toàn diện',
        'Ứng phó với các cuộc tấn công mạng',
        'Quản lý chính sách bảo mật doanh nghiệp'
      ],
      subjects: [
        { name: 'Mạng Máy tính', credits: 4, semester: 2 },
        { name: 'Cryptography', credits: 4, semester: 3 },
        { name: 'Network Security', credits: 4, semester: 4 },
        { name: 'Ethical Hacking', credits: 4, semester: 5 },
        { name: 'Digital Forensics', credits: 4, semester: 6 },
        { name: 'Security Management', credits: 4, semester: 7 }
      ],
      technologies: ['Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'OpenSSL', 'Firewall', 'IDS/IPS'],
      careerPaths: [
        'Security Analyst',
        'Penetration Tester',
        'Security Architect',
        'Incident Response Specialist',
        'Chief Security Officer'
      ],
      salary: '18-35 triệu VND',
      employmentRate: 90
    },
    {
      id: 'artificial-intelligence',
      name: 'Trí tuệ Nhân tạo',
      level: 'Cử nhân',
      duration: '4 năm',
      credits: 140,
      description: 'Chương trình đào tạo về AI, machine learning và các công nghệ thông minh.',
      icon: Brain,
      color: 'purple',
      featured: true,
      objectives: [
        'Phát triển các hệ thống AI thông minh',
        'Nghiên cứu và ứng dụng Machine Learning',
        'Xây dựng chatbot và virtual assistant',
        'Ứng dụng AI trong các lĩnh vực thực tế'
      ],
      subjects: [
        { name: 'Logic Toán học', credits: 4, semester: 2 },
        { name: 'Artificial Intelligence', credits: 4, semester: 3 },
        { name: 'Machine Learning', credits: 4, semester: 4 },
        { name: 'Natural Language Processing', credits: 4, semester: 5 },
        { name: 'Computer Vision', credits: 4, semester: 6 },
        { name: 'Robotics', credits: 4, semester: 7 }
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLTK', 'Keras', 'ROS', 'CUDA'],
      careerPaths: [
        'AI Engineer',
        'Machine Learning Engineer',
        'Research Scientist',
        'AI Product Manager',
        'Computer Vision Engineer'
      ],
      salary: '25-50 triệu VND',
      employmentRate: 88
    }
  ];

  const masterPrograms = [
    {
      name: 'Thạc sĩ Khoa học Máy tính',
      duration: '2 năm',
      description: 'Chương trình thạc sĩ nghiên cứu nâng cao về khoa học máy tính'
    },
    {
      name: 'Thạc sĩ An toàn Thông tin',
      duration: '2 năm', 
      description: 'Chuyên sâu về bảo mật và an toàn thông tin doanh nghiệp'
    }
  ];

  const currentProgram = programs.find(p => p.id === selectedProgram) || programs[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
              🎓 Chương trình Đào tạo 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chương trình Đào tạo
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Các chương trình đào tạo hiện đại, cập nhật theo xu hướng công nghệ mới nhất,
              được thiết kế để sinh viên có thể làm việc ngay sau khi tốt nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Download className="mr-2 h-4 w-4" />
                Tải brochure
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Calendar className="mr-2 h-4 w-4" />
                Đăng ký tư vấn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chương trình Cử nhân
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 chuyên ngành chính với nội dung đào tạo toàn diện và cơ hội việc làm cao
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {programs.map((program) => {
              const Icon = program.icon;
              const isSelected = program.id === selectedProgram;
              return (
                <Card 
                  key={program.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    isSelected ? 'ring-2 ring-blue-500 shadow-lg' : ''
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
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thời gian:</span>
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tín chỉ:</span>
                        <span>{program.credits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tỷ lệ có việc:</span>
                        <span className="text-green-600 font-medium">{program.employmentRate}%</span>
                      </div>
                    </div>
                    <Button 
                      variant={isSelected ? 'default' : 'outline'} 
                      className="w-full mt-4"
                      onClick={() => setSelectedProgram(program.id)}
                    >
                      {isSelected ? 'Đang xem' : 'Xem chi tiết'}
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
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
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                      <TabsTrigger value="curriculum">Chương trình</TabsTrigger>
                      <TabsTrigger value="technology">Công nghệ</TabsTrigger>
                      <TabsTrigger value="career">Nghề nghiệp</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Mục tiêu đào tạo</h3>
                        <ul className="space-y-2">
                          {currentProgram.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                          <CardContent className="pt-6 text-center">
                            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-semibold">{currentProgram.duration}</div>
                            <div className="text-sm text-gray-600">Thời gian đào tạo</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6 text-center">
                            <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="font-semibold">{currentProgram.credits} tín chỉ</div>
                            <div className="text-sm text-gray-600">Tổng số tín chỉ</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6 text-center">
                            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <div className="font-semibold">{currentProgram.employmentRate}%</div>
                            <div className="text-sm text-gray-600">Tỷ lệ có việc làm</div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="curriculum" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Các môn học chính</h3>
                        <div className="space-y-4">
                          {currentProgram.subjects.map((subject, index) => (
                            <Card key={index}>
                              <CardContent className="pt-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="font-medium">{subject.name}</div>
                                    <div className="text-sm text-gray-600">Học kỳ {subject.semester}</div>
                                  </div>
                                  <Badge variant="outline">{subject.credits} TC</Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="technology" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Công nghệ sử dụng</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {currentProgram.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="justify-center py-2">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Dự án thực tế</h3>
                        <div className="space-y-4">
                          <Card>
                            <CardContent className="pt-4">
                              <h4 className="font-medium mb-2">Dự án Capstone</h4>
                              <p className="text-sm text-gray-600">
                                Sinh viên sẽ thực hiện một dự án lớn trong học kỳ cuối, 
                                làm việc với doanh nghiệp thực tế để giải quyết các vấn đề cụ thể.
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="career" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Cơ hội nghề nghiệp</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {currentProgram.careerPaths.map((career, index) => (
                            <Card key={index}>
                              <CardContent className="pt-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="font-medium">{career}</span>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold">Mức lương khởi điểm</h4>
                            <span className="text-xl font-bold text-green-600">{currentProgram.salary}</span>
                          </div>
                          <Progress value={currentProgram.employmentRate} className="mb-2" />
                          <div className="text-sm text-gray-600">
                            {currentProgram.employmentRate}% sinh viên có việc làm trong vòng 6 tháng sau tốt nghiệp
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin nhanh</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bằng cấp:</span>
                    <span>{currentProgram.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thời gian:</span>
                    <span>{currentProgram.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tín chỉ:</span>
                    <span>{currentProgram.credits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mức lương:</span>
                    <span className="text-green-600">{currentProgram.salary}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Master Programs */}
              <Card>
                <CardHeader>
                  <CardTitle>Chương trình Thạc sĩ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {masterPrograms.map((program, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-1">{program.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{program.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Liên hệ tư vấn</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Phòng Đào tạo</p>
                      <p className="text-sm text-gray-600">Tầng 3, Tòa nhà A</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    Đăng ký tư vấn
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}