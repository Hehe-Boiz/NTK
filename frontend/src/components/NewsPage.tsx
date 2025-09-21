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
import { ImageWithFallback } from './figma/ImageWithFallback';
import { categories, featuredNews, regularNews } from '../data/news-data';


export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  

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
      default: return 'bg-amber-50 text-amber-800 border-yellow-200';
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
                  variant={isSelected ? 'default' : 'ghost'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group-hover:bg-blue flex items-center space-x-2 h-12 ${isSelected ?"bg-blue-900" : getCategoryColor(category.id)}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={`ml-1 ${isSelected ? 'bg-white/20 text-white' : 'bg-white/20 text'}`}
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