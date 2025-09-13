import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { useTheme } from './ThemeProvider';
import { useWishes } from './WishesContext';
import { 
  Palette, 
  Settings, 
  Save, 
  RotateCcw, 
  Eye, 
  Code, 
  Download,
  Upload,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Users,
  BarChart3,
  Shield,
  Database,
  Cloud,
  History,
  Plus,
  Minus,
  Heart,
  Check,
  X,
  Clock,
  Trash2,
  Calendar,
  User
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function WhiteLabelAdminPage() {
  const { theme, updateTheme, resetTheme, isCustomized } = useTheme();
  const { 
    wishes, 
    getPendingWishes, 
    getApprovedWishes, 
    getRejectedWishes,
    approveWish,
    rejectWish,
    deleteWish
  } = useWishes();
  const [activePreview, setActivePreview] = useState('desktop');
  const [changes, setChanges] = useState<any>({});
  const [wishesFilter, setWishesFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  const handleInputChange = (field: string, value: any) => {
    if (field === 'contactInfo') {
      setChanges({ 
        ...changes, 
        contactInfo: { 
          ...(changes.contactInfo || theme.contactInfo), 
          ...value 
        } 
      });
    } else {
      setChanges({ ...changes, [field]: value });
    }
  };

  const handleSave = () => {
    updateTheme(changes);
    setChanges({});
    toast.success('Cấu hình đã được lưu thành công!');
  };

  const handleReset = () => {
    resetTheme();
    setChanges({});
    toast.success('Đã khôi phục cấu hình mặc định!');
  };

  const exportConfig = () => {
    const config = { ...theme, ...changes };
    const dataStr = JSON.stringify(config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'white-label-config.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast.success('Cấu hình đã được xuất thành công!');
  };

  const colorPresets = [
    { name: 'Xanh Dương', primary: '#1e40af', secondary: '#3b82f6' },
    { name: 'Tím', primary: '#7c3aed', secondary: '#a855f7' },
    { name: 'Xanh Lá', primary: '#059669', secondary: '#10b981' },
    { name: 'Đỏ', primary: '#dc2626', secondary: '#ef4444' },
    { name: 'Cam', primary: '#ea580c', secondary: '#f97316' },
    { name: 'Hồng', primary: '#db2777', secondary: '#ec4899' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Settings className="h-6 w-6 text-purple-600" />
              <h1 className="text-xl font-semibold">White Label Admin Panel - Kỷ niệm 35 năm</h1>
              {isCustomized && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Đã tùy chỉnh
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={exportConfig}>
                <Download className="h-4 w-4 mr-2" />
                Xuất cấu hình
              </Button>
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Khôi phục
              </Button>
              <Button onClick={handleSave} disabled={Object.keys(changes).length === 0}>
                <Save className="h-4 w-4 mr-2" />
                Lưu thay đổi
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="branding" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="branding">Thương hiệu</TabsTrigger>
                <TabsTrigger value="design">Thiết kế</TabsTrigger>
                <TabsTrigger value="content">Nội dung</TabsTrigger>
                <TabsTrigger value="wishes">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-3 w-3" />
                    <span>Duyệt lời chúc</span>
                    {getPendingWishes().length > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-1 min-w-[16px] h-4 flex items-center justify-center">
                        {getPendingWishes().length}
                      </span>
                    )}
                  </div>
                </TabsTrigger>
                <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
              </TabsList>

              {/* Branding Tab */}
              <TabsContent value="branding" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Thông tin Thương hiệu
                    </CardTitle>
                    <CardDescription>
                      Cấu hình thông tin cơ bản về trường và khoa
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="logoText">Tên khoa</Label>
                        <Input
                          id="logoText"
                          value={changes.logoText || theme.logoText}
                          onChange={(e) => handleInputChange('logoText', e.target.value)}
                          placeholder="Khoa Công nghệ Thông tin"
                        />
                      </div>
                      <div>
                        <Label htmlFor="universityName">Tên trường</Label>
                        <Input
                          id="universityName"
                          value={changes.universityName || theme.universityName}
                          onChange={(e) => handleInputChange('universityName', e.target.value)}
                          placeholder="Trường Đại học XYZ"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="establishedYear">Năm thành lập</Label>
                        <Input
                          id="establishedYear"
                          value={changes.establishedYear || theme.establishedYear}
                          onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                          placeholder="1990"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Điện thoại</Label>
                        <Input
                          id="phone"
                          value={changes.contactInfo?.phone || theme.contactInfo.phone}
                          onChange={(e) => handleInputChange('contactInfo', { phone: e.target.value })}
                          placeholder="(028) 1234 5678"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="motto">Khẩu hiệu</Label>
                      <Textarea
                        id="motto"
                        value={changes.motto || theme.motto}
                        onChange={(e) => handleInputChange('motto', e.target.value)}
                        placeholder="35 năm đồng hành cùng sự phát triển..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Textarea
                        id="address"
                        value={changes.contactInfo?.address || theme.contactInfo.address}
                        onChange={(e) => handleInputChange('contactInfo', { address: e.target.value })}
                        placeholder="123 Đường ABC, Quận 1, TP.HCM"
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Design Tab */}
              <TabsContent value="design" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="h-5 w-5 mr-2" />
                      Màu sắc & Giao diện
                    </CardTitle>
                    <CardDescription>
                      Tùy chỉnh màu sắc và giao diện của website
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Color Presets */}
                    <div>
                      <Label>Bộ màu có sẵn</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {colorPresets.map((preset) => (
                          <Button
                            key={preset.name}
                            variant="outline"
                            className="h-12 justify-start"
                            onClick={() => {
                              handleInputChange('primaryColor', preset.primary);
                              handleInputChange('secondaryColor', preset.secondary);
                            }}
                          >
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.primary }}></div>
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.secondary }}></div>
                              <span>{preset.name}</span>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Custom Colors */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="primaryColor">Màu chính</Label>
                        <div className="flex space-x-2 mt-1">
                          <Input
                            id="primaryColor"
                            type="color"
                            value={changes.primaryColor || theme.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            className="w-16 h-10 p-1"
                          />
                          <Input
                            value={changes.primaryColor || theme.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            placeholder="#1e40af"
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="secondaryColor">Màu phụ</Label>
                        <div className="flex space-x-2 mt-1">
                          <Input
                            id="secondaryColor"
                            type="color"
                            value={changes.secondaryColor || theme.secondaryColor}
                            onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                            className="w-16 h-10 p-1"
                          />
                          <Input
                            value={changes.secondaryColor || theme.secondaryColor}
                            onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                            placeholder="#7c3aed"
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="backgroundColor">Màu nền</Label>
                        <div className="flex space-x-2 mt-1">
                          <Input
                            id="backgroundColor"
                            type="color"
                            value={changes.backgroundColor || theme.backgroundColor}
                            onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
                            className="w-16 h-10 p-1"
                          />
                          <Input
                            value={changes.backgroundColor || theme.backgroundColor}
                            onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
                            placeholder="#ffffff"
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="textColor">Màu chữ</Label>
                        <div className="flex space-x-2 mt-1">
                          <Input
                            id="textColor"
                            type="color"
                            value={changes.textColor || theme.textColor}
                            onChange={(e) => handleInputChange('textColor', e.target.value)}
                            className="w-16 h-10 p-1"
                          />
                          <Input
                            value={changes.textColor || theme.textColor}
                            onChange={(e) => handleInputChange('textColor', e.target.value)}
                            placeholder="#1f2937"
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content Tab */}
              <TabsContent value="content" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Nội dung Kỷ niệm 35 năm
                    </CardTitle>
                    <CardDescription>
                      Cấu hình nội dung chuyên biệt cho kỷ niệm 35 năm thành lập
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="anniversaryYear">Năm kỷ niệm</Label>
                        <Input
                          id="anniversaryYear"
                          value={changes.anniversaryYear || theme.anniversaryYear}
                          onChange={(e) => handleInputChange('anniversaryYear', e.target.value)}
                          placeholder="2025"
                        />
                      </div>
                      <div>
                        <Label htmlFor="anniversarySlogan">Slogan kỷ niệm</Label>
                        <Input
                          id="anniversarySlogan"
                          value={changes.anniversarySlogan || theme.anniversarySlogan}
                          onChange={(e) => handleInputChange('anniversarySlogan', e.target.value)}
                          placeholder="35 năm kiến tạo tương lai số"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mission">Sứ mệnh</Label>
                      <Textarea
                        id="mission"
                        value={changes.mission || theme.mission}
                        onChange={(e) => handleInputChange('mission', e.target.value)}
                        placeholder="Sứ mệnh của khoa..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="vision">Tầm nhìn</Label>
                      <Textarea
                        id="vision"
                        value={changes.vision || theme.vision}
                        onChange={(e) => handleInputChange('vision', e.target.value)}
                        placeholder="Tầm nhìn của khoa..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="coreValues">Giá trị cốt lõi</Label>
                      <Input
                        id="coreValues"
                        value={changes.coreValues || theme.coreValues}
                        onChange={(e) => handleInputChange('coreValues', e.target.value)}
                        placeholder="Chất lượng - Đổi mới - Hợp tác - Phát triển bền vững"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <History className="h-5 w-5 mr-2" />
                      Cây Lịch sử 35 năm
                    </CardTitle>
                    <CardDescription>
                      Chỉnh sửa các mốc quan trọng trong lịch sử 35 năm phát triển
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {(changes.milestones || theme.milestones).map((milestone: any, index: number) => (
                        <div key={index} className="border rounded-lg p-4 bg-gray-50">
                          <div className="grid md:grid-cols-4 gap-4">
                            <div>
                              <Label>Năm</Label>
                              <Input
                                value={milestone.year}
                                onChange={(e) => {
                                  const newMilestones = [...(changes.milestones || theme.milestones)];
                                  newMilestones[index] = { ...milestone, year: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}
                                placeholder="2000"
                              />
                            </div>
                            <div>
                              <Label>Tiêu đề</Label>
                              <Input
                                value={milestone.title}
                                onChange={(e) => {
                                  const newMilestones = [...(changes.milestones || theme.milestones)];
                                  newMilestones[index] = { ...milestone, title: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}
                                placeholder="Sự kiện quan trọng"
                              />
                            </div>
                            <div>
                              <Label>Icon</Label>
                              <select
                                className="w-full p-2 border rounded-md"
                                value={milestone.icon}
                                onChange={(e) => {
                                  const newMilestones = [...(changes.milestones || theme.milestones)];
                                  newMilestones[index] = { ...milestone, icon: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}
                              >
                                <option value="Building">🏢 Building</option>
                                <option value="GraduationCap">🎓 GraduationCap</option>
                                <option value="Globe">🌍 Globe</option>
                                <option value="Award">🏆 Award</option>
                                <option value="Lightbulb">💡 Lightbulb</option>
                                <option value="TrendingUp">📈 TrendingUp</option>
                                <option value="Target">🎯 Target</option>
                                <option value="Trophy">🏆 Trophy</option>
                                <option value="Users">👥 Users</option>
                                <option value="BookOpen">📖 BookOpen</option>
                                <option value="Star">⭐ Star</option>
                              </select>
                            </div>
                            <div className="md:col-span-4">
                              <Label>Mô tả</Label>
                              <Textarea
                                value={milestone.description}
                                onChange={(e) => {
                                  const newMilestones = [...(changes.milestones || theme.milestones)];
                                  newMilestones[index] = { ...milestone, description: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}
                                placeholder="Mô tả chi tiết về sự kiện..."
                                rows={2}
                              />
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const newMilestones = [...(changes.milestones || theme.milestones)];
                                newMilestones.splice(index, 1);
                                handleInputChange('milestones', newMilestones);
                              }}
                            >
                              <Minus className="h-4 w-4 mr-2" />
                              Xóa mốc này
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <Button
                        variant="outline"
                        onClick={() => {
                          const newMilestone = {
                            year: new Date().getFullYear().toString(),
                            title: 'Sự kiện mới',
                            description: 'Mô tả sự kiện mới',
                            icon: 'Star'
                          };
                          const newMilestones = [...(changes.milestones || theme.milestones), newMilestone];
                          handleInputChange('milestones', newMilestones);
                        }}
                        className="w-full"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Thêm mốc mới
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishes Management Tab */}
              <TabsContent value="wishes" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-2" />
                        Quản lý Lời chúc Kỷ niệm
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Tổng: {wishes.length}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                          Chờ duyệt: {getPendingWishes().length}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          Đã duyệt: {getApprovedWishes().length}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
                          Từ chối: {getRejectedWishes().length}
                        </Badge>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Duyệt và quản lý các lời chúc từ sinh viên, cựu sinh viên và đối tác
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Filter Tabs */}
                    <div className="flex space-x-2 mb-6">
                      <Button
                        variant={wishesFilter === 'pending' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setWishesFilter('pending')}
                        className="flex items-center space-x-1"
                      >
                        <Clock className="h-3 w-3" />
                        <span>Chờ duyệt ({getPendingWishes().length})</span>
                      </Button>
                      <Button
                        variant={wishesFilter === 'approved' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setWishesFilter('approved')}
                        className="flex items-center space-x-1"
                      >
                        <Check className="h-3 w-3" />
                        <span>Đã duyệt ({getApprovedWishes().length})</span>
                      </Button>
                      <Button
                        variant={wishesFilter === 'rejected' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setWishesFilter('rejected')}
                        className="flex items-center space-x-1"
                      >
                        <X className="h-3 w-3" />
                        <span>Từ chối ({getRejectedWishes().length})</span>
                      </Button>
                      <Button
                        variant={wishesFilter === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setWishesFilter('all')}
                      >
                        Tất cả ({wishes.length})
                      </Button>
                    </div>

                    {/* Wishes List */}
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {(() => {
                        let filteredWishes = wishes;
                        switch (wishesFilter) {
                          case 'pending':
                            filteredWishes = getPendingWishes();
                            break;
                          case 'approved':
                            filteredWishes = getApprovedWishes();
                            break;
                          case 'rejected':
                            filteredWishes = getRejectedWishes();
                            break;
                          default:
                            filteredWishes = wishes;
                        }

                        if (filteredWishes.length === 0) {
                          return (
                            <div className="text-center py-8 text-gray-500">
                              <Heart className="h-12 w-12 mx-auto mb-4 opacity-30" />
                              <p>Không có lời chúc nào trong danh mục này</p>
                            </div>
                          );
                        }

                        return filteredWishes.map((wish) => (
                          <div
                            key={wish.id}
                            className={`border rounded-lg p-4 space-y-3 ${
                              wish.status === 'pending' ? 'border-yellow-200 bg-yellow-50' :
                              wish.status === 'approved' ? 'border-green-200 bg-green-50' :
                              'border-red-200 bg-red-50'
                            }`}
                          >
                            {/* Status Badge */}
                            <div className="flex items-center justify-between">
                              <Badge
                                variant="secondary"
                                className={
                                  wish.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                  wish.status === 'approved' ? 'bg-green-100 text-green-800' :
                                  'bg-red-100 text-red-800'
                                }
                              >
                                {wish.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                                {wish.status === 'approved' && <Check className="h-3 w-3 mr-1" />}
                                {wish.status === 'rejected' && <X className="h-3 w-3 mr-1" />}
                                {wish.status === 'pending' ? 'Chờ duyệt' :
                                 wish.status === 'approved' ? 'Đã duyệt' : 'Từ chối'}
                              </Badge>
                              
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>
                                  {new Intl.DateTimeFormat('vi-VN', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  }).format(wish.timestamp)}
                                </span>
                              </div>
                            </div>

                            {/* Wish Content */}
                            <div className="space-y-2">
                              <p className="text-gray-800 leading-relaxed">
                                "{wish.content}"
                              </p>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <User className="h-4 w-4" />
                                <span className="font-medium">{wish.author}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-xs text-gray-500">ID: {wish.authorId}</span>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end space-x-2 pt-2 border-t">
                              {wish.status === 'pending' && (
                                <>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      approveWish(wish.id);
                                      toast.success(`Đã duyệt lời chúc của ${wish.author}`);
                                    }}
                                    className="text-green-600 border-green-200 hover:bg-green-50"
                                  >
                                    <Check className="h-3 w-3 mr-1" />
                                    Duyệt
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      rejectWish(wish.id);
                                      toast.success(`Đã từ chối lời chúc của ${wish.author}`);
                                    }}
                                    className="text-red-600 border-red-200 hover:bg-red-50"
                                  >
                                    <X className="h-3 w-3 mr-1" />
                                    Từ chối
                                  </Button>
                                </>
                              )}
                              
                              {wish.status === 'approved' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    rejectWish(wish.id);
                                    toast.success(`Đã chuyển lời chúc của ${wish.author} sang trạng thái từ chối`);
                                  }}
                                  className="text-red-600 border-red-200 hover:bg-red-50"
                                >
                                  <X className="h-3 w-3 mr-1" />
                                  Thu hồi
                                </Button>
                              )}
                              
                              {wish.status === 'rejected' && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    approveWish(wish.id);
                                    toast.success(`Đã duyệt lại lời chúc của ${wish.author}`);
                                  }}
                                  className="text-green-600 border-green-200 hover:bg-green-50"
                                >
                                  <Check className="h-3 w-3 mr-1" />
                                  Duyệt lại
                                </Button>
                              )}
                              
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  if (confirm(`Bạn có chắc chắn muốn xóa vĩnh viễn lời chúc của ${wish.author}?`)) {
                                    deleteWish(wish.id);
                                    toast.success(`Đã xóa lời chúc của ${wish.author}`);
                                  }
                                }}
                                className="text-gray-600 border-gray-200 hover:bg-gray-50"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Xóa
                              </Button>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>

                    {/* Quick Actions */}
                    {getPendingWishes().length > 0 && (
                      <div className="border-t pt-4 mt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            Thao tác nhanh với {getPendingWishes().length} lời chúc đang chờ:
                          </span>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                getPendingWishes().forEach(wish => approveWish(wish.id));
                                toast.success(`Đã duyệt tất cả ${getPendingWishes().length} lời chúc`);
                              }}
                              className="text-green-600 border-green-200 hover:bg-green-50"
                            >
                              <Check className="h-3 w-3 mr-1" />
                              Duyệt tất cả
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                if (confirm(`Bạn có chắc chắn muốn từ chối tất cả ${getPendingWishes().length} lời chúc đang chờ?`)) {
                                  getPendingWishes().forEach(wish => rejectWish(wish.id));
                                  toast.success(`Đã từ chối tất cả lời chúc`);
                                }
                              }}
                              className="text-red-600 border-red-200 hover:bg-red-50"
                            >
                              <X className="h-3 w-3 mr-1" />
                              Từ chối tất cả
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Advanced Tab */}
              <TabsContent value="advanced" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Cài đặt Nâng cao
                    </CardTitle>
                    <CardDescription>
                      Các tùy chọn nâng cao cho chuyên gia
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Analytics Integration</Label>
                          <p className="text-sm text-gray-600">Kích hoạt Google Analytics</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>SEO Optimization</Label>
                          <p className="text-sm text-gray-600">Tối ưu hóa SEO tự động</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Performance Monitoring</Label>
                          <p className="text-sm text-gray-600">Giám sát hiệu suất website</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Anniversary Mode</Label>
                          <p className="text-sm text-gray-600">Kích hoạt chế độ kỷ niệm đặc biệt</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Xem trước
                  </span>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant={activePreview === 'desktop' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setActivePreview('desktop')}
                    >
                      <Monitor className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={activePreview === 'tablet' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setActivePreview('tablet')}
                    >
                      <Tablet className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={activePreview === 'mobile' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setActivePreview('mobile')}
                    >
                      <Smartphone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`border rounded-lg overflow-hidden bg-white ${
                  activePreview === 'desktop' ? 'w-full h-64' :
                  activePreview === 'tablet' ? 'w-3/4 h-48 mx-auto' :
                  'w-1/2 h-40 mx-auto'
                }`}>
                  <div 
                    className="p-4 h-full"
                    style={{
                      backgroundColor: changes.backgroundColor || theme.backgroundColor,
                      color: changes.textColor || theme.textColor
                    }}
                  >
                    <div 
                      className="font-bold mb-2"
                      style={{ color: changes.primaryColor || theme.primaryColor }}
                    >
                      {changes.logoText || theme.logoText}
                    </div>
                    <div className="text-sm opacity-70 mb-3">
                      {changes.universityName || theme.universityName}
                    </div>
                    <div className="text-xs leading-relaxed">
                      {changes.motto || theme.motto}
                    </div>
                    <div 
                      className="absolute bottom-2 right-2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: changes.secondaryColor || theme.secondaryColor }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">💡 Hướng dẫn</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Thay đổi màu sắc để phù hợp với thương hiệu</li>
                    <li>• Cập nhật nội dung trong tab "Nội dung"</li>
                    <li>• Chỉnh sửa lịch sử 35 năm phát triển</li>
                    <li>• Nhớ nhấn "Lưu thay đổi" sau khi chỉnh sửa</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}