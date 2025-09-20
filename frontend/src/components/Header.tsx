import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Settings, LogIn, LogOut, User } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useAuth } from './AuthContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { user, isLoggedIn, isAdmin, logout } = useAuth();

  const navigationItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'academic', label: 'Đào tạo' },
    { id: 'news', label: 'Tin tức' },
    ...(isAdmin ? [{ id: 'white-label-admin', label: 'Quản trị', icon: Settings, adminOnly: true }] : []),
    { id: 'contact', label: 'Liên hệ' },
  ];

  return (
    <header className="bg-white university-shadow sticky top-0 z-50 border-b university-border pl-20 pr-20">
      <div className="container-super-university">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">K</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold university-text-primary">
                {theme.logoText}
              </h1>
              <p className="text-sm university-text-secondary">{theme.universityName}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-4 py-2 rounded-md font-medium transition-all flex items-center space-x-2 text-sm ${
                      currentPage === item.id
                        ? 'bg-blue-900 text-white'
                        : 'university-text-primary hover:bg-blue-50'
                    } ${item.adminOnly ? 'border border-dashed border-blue-300 bg-blue-50' : ''}`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              {/* User Menu */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l university-border">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-md bg-muted">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{user?.fullName}</span>
                      {isAdmin && (
                        <span className="text-xs px-2 py-1 bg-university-accent text-white rounded-full">
                          Admin
                        </span>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={logout}
                      className="text-sm university-text-primary hover:bg-red-50 hover:text-red-600"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Đăng xuất
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onNavigate('login')}
                    className="text-sm university-text-primary hover:bg-blue-50"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Đăng nhập
                  </Button>
                )}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="university-text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t university-border bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all flex items-center space-x-3 ${
                      currentPage === item.id
                        ? 'bg-blue-900 text-white'
                        : 'university-text-primary hover:bg-blue-50'
                    } ${item.adminOnly ? 'border border-dashed border-blue-300 bg-blue-50' : ''}`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              {/* Mobile User Menu */}
              <div className="pt-4 border-t university-border space-y-2">
                {isLoggedIn ? (
                  <>
                    <div className="px-4 py-3 bg-muted rounded-md">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{user?.fullName}</span>
                        {isAdmin && (
                          <span className="text-xs px-2 py-1 bg-university-accent text-white rounded-full">
                            Admin
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 rounded-md font-medium transition-all flex items-center space-x-3 text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Đăng xuất</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      onNavigate('login');
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-md font-medium transition-all flex items-center space-x-3 university-text-primary hover:bg-blue-50"
                  >
                    <LogIn className="h-5 w-5" />
                    <span>Đăng nhập</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}