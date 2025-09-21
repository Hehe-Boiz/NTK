import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
} from 'lucide-react';
export  const contactInfo = [
    {
      type: 'Địa chỉ',
      icon: MapPin,
      details: [
        'Khoa Công nghệ Thông tin',
        'Trường Đại học XYZ',
        '123 Đường ABC, Quận 1, TP.HCM',
        'Việt Nam'
      ],
      color: 'blue'
    },
    {
      type: 'Điện thoại',
      icon: Phone,
      details: [
        'Văn phòng Khoa: (028) 1234 5678',
        'Phòng Đào tạo: (028) 1234 5679',
        'Phòng Nghiên cứu: (028) 1234 5680',
        'Hotline: 0901 234 567'
      ],
      color: 'green'
    },
    {
      type: 'Email',
      icon: Mail,
      details: [
        'cntt@university.edu.vn',
        'daotao.cntt@university.edu.vn',
        'nghiencuu.cntt@university.edu.vn',
        'tuyensinh.cntt@university.edu.vn'
      ],
      color: 'purple'
    },
    {
      type: 'Giờ làm việc',
      icon: Clock,
      details: [
        'Thứ 2 - Thứ 6: 7:30 - 17:00',
        'Thứ 7: 7:30 - 11:30',
        'Chủ nhật: Nghỉ',
        'Tư vấn online 24/7'
      ],
      color: 'orange'
    }
  ];

export  const departments = [
    {
      name: 'Văn phòng Khoa',
      head: 'GS.TS. Nguyễn Văn A',
      position: 'Trưởng khoa',
      phone: '(028) 1234 5678',
      email: 'truongkhoa.cntt@university.edu.vn',
      office: 'Phòng 301, Tòa nhà A',
      responsibilities: ['Quản lý chung', 'Chiến lược phát triển', 'Đối ngoại']
    },
    {
      name: 'Phòng Đào tạo',
      head: 'TS. Trần Thị B',
      position: 'Trưởng phòng',
      phone: '(028) 1234 5679',
      email: 'daotao.cntt@university.edu.vn',
      office: 'Phòng 302, Tòa nhà A',
      responsibilities: ['Chương trình đào tạo', 'Tuyển sinh', 'Quản lý sinh viên']
    },
    {
      name: 'Phòng Nghiên cứu',
      head: 'PGS.TS. Lê Văn C',
      position: 'Trưởng phòng',
      phone: '(028) 1234 5680',
      email: 'nghiencuu.cntt@university.edu.vn',
      office: 'Phòng 401, Tòa nhà B',
      responsibilities: ['Dự án nghiên cứu', 'Hợp tác quốc tế', 'Xuất bản khoa học']
    },
    {
      name: 'Phòng Hợp tác Doanh nghiệp',
      head: 'ThS. Phạm Thị D',
      position: 'Trưởng phòng',
      phone: '(028) 1234 5681',
      email: 'hoptac.cntt@university.edu.vn',
      office: 'Phòng 303, Tòa nhà A',
      responsibilities: ['Thực tập sinh', 'Việc làm', 'Dự án doanh nghiệp']
    }
  ];

export  const faqs = [
    {
      question: 'Làm thế nào để đăng ký tham quan Khoa?',
      answer: 'Bạn có thể đăng ký tham quan qua email hoặc điện thoại. Chúng tôi tổ chức tour tham quan vào thứ 3 và thứ 6 hàng tuần.'
    },
    {
      question: 'Khoa có những chương trình đào tạo nào?',
      answer: 'Khoa hiện có 4 chương trình cử nhân: Kỹ thuật Phần mềm, Khoa học Dữ liệu, An toàn Thông tin, và Trí tuệ Nhân tạo. Ngoài ra còn có 2 chương trình thạc sĩ.'
    },
    {
      question: 'Điều kiện xét tuyển vào Khoa như thế nào?',
      answer: 'Chúng tôi xét tuyển dựa trên điểm thi THPT Quốc gia (Toán, Lý, Hóa) hoặc điểm thi đánh giá năng lực. Điểm chuẩn thường dao động từ 24-27 điểm.'
    },
    {
      question: 'Khoa có hỗ trợ tìm việc làm cho sinh viên không?',
      answer: 'Có, chúng tôi có Phòng Hợp tác Doanh nghiệp chuyên hỗ trợ sinh viên tìm thực tập và việc làm. Tỷ lệ có việc làm của sinh viên tốt nghiệp đạt 95%.'
    },
    {
      question: 'Làm thế nào để hợp tác nghiên cứu với Khoa?',
      answer: 'Vui lòng liên hệ Phòng Nghiên cứu để thảo luận về các cơ hội hợp tác. Chúng tôi luôn mở cửa với các đối tác trong và ngoài nước.'
    }
  ];