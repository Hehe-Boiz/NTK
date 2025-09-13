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
  Tag
} from 'lucide-react';
import { ImageWithFallback } from './fallback/ImageWithFallback';

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Tất cả', count: 45 },
    { id: 'events', name: 'Sự kiện', count: 12 },
    { id: 'achievements', name: 'Thành tựu', count: 8 },
    { id: 'research', name: 'Nghiên cứu', count: 15 },
    { id: 'cooperation', name: 'Hợp tác', count: 6 },
    { id: 'education', name: 'Đào tạo', count: 4 }
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
      tags: ['35 năm', 'kỷ niệm', 'thành lập', 'tương lai số'],
      image: 'https://images.unsplash.com/photo-1709377583121-576ad11b3849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuZXdzJTIwY29uZmVyZW5jZSUyMHByZXNzfGVufDF8fHx8MTc1ODE2OTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
      tags: ['ACM-ICPC', 'lập trình', 'giải nhất', 'sinh viên'],
      image: 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTgwODIwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const allNews = [
    ...featuredNews,
    {
      id: 3,
      title: 'Ký kết thỏa thuận hợp tác với 5 doanh nghiệp công nghệ hàng đầu',
      excerpt: 'Khoa CNTT mở rộng mạng lưới đối tác để tăng cường cơ hội thực tập và việc làm cho sinh viên.',
      date: '2025-03-05',
      category: 'cooperation',
      author: 'Phòng Hợp tác',
      readTime: 3,
      views: 756,
      featured: false,
      tags: ['hợp tác', 'doanh nghiệp', 'thực tập', 'việc làm']
    },
    {
      id: 4,
      title: 'Khoa CNTT ra mắt chương trình AI Engineer chuyên sâu',
      excerpt: 'Chương trình đào tạo 6 tháng với 100% giảng viên từ các công ty công nghệ hàng đầu.',
      date: '2025-02-28',
      category: 'education',
      author: 'Phòng Đào tạo',
      readTime: 4,
      views: 642,
      featured: false,
      tags: ['AI', 'đào tạo', 'chương trình mới', 'engineer']
    },
    {
      id: 5,
      title: 'Nghiên cứu về Blockchain của GS.TS Lê Văn C được xuất bản trên Nature',
      excerpt: 'Công trình nghiên cứu về ứng dụng Blockchain trong chính phủ điện tử nhận được sự quan tâm quốc tế.',
      date: '2025-02-22',
      category: 'research',
      author: 'Phòng Nghiên cứu',
      readTime: 6,
      views: 1100,
      featured: false,
      tags: ['blockchain', 'nghiên cứu', 'Nature', 'chính phủ điện tử']
    },
    {
      id: 6,
      title: 'Hội thảo quốc tế về Cybersecurity thu hút 300 chuyên gia',
      excerpt: 'Sự kiện 2 ngày với sự tham gia của các chuyên gia hàng đầu từ 15 quốc gia.',
      date: '2025-02-15',
      category: 'events',
      author: 'Ban Tổ chức',
      readTime: 3,
      views: 890,
      featured: false,
      tags: ['cybersecurity', 'hội thảo', 'quốc tế', 'chuyên gia']
    }
  ];

  const filteredNews = allNews.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [selectedNews, setSelectedNews] = useState(null);

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
                  <Badge variant="secondary">
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
              📰 Tin tức & Sự kiện
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tin tức & Sự kiện
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Cập nhật những tin tức mới nhất, các sự kiện và thành tựu nổi bật 
              của Khoa Công nghệ Thông tin.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Tìm kiếm tin tức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Tin tức nổi bật</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredNews.map((news) => (
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
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(news.date).toLocaleDateString('vi-VN')}
                    </span>
                    <Badge variant="outline">
                      {categories.find(c => c.id === news.category)?.name}
                    </Badge>
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
            ))}
          </div>
        </section>

        {/* All News */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Tất cả tin tức
              {selectedCategory !== 'all' && (
                <span className="text-blue-600">
                  {' '}• {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredNews.length} bài viết
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {filteredNews.slice(2).map((news) => (
              <Card 
                key={news.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedNews(news)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(news.date).toLocaleDateString('vi-VN')}</span>
                    <Badge variant="outline" className="ml-auto">
                      {categories.find(c => c.id === news.category)?.name}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
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
            ))}
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
              Đăng ký nhận tin tức
            </h2>
            <p className="text-gray-600 mb-6">
              Nhận tin tức mới nhất từ Khoa Công nghệ Thông tin qua email của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Nhập email của bạn"
                className="flex-1"
              />
              <Button>
                Đăng ký
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
