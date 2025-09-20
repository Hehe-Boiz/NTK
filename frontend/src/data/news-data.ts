
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
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
export const categories = [
    { id: 'all', name: 'Tất cả', count: 48, icon: BookOpen },
    { id: 'admissions', name: 'Tuyển sinh', count: 12, icon: GraduationCap },
    { id: 'education', name: 'Đào tạo', count: 15, icon: BookOpen },
    { id: 'events', name: 'Sự kiện', count: 8, icon: Calendar },
    { id: 'achievements', name: 'Thành tựu', count: 6, icon: Trophy },
    { id: 'research', name: 'Nghiên cứu', count: 4, icon: Lightbulb },
    { id: 'cooperation', name: 'Hợp tác', count: 3, icon: Handshake }
  ];

export  const featuredNews = [
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

export  const regularNews = [
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