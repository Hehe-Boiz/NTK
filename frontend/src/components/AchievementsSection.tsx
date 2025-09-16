import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Trophy, Award, Star, Medal, Crown, Target, TrendingUp, Users, CheckCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function AchievementsSection() {
  const [counters, setCounters] = useState({
    graduates: 0,
    employment: 0,
    teachers: 0,
    partners: 0,
    projects: 0,
    experience: 0
  });

  // Counter animation effect
  useEffect(() => {
    const targets = {
      graduates: 15000,
      employment: 98,
      teachers: 120,
      partners: 200,
      projects: 50,
      experience: 35
    };

    const duration = 2500;
    const steps = 80;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        graduates: Math.round(targets.graduates * progress),
        employment: Math.round(targets.employment * progress),
        teachers: Math.round(targets.teachers * progress),
        partners: Math.round(targets.partners * progress),
        projects: Math.round(targets.projects * progress),
        experience: Math.round(targets.experience * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Top 5 Khoa CNTT Hàng Đầu",
      description: "Được xếp hạng trong top 5 khoa CNTT tốt nhất cả nước bởi Bộ Giáo dục và Đào tạo",
      year: "2023",
      category: "Xếp hạng",
      featured: true
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Chứng Nhận AUN-QA",
      description: "Đạt chứng nhận chất lượng AUN-QA quốc tế cho chương trình đào tạo CNTT",
      year: "2022",
      category: "Chất lượng"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "150+ Công Trình Nghiên Cứu",
      description: "Xuất bản hơn 150 công trình nghiên cứu trên các tạp chí khoa học quốc tế uy tín",
      year: "2024",
      category: "Nghiên cứu"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Giải Thưởng Sáng Tạo",
      description: "Đạt giải nhất cuộc thi sáng tạo công nghệ sinh viên toàn quốc 3 năm liên tiếp",
      year: "2021-2023",
      category: "Sáng tạo"
    }
  ];

  const stats = [
    { 
      number: counters.graduates.toLocaleString() + "+", 
      label: "Sinh viên tốt nghiệp", 
      icon: <Users className="h-6 w-6" />
    },
    { 
      number: counters.employment + "%", 
      label: "Tỷ lệ có việc làm", 
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      number: counters.teachers + "+", 
      label: "Giảng viên", 
      icon: <Target className="h-6 w-6" />
    },
    { 
      number: counters.partners + "+", 
      label: "Doanh nghiệp đối tác", 
      icon: <CheckCircle className="h-6 w-6" />
    },
    { 
      number: counters.projects + "+", 
      label: "Dự án nghiên cứu", 
      icon: <Award className="h-6 w-6" />
    },
    { 
      number: counters.experience, 
      label: "Năm kinh nghiệm", 
      icon: <Medal className="h-6 w-6" />
    }
  ];

  const milestones = [
    { year: "1989", event: "Thành lập khoa CNTT với 50 sinh viên đầu tiên" },
    { year: "1995", event: "Mở rộng chương trình đào tạo, đạt 500 sinh viên" },
    { year: "2005", event: "Đạt chuẩn kiểm định chất lượng giáo dục quốc gia" },
    { year: "2015", event: "Thành lập trung tâm nghiên cứu AI và IoT" },
    { year: "2020", event: "Chuyển đổi số toàn diện trong giảng dạy" },
    { year: "2024", event: "Trở thành khoa CNTT hàng đầu khu vực" }
  ];

  return (
    <section id="thanh-tuu" className="py-16 lg:py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary mb-4">
            <Trophy className="h-4 w-4" />
            <span className="text-sm">35 Năm Đồng Hành & Phát Triển</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Thành Tựu <span className="text-primary">Nổi Bật</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Những cột mốc đáng tự hào trong hành trình 35 năm xây dựng và phát triển 
            khoa CNTT hàng đầu cả nước
          </p>
        </motion.div>

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Card className="h-full border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {achievement.icon}
                    </div>
                    {achievement.featured && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-primary-foreground fill-current" />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg text-foreground leading-tight">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 lg:p-12 shadow-sm border mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl text-foreground mb-4">
              Khoa CNTT Trong <span className="text-primary">Số Liệu</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những con số ấn tượng khẳng định vị thế và sự phát triển vượt bậc
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-secondary/10 rounded-2xl p-6 group-hover:bg-secondary/20 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {stat.icon}
                  </div>
                  <motion.p 
                    className="text-3xl lg:text-4xl text-foreground mb-2"
                    key={stat.number}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}