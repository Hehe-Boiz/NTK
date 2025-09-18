import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Calendar, 
  Search, 
  Star, 
  Award, 
  Users, 
  BookOpen,
  TrendingUp,
  ExternalLink,
  Clock,
  Eye,
  Share2,
  Filter,
  ChevronRight,
  Tag,
  GraduationCap,
  Megaphone,
  Lightbulb,
  Handshake,
  Trophy,
  Building,
  Phone
} from 'lucide-react';
import { ImageWithFallback } from './fallback/ImageWithFallback';

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', count: 48, icon: BookOpen },
    { id: 'admissions', name: 'Tuyển sinh', count: 12, icon: GraduationCap },
    { id: 'education', name: 'Đào tạo', count: 15, icon: BookOpen },
    { id: 'events', name: 'Sự kiện', count: 8, icon: Calendar },
    { id: 'achievements', name: 'Thành tựu', count: 6, icon: Trophy },
    { id: 'research', name: 'Nghiên cứu', count: 4, icon: Lightbulb },
    { id: 'cooperation', name: 'Hợp tác', count: 3, icon: Handshake }
  ];

  const featuredNews = [
    {
      id: 1,
      title: 'Lễ kỷ niệm 35 năm thành lập Khoa Công nghệ Thông tin - Tri ân và hướng tới tương lai',
      excerpt: 'Với chủ đề "35 năm đồng hành - Kiến tạo tương lai số", lễ kỷ niệm đã quy tụ hàng trăm cựu sinh viên, đối tác và bạn bè.',
      content: `
        Ngày 15 tháng 3 năm 2025, Khoa Công nghệ Thông tin đã tổ chức trọng thể lễ kỷ niệm 35 năm thành lập với chủ đề "35 năm đồng hành - Kiến tạo tương lai số". Sự kiện đã thu hút hơn 500 khách mời bao gồm lãnh đạo nhà trường, các đối tác doanh nghiệp, cựu sinh viên và sinh viên hiện tại.

        Trong suốt 35 năm qua, Khoa đã đào tạo hơn 15,000 kỹ sư công nghệ thông tin, trong đó nhiều người đã trở thành lãnh đạo các công ty công nghệ hàng đầu. Đặc biệt, 95% sinh viên tốt nghiệp có việc làm ngay trong vòng 6 tháng đầu.

        Tại buổi lễ, Khoa đã công bố kế hoạch phát triển giai đoạn 2025-2030 với mục tiêu trở thành một trong những khoa công nghệ thông tin hàng đầu khu vực Đông Nam Á. Các chương trình đào tạo mới về AI, Data Science và Cybersecurity sẽ được triển khai trong năm học tới.
      `,
      date: '2025-03-15',
      category: 'events',
      author: 'Ban Truyền thông',
      readTime: 5,
      views: 1250,
      featured: true,
      urgent: false,
      tags: ['35 năm', 'kỷ niệm', 'thành lập', 'tương lai số'],
      image: 'https://images.unsplash.com/photo-1620663823969-631e014e5e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU4MTkyNDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Sinh viên CNTT giành giải nhất cuộc thi lập trình ACM-ICPC khu vực châu Á',
      excerpt: 'Đội tuyển "Code Warriors" xuất sắc vượt qua 200 đội từ 50 trường đại học để giành chiến thắng.',
      content: `
        Đội tuyển "Code Warriors" của Khoa Công nghệ Thông tin đã tạo nên bất ngờ lớn khi giành giải nhất cuộc thi lập trình ACM-ICPC khu vực châu Á diễn ra tại Singapore từ ngày 8-10/3/2025.

        Ba thành viên của đội gồm: Nguyễn Văn An (năm 3), Trần Thị Bình (năm 3) và Lê Văn Cường (năm 4) đã vượt qua 200 đội thi đến từ 50 trường đại học hàng đầu khu vực. Trong 5 giờ thi đấu, đội đã giải quyết thành công 9/12 bài toán với tổng thời gian penalty thấp nhất.

        Thầy Phạm Minh Đức, huấn luyện viên của đội, chia sẻ: "Đây là kết quả của quá trình luyện tập cật lực trong 2 năm qua. Các em đã dành 4-6 giờ mỗi ngày để rèn luyện kỹ năng giải thuật và làm việc nhóm."

        Chiến thắng này không chỉ mang về vinh quang cho nhà trường mà còn mở ra cơ hội cho đội tham dự vòng chung kết thế giới tại Mỹ vào tháng 5 tới.
      `,
      date: '2025-03-10',
      category: 'achievements',
      author: 'Phòng Đào tạo',
      readTime: 4,
      views: 980,
      featured: true,
      urgent: false,
      tags: ['ACM-ICPC', 'lập trình', 'giải nhất', 'sinh viên'],
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTgxOTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const regularNews = [
    // Tuyển sinh
    {
      id: 3,
      title: '[TUYỂN SINH] Thông báo xét tuyển bổ sung năm 2025 - Còn 20 chỉ tiêu',
      excerpt: 'Khoa CNTT thông báo tuyển bổ sung cho các ngành Kỹ thuật Phần mềm và An toàn Thông tin với điểm chuẩn từ 24.5.',
      date: '2025-03-18',
      category: 'admissions',
      author: 'Phòng Đào tạo',
      readTime: 3,
      views: 2100,
      featured: false,
      urgent: true,
      tags: ['tuyển sinh', 'bổ sung', '2025', 'chỉ tiêu']
    },
    {
      id: 4,
      title: '[TUYỂN SINH] Hướng dẫn nộp hồ sơ xét tuyển học bạ THPT 2025',
      excerpt: 'Chi tiết quy trình, hồ sơ và lịch trình xét tuyển học bạ cho năm học 2025-2026.',
      date: '2025-03-12',
      category: 'admissions',
      author: 'Phòng Đào tạo',
      readTime: 5,
      views: 1800,
      featured: false,
      urgent: false,
      tags: ['học bạ', 'hướng dẫn', 'hồ sơ', '2025']
    },
    {
      id: 5,
      title: '[TUYỂN SINH] Ngày hội Tư vấn tuyển sinh 2025 - 23/03/2025',
      excerpt: 'Sự kiện tư vấn trực tiếp với phụ huynh và học sinh về các chương trình đào tạo, cơ hội nghề nghiệp.',
      date: '2025-03-08',
      category: 'admissions',
      author: 'Ban Tuyển sinh',
      readTime: 2,
      views: 950,
      featured: false,
      urgent: false,
      tags: ['tư vấn', 'ngày hội', 'phụ huynh', 'học sinh']
    },

    // Đào tạo
    {
      id: 6,
      title: '[ĐÀO TẠO] Lịch thi cuối kỳ học kỳ 2 năm học 2024-2025',
      excerpt: 'Thời gian thi từ 15/04 - 30/04/2025. Sinh viên lưu ý chuẩn bị và nắm rõ lịch thi của từng môn học.',
      date: '2025-03-14',
      category: 'education',
      author: 'Phòng Đào tạo',
      readTime: 3,
      views: 3200,
      featured: false,
      urgent: true,
      tags: ['thi cuối kỳ', 'lịch thi', 'học kỳ 2', 'sinh viên']
    },
    {
      id: 7,
      title: '[ĐÀO TẠO] Thông báo về việc đăng ký học phần học kỳ hè 2025',
      excerpt: 'Thời gian đăng ký từ 20/03 - 25/03/2025. Học phần hè diễn ra từ 05/05 - 30/06/2025.',
      date: '2025-03-11',
      category: 'education',
      author: 'Phòng Đào tạo',
      readTime: 4,
      views: 2800,
      featured: false,
      urgent: true,
      tags: ['đăng ký', 'học kỳ hè', '2025', 'học phần']
    },
    {
      id: 8,
      title: '[ĐÀO TẠO] Ra mắt chương trình AI Engineer Certificate',
      excerpt: 'Khoa CNTT hợp tác với Google và Microsoft ra mắt chương trình chứng chỉ AI Engineer dành cho sinh viên năm 3, 4.',
      date: '2025-03-06',
      category: 'education',
      author: 'Phòng Đào tạo',
      readTime: 4,
      views: 1650,
      featured: false,
      urgent: false,
      tags: ['AI', 'certificate', 'Google', 'Microsoft']
    },

    // Hợp tác
    {
      id: 9,
      title: '[HỢP TÁC] Ký kết thỏa thuận hợp tác với 5 doanh nghiệp công nghệ hàng đầu',
      excerpt: 'Khoa CNTT mở rộng mạng lưới đối tác để tăng cường cơ hội thực tập và việc làm cho sinh viên.',
      date: '2025-03-05',
      category: 'cooperation',
      author: 'Phòng Hợp tác',
      readTime: 3,
      views: 756,
      featured: false,
      urgent: false,
      tags: ['hợp tác', 'doanh nghiệp', 'thực tập', 'việc làm']
    },
    {
      id: 10,
      title: '[HỢP TÁC] Chương trình trao đổi sinh viên với ĐH Công nghệ Singapore',
      excerpt: 'Cơ hội học tập 1 semester tại NTU Singapore dành cho 10 sinh viên xuất sắc nhất.',
      date: '2025-02-28',
      category: 'cooperation',
      author: 'Phòng Quốc tế',
      readTime: 4,
      views: 1200,
      featured: false,
      urgent: false,
      tags: ['trao đổi', 'Singapore', 'NTU', 'sinh viên']
    },

    // Nghiên cứu
    {
      id: 11,
      title: '[NGHIÊN CỨU] Nghiên cứu về Blockchain được xuất bản trên tạp chí Nature',
      excerpt: 'Công trình nghiên cứu của GS.TS Lê Văn C về ứng dụng Blockchain trong chính phủ điện tử nhận được sự quan tâm quốc tế.',
      date: '2025-02-22',
      category: 'research',
      author: 'Phòng Nghiên cứu',
      readTime: 6,
      views: 1100,
      featured: false,
      urgent: false,
      tags: ['blockchain', 'nghiên cứu', 'Nature', 'chính phủ điện tử']
    },
    {
      id: 12,
      title: '[NGHIÊN CỨU] Dự án AI chẩn đoán y tế nhận tài trợ 2 tỷ đồng',
      excerpt: 'Nhóm nghiên cứu AI của Khoa nhận tài trợ từ Bộ Khoa học Công nghệ để phát triển hệ thống chẩn đoán hình ảnh y tế.',
      date: '2025-02-18',
      category: 'research',
      author: 'Trung tâm AI',
      readTime: 5,
      views: 890,
      featured: false,
      urgent: false,
      tags: ['AI', 'y tế', 'tài trợ', 'chẩn đoán']
    },

    // Sự kiện
    {
      id: 13,
      title: '[SỰ KIỆN] Hội thảo quốc tế về Cybersecurity thu hút 300 chuyên gia',
      excerpt: 'Sự kiện 2 ngày với sự tham gia của các chuyên gia hàng đầu từ 15 quốc gia.',
      date: '2025-02-15',
      category: 'events',
      author: 'Ban Tổ chức',
      readTime: 3,
      views: 890,
      featured: false,
      urgent: false,
      tags: ['cybersecurity', 'hội thảo', 'quốc tế', 'chuyên gia']
    },
    {
      id: 14,
      title: '[SỰ KIỆN] Ngày hội Việc làm CNTT 2025 - Kết nối cơ hội',
      excerpt: '50+ doanh nghiệp tham gia tuyển dụng với hơn 2000 vị trí việc làm hấp dẫn cho sinh viên CNTT.',
      date: '2025-03-01',
      category: 'events',
      author: 'Trung tâm Hỗ trợ Sinh viên',
      readTime: 4,
      views: 1500,
      featured: false,
      urgent: false,
      tags: ['việc làm', 'tuyển dụng', 'doanh nghiệp', 'cơ hội']
    }
  ];

  const allNews = [...featuredNews, ...regularNews];

  const filteredNews = allNews.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [selectedNews, setSelectedNews] = useState(null);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'admissions': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'education': return 'bg-green-100 text-green-800 border-green-200';
      case 'events': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'achievements': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'research': return 'bg-red-100 text-red-800 border-red-200';
      case 'cooperation': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (selectedNews) {
    return (
      <div className="min-h-screen bg-white">
        {/* Article Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              className="mb-6"
              onClick={() => setSelectedNews(null)}
            >
              ← Quay lại danh sách tin tức
            </Button>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedNews.date).toLocaleDateString('vi-VN')}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedNews.readTime} phút đọc
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {selectedNews.views.toLocaleString()} lượt xem
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {selectedNews.title}
              </h1>
              
              <p className="text-xl text-gray-600">
                {selectedNews.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Tác giả: {selectedNews.author}</span>
                  <Badge variant="secondary" className={getCategoryColor(selectedNews.category)}>
                    {categories.find(c => c.id === selectedNews.category)?.name}
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Chia sẻ
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {selectedNews.image && (
            <div className="mb-8">
              <ImageWithFallback
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {selectedNews.content?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          {selectedNews.tags && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedNews.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
              📰 Tin tức & Thông báo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tin tức & Thông báo
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Cập nhật những tin tức mới nhất về tuyển sinh, đào tạo, nghiên cứu 
              và các thành tựu của Khoa Công nghệ Thông tin.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Tìm kiếm tin tức, thông báo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2 h-12"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={`ml-1 ${isSelected ? 'bg-white/20 text-white' : ''}`}
                  >
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Urgent Notifications */}
        {filteredNews.some(news => news.urgent) && (
          <section className="mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Megaphone className="h-5 w-5 text-red-600 mr-2" />
                <h2 className="text-xl font-bold text-red-900">Thông báo khẩn cấp</h2>
              </div>
              <div className="space-y-4">
                {filteredNews.filter(news => news.urgent).map((news) => (
                  <Card 
                    key={news.id} 
                    className="border-red-200 hover:shadow-lg transition-shadow cursor-pointer bg-white"
                    onClick={() => setSelectedNews(news)}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{news.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{news.excerpt}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(news.date).toLocaleDateString('vi-VN')}
                            </span>
                            <span>{news.author}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured News */}
        {selectedCategory === 'all' && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tin tức nổi bật</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => {
                const CategoryIcon = getCategoryIcon(news.category);
                return (
                  <Card 
                    key={news.id} 
                    className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedNews(news)}
                  >
                    <div className="relative">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500 text-black">
                          <Star className="h-3 w-3 mr-1" />
                          Nổi bật
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getCategoryColor(news.category)} flex items-center`}>
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {categories.find(c => c.id === news.category)?.name}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(news.date).toLocaleDateString('vi-VN')}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {news.views}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{news.readTime} phút đọc</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Đọc thêm
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* All News by Category */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Tất cả tin tức' : 
               `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredNews.length} bài viết
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {filteredNews.slice(selectedCategory === 'all' ? 2 : 0).map((news) => {
              const CategoryIcon = getCategoryIcon(news.category);
              return (
                <Card 
                  key={news.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedNews(news)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`${getCategoryColor(news.category)} flex items-center`}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {categories.find(c => c.id === news.category)?.name}
                      </Badge>
                      {news.urgent && (
                        <Badge className="bg-red-500 text-white">
                          <Megaphone className="h-3 w-3 mr-1" />
                          Khẩn cấp
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(news.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                    
                    <CardTitle className="line-clamp-2 text-lg leading-tight">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {news.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {news.readTime} phút
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {news.views}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Xem thêm tin tức
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-20 bg-blue-50 rounded-xl p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Đăng ký nhận thông báo
            </h2>
            <p className="text-gray-600 mb-6">
              Nhận thông báo tuyển sinh, đào tạo và tin tức mới nhất từ Khoa CNTT qua email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Nhập email của bạn"
                className="flex-1"
              />
              <Button>
                <Phone className="h-4 w-4 mr-2" />
                Đăng ký
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Chúng tôi cam kết không spam và bảo vệ thông tin cá nhân của bạn
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
