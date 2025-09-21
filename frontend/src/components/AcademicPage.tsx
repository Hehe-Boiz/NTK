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
import { programs, graduatePrograms} from '../data/academic-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AcademicPage() {
  const [activeSection, setActiveSection] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState('software-engineering');
  const [selectedGraduateProgram, setSelectedGraduateProgram] = useState('master-artificial-intelligence');
  const [selectedResearchArea, setSelectedResearchArea] = useState('artificial-intelligence');
  const [searchTerm, setSearchTerm] = useState('');

  const currentProgram = programs.find(p => p.id === selectedProgram) || programs[0];

  const filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentGraduateProgram = graduatePrograms.find(p => p.id === selectedGraduateProgram) || graduatePrograms[0];
  const filteredGraduatePrograms = graduatePrograms.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));


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
              🎓 Đào tạo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Chương trình Đào tạo
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
                <TabsTrigger value="graduatePrograms" className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Chương trình Đào tạo sau đại học</span>
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


        {activeSection === 'graduatePrograms' && (
        <>
          {/* Graduate Programs Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Chương trình Đào tạo Sau đại học
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Các chương trình Thạc sĩ chuyên sâu, tập trung vào nghiên cứu và phát triển công nghệ đỉnh cao.
                </p>
              </div>

              {/* Danh sách các card chương trình */}
              <div className="grid lg:grid-cols-4 gap-6 mb-12">
                {filteredGraduatePrograms.map((program) => {
                  const Icon = program.icon;
                  const isSelected = program.id === selectedGraduateProgram;
                  return (
                    <Card 
                      key={program.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        isSelected ? 'ring-2 ring-purple-500 shadow-lg' : ''
                      } ${program.featured ? 'border-yellow-300' : ''}`}
                      onClick={() => setSelectedGraduateProgram(program.id)}
                    >
                      <CardHeader>
                        {program.featured && (
                          <Badge className="mb-2 bg-yellow-100 text-yellow-800 w-fit">
                            <Star className="h-3 w-3 mr-1" /> Nổi bật
                          </Badge>
                        )}
                        <div className={`w-12 h-12 bg-${program.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                          <Icon className={`h-6 w-6 text-${program.color}-600`} />
                        </div>
                        <CardTitle className="text-lg">{program.name}</CardTitle>
                        <CardDescription className="line-clamp-3 h-16">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant={isSelected ? 'default' : 'outline'} className="w-full mt-4">
                          {isSelected ? 'Đang xem' : 'Xem chi tiết'}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Graduate Program Details */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cột nội dung chính */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">{currentGraduateProgram.name}</CardTitle>
                      <CardDescription className="text-lg mt-2">{currentGraduateProgram.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Tabs defaultValue="curriculum" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="curriculum">Chương trình học</TabsTrigger>
                          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                          <TabsTrigger value="career">Nghề nghiệp</TabsTrigger>
                        </TabsList>

                        <TabsContent value="curriculum" className="mt-6 space-y-6">
                           {Object.entries(currentGraduateProgram.yearlyProgram).map(([year, yearData]) => (
                            <div key={year}>
                                <h4 className="text-xl font-semibold mb-4">{year === 'year1' ? 'Năm thứ 1' : 'Năm thứ 2'}</h4>
                               <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(yearData).map(([semester, subjects]) => (
                                  <Card key={semester}>
                                    <CardHeader><CardTitle className="text-lg">{semester === 'semester1' ? 'Học kỳ 1' : 'Học kỳ 2'}</CardTitle></CardHeader>
                                    <CardContent className="space-y-2">
                                      {subjects.map((subject, index) => (
                                         <div key={index} className="text-sm p-2 bg-gray-50 rounded">{subject.name} - {subject.credits} TC</div>
                                      ))}
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          ))}
                        </TabsContent>
                        
                        <TabsContent value="overview" className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Mục tiêu đào tạo</h3>
                            <ul className="list-disc list-inside space-y-2">
                                {currentGraduateProgram.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                            </ul>
                        </TabsContent>

                        <TabsContent value="career" className="mt-6">
                             <h3 className="text-lg font-semibold mb-4">Cơ hội nghề nghiệp</h3>
                             <div className="flex flex-wrap gap-2">
                                {currentGraduateProgram.careerPaths.map((path, i) => <Badge key={i} variant="secondary">{path}</Badge>)}
                             </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>

                {/* Cột phụ (sidebar) */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader><CardTitle>Yêu cầu tuyển sinh</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        {currentGraduateProgram.admissionRequirements.map((req, i) => <li key={i}>{req}</li>)}
                      </ul>
                       <Button className="w-full mt-4"><Download className="h-4 w-4 mr-2" /> Tải brochure</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle>Tư vấn trực tuyến</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600 mb-4">Liên hệ để được tư vấn chi tiết về chương trình.</p>
                        <Button className="w-full" variant="outline"><Phone className="h-4 w-4 mr-2" /> Đăng ký</Button>
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
          </div>
        </section> 
      )}
    </div>
  );
}