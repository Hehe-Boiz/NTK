// src/components/Home/HistoryTimeline.tsx

import { Card, CardContent } from "../ui/card_bak";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { WishBubbles } from '../WishBubbles';
import { Building, Award, Lightbulb, TrendingUp, Target, Users, BookOpen, Calendar, Trophy, Globe, GraduationCap, Star } from "lucide-react";
import { useTheme } from "../ThemeProvider"; // Sửa: Import useTheme

export function HistoryTimeline() {
  const { theme } = useTheme(); // Sửa: Dùng useTheme() để lấy dữ liệu động từ context
  const milestones = theme.milestones; // Sửa: Lấy milestones từ theme động
  const iconMap = {
    Building: Building,
    GraduationCap: GraduationCap,
    Globe: Globe,
    Award: Award,
    Lightbulb: Lightbulb,
    TrendingUp: TrendingUp,
    Target: Target,
    Trophy: Trophy,
    Users: Users,
    BookOpen: BookOpen,
    Star: Star
  };
  return (
    <section id="lich-su" className="mb-12 full-width-component py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
       <div className="absolute inset-0 z-30 pointer-events-none">
                <WishBubbles />
              </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl lg:text-6xl text-white pt-8 from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-6">
            Hành trình 35 năm phát triển
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Những dấu mốc quan trọng đánh dấu sự phát triển và trưởng thành của Khoa CNTT
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded-full opacity-60"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full  opacity-40"></div>
          </div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              (() => {
                const IconComponent = iconMap[milestone.icon as keyof typeof iconMap];
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8}}
                    className={`relative grid lg:grid-cols-2 lg:gap-16  items-center`}
                  >
                    {/* Enhanced Timeline dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block z-20"
                    >
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center shadow-2xl`}>
                        {/* Render IconComponent đã được lấy từ map */}
                        {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div 
                      className={`${index % 2 === 0 ? 'lg:text-right  lg:pr-20' : 'lg:col-start-2 lg:pl-20'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <Card className={`
                        bg-white/10  border border-white/20 shadow-xl hover:shadow-2xl 
                         duration-500 overflow-hidden group
                      `}>
                        <div className={`h-1 bg-gradient-to-r ${milestone.color}`}></div>
                        <CardContent className="">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                              <Badge 
                                className={`
                                  text-base px-4 py-2 bg-gradient-to-r ${milestone.color} text-white border-0 shadow-lg
                                `}
                              >
                                {milestone.year}
                              </Badge>
                            </div>
                          </div>
                          
                          <h3 className={`text-xl mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${milestone.color} group-hover:bg-clip-text  duration-300`}>
                            {milestone.title}
                          </h3>
                          
                          <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200  duration-300">
                            {milestone.description}
                          </p>

                          {/* Decorative element */}
                          <div className="mt-6 flex items-center space-x-2">
                            <div className={`w-8 h-1 bg-gradient-to-r ${milestone.color} rounded-full`}></div>
                            <div className="w-2 h-1 bg-white/30 ro1unded-full"></div>
                            <div className="w-2 h-1 bg-white/20 rounded-full"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Mobile timeline indicator */}
                    <div className="lg:hidden flex items-center justify-center  space-x-4 mb-6">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg`}
                      >
                        {IconComponent && <IconComponent className="text-white text-sm" />}
                      </motion.div>
                      <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1"></div>
                    </div>
                  </motion.div>
                );
              })() // Gọi hàm IIFE ngay lập tức
            ))} 
          
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-4 bg-white/10 rounded-full px-8 py-4 border border-white/20">
            <Calendar className="h-6 w-6 text-cyan-400" />
            <span className="text-white text-lg">1989 - 2024: 35 năm không ngừng đổi mới</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}