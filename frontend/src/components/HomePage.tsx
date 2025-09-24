import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { AchievementsSection} from './Home/AchievementsSection'
import locallLabImage from '../assets/ouimage.jpg'
import ttImage1 from '../assets/tt1.jpg'
import ttImage2 from '../assets/tt2.jpg'
import ttImage3 from '../assets/tt3.jpg'

import gvImg1 from '../assets/gv1.jpg'
import gvImg2 from '../assets/gv2.jpg'
import gvImg3 from '../assets/gv3.jpg'

import cp1 from '../assets/cp.jpg'
import cp2 from '../assets/qs.jpg'
import cp3 from '../assets/sv.jpg'
import cp4 from '../assets/tn.jpg'
import cp5 from '../assets/ct.jpg'
import cp6 from '../assets/rdr.jpg'
import cp7 from '../assets/lb.jpg'
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
import { ImageWithFallback } from './ui/ImageWithFallback';
import { useTheme } from './ThemeProvider';
import { WishForm } from './WishForm';
import { WishBubbles } from './WishBubbles';

import { useHeroData } from "../contexts/AdminConfigContext";
import { HistoryTimeline } from './Home/HistoryTimeline';
import { leadership, testimonials } from '../data/homepage-data';

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

  const heroData = useHeroData();
  const ttImages = [ttImage1, ttImage2, ttImage3];
  const gvIMages = [gvImg1, gvImg2, gvImg3];

  return (
    <div  className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-50">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600903308878-bf5e554ab841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU4MTcxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container-university py-20">
          <div className="grid w-900px lg:grid-cols-2 gap-32 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white z-1">
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
              
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Button size="lg" className="text-base text-blue-900 bg-white" asChild>
                  <a href={heroData.cta.primary.href}>
                    {heroData.cta.primary.text}
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-base" asChild>
                  <a href={heroData.cta.secondary.href}>
                    {heroData.cta.secondary.text}
                  </a>
                </Button>
              </div>



              {/* CTA Buttons */}
            </div>
            {/* Ảnh bên phải */}
            <div className="">
              <div className="rounded-md relative ">
                  <ImageWithFallback
                    src={locallLabImage}
                    alt="Technology and Computer Science"
                    className="rounded-2xl shadow-2xl w-[600px] h-[500px] object-cover z-1 relative"
                  />
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-12 w-32 h-32 bg-white rounded-2xl opacity-70 z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-42 h-42 bg-gradient-to-br from-white to-blue-900 rounded-2xl z-0"></div>
              </div>
            </div>
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
      <section  className="university-border border-t">
        <AchievementsSection></AchievementsSection>
      </section>
      {/* About Section - Long Form */}
      <section id="chuong-trinh" className="py-20 border-t">
        <div className="container-university border-b ">
          <div className="text-center container-university mb-16">
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
            {/* Thông tin liên hệ */}
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

          
          <HistoryTimeline></HistoryTimeline>

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
                  <CardHeader className="pb-4">
                    <div className="text-center justify-center align-center">
                      <ImageWithFallback
                        src={gvIMages[index]}
                        alt="Archiments image"
                        className="rounded-full shadow-2xl  w-64 h-64 mb-8 relative object-cover"
                      >
                      </ImageWithFallback>
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
              Thành tích của Khoa
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
                  <div className='text-center'>
                    <ImageWithFallback
                      src={ttImages[index]}
                      alt="Archiments image"
                      className="rounded-2xl shadow-2xl  w-full h-64 mb-8 relative object-cover"
                    
                    ></ImageWithFallback>
                  </div>
                  <div className="border-t university-border pt-6">
                    <div className="font-semibold">{testimonial.content}</div>
                    <div className="text-sm university-text-secondary">{testimonial.date}</div>
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
                  src={cp1}
                  alt="Modern University Building"
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Campus</h3>
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
                    src={cp2}
                    alt="Computer Laboratory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold">Quân sự</h4>
                    <p className="text-sm text-white/90">Hoạt động quân sự</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
              <div className="relative h-full">
                <ImageWithFallback
                  src={cp3}
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
                  src={cp4}
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
                  src={cp6}
                  alt="Campus Building"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold">Thư viện</h4>
                  <p className="text-sm text-white/90">Kiến trúc hiện đại</p>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-2">
              <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
                <div className="relative h-full">
                  <ImageWithFallback
                    src={cp5}
                    alt="Innovation Center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold">Cuộc thi giải pháp phần mềm</h4>
                    <p className="text-sm text-white/90">Hub khởi nghiệp và nghiên cứu</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden h-64 university-shadow hover:university-shadow-lg transition-all group">
              <div className="relative h-full">
                <ImageWithFallback
                  src={cp7}
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