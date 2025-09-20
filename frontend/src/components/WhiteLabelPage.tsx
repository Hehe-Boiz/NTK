import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Palette, 
  Code, 
  Settings, 
  Zap, 
  Shield, 
  Cloud,
  Check,
  ArrowRight,
  Download,
  Star,
  Users,
  Globe
} from 'lucide-react';

export function WhiteLabelPage() {
  const features = [
    {
      icon: Palette,
      title: 'Tùy chỉnh Giao diện',
      description: 'Thay đổi màu sắc, logo, và thiết kế theo thương hiệu của bạn'
    },
    {
      icon: Code,
      title: 'API Tích hợp',
      description: 'Dễ dàng tích hợp với hệ thống hiện có thông qua RESTful API'
    },
    {
      icon: Settings,
      title: 'Cấu hình Linh hoạt',
      description: 'Cài đặt các chức năng theo nhu cầu cụ thể của từng khách hàng'
    },
    {
      icon: Zap,
      title: 'Hiệu suất Cao',
      description: 'Tối ưu hóa tốc độ và hiệu suất cho trải nghiệm người dùng tốt nhất'
    },
    {
      icon: Shield,
      title: 'Bảo mật Nâng cao',
      description: 'Áp dụng các tiêu chuẩn bảo mật quốc tế, mã hóa dữ liệu end-to-end'
    },
    {
      icon: Cloud,
      title: 'Triển khai Đám mây',
      description: 'Hỗ trợ triển khai trên AWS, Azure, Google Cloud và on-premise'
    }
  ];

  const plans = [
    {
      name: 'Cơ bản',
      price: '2.000.000',
      period: '/tháng',
      description: 'Phù hợp cho doanh nghiệp nhỏ và vừa',
      features: [
        'Tùy chỉnh giao diện cơ bản',
        'Hỗ trợ tối đa 1.000 người dùng',
        'API cơ bản',
        'Hỗ trợ email',
        'Backup hàng tuần'
      ],
      popular: false
    },
    {
      name: 'Chuyên nghiệp',
      price: '5.000.000',
      period: '/tháng',
      description: 'Dành cho doanh nghiệp lớn',
      features: [
        'Tùy chỉnh giao diện nâng cao',
        'Không giới hạn người dùng',
        'API đầy đủ',
        'Hỗ trợ 24/7',
        'Backup hàng ngày',
        'SSO integration',
        'Custom domain',
        'Analytics nâng cao'
      ],
      popular: true
    },
    {
      name: 'Doanh nghiệp',
      price: 'Liên hệ',
      period: '',
      description: 'Giải pháp tùy chỉnh hoàn toàn',
      features: [
        'Tùy chỉnh không giới hạn',
        'Dedicated server',
        'API custom',
        'Dedicated support team',
        'Backup real-time',
        'White-label hoàn toàn',
        'On-premise deployment',
        'SLA 99.9%'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Hệ thống Quản lý Học tập (LMS)',
      description: 'Tạo nền tảng e-learning với thương hiệu riêng cho các trường học và trung tâm đào tạo',
      icon: Users,
      examples: ['Coursera for Business', 'Corporate Training Platform', 'University Portal']
    },
    {
      title: 'Nền tảng Thương mại Điện tử',
      description: 'Xây dựng website bán hàng online với đầy đủ tính năng quản lý và thanh toán',
      icon: Globe,
      examples: ['Multi-vendor Marketplace', 'B2B Trading Platform', 'Retail Chain Management']
    },
    {
      title: 'Hệ thống Quản lý Doanh nghiệp',
      description: 'Giải pháp ERP tích hợp quản lý nhân sự, tài chính và vận hành',
      icon: Settings,
      examples: ['HR Management System', 'Financial Management', 'Supply Chain Management']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-purple-900 hover:bg-gray-100">
              🚀 White Label Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Giải pháp White Label
              <span className="block text-purple-300">Chuyên nghiệp</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Tạo ra sản phẩm công nghệ với thương hiệu riêng của bạn. 
              Từ thiết kế đến triển khai, chúng tôi cung cấp giải pháp hoàn chỉnh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Bắt đầu ngay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Xem Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tính năng vượt trội
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các tính năng được thiết kế để đáp ứng mọi nhu cầu về white label solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ứng dụng thực tế
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các lĩnh vực có thể áp dụng giải pháp White Label của chúng tôi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-900 mb-3">Ví dụ ứng dụng:</p>
                      {useCase.examples.map((example, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bảng giá dịch vụ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chọn gói dịch vụ phù hợp với quy mô và ngân sách của doanh nghiệp
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-purple-500 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Phổ biến nhất
                    </Badge>
                    
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price === 'Liên hệ' ? 'Liên hệ tư vấn' : 'Chọn gói này'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Liên hệ với đội ngũ chuyên gia của chúng tôi để được tư vấn giải pháp phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Liên hệ ngay
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Download className="mr-2 h-4 w-4" />
              Tải brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}