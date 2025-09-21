import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card_bak';
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
// COMPONENT MỚI: WishCard - Hiển thị một lời chúc
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
    PENDING: 'bg-yellow-50',
    APPROVED: 'bg-green-50',
    REJECTED: 'bg-red-50',
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
      <div className="w-2 h-full rounded-full" style={{ backgroundColor: wish.color }}></div>
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
          <Badge variant="secondary" className={badgeClass}>
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
// COMPONENT MỚI: WishesManagementTab - Toàn bộ logic cho tab duyệt lời chúc
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
        <CardDescription>Duyệt và quản lý các lời chúc từ cộng đồng.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-6">
          {(['pending', 'approved', 'rejected', 'all'] as const).map(filter => {
            const count = { pending: getPendingWishes().length, approved: getApprovedWishes().length, rejected: getRejectedWishes().length, all: wishes.length }[filter];
            const label = { pending: 'Chờ duyệt', approved: 'Đã duyệt', rejected: 'Từ chối', all: 'Tất cả' }[filter];
            const Icon = { pending: Clock, approved: Check, rejected: X, all: null }[filter];
            return (
              <Button key={filter} variant={wishesFilter === filter ? 'default' : 'outline'} size="sm" onClick={() => setWishesFilter(filter)}>
                {Icon && <Icon className="h-3 w-3 mr-1" />}
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
// COMPONENT CHÍNH: WhiteLabelAdminPage - Đã được dọn dẹp
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

  const currentTheme = { ...theme, ...changes };
  const hasChanges = Object.keys(changes).length > 0;

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
            <Tabs defaultValue="wishes" className="w-full">
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
              
              {/* CÁC COMPONENT TAB ĐƯỢC RENDER Ở ĐÂY */}
              <TabsContent value="branding"> {/* Nội dung tab Branding */} </TabsContent>
              <TabsContent value="design"> {/* Nội dung tab Design */} </TabsContent>
              <TabsContent value="content"> {/* Nội dung tab Content */} </TabsContent>
              <TabsContent value="wishes" className="space-y-6"><WishesManagementTab /></TabsContent>
              <TabsContent value="advanced"> {/* Nội dung tab Advanced */} </TabsContent>

            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center"><Eye className="h-5 w-5 mr-2" />Xem trước</span>
                  <div className="flex items-center space-x-1">
                    <Button variant={activePreview === 'desktop' ? 'default' : 'ghost'} size="sm" onClick={() => setActivePreview('desktop')}><Monitor className="h-4 w-4" /></Button>
                    <Button variant={activePreview === 'tablet' ? 'default' : 'ghost'} size="sm" onClick={() => setActivePreview('tablet')}><Tablet className="h-4 w-4" /></Button>
                    <Button variant={activePreview === 'mobile' ? 'default' : 'ghost'} size="sm" onClick={() => setActivePreview('mobile')}><Smartphone className="h-4 w-4" /></Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`border rounded-lg overflow-hidden bg-white transition-all duration-300 ${
                  activePreview === 'desktop' ? 'w-full h-64' :
                  activePreview === 'tablet' ? 'w-3/4 h-48 mx-auto' :
                  'w-1/2 h-40 mx-auto'
                }`}>
                   <div className="p-4 h-full relative" style={{ backgroundColor: currentTheme.backgroundColor }}>
                    <div className="font-bold mb-2" style={{ color: currentTheme.primaryColor }}>{currentTheme.logoText}</div>
                    <div className="text-sm opacity-70 mb-3">{currentTheme.universityName}</div>
                    <div className="text-xs leading-relaxed">{currentTheme.motto}</div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full" style={{ backgroundColor: currentTheme.secondaryColor }}></div>
                    <div className="absolute bottom-2 right-8 w-4 h-4 rounded-lg" style={{ backgroundColor: currentTheme.textColor }}></div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-900">💡 Hướng dẫn</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Thay đổi các thông số trong các tab để tùy chỉnh website.</li>
                    <li>• Sử dụng tab "Duyệt lời chúc" để quản lý lời chúc của người dùng.</li>
                    <li>• Nhớ nhấn "Lưu thay đổi" sau khi hoàn tất chỉnh sửa.</li>
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