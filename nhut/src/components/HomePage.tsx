import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Users, 
  Award, 
  TrendingUp,
  Calendar,
  BookOpen,
  Briefcase,
  Globe,
  Target,
  History,
  Trophy,
  Building,
  GraduationCap,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from './ThemeProvider';
import { WishForm } from './WishForm';
import { WishBubbles } from './WishBubbles';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Icon mapping for dynamic icons
const iconMap = {
  Building,
  GraduationCap,
  Globe,
  Award,
  Lightbulb,
  TrendingUp,
  Target,
  Trophy,
  Users,
  BookOpen,
  Star
};

export function HomePage({ onNavigate }: HomePageProps) {
  const { theme } = useTheme();

  const achievements = [
    {
      number: '15,000+',
      label: 'Cử nhân tốt nghiệp',
      description: '35 năm đào tạo'
    },
    {
      number: '96%',
      label: 'Tỷ lệ có việc làm',
      description: 'Trong vòng 6 tháng'
    },
    {
      number: '200+',
      label: 'Công trình nghiên cứu',
      description: 'Tạp chí quốc tế'
    },
    {
      number: '50+',
      label: 'Giải thưởng',
      description: 'Trong và ngoài nước'
    }
  ];

  const leadership = [
    {
      name: 'GS.TS. Nguyễn Văn An',
      position: 'Trưởng khoa',
      expertise: 'Trí tuệ Nhân tạo, Machine Learning',
      education: 'Ph.D Computer Science, Stanford University',
      achievements: [
        'Tác giả 80+ công trình nghiên cứu',
        'Giải thưởng Nhà khoa học xuất sắc 2023',
        'Chuyên gia tư vấn Chính phủ về AI'
      ]
    },
    {
      name: 'PGS.TS. Trần Thị Minh',
      position: 'Phó Trưởng khoa phụ trách Đào tạo',
      expertise: 'An toàn Thông tin, Blockchain',
      education: 'Ph.D Information Security, MIT',
      achievements: [
        'Trưởng nhóm nghiên cứu Cybersecurity',
        'Chủ biên 5 giáo trình chuyên ngành',
        'Cố vấn an ninh mạng quốc gia'
      ]
    },
    {
      name: 'TS. Lê Hoàng Nam',
      position: 'Trưởng Bộ môn Kỹ thuật Phần mềm',
      expertise: 'Software Engineering, Cloud Computing',
      education: 'Ph.D Software Engineering, CMU',
      achievements: [
        'Kiến trúc sư phần mềm cấp cao',
        'Founder 2 startup công nghệ thành công',
        'Cố vấn kỹ thuật cho 20+ doanh nghiệp'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Nguyễn Minh Tuấn',
      role: 'CTO, VinTech Solutions',
      year: 'K44 - 2018',
      content: 'Chương trình đào tạo tại Khoa không chỉ trang bị kiến thức chuyên môn vững chắc mà còn phát triển tư duy phản biện và khả năng giải quyết vấn đề phức tạp. Điều này giúp tôi thành công trong vai trò lãnh đạo công nghệ.',
      company: 'VinTech Solutions'
    },
    {
      name: 'Phạm Thu Hương',
      role: 'Data Science Manager, FPT Software',
      year: 'K46 - 2020',
      content: 'Những dự án thực tế trong quá trình học đã chuẩn bị tốt cho tôi bước vào thế giới Data Science. Các thầy cô luôn cập nhật xu hướng công nghệ mới nhất và tạo điều kiện cho sinh viên nghiên cứu.',
      company: 'FPT Software'
    },
    {
      name: 'Lê Đức Minh',
      role: 'Co-founder & CEO, TechStart Vietnam',
      year: 'K42 - 2016',
      content: 'Môi trường học tập tại Khoa khuyến khích sự sáng tạo và tinh thần khởi nghiệp. Tôi đã học được không chỉ kỹ thuật mà còn cả kỹ năng lãnh đạo và quản trị doanh nghiệp từ các hoạt động ngoại khóa.',
      company: 'TechStart Vietnam'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600903308878-bf5e554ab841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4MTcxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-super-university py-20">
          <div className="grid w-900px lg:grid-cols-3 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-white lg:col-span-2">
              {/* Anniversary Badge */}
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 mb-8 inline-flex items-center">
                <History className="h-4 w-4 mr-2" />
                Kỷ niệm {parseInt(theme.anniversaryYear) - parseInt(theme.establishedYear)} năm ({theme.establishedYear}-{theme.anniversaryYear})
              </Badge>

              {/* University Name */}
              <div className="mb-6">
                <p className="text-blue-200 text-lg font-medium mb-2">{theme.universityName}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  {theme.facultyName}
                </h1>
              </div>

              {/* Mission Statement */}
              <div className="mb-10">
                <blockquote className="text-xl md:text-2xl font-light text-white/90 leading-relaxed italic mb-4">
                  "{theme.motto}"
                </blockquote>
                <p className="text-blue-200 font-medium">
                  — {theme.anniversarySlogan}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 university-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl md:text-3xl font-bold university-text-primary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs university-text-secondary">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

          

              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 hover:scale-105 transition-transform px-8 py-4"
                  onClick={() => onNavigate('academic')}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Chương trình đào tạo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 hover:scale-105 transition-transform px-8 py-4 backdrop-blur-sm"
                  onClick={() => onNavigate('contact')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Liên hệ tư vấn
                </Button>
              </div> */}
            </div>
            <div className="relative rounded-md">
              <div className="relative rounded-md overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1648279430956-a7d4a5d66c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB1bml2ZXJzaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgxODc4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Technology and Computer Science"
                    className="rounded-2xl shadow-2xl "
                  />
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20"></div>
              </div>
            </div>
            {/* Right Column - Info Cards */}
            {/* <div className="space-y-6"> */}
              {/* Thêm ảnh */}
                
              {/* Quick Stats */}
              {/* <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 university-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl md:text-3xl font-bold university-text-primary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-medium text-gray-800 mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs university-text-secondary">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div> */}

              {/* Featured Info Card */}
              {/* <Card className="bg-white/95 backdrop-blur-sm border-0 university-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg university-text-primary">
                        Điểm nổi bật
                      </CardTitle>
                      <p className="text-sm university-text-secondary">
                        Năm học 2024-2025
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tỷ lệ có việc làm</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        96%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Nghiên cứu quốc tế</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        200+ công trình
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Xếp hạng QS</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        Top 500
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Contact Quick Access */}
              {/* <Card className="bg-white/95 backdrop-blur-sm border-0 university-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Thông tin liên hệ
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <Phone className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="university-text-secondary">
                        {theme.contactInfo?.phone || '(024) 3869 2022'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-4 w-4 mr-2 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="university-text-secondary">
                        {theme.contactInfo?.email || 'cntt@university.edu.vn'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            {/* </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm mb-2 text-white/80">Khám phá thêm</span>
            <ChevronRight className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white border-b university-border">
        <div className="container-university">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold university-text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="font-medium text-lg mb-1">{achievement.label}</div>
                <div className="text-sm university-text-secondary">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Long Form */}
      <section className="py-20">
        <div className="container-university">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold university-text-primary mb-6">
              Về {theme.facultyName}
            </h2>
            <p className="text-xl university-text-secondary max-w-4xl mx-auto leading-relaxed">
              {parseInt(theme.anniversaryYear) - parseInt(theme.establishedYear)} năm hình thành và phát triển, góp phần đào tạo nguồn nhân lực 
              công nghệ thông tin chất lượng cao cho đất nước
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold university-text-primary mb-4">Sứ mệnh</h3>
                <p className="university-text-secondary leading-relaxed text-lg">
                  {theme.mission}
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-8">
                <h3 className="text-2xl font-bold university-text-primary mb-4">Tầm nhìn</h3>
                <p className="university-text-secondary leading-relaxed text-lg">
                  {theme.vision}
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-8">
                <h3 className="text-2xl font-bold university-text-primary mb-4">Giá trị cốt lõi</h3>
                <p className="university-text-secondary leading-relaxed text-lg">
                  {theme.coreValues}. Chúng tôi cam kết mang đến nền giáo dục xuất sắc và 
                  môi trường nghiên cứu tiên tiến.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold university-text-primary mb-6">
                Thông tin liên hệ
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg">Địa chỉ</div>
                    <div className="university-text-secondary">
                      {theme.contactInfo.address}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg">Điện thoại</div>
                    <div className="university-text-secondary">
                      {theme.contactInfo.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <div className="university-text-secondary">
                      {theme.contactInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline - Editable from Admin */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold university-text-primary mb-6">
                Hành trình {parseInt(theme.anniversaryYear) - parseInt(theme.establishedYear)} năm phát triển
              </h3>
              <p className="text-xl university-text-secondary max-w-3xl mx-auto">
                Từ những bước đầu khiêm tốn đến trở thành một trong những 
                khoa công nghệ thông tin hàng đầu của quốc gia
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
              
              {/* Wish Bubbles Overlay - positioned to cover the entire timeline area */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                <WishBubbles />
              </div>
              
              <div className="space-y-16 relative z-20">
                {theme.milestones.map((milestone, index) => {
                  const IconComponent = iconMap[milestone.icon as keyof typeof iconMap] || Building;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative flex items-center">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 university-shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className={`w-5/12 ${isEven ? 'pr-12 text-right' : 'ml-auto pl-12'}`}>
                        <Card className="university-shadow hover:university-shadow-lg transition-all">
                          <CardContent className="pt-8">
                            <Badge variant="outline" className="mb-4 text-base px-4 py-2">
                              {milestone.year}
                            </Badge>
                            <h4 className="text-xl font-bold mb-4 university-text-primary">
                              {milestone.title}
                            </h4>
                            <p className="university-text-secondary leading-relaxed">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold university-text-primary mb-6">
                Đội ngũ Lãnh đạo
              </h3>
              <p className="text-xl university-text-secondary max-w-3xl mx-auto">
                Những nhà giáo dục và nhà khoa học hàng đầu, dẫn dắt Khoa 
                phát triển bền vững và đạt những thành tựu xuất sắc
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="university-shadow hover:university-shadow-lg transition-all">
                  <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {leader.name.split(' ').pop()?.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto mt-2">
                      {leader.position}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-lg">Chuyên môn</h5>
                      <p className="university-text-secondary">{leader.expertise}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-lg">Học vấn</h5>
                      <p className="university-text-secondary">{leader.education}</p>
                    </div>
                    <Separator />
                    <div>
                      <h5 className="font-semibold mb-3 text-lg">Thành tựu nổi bật</h5>
                      <ul className="university-text-secondary space-y-2">
                        {leader.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vision 2030 */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="university-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl text-center university-text-primary">
                    Tầm nhìn 2030
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-8">
                  <p className="text-lg university-text-secondary leading-relaxed">
                    Trở thành một trong 10 khoa công nghệ thông tin hàng đầu 
                    Đông Nam Á, được quốc tế công nhận về chất lượng đào tạo 
                    và nghiên cứu khoa học.
                  </p>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <div className="text-3xl font-bold text-blue-600">Top 10</div>
                      <div className="text-sm university-text-secondary mt-2">Đông Nam Á</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-green-600">ABET</div>
                      <div className="text-sm university-text-secondary mt-2">Chuẩn kiểm định</div>
                    </div>
                    <div className="p-4">
                      <div className="text-3xl font-bold text-purple-600">5★</div>
                      <div className="text-sm university-text-secondary mt-2">QS Ranking</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="university-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl text-center university-text-primary">
                    Định hướng 2025-2030
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-2">Nâng cao chất lượng đào tạo</div>
                        <div className="university-text-secondary">
                          Đạt chuẩn kiểm định quốc tế ABET và phát triển chương trình tiên tiến
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-2">Tăng cường nghiên cứu</div>
                        <div className="university-text-secondary">
                          Top 3 Việt Nam về nghiên cứu AI và công nghệ mới nổi
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-2">Mở rộng hợp tác</div>
                        <div className="university-text-secondary">
                          20+ đối tác chiến lược với doanh nghiệp và trường đại học quốc tế
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 university-section-bg">
        <div className="container-university">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold university-text-primary mb-6">
              Câu chuyện Thành công
            </h2>
            <p className="text-xl university-text-secondary max-w-4xl mx-auto">
              Những chia sẻ từ các cựu sinh viên đã thành công trong sự nghiệp, 
              minh chứng cho chất lượng đào tạo của Khoa qua {parseInt(theme.anniversaryYear) - parseInt(theme.establishedYear)} năm
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white university-shadow hover:university-shadow-lg transition-all">
                <CardContent className="pt-8">
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-sm university-text-secondary">{testimonial.year}</div>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="university-text-secondary mb-8 leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t university-border pt-6">
                    <div className="font-semibold">{testimonial.role}</div>
                    <div className="text-sm university-text-secondary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Anniversary Wish Form */}
      <WishForm />

      {/* Campus Gallery */}
      <section className="py-20 bg-white">
        <div className="container-university">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold university-text-primary mb-6">
              Hình ảnh Trường
            </h2>
            <p className="text-xl university-text-secondary max-w-4xl mx-auto">
              Khám phá không gian học tập hiện đại và môi trường sống động tại 
              {theme.facultyName} qua những hình ảnh đẹp nhất
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <Card className="overflow-hidden university-shadow-lg">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610967999370-080d066b4543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbW9kZXJuJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4MTkyNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern University Building"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Tòa nhà Khoa CNTT</h3>
                  <p className="text-lg text-white/90">Cơ sở vật chất hiện đại với hệ thống lab tối tân</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Row 1 */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
                <div className="relative h-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGFib3JhdG9yeSUyMGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwxfHx8fDE3NTgxOTI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Computer Laboratory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold">Phòng Lab Máy tính</h4>
                    <p className="text-sm text-white/90">100+ máy trạm hiệu năng cao</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTgxOTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students Learning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Sinh viên học tập</h4>
                  <p className="text-sm text-white/90">Môi trường năng động</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620663823969-631e014e5e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU4MTkyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Graduation Ceremony"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Lễ tốt nghiệp</h4>
                  <p className="text-sm text-white/90">Khoảnh khắc vinh quang</p>
                </div>
              </div>
            </Card>

            {/* Row 2 */}
            <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600903308878-bf5e554ab841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4MTcxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Campus Building"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Campus chính</h4>
                  <p className="text-sm text-white/90">Kiến trúc hiện đại</p>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
                <div className="relative h-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1610967999370-080d066b4543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbW9kZXJuJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4MTkyNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Innovation Center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold">Trung tâm Đổi mới Sáng tạo</h4>
                    <p className="text-sm text-white/90">Hub khởi nghiệp và nghiên cứu</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731834453355-df041245e7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGFib3JhdG9yeSUyMGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwxfHx8fDE3NTgxOTI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AI Research Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Lab Nghiên cứu AI</h4>
                  <p className="text-sm text-white/90">Công nghệ tiên tiến</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Gallery Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold university-text-primary mb-2">50+</div>
              <div className="text-sm university-text-secondary">Phòng học hiện đại</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold university-text-primary mb-2">20+</div>
              <div className="text-sm university-text-secondary">Phòng Lab chuyên dụng</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold university-text-primary mb-2">5</div>
              <div className="text-sm university-text-secondary">Tòa nhà Khoa</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold university-text-primary mb-2">100ha</div>
              <div className="text-sm university-text-secondary">Diện tích campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t university-border">
        <div className="container-university text-center">
          <h2 className="text-4xl font-bold university-text-primary mb-6">
            Gia nhập cộng đồng CNTT
          </h2>
          <p className="text-xl university-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Khám phá các chương trình đào tạo chất lượng cao và cơ hội nghiên cứu 
            tại {theme.facultyName} - Nơi định hình tương lai công nghệ Việt Nam
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <Button 
              size="lg" 
              className="btn-university-primary"
              onClick={() => onNavigate('academic')}
            >
              Chương trình đào tạo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-university-secondary"
              onClick={() => onNavigate('contact')}
            >
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}