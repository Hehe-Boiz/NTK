import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'; // Đã sửa từ card_bak sang card
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { useTheme } from './ThemeProvider';
import { useWishes, Wish } from './WishesContext';
import {
  Palette, Settings, Save, RotateCcw, Eye, Code, Download, Upload, Monitor, Smartphone, Tablet, Globe, Users, BarChart3, Shield, Database, Cloud, History, Plus, Minus, Heart, Check, X, Clock, Trash2, Calendar, User, Info
} from 'lucide-react';
import { toast } from 'sonner';

// ============================================================================
// COMPONENT NHỎ HƠN: ColorInput (Giữ nguyên)
// ============================================================================
const ColorInput = ({ label, value, onChange }: { label: string; value: string; onChange: (color: string) => void; }) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium">{label}</Label>
    <div className="flex items-center space-x-3">
      <div
        className="w-12 h-10 rounded-lg border-2 mt-1 border-border cursor-pointer shadow-sm"
        style={{ backgroundColor: value }}
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'color';
          input.value = value;
          input.onchange = (e) => onChange((e.target as HTMLInputElement).value);
          input.click();
        }}
      />
      <Input value={value} onChange={(e) => onChange(e.target.value)} className="flex-1 font-mono text-sm" placeholder="#000000" />
    </div>
  </div>
);

// ============================================================================
// COMPONENT: WishCard (Giữ nguyên)
// ============================================================================
const WishCard = ({ wish }: { wish: Wish }) => {
  const { approveWish, rejectWish, deleteWish } = useWishes();

  const handleApprove = () => {
    approveWish(wish.id);
    toast.success(`Đã duyệt lời chúc.`);
  };

  const handleReject = () => {
    rejectWish(wish.id);
    toast.warning(`Đã từ chối/thu hồi lời chúc.`);
  };
  
  const handleApproveAgain = () => {
    approveWish(wish.id);
    toast.success(`Đã duyệt lại lời chúc.`);
  };

  const handleDelete = () => {
    if (confirm(`Bạn có chắc muốn xóa vĩnh viễn lời chúc này?`)) {
      deleteWish(wish.id);
      toast.error(`Đã xóa lời chúc.`);
    }
  };

  const cardBgClass = {
    PENDING: 'bg-yellow-50 border-yellow-200',
    APPROVED: 'bg-green-50 border-green-200',
    REJECTED: 'bg-red-50 border-red-200',
  }[wish.status];

  const badgeClass = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    APPROVED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
  }[wish.status];

  const statusText = {
    PENDING: 'Chờ duyệt',
    APPROVED: 'Đã duyệt',
    REJECTED: 'Từ chối',
  };

  const StatusIcon = {
    PENDING: <Clock className="h-3 w-3 mr-1" />,
    APPROVED: <Check className="h-3 w-3 mr-1" />,
    REJECTED: <X className="h-3 w-3 mr-1" />,
  }[wish.status];

  return (
    <Card className={`flex items-start space-x-4 p-4 ${cardBgClass}`}>
      <div className="w-2 h-full rounded-full" style={{ backgroundColor: wish.color || '#cccccc' }}></div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <User className="h-4 w-4" />
              <span className="font-medium">{wish.user?.name || 'Vô danh'}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <Calendar className="h-3 w-3" />
              <span>
                {new Intl.DateTimeFormat('vi-VN', {
                  day: '2-digit', month: '2-digit', year: 'numeric',
                  hour: '2-digit', minute: '2-digit'
                }).format(new Date(wish.createdAt || Date.now()))}
              </span>
            </div>
          </div>
          <Badge variant="secondary" className={`text-xs ${badgeClass}`}>
            {StatusIcon}
            {statusText[wish.status]}
          </Badge>
        </div>

        <p className="text-gray-800 leading-relaxed text-sm italic">"{wish.content}"</p>

        <div className="flex items-center justify-end space-x-2 pt-2 border-t mt-2">
          {wish.status === 'PENDING' && (
            <>
              <Button size="sm" variant="outline" onClick={handleApprove} className="text-green-600 border-green-200 hover:bg-green-50">
                <Check className="h-3 w-3 mr-1" /> Duyệt
              </Button>
              <Button size="sm" variant="outline" onClick={handleReject} className="text-orange-600 border-orange-200 hover:bg-orange-50">
                <X className="h-3 w-3 mr-1" /> Từ chối
              </Button>
            </>
          )}
          {wish.status === 'APPROVED' && (
            <Button size="sm" variant="outline" onClick={handleReject} className="text-orange-600 border-orange-200 hover:bg-orange-50">
              <X className="h-3 w-3 mr-1" /> Thu hồi
            </Button>
          )}
          {wish.status === 'REJECTED' && (
            <Button size="sm" variant="outline" onClick={handleApproveAgain} className="text-green-600 border-green-200 hover:bg-green-50">
              <Check className="h-3 w-3 mr-1" /> Duyệt lại
            </Button>
          )}
          <Button size="sm" variant="outline" onClick={handleDelete} className="text-red-600 border-red-200 hover:bg-red-50">
            <Trash2 className="h-3 w-3 mr-1" /> Xóa
          </Button>
        </div>
      </div>
    </Card>
  );
};

// ============================================================================
// COMPONENT: WishesManagementTab (Giữ nguyên)
// ============================================================================
const WishesManagementTab = () => {
  const { wishes, getPendingWishes, getApprovedWishes, getRejectedWishes, approveWish, rejectWish } = useWishes();
  const [wishesFilter, setWishesFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  const filteredWishes = useMemo(() => {
    switch (wishesFilter) {
      case 'pending': return getPendingWishes();
      case 'approved': return getApprovedWishes();
      case 'rejected': return getRejectedWishes();
      default: return wishes;
    }
  }, [wishesFilter, wishes, getPendingWishes, getApprovedWishes, getRejectedWishes]);

  const handleApproveAll = () => {
    const pendingWishes = getPendingWishes();
    pendingWishes.forEach(wish => approveWish(wish.id));
    toast.success(`Đã duyệt tất cả ${pendingWishes.length} lời chúc`);
  };

  const handleRejectAll = () => {
    const pendingWishes = getPendingWishes();
    if (confirm(`Bạn có chắc chắn muốn từ chối tất cả ${pendingWishes.length} lời chúc đang chờ?`)) {
      pendingWishes.forEach(wish => rejectWish(wish.id));
      toast.success(`Đã từ chối tất cả lời chúc`);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center"><Heart className="h-5 w-5 mr-2" />Quản lý Lời chúc</div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">Tổng: {wishes.length}</Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Chờ: {getPendingWishes().length}</Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Duyệt: {getApprovedWishes().length}</Badge>
            <Badge variant="secondary" className="bg-red-100 text-red-800">Từ chối: {getRejectedWishes().length}</Badge>
          </div>
        </CardTitle>
        <CardDescription>Duyệt và quản lý các lời chúc từ sinh viên, cựu sinh viên và đối tác.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-6">
          {(['pending', 'approved', 'rejected', 'all'] as const).map(filter => {
            const count = { pending: getPendingWishes().length, approved: getApprovedWishes().length, rejected: getRejectedWishes().length, all: wishes.length }[filter];
            const label = { pending: 'Chờ duyệt', approved: 'Đã duyệt', rejected: 'Từ chối', all: 'Tất cả' }[filter];
            const Icon = { pending: Clock, approved: Check, rejected: X, all: Info }[filter];
            return (
              <Button key={filter} variant={wishesFilter === filter ? 'default' : 'outline'} size="sm" onClick={() => setWishesFilter(filter)}>
                <Icon className="h-3 w-3 mr-1" />
                {label} ({count})
              </Button>
            );
          })}
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto p-1">
          {filteredWishes.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>Không có lời chúc nào trong danh mục này.</p>
            </div>
          ) : (
            filteredWishes.map((wish) => <WishCard key={wish.id} wish={wish} />)
          )}
        </div>

        {getPendingWishes().length > 0 && (
          <div className="border-t pt-4 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Thao tác nhanh với {getPendingWishes().length} lời chúc đang chờ:</span>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" onClick={handleApproveAll} className="text-green-600 border-green-200 hover:bg-green-50">
                  <Check className="h-3 w-3 mr-1" /> Duyệt tất cả
                </Button>
                <Button size="sm" variant="outline" onClick={handleRejectAll} className="text-red-600 border-red-200 hover:bg-red-50">
                  <X className="h-3 w-3 mr-1" /> Từ chối tất cả
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};


// ============================================================================
// COMPONENT CHÍNH: WhiteLabelAdminPage - ĐÃ CẬP NHẬT
// ============================================================================
export function WhiteLabelAdminPage() {
  const { theme, updateTheme, resetTheme, isCustomized } = useTheme();
  const { getPendingWishes } = useWishes();
  const [activePreview, setActivePreview] = useState('desktop');
  const [changes, setChanges] = useState<any>({});

  const handleInputChange = (field: string, value: any) => setChanges({ ...changes, [field]: value });

  const handleNestedInputChange = (parent: string, field:string, value: any) => {
    setChanges({
      ...changes,
      [parent]: {
        ...(changes[parent] || (theme as any)[parent]),
        [field]: value,
      },
    });
  };

  const handleSave = () => {
    updateTheme(changes);
    setChanges({});
    toast.success('Cấu hình đã được lưu thành công!');
  };

  const handleReset = () => {
    resetTheme();
    setChanges({});
    toast.info('Đã khôi phục cấu hình mặc định!');
  };

  const exportConfig = () => {
    const config = { ...theme, ...changes };
    const dataStr = JSON.stringify(config, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'white-label-config.json');
    linkElement.click();
    toast.success('Cấu hình đã được xuất thành công!');
  };
  
  // *** MỚI: Thêm các bộ màu có sẵn ***
  const colorPresets = [
    { name: 'Blue Corporate', primary: '#2563eb', secondary: '#f1f5f9', accent: '#e2e8f0', background: '#ffffff', text: '#111827' },
    { name: 'Green Healthcare', primary: '#059669', secondary: '#f0fdf4', accent: '#dcfce7', background: '#ffffff', text: '#111827' },
    { name: 'Purple Education', primary: '#7c3aed', secondary: '#faf5ff', accent: '#e9d5ff', background: '#ffffff', text: '#111827' },
    { name: 'Orange Creative', primary: '#ea580c', secondary: '#fff7ed', accent: '#fed7aa', background: '#ffffff', text: '#111827' },
    { name: 'Dark Mode', primary: '#60a5fa', secondary: '#1f2937', accent: '#374151', background: '#111827', text: '#f9fafb' },
  ];

  // *** MỚI: Hàm áp dụng bộ màu ***
  const applyColorPreset = (preset: typeof colorPresets[0]) => {
    const { name, ...colorValues } = preset;
    setChanges({
      ...changes,
      colors: {
        ...(changes.colors || (theme as any).colors),
        ...colorValues
      }
    });
    toast.success(`🎨 Đã áp dụng theme ${preset.name}`);
  };

  const hasChanges = Object.keys(changes).length > 0;
  // Cập nhật cách lấy theme và màu sắc để hỗ trợ cấu trúc lồng nhau
  const currentTheme = { ...theme, ...changes };
  const currentColors = { ...(theme as any).colors, ...(changes.colors || {}) };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Settings className="h-6 w-6 text-purple-600" />
              <h1 className="text-xl font-semibold">White Label Admin Panel - Kỷ niệm 35 năm</h1>
              {isCustomized && <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Đã tùy chỉnh</Badge>}
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={exportConfig}><Download className="h-4 w-4 mr-2" />Xuất</Button>
              <Button variant="outline" onClick={handleReset}><RotateCcw className="h-4 w-4 mr-2" />Khôi phục</Button>
              <Button onClick={handleSave} disabled={!hasChanges}><Save className="h-4 w-4 mr-2" />Lưu thay đổi</Button>
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
                      <span className="bg-red-500 text-white text-xs rounded-full px-1.5 min-w-[20px] h-5 flex items-center justify-center">
                        {getPendingWishes().length}
                      </span>
                    )}
                  </div>
                </TabsTrigger>
                <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
              </TabsList>
              
              {/* === MỚI: TAB BRANDING === */}
              <TabsContent value="branding" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center"><Globe className="h-5 w-5 mr-2" />Thông tin Thương hiệu</CardTitle>
                    <CardDescription>Cấu hình thông tin cơ bản về trường và khoa.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="logoText">Tên khoa</Label>
                        <Input id="logoText" value={currentTheme.logoText} onChange={(e) => handleInputChange('logoText', e.target.value)} placeholder="Khoa Công nghệ Thông tin" />
                      </div>
                      <div>
                        <Label htmlFor="universityName">Tên trường</Label>
                        <Input id="universityName" value={currentTheme.universityName} onChange={(e) => handleInputChange('universityName', e.target.value)} placeholder="Trường Đại học XYZ" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="motto">Khẩu hiệu</Label>
                      <Textarea id="motto" value={currentTheme.motto} onChange={(e) => handleInputChange('motto', e.target.value)} placeholder="35 năm đồng hành cùng sự phát triển..." rows={3} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* === MỚI: TAB DESIGN === */}
              <TabsContent value="design" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader><CardTitle className="flex items-center"><Palette className="h-5 w-5 mr-2"/>Bảng màu Tùy chỉnh</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <ColorInput label="Màu Chính (Primary)" value={currentColors.primary} onChange={(c) => handleNestedInputChange('colors', 'primary', c)} />
                      <ColorInput label="Màu Phụ (Secondary)" value={currentColors.secondary} onChange={(c) => handleNestedInputChange('colors', 'secondary', c)} />
                      <ColorInput label="Màu Nhấn (Accent)" value={currentColors.accent} onChange={(c) => handleNestedInputChange('colors', 'accent', c)} />
                      <ColorInput label="Màu Nền (Background)" value={currentColors.background} onChange={(c) => handleNestedInputChange('colors', 'background', c)} />
                      <ColorInput label="Màu Chữ (Text)" value={currentColors.text} onChange={(c) => handleNestedInputChange('colors', 'text', c)} />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader><CardTitle className="flex items-center"><Palette className="h-5 w-5 mr-2"/>Bộ màu có sẵn</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      {colorPresets.map((preset) => (
                        <div key={preset.name} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="flex -space-x-2">
                               <div className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: preset.primary }}></div>
                               <div className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: preset.secondary }}></div>
                               <div className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: preset.accent }}></div>
                               <div className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: preset.text }}></div>
                            </div>
                            <span className="text-sm font-medium">{preset.name}</span>
                          </div>
                          <Button size="sm" variant="outline" onClick={() => applyColorPreset(preset)}>Áp dụng</Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* === MỚI: TAB CONTENT === */}
              <TabsContent value="content" className="space-y-6">
                 <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center"><History className="h-5 w-5 mr-2" />Lịch sử & Cột mốc</CardTitle>
                    <CardDescription>Chỉnh sửa các mốc quan trọng trong lịch sử 35 năm phát triển.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {(currentTheme.milestones || []).map((milestone: any, index: number) => (
                        <div key={index} className="border rounded-lg p-4 bg-gray-50/50 space-y-3">
                          <div className="grid md:grid-cols-5 gap-4">
                            <div className="md:col-span-1">
                                <Label>Năm</Label>
                                <Input value={milestone.year} placeholder="2000" onChange={(e) => {
                                  const newMilestones = [...currentTheme.milestones];
                                  newMilestones[index] = { ...milestone, year: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}/>
                            </div>
                             <div className="md:col-span-4">
                                <Label>Tiêu đề</Label>
                                <Input value={milestone.title} placeholder="Sự kiện quan trọng" onChange={(e) => {
                                  const newMilestones = [...currentTheme.milestones];
                                  newMilestones[index] = { ...milestone, title: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}/>
                            </div>
                            <div className="md:col-span-5">
                                <Label>Mô tả</Label>
                                <Textarea value={milestone.description} rows={2} placeholder="Mô tả chi tiết về sự kiện..." onChange={(e) => {
                                  const newMilestones = [...currentTheme.milestones];
                                  newMilestones[index] = { ...milestone, description: e.target.value };
                                  handleInputChange('milestones', newMilestones);
                                }}/>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 hover:text-red-600" onClick={() => {
                                const newMilestones = [...currentTheme.milestones];
                                newMilestones.splice(index, 1);
                                handleInputChange('milestones', newMilestones);
                              }}>
                              <Minus className="h-4 w-4 mr-2" /> Xóa mốc này
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full" onClick={() => {
                          const newMilestone = { year: new Date().getFullYear().toString(), title: 'Sự kiện mới', description: 'Mô tả sự kiện mới' };
                          handleInputChange('milestones', [...(currentTheme.milestones || []), newMilestone]);
                        }}>
                        <Plus className="h-4 w-4 mr-2" /> Thêm mốc mới
                      </Button>
                    </div>
                  </CardContent>
                 </Card>
              </TabsContent>

              {/* === TAB WISHES (Giữ nguyên component đã tách) === */}
              <TabsContent value="wishes" className="space-y-6"><WishesManagementTab /></TabsContent>

              {/* === MỚI: TAB ADVANCED === */}
              <TabsContent value="advanced" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center"><Shield className="h-5 w-5 mr-2" />Cài đặt Nâng cao</CardTitle>
                    <CardDescription>Các tùy chọn nâng cao dành cho quản trị viên.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label>Chế độ kỷ niệm</Label>
                        <p className="text-sm text-gray-600">Bật các hiệu ứng và banner đặc biệt cho dịp lễ.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                     <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label>Tối ưu hóa SEO</Label>
                        <p className="text-sm text-gray-600">Tự động tối ưu hóa thẻ meta và các yếu tố SEO khác.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                     <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <Label>Tích hợp Analytics</Label>
                        <p className="text-sm text-gray-600">Kích hoạt theo dõi sự kiện với Google Analytics.</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

            </Tabs>
          </div>

          {/* Preview Panel (Đã cập nhật) */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center"><Eye className="h-5 w-5 mr-2" />Xem trước</span>
                  <div className="flex items-center space-x-1">
                    <Button variant={activePreview === 'desktop' ? 'default' : 'ghost'} size="icon" className="w-8 h-8" onClick={() => setActivePreview('desktop')}><Monitor className="h-4 w-4" /></Button>
                    <Button variant={activePreview === 'tablet' ? 'default' : 'ghost'} size="icon" className="w-8 h-8" onClick={() => setActivePreview('tablet')}><Tablet className="h-4 w-4" /></Button>
                    <Button variant={activePreview === 'mobile' ? 'default' : 'ghost'} size="icon" className="w-8 h-8" onClick={() => setActivePreview('mobile')}><Smartphone className="h-4 w-4" /></Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`mx-auto border-8 border-gray-800 rounded-lg overflow-hidden bg-white transition-all duration-300 shadow-lg ${
                  activePreview === 'desktop' ? 'w-full h-80' :
                  activePreview === 'tablet' ? 'w-3/4 h-96' :
                  'w-[240px] h-[480px]'
                }`}>
                   <div className="p-4 h-full relative" style={{ backgroundColor: currentColors.background, color: currentColors.text }}>
                    <div className="font-bold text-lg mb-2" style={{ color: currentColors.primary }}>{currentTheme.logoText}</div>
                    <div className="text-sm opacity-70 mb-4">{currentTheme.universityName}</div>
                    <p className="text-xs leading-relaxed italic">"{currentTheme.motto}"</p>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentColors.primary }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentColors.secondary }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: currentColors.accent }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900 flex items-center"><Info className="h-4 w-4 mr-2"/>Hướng dẫn</h4>
                  <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                    <li>Thay đổi thông tin, màu sắc để phù hợp với thương hiệu.</li>
                    <li>Cập nhật các cột mốc quan trọng trong tab "Nội dung".</li>
                    <li>Sử dụng tab "Duyệt lời chúc" để quản lý lời chúc.</li>
                    <li>Nhấn **Lưu thay đổi** sau khi hoàn tất chỉnh sửa.</li>
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