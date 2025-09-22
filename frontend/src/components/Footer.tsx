import { MapPin, Phone, Mail, Facebook, Youtube, Linkedin } from 'lucide-react';
import {GetDefaultTheme} from "./ThemeProvider";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>{GetDefaultTheme().logoText}</p>
                  <p>{GetDefaultTheme().universityName}</p>
                  <p>{GetDefaultTheme().contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>(028) 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>cntt@university.edu.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Tuyển sinh</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Học bổng</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Thư viện</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Hợp tác quốc tế</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Cựu sinh viên</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Kỷ niệm 35 năm thành lập</h4>
              <p className="text-sm text-gray-300 text-gray-400">
                1990 - 2025: 35 năm xây dựng và phát triển, đào tạo hàng nghìn kỹ sư công nghệ thông tin chất lượng cao.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Khoa Công nghệ Thông tin - {GetDefaultTheme().universityName}. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}