import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Award, 
  Users, 
  BookOpen, 
  Globe, 
  Target, 
  Heart,
  TrendingUp,
  Calendar,
  Star
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const achievements = [
    {
      year: '1990',
      title: 'Thành lập Khoa',
      description: 'Khoa Công nghệ Thông tin được thành lập với 20 giảng viên và 100 sinh viên đầu tiên'
    },
    {
      year: '2000',
      title: 'Mở rộng chương trình',
      description: 'Bổ sung các chuyên ngành mới: Hệ thống thông tin, Mạng máy tính'
    },
    {
      year: '2010',
      title: 'Chứng nhận quốc tế',
      description: 'Đạt chứng nhận chất lượng giáo dục ABET và AUN-QA'
    },
    {
      year: '2015',
      title: 'Nghiên cứu AI',
      description: 'Thành lập phòng thí nghiệm AI và Big Data đầu tiên tại miền Nam'
    },
    {
      year: '2020',
      title: 'Chuyển đổi số',
      description: 'Tiên phong trong việc số hóa giáo dục với nền tảng học trực tuyến'
    },
    {
      year: '2025',
      title: 'Kỷ niệm 35 năm',
      description: 'Tự hào với 15,000 cử nhân và 500 thạc sĩ đã tốt nghiệp'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Sứ mệnh',
      description: 'Đào tạo nguồn nhân lực công nghệ thông tin chất lượng cao, góp phần xây dựng xã hội số và phát triển kinh tế tri thức.'
    },
    {
      icon: Heart,
      title: 'Tầm nhìn',
      description: 'Trở thành một trong những khoa công nghệ thông tin hàng đầu khu vực Đông Nam Á vào năm 2030.'
    },
    {
      icon: Star,
      title: 'Giá trị cốt lõi',
      description: 'Chất lượng - Sáng tạo - Trách nhiệm - Hợp tác - Phát triển bền vững'
    }
  ];

  const faculty = [
    {
      name: 'GS.TS. Nguyễn Văn A',
      position: 'Trưởng Khoa',
      specialty: 'Trí tuệ nhân tạo, Machine Learning',
      experience: '25 năm kinh nghiệm',
      publications: '150+ công trình nghiên cứu'
    },
    {
      name: 'PGS.TS. Trần Thị B',
      position: 'Phó Trưởng Khoa',
      specialty: 'An toàn thông tin, Mật mã học',
      experience: '20 năm kinh nghiệm',
      publications: '100+ công trình nghiên cứu'
    },
    {
      name: 'TS. Lê Văn C',
      position: 'Trưởng bộ môn Kỹ thuật Phần mềm',
      specialty: 'Software Engineering, DevOps',
      experience: '15 năm kinh nghiệm',
      publications: '80+ công trình nghiên cứu'
    }
  ];

  const stats = [
    { label: 'Sinh viên hiện tại', value: 2500, icon: Users },
    { label: 'Giảng viên', value: 85, icon: Award },
    { label: 'Chương trình đào tạo', value: 12, icon: BookOpen },
    { label: 'Đối tác quốc tế', value: 25, icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
              35 năm phát triển (1990-2025)
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Về Khoa Công nghệ Thông tin
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Hành trình 35 năm xây dựng và phát triển, từ những bước đi đầu tiên đến việc trở thành 
              một trong những khoa công nghệ thông tin hàng đầu Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value.toLocaleString()}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sứ mệnh & Tầm nhìn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Định hướng phát triển và các giá trị cốt lõi của Khoa Công nghệ Thông tin
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lịch sử phát triển
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những mốc son quan trọng trong 35 năm phát triển của Khoa
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <Badge variant="outline">{achievement.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ban lãnh đạo Khoa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Đội ngũ lãnh đạo giàu kinh nghiệm và tâm huyết với giáo dục
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.position}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Chuyên môn:</p>
                    <p className="text-gray-600">{member.specialty}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Kinh nghiệm:</p>
                    <p className="text-gray-600">{member.experience}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Công trình nghiên cứu:</p>
                    <p className="text-gray-600">{member.publications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thành tựu nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số và thành tích đáng tự hào trong 35 năm qua
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <p className="text-gray-600">Tỷ lệ có việc làm sau tốt nghiệp</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600">Giải thưởng nghiên cứu khoa học</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
                <p className="text-gray-600">Đối tác quốc tế</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                <p className="text-gray-600">Công trình nghiên cứu đã xuất bản</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}