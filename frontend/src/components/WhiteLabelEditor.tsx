import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { 
  Settings, 
  Palette, 
  Globe, 
  FileText, 
  Eye, 
  Save, 
  Download, 
  Upload, 
  RefreshCw,
  Check,
  X,
  Info
} from 'lucide-react';
import { useAdminConfigContext } from '../contexts/AdminConfigContext';
import { toast } from 'sonner';

export function WhiteLabelEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  const [previewMode, setPreviewMode] = useState(false);
  const [localChanges, setLocalChanges] = useState({});
  
  const {
    config,
    isDirty,
    updateConfig,
    updateNestedConfig,
    saveConfig,
    resetConfig,
    exportConfig,
    applyThemeChanges,
  } = useAdminConfigContext();

  // Handle save with confirmation
  const handleSave = async () => {
    const success = await saveConfig();
    if (success) {
      toast.success('✅ Cấu hình đã được lưu thành công!');
      setLocalChanges({});
    } else {
      toast.error('❌ Có lỗi xảy ra khi lưu cấu hình!');
    }
  };

  // Handle reset with confirmation
  const handleReset = () => {
    resetConfig();
    setLocalChanges({});
    toast.info('🔄 Đã reset về cấu hình mặc định');
  };

  // Quick color presets
  const colorPresets = [
    { name: 'Blue Corporate', primary: '#2563eb', secondary: '#f1f5f9', accent: '#e2e8f0' },
    { name: 'Green Healthcare', primary: '#059669', secondary: '#f0fdf4', accent: '#dcfce7' },
    { name: 'Purple Education', primary: '#7c3aed', secondary: '#faf5ff', accent: '#e9d5ff' },
    { name: 'Orange Creative', primary: '#ea580c', secondary: '#fff7ed', accent: '#fed7aa' },
    { name: 'Red Finance', primary: '#dc2626', secondary: '#fef2f2', accent: '#fecaca' },
  ];

  // Apply color preset
  const applyColorPreset = (preset: typeof colorPresets[0]) => {
    updateNestedConfig('theme', ['colors', 'primary'], preset.primary);
    updateNestedConfig('theme', ['colors', 'secondary'], preset.secondary);
    updateNestedConfig('theme', ['colors', 'accent'], preset.accent);
    if (previewMode) applyThemeChanges();
    toast.success(`🎨 Đã áp dụng theme ${preset.name}`);
  };

  // Toggle preview mode
  const togglePreview = (enabled: boolean) => {
    setPreviewMode(enabled);
    if (enabled) {
      applyThemeChanges();
      toast.info('👁️ Live Preview đã bật');
    } else {
      toast.info('👁️ Live Preview đã tắt');
    }
  };

  const ColorInput = ({ 
    label, 
    value, 
    onChange, 
    description 
  }: { 
    label: string; 
    value: string; 
    onChange: (color: string) => void;
    description?: string;
  }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{label}</Label>
        {description && (
          <div className="group relative">
            <Info className="h-3 w-3 text-muted-foreground cursor-help" />
            <div className="absolute right-0 top-5 hidden group-hover:block bg-popover text-popover-foreground p-2 rounded text-xs w-48 border z-10">
              {description}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <div 
          className="w-10 h-10 rounded-lg border-2 border-border cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: value }}
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'color';
            input.value = value;
            input.onchange = (e) => {
              const newColor = (e.target as HTMLInputElement).value;
              onChange(newColor);
              if (previewMode) applyThemeChanges();
            };
            input.click();
          }}
        />
        <Input 
          value={value} 
          onChange={(e) => {
            onChange(e.target.value);
            if (previewMode) applyThemeChanges();
          }}
          className="flex-1 font-mono text-sm"
          placeholder="#000000"
        />
      </div>
    </div>
  );

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          onClick={() => setIsOpen(true)}
        >
          <Settings className="h-5 w-5 mr-2" />
          Chỉnh Sửa Website
          {isDirty && <Badge variant="destructive" className="ml-2 text-xs">•</Badge>}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <CardHeader className="pb-2 border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">White Label Editor</CardTitle>
                <p className="text-sm text-muted-foreground">Tùy chỉnh website của bạn</p>
              </div>
              <Badge variant="secondary">v2.0</Badge>
            </div>
            
            <div className="flex items-center space-x-2">
              {isDirty && (
                <Badge variant="destructive" className="animate-pulse">
                  Có thay đổi chưa lưu
                </Badge>
              )}
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={previewMode} 
                  onCheckedChange={togglePreview}
                  id="preview-mode"
                />
                <Label htmlFor="preview-mode" className="text-sm">
                  Live Preview
                </Label>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RefreshCw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={exportConfig}>
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button 
                size="sm" 
                onClick={handleSave}
                disabled={!isDirty}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <Save className="h-4 w-4 mr-1" />
                Lưu Thay Đổi
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-0 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
            <TabsList className="w-full justify-start border-b bg-transparent h-12 rounded-none p-1">
              <TabsTrigger value="basic" className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Thông Tin Cơ Bản</span>
              </TabsTrigger>
              <TabsTrigger value="branding" className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span>Màu Sắc & Logo</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Nội Dung</span>
              </TabsTrigger>
            </TabsList>

            {/* Basic Information Tab */}
            <TabsContent value="basic" className="mt-0 overflow-y-auto h-[calc(90vh-12rem)] p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Organization Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Thông Tin Tổ Chức</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Tên Tổ Chức</Label>
                      <Input 
                        value={config.site.organization.name}
                        onChange={(e) => updateNestedConfig('site', ['organization', 'name'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Tên Viết Tắt</Label>
                      <Input 
                        value={config.site.organization.shortName}
                        onChange={(e) => updateNestedConfig('site', ['organization', 'shortName'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Năm Thành Lập</Label>
                        <Input 
                          type="number"
                          value={config.site.organization.establishedYear}
                          onChange={(e) => updateNestedConfig('site', ['organization', 'establishedYear'], parseInt(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Số Năm Kỷ Niệm</Label>
                        <Input 
                          type="number"
                          value={config.site.organization.anniversary}
                          onChange={(e) => updateNestedConfig('site', ['organization', 'anniversary'], parseInt(e.target.value))}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Thông Tin Liên Hệ</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Địa Chỉ</Label>
                      <Textarea 
                        value={config.site.contact.address}
                        onChange={(e) => updateNestedConfig('site', ['contact', 'address'], e.target.value)}
                        rows={2}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Số Điện Thoại</Label>
                      <Input 
                        value={config.site.contact.phone}
                        onChange={(e) => updateNestedConfig('site', ['contact', 'phone'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input 
                        type="email"
                        value={config.site.contact.email}
                        onChange={(e) => updateNestedConfig('site', ['contact', 'email'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Website</Label>
                      <Input 
                        value={config.site.contact.website}
                        onChange={(e) => updateNestedConfig('site', ['contact', 'website'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* SEO Settings */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>SEO & Meta Tags</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <Label>Tiêu Đề Website</Label>
                      <Input 
                        value={config.site.seo.defaultTitle}
                        onChange={(e) => updateNestedConfig('site', ['seo', 'defaultTitle'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>URL Website</Label>
                      <Input 
                        value={config.site.url}
                        onChange={(e) => updateConfig('site', { ...config.site, url: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <Label>Mô Tả Meta</Label>
                      <Textarea 
                        value={config.site.seo.description}
                        onChange={(e) => updateNestedConfig('site', ['seo', 'description'], e.target.value)}
                        rows={2}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Branding Tab */}
            <TabsContent value="branding" className="mt-0 overflow-y-auto h-[calc(90vh-12rem)] p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Color Palette */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Bảng Màu</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ColorInput 
                      label="Màu Chính (Primary)"
                      value={config.theme.colors.primary}
                      onChange={(color) => updateNestedConfig('theme', ['colors', 'primary'], color)}
                      description="Màu chính được sử dụng cho các button, link và elements quan trọng"
                    />
                    <ColorInput 
                      label="Màu Phụ (Secondary)"
                      value={config.theme.colors.secondary}
                      onChange={(color) => updateNestedConfig('theme', ['colors', 'secondary'], color)}
                      description="Màu phụ cho background sections và subtle elements"
                    />
                    <ColorInput 
                      label="Màu Nhấn (Accent)"
                      value={config.theme.colors.accent}
                      onChange={(color) => updateNestedConfig('theme', ['colors', 'accent'], color)}
                      description="Màu nhấn cho hover effects và highlights"
                    />
                    <ColorInput 
                      label="Màu Nền (Background)"
                      value={config.theme.colors.background}
                      onChange={(color) => updateNestedConfig('theme', ['colors', 'background'], color)}
                      description="Màu nền chính của website"
                    />
                  </CardContent>
                </Card>

                {/* Color Presets */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Bộ Màu Có Sẵn</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {colorPresets.map((preset, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.primary }}></div>
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.secondary }}></div>
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: preset.accent }}></div>
                          </div>
                          <span className="text-sm font-medium">{preset.name}</span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => applyColorPreset(preset)}
                          className="text-xs"
                        >
                          Áp Dụng
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Typography */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span>Font Chữ</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Font Chính</Label>
                      <Input 
                        value={config.theme.typography.fontFamily.primary}
                        onChange={(e) => updateNestedConfig('theme', ['typography', 'fontFamily', 'primary'], e.target.value)}
                        className="mt-1 font-mono text-sm"
                        placeholder="Inter, system-ui, sans-serif"
                      />
                    </div>
                    <div>
                      <Label>Font Tiêu Đề</Label>
                      <Input 
                        value={config.theme.typography.fontFamily.heading}
                        onChange={(e) => updateNestedConfig('theme', ['typography', 'fontFamily', 'heading'], e.target.value)}
                        className="mt-1 font-mono text-sm"
                        placeholder="Inter, system-ui, sans-serif"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Logo Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Logo</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="logo-text"
                          checked={config.theme.logo.type === 'text'}
                          onChange={() => updateNestedConfig('theme', ['logo', 'type'], 'text')}
                        />
                        <Label htmlFor="logo-text">Text Logo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="logo-image"
                          checked={config.theme.logo.type === 'image'}
                          onChange={() => updateNestedConfig('theme', ['logo', 'type'], 'image')}
                        />
                        <Label htmlFor="logo-image">Image Logo</Label>
                      </div>
                    </div>

                    {config.theme.logo.type === 'text' ? (
                      <div>
                        <Label>Text Logo</Label>
                        <Input 
                          value={config.theme.logo.text}
                          onChange={(e) => updateNestedConfig('theme', ['logo', 'text'], e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    ) : (
                      <div>
                        <Label>Logo URL</Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <Input 
                            placeholder="https://example.com/logo.png"
                            onChange={(e) => updateNestedConfig('theme', ['logo', 'src'], e.target.value)}
                          />
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="mt-0 overflow-y-auto h-[calc(90vh-12rem)] p-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Hero Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Hero Section - Khu Vực Chính</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label>Tiền Tố</Label>
                        <Input 
                          value={config.hero.title.prefix}
                          onChange={(e) => updateNestedConfig('hero', ['title', 'prefix'], e.target.value)}
                          className="mt-1"
                          placeholder="Kỷ Niệm"
                        />
                      </div>
                      <div>
                        <Label>Số Năm (Nổi Bật)</Label>
                        <Input 
                          value={config.hero.title.highlight}
                          onChange={(e) => updateNestedConfig('hero', ['title', 'highlight'], e.target.value)}
                          className="mt-1"
                          placeholder="35 Năm"
                        />
                      </div>
                      <div>
                        <Label>Hậu Tố</Label>
                        <Input 
                          value={config.hero.title.suffix}
                          onChange={(e) => updateNestedConfig('hero', ['title', 'suffix'], e.target.value)}
                          className="mt-1"
                          placeholder="Thành Lập"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Tên Tổ Chức</Label>
                      <Input 
                        value={config.hero.title.subtitle}
                        onChange={(e) => updateNestedConfig('hero', ['title', 'subtitle'], e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Mô Tả Chính</Label>
                      <Textarea 
                        value={config.hero.description}
                        onChange={(e) => updateNestedConfig('hero', ['description'], e.target.value)}
                        rows={3}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action Buttons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span>Nút Hành Động (CTA)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-muted-foreground">Button Chính</h4>
                      <div>
                        <Label>Text Button</Label>
                        <Input 
                          value={config.hero.cta.primary.text}
                          onChange={(e) => updateNestedConfig('hero', ['cta', 'primary', 'text'], e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Link Button</Label>
                        <Input 
                          value={config.hero.cta.primary.href}
                          onChange={(e) => updateNestedConfig('hero', ['cta', 'primary', 'href'], e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-muted-foreground">Button Phụ</h4>
                      <div>
                        <Label>Text Button</Label>
                        <Input 
                          value={config.hero.cta.secondary.text}
                          onChange={(e) => updateNestedConfig('hero', ['cta', 'secondary', 'text'], e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label>Link Button</Label>
                        <Input 
                          value={config.hero.cta.secondary.href}
                          onChange={(e) => updateNestedConfig('hero', ['cta', 'secondary', 'href'], e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}