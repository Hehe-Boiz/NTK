import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Microscope, 
  Brain, 
  Shield, 
  Database, 
  Globe,
  Users,
  Award,
  TrendingUp,
  FileText,
  Calendar,
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ResearchPage() {
  const [selectedArea, setSelectedArea] = useState('artificial-intelligence');

  const researchAreas = [
    {
      id: 'artificial-intelligence',
      name: 'Trí tuệ Nhân tạo',
      description: 'Nghiên cứu về Machine Learning, Deep Learning, và các ứng dụng AI',
      icon: Brain,
      color: 'purple',
      projects: 15,
      publications: 45,
      funding: '2.5 tỷ VND',
      featured: true,
      subAreas: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Robotics',
        'Expert Systems'
      ],
      currentProjects: [
        {
          title: 'Hệ thống AI cho Chẩn đoán Y tế',
          leader: 'TS. Nguyễn Văn A',
          duration: '2023-2025',
          funding: '800 triệu VND',
          status: 'Đang thực hiện'
        },
        {
          title: 'Chatbot Thông minh cho Giáo dục',
          leader: 'TS. Trần Thị B',
          duration: '2024-2026',
          funding: '600 triệu VND',
          status: 'Khởi động'
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'An toàn Thông tin',
      description: 'Nghiên cứu bảo mật mạng, mật mã học và an toàn dữ liệu',
      icon: Shield,
      color: 'red',
      projects: 12,
      publications: 38,
      funding: '1.8 tỷ VND',
      featured: true,
      subAreas: [
        'Network Security',
        'Cryptography',
        'Blockchain',
        'Digital Forensics',
        'Privacy Protection'
      ],
      currentProjects: [
        {
          title: 'Blockchain cho Chính phủ Điện tử',
          leader: 'PGS.TS. Lê Văn C',
          duration: '2023-2025',
          funding: '1.2 tỷ VND',
          status: 'Đang thực hiện'
        }
      ]
    },
    {
      id: 'data-science',
      name: 'Khoa học Dữ liệu',
      description: 'Big Data, Data Mining, và Business Intelligence',
      icon: Database,
      color: 'blue',
      projects: 10,
      publications: 32,
      funding: '1.5 tỷ VND',
      featured: false,
      subAreas: [
        'Big Data Analytics',
        'Data Mining',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics'
      ],
      currentProjects: [
        {
          title: 'Phân tích Dữ liệu Giao thông Thông minh',
          leader: 'TS. Phạm Thị D',
          duration: '2024-2026',
          funding: '700 triệu VND',
          status: 'Chuẩn bị'
        }
      ]
    },
    {
      id: 'iot-embedded',
      name: 'IoT & Hệ thống Nhúng',
      description: 'Internet of Things, Embedded Systems và Smart City',
      icon: Globe,
      color: 'green',
      projects: 8,
      publications: 25,
      funding: '1.2 tỷ VND',
      featured: false,
      subAreas: [
        'Internet of Things',
        'Embedded Systems',
        'Smart City',
        'Sensor Networks',
        'Edge Computing'
      ],
      currentProjects: [
        {
          title: 'Smart Farm với IoT',
          leader: 'TS. Hoàng Văn E',
          duration: '2023-2025',
          funding: '500 triệu VND',
          status: 'Đang thực hiện'
        }
      ]
    }
  ];

  const publications = [
    {
      title: 'Advanced Machine Learning Techniques for Medical Diagnosis',
      authors: 'Nguyễn Văn A, Trần Thị B, et al.',
      journal: 'IEEE Transactions on Biomedical Engineering',
      year: 2024,
      citations: 45,
      impact: 4.5,
      type: 'journal'
    },
    {
      title: 'Blockchain-based Secure Voting System for E-Government',
      authors: 'Lê Văn C, Phạm Thị D, et al.',
      journal: 'Computers & Security',
      year: 2024,
      citations: 32,
      impact: 3.8,
      type: 'journal'
    },
    {
      title: 'Smart Traffic Management using Deep Learning',
      authors: 'Hoàng Văn E, Nguyễn Thị F, et al.',
      journal: 'Transportation Research Part C',
      year: 2023,
      citations: 28,
      impact: 4.2,
      type: 'journal'
    }
  ];

  const labs = [
    {
      name: 'Phòng thí nghiệm AI & Machine Learning',
      area: 'Trí tuệ Nhân tạo',
      established: 2015,
      equipment: 'GPU Cluster, High-performance Computing',
      members: 25,
      projects: 8
    },
    {
      name: 'Phòng thí nghiệm An toàn Thông tin',
      area: 'Cybersecurity',
      established: 2012,
      equipment: 'Network Security Lab, Penetration Testing Tools',
      members: 20,
      projects: 6
    },
    {
      name: 'Phòng thí nghiệm Big Data',
      area: 'Khoa học Dữ liệu',
      established: 2018,
      equipment: 'Hadoop Cluster, Spark Infrastructure',
      members: 15,
      projects: 5
    }
  ];

  const currentArea = researchAreas.find(area => area.id === selectedArea) || researchAreas[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
              🔬 Nghiên cứu Khoa học
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nghiên cứu & Phát triển
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Tiên phong trong nghiên cứu công nghệ thông tin, góp phần giải quyết 
              các thách thức của xã hội và thúc đẩy đổi mới sáng tạo.
            </p>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">45+</div>
                <div className="text-purple-200">Dự án nghiên cứu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">140+</div>
                <div className="text-purple-200">Công trình xuất bản</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6 tỷ VND</div>
                <div className="text-purple-200">Kinh phí nghiên cứu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-purple-200">Đối tác quốc tế</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lĩnh vực Nghiên cứu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các lĩnh vực nghiên cứu trọng điểm với đội ngũ chuyên gia hàng đầu
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              const isSelected = area.id === selectedArea;
              return (
                <Card 
                  key={area.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    isSelected ? 'ring-2 ring-purple-500 shadow-lg' : ''
                  } ${area.featured ? 'border-yellow-300' : ''}`}
                  onClick={() => setSelectedArea(area.id)}
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
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dự án:</span>
                        <span>{area.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Công bố:</span>
                        <span>{area.publications}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kinh phí:</span>
                        <span className="text-green-600">{area.funding}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{currentArea.name}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {currentArea.description}
                      </CardDescription>
                    </div>
                    <div className={`w-16 h-16 bg-${currentArea.color}-100 rounded-xl flex items-center justify-center`}>
                      <currentArea.icon className={`h-8 w-8 text-${currentArea.color}-600`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                      <TabsTrigger value="projects">Dự án</TabsTrigger>
                      <TabsTrigger value="publications">Công bố</TabsTrigger>
                      <TabsTrigger value="team">Đội ngũ</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Lĩnh vực con</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {currentArea.subAreas.map((subArea, index) => (
                            <Badge key={index} variant="secondary" className="justify-center py-2">
                              {subArea}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                          <CardContent className="pt-6 text-center">
                            <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-semibold">{currentArea.projects}</div>
                            <div className="text-sm text-gray-600">Dự án nghiên cứu</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6 text-center">
                            <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="font-semibold">{currentArea.publications}</div>
                            <div className="text-sm text-gray-600">Công trình xuất bản</div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="pt-6 text-center">
                            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <div className="font-semibold">{currentArea.funding}</div>
                            <div className="text-sm text-gray-600">Kinh phí nghiên cứu</div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Lightbulb className="h-5 w-5 mr-2" />
                            Hình ảnh nghiên cứu
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1614934273187-c83f8780fad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc1ODE2MDA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Research Laboratory"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="projects" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Dự án đang thực hiện</h3>
                        <div className="space-y-4">
                          {currentArea.currentProjects.map((project, index) => (
                            <Card key={index}>
                              <CardContent className="pt-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <h4 className="font-semibold text-lg">{project.title}</h4>
                                    <p className="text-gray-600">Chủ nhiệm: {project.leader}</p>
                                  </div>
                                  <Badge 
                                    variant={project.status === 'Đang thực hiện' ? 'default' : 'secondary'}
                                  >
                                    {project.status}
                                  </Badge>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Thời gian:</span>
                                    <span>{project.duration}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Kinh phí:</span>
                                    <span className="text-green-600">{project.funding}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="publications" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Công trình xuất bản gần đây</h3>
                        <div className="space-y-4">
                          {publications.slice(0, 3).map((pub, index) => (
                            <Card key={index}>
                              <CardContent className="pt-6">
                                <h4 className="font-semibold mb-2">{pub.title}</h4>
                                <p className="text-gray-600 mb-2">{pub.authors}</p>
                                <div className="flex flex-wrap gap-4 text-sm">
                                  <span className="font-medium">{pub.journal}</span>
                                  <span>{pub.year}</span>
                                  <span className="text-blue-600">{pub.citations} citations</span>
                                  <span className="text-green-600">IF: {pub.impact}</span>
                                </div>
                                <Button variant="outline" size="sm" className="mt-3">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Xem chi tiết
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="team" className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Đội ngũ nghiên cứu</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="pt-6">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                  <Users className="h-6 w-6 text-gray-500" />
                                </div>
                                <div>
                                  <h4 className="font-semibold">GS.TS. Nguyễn Văn A</h4>
                                  <p className="text-sm text-gray-600">Trưởng nhóm nghiên cứu</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">
                                Chuyên gia hàng đầu về Machine Learning và AI, 
                                với hơn 100 công trình nghiên cứu được xuất bản.
                              </p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-6">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                  <Users className="h-6 w-6 text-gray-500" />
                                </div>
                                <div>
                                  <h4 className="font-semibold">TS. Trần Thị B</h4>
                                  <p className="text-sm text-gray-600">Nghiên cứu viên chính</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">
                                Chuyên về Natural Language Processing và Computer Vision,
                                có nhiều kinh nghiệm trong các dự án thực tế.
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Research Labs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Microscope className="h-5 w-5 mr-2" />
                    Phòng thí nghiệm
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {labs.map((lab, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">{lab.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{lab.area}</p>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Thành lập:</span>
                          <span>{lab.established}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Thành viên:</span>
                          <span>{lab.members}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Dự án:</span>
                          <span>{lab.projects}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Awards & Recognition */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Giải thưởng
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium">Giải thưởng Sáng tạo KH&CN 2024</h4>
                    <p className="text-sm text-gray-600">Dự án AI cho Y tế</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium">Best Paper Award 2023</h4>
                    <p className="text-sm text-gray-600">IEEE Conference on AI</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-medium">Nhà khoa học trẻ xuất sắc</h4>
                    <p className="text-sm text-gray-600">Hội Tin học Việt Nam</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Research */}
              <Card>
                <CardHeader>
                  <CardTitle>Hợp tác nghiên cứu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">(028) 1234 5678 ext. 101</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">research@university.edu.vn</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Phòng Nghiên cứu, Tầng 5</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Liên hệ hợp tác
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