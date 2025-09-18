import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Calendar,
  Send,
  MessageSquare,
  Building,
  GraduationCap,
  Briefcase,
  BookOpen,
  User,
  Globe,
  UserCheck
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useAuth } from './AuthContext';

export function ContactPage() {
  const { user, isLoggedIn, isStudent } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Different success messages based on user type
    if (isStudent) {
      toast.success('Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi qua email sinh viên của bạn trong vòng 24 giờ.');
    } else if (isLoggedIn) {
      toast.success('Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại qua email của bạn trong vòng 24 giờ.');
    } else {
      toast.success('Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.');
    }
    
    // Reset only relevant fields
    setFormData({
      name: isLoggedIn ? user?.fullName || '' : '',
      email: isLoggedIn ? user?.email || '' : '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      type: 'Địa chỉ',
      icon: MapPin,
      details: [
        'Khoa Công nghệ Thông tin',
        'Trường Đại học XYZ',
        '123 Đường ABC, Quận 1, TP.HCM',
        'Việt Nam'
      ],
      color: 'blue'
    },
    {
      type: 'Điện thoại',
      icon: Phone,
      details: [
        'Văn phòng Khoa: (028) 1234 5678',
        'Phòng Đào tạo: (028) 1234 5679',
        'Phòng Nghiên cứu: (028) 1234 5680',
        'Hotline: 0901 234 567'
      ],
      color: 'green'
    },
    {
      type: 'Email',
      icon: Mail,
      details: [
        'cntt@university.edu.vn',
        'daotao.cntt@university.edu.vn',
        'nghiencuu.cntt@university.edu.vn',
        'tuyensinh.cntt@university.edu.vn'
      ],
      color: 'purple'
    },
    {
      type: 'Giờ làm việc',
      icon: Clock,
      details: [
        'Thứ 2 - Thứ 6: 7:30 - 17:00',
        'Thứ 7: 7:30 - 11:30',
        'Chủ nhật: Nghỉ',
        'Tư vấn online 24/7'
      ],
      color: 'orange'
    }
  ];

  const departments = [
    {
      name: 'Văn phòng Khoa',
      head: 'GS.TS. Nguyễn Văn A',
      position: 'Trưởng khoa',
      phone: '(028) 1234 5678',
      email: 'truongkhoa.cntt@university.edu.vn',
      office: 'Phòng 301, Tòa nhà A',
      responsibilities: ['Quản lý chung', 'Chiến lược phát triển', 'Đối ngoại']
    },
    {
      name: 'Phòng Đào tạo',
      head: 'TS. Trần Thị B',
      position: 'Trưởng phòng',
      phone: '(028) 1234 5679',
      email: 'daotao.cntt@university.edu.vn',
      office: 'Phòng 302, Tòa nhà A',
      responsibilities: ['Chương trình đào tạo', 'Tuyển sinh', 'Quản lý sinh viên']
    },
    {
      name: 'Phòng Nghiên cứu',
      head: 'PGS.TS. Lê Văn C',
      position: 'Trưởng phòng',
      phone: '(028) 1234 5680',
      email: 'nghiencuu.cntt@university.edu.vn',
      office: 'Phòng 401, Tòa nhà B',
      responsibilities: ['Dự án nghiên cứu', 'Hợp tác quốc tế', 'Xuất bản khoa học']
    },
    {
      name: 'Phòng Hợp tác Doanh nghiệp',
      head: 'ThS. Phạm Thị D',
      position: 'Trưởng phòng',
      phone: '(028) 1234 5681',
      email: 'hoptac.cntt@university.edu.vn',
      office: 'Phòng 303, Tòa nhà A',
      responsibilities: ['Thực tập sinh', 'Việc làm', 'Dự án doanh nghiệp']
    }
  ];

  const faqs = [
    {
      question: 'Làm thế nào để đăng ký tham quan Khoa?',
      answer: 'Bạn có thể đăng ký tham quan qua email hoặc điện thoại. Chúng tôi tổ chức tour tham quan vào thứ 3 và thứ 6 hàng tuần.'
    },
    {
      question: 'Khoa có những chương trình đào tạo nào?',
      answer: 'Khoa hiện có 4 chương trình cử nhân: Kỹ thuật Phần mềm, Khoa học Dữ liệu, An toàn Thông tin, và Trí tuệ Nhân tạo. Ngoài ra còn có 2 chương trình thạc sĩ.'
    },
    {
      question: 'Điều kiện xét tuyển vào Khoa như thế nào?',
      answer: 'Chúng tôi xét tuyển dựa trên điểm thi THPT Quốc gia (Toán, Lý, Hóa) hoặc điểm thi đánh giá năng lực. Điểm chuẩn thường dao động từ 24-27 điểm.'
    },
    {
      question: 'Khoa có hỗ trợ tìm việc làm cho sinh viên không?',
      answer: 'Có, chúng tôi có Phòng Hợp tác Doanh nghiệp chuyên hỗ trợ sinh viên tìm thực tập và việc làm. Tỷ lệ có việc làm của sinh viên tốt nghiệp đạt 95%.'
    },
    {
      question: 'Làm thế nào để hợp tác nghiên cứu với Khoa?',
      answer: 'Vui lòng liên hệ Phòng Nghiên cứu để thảo luận về các cơ hội hợp tác. Chúng tôi luôn mở cửa với các đối tác trong và ngoài nước.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. 
              Hãy liên hệ để được tư vấn và giải đáp mọi thắc mắc.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thông tin liên hệ
            </h2>
            <p className="text-xl text-gray-600">
              Nhiều cách để bạn có thể liên hệ với chúng tôi
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`h-8 w-8 text-${info.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{info.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <CardDescription>
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong vòng 24 giờ
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* User Status Display */}
                {isLoggedIn && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <UserCheck className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-900">
                        Đã đăng nhập với tài khoản: {user?.fullName}
                      </span>
                      {isStudent && (
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                          Sinh viên
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      {isStudent 
                        ? "Bạn chỉ cần điền tiêu đề và nội dung tin nhắn." 
                        : "Thông tin cá nhân sẽ được tự động điền."}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information - Only show for guest users or when logged in as non-student */}
                  {(!isLoggedIn || !isStudent) && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Họ và tên *</Label>
                          <Input
                            id="name"
                            value={isLoggedIn ? user?.fullName || '' : formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Nguyễn Văn A"
                            required
                            disabled={isLoggedIn}
                            className={isLoggedIn ? 'bg-gray-50' : ''}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={isLoggedIn ? user?.email || '' : formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="example@email.com"
                            required
                            disabled={isLoggedIn}
                            className={isLoggedIn ? 'bg-gray-50' : ''}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Số điện thoại</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="0901 234 567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Danh mục</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn danh mục" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admission">Tuyển sinh</SelectItem>
                              <SelectItem value="education">Đào tạo</SelectItem>
                              <SelectItem value="research">Nghiên cứu</SelectItem>
                              <SelectItem value="cooperation">Hợp tác</SelectItem>
                              <SelectItem value="other">Khác</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Message Information - Always show */}
                  <div>
                    <Label htmlFor="subject">Tiêu đề *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Tôi muốn tư vấn về..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Nội dung tin nhắn *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Vui lòng mô tả chi tiết yêu cầu của bạn..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Quick Category Selection for Students */}
                  {isLoggedIn && isStudent && (
                    <div>
                      <Label>Danh mục tin nhắn (tùy chọn)</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          { value: 'academic', label: 'Học tập', icon: BookOpen },
                          { value: 'schedule', label: 'Lịch học', icon: Calendar },
                          { value: 'grade', label: 'Điểm số', icon: GraduationCap },
                          { value: 'support', label: 'Hỗ trợ', icon: Users },
                          { value: 'other', label: 'Khác', icon: MessageSquare }
                        ].map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <button
                              key={cat.value}
                              type="button"
                              onClick={() => handleInputChange('category', cat.value)}
                              className={`flex items-center space-x-1 px-3 py-2 rounded-lg border text-sm transition-all ${
                                formData.category === cat.value
                                  ? 'bg-blue-100 border-blue-300 text-blue-700'
                                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              <span>{cat.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Liên hệ nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Gọi điện ngay
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Gửi email
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat trực tuyến
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Đặt lịch hẹn
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Giờ làm việc
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Thứ 2 - Thứ 6</span>
                  <span className="font-medium">7:30 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Thứ 7</span>
                  <span className="font-medium">7:30 - 11:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Chủ nhật</span>
                  <span className="text-red-600">Nghỉ</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span>Tư vấn online</span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Mạng xã hội
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Facebook Page
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  YouTube Channel
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  LinkedIn
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Zalo Official
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Departments */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Các phòng ban
            </h2>
            <p className="text-xl text-gray-600">
              Liên hệ trực tiếp với các phòng ban chuyên môn
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                      <CardDescription>
                        {dept.head} - {dept.position}
                      </CardDescription>
                    </div>
                    <Building className="h-6 w-6 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span>{dept.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{dept.office}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Chức năng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.responsibilities.map((resp, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {resp}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xl text-gray-600">
              Những câu hỏi được hỏi nhiều nhất
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vị trí trên bản đồ
            </h2>
            <p className="text-xl text-gray-600">
              Tìm đường đến Khoa Công nghệ Thông tin
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Bản đồ Google Maps sẽ được tích hợp tại đây</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Đường ABC, Quận 1, TP.HCM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}