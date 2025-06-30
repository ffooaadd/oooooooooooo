import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  Home,
  BookOpen,
  Users,
  GraduationCap,
  Crown,
  Sparkles,
  Star,
  Trophy,
  Zap,
  Award,
} from "lucide-react";

const Level = () => {
  const { levelId } = useParams();

  const levelData = {
    elementary: {
      title: "المرحلة الابتدائية",
      description: "أساس التعليم المتين - بناء الشخصية العلمية المتميزة",
      icon: BookOpen,
      gradient: "from-red-500 via-red-600 to-orange-600",
      glowColor: "rgba(220, 38, 38, 0.4)",
      accent: "🌟",
      grades: [
        {
          id: "grade-1",
          name: "الأول الابتدائي",
          subjects: 8,
          description: "بداية الرحلة التعليمية",
          icon: "🎯",
        },
        {
          id: "grade-2",
          name: "الثاني الابتدائي",
          subjects: 9,
          description: "ترسيخ الأسس العلمية",
          icon: "📚",
        },
        {
          id: "grade-3",
          name: "الثالث الابتدائي",
          subjects: 10,
          description: "توسيع المدارك المعرفية",
          icon: "🔬",
        },
        {
          id: "grade-4",
          name: "الرابع الابتدائي",
          subjects: 11,
          description: "تطوير المهارات المتقدمة",
          icon: "⚡",
        },
        {
          id: "grade-5",
          name: "الخامس الابتدائي",
          subjects: 12,
          description: "صقل القدرات التحليلية",
          icon: "🎨",
        },
        {
          id: "grade-6",
          name: "السادس الابتدائي",
          subjects: 13,
          description: "الإعداد للمرحلة التالية",
          icon: "🏆",
        },
      ],
    },
    middle: {
      title: "المرحلة المتوسطة",
      description: "بوابة التخصص - إعداد الطلاب للمرحلة الإعدادية بامتياز",
      icon: Users,
      gradient: "from-red-600 via-red-700 to-red-800",
      glowColor: "rgba(185, 28, 28, 0.4)",
      accent: "⚡",
      grades: [
        {
          id: "grade-7",
          name: "الأول المتوسط",
          subjects: 14,
          description: "انطلاقة نحو التخصص",
          icon: "🚀",
        },
        {
          id: "grade-8",
          name: "الثاني المتوسط",
          subjects: 15,
          description: "تعميق المفاهيم العلمية",
          icon: "💎",
        },
        {
          id: "grade-9",
          name: "الثالث المتوسط",
          subjects: 16,
          description: "التأهيل للإعدادية",
          icon: "👑",
        },
      ],
    },
    preparatory: {
      title: "المرحلة الإعدادية",
      description: "قمة التحصيل العلمي - الإعداد المتميز للجامعة والمستقبل",
      icon: GraduationCap,
      gradient: "from-red-700 via-red-800 to-red-900",
      glowColor: "rgba(153, 27, 27, 0.4)",
      accent: "👑",
      grades: [
        {
          id: "grade-10-science",
          name: "الرابع العلمي",
          subjects: 12,
          description: "التخصص العلمي المتقدم",
          icon: "🔬",
        },
        {
          id: "grade-10-literary",
          name: "الرابع الأدبي",
          subjects: 10,
          description: "التخصص الأدبي المتميز",
          icon: "📖",
        },
        {
          id: "grade-11-science",
          name: "الخامس العلمي",
          subjects: 12,
          description: "تعميق العلوم والرياضيات",
          icon: "🧪",
        },
        {
          id: "grade-11-literary",
          name: "الخامس الأدبي",
          subjects: 10,
          description: "إتقان الآداب والعلوم الإنسانية",
          icon: "✍️",
        },
        {
          id: "grade-12-science",
          name: "السادس العلمي",
          subjects: 12,
          description: "البوابة للتخصصات العلمية",
          icon: "🎓",
        },
        {
          id: "grade-12-literary",
          name: "السادس الأدبي",
          subjects: 10,
          description: "البوابة للتخصصات الأدبية",
          icon: "🌟",
        },
      ],
    },
  };

  const currentLevel = levelData[levelId as keyof typeof levelData];

  if (!currentLevel) {
    return (
      <div className="min-h-screen animated-gradient flex items-center justify-center">
        <motion.div
          className="text-center luxury-card rounded-4xl p-16 glow-intense"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Crown className="w-20 h-20 text-primary mx-auto mb-8" />
          <h1 className="text-5xl font-black text-gradient mb-6">
            المرحلة غير موجودة
          </h1>
          <Link
            to="/study-booklets"
            className="luxury-button px-8 py-4 rounded-2xl font-bold text-white"
          >
            العودة إلى الملازم الدراسية
          </Link>
        </motion.div>
      </div>
    );
  }

  const IconComponent = currentLevel.icon;

  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, 360],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-4 h-4 rounded-full blur-sm"
              style={{ backgroundColor: currentLevel.glowColor }}
            />
          </motion.div>
        ))}

        {/* Beautiful decorative elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`grade-decoration-${i}`}
            className="absolute text-red-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 16}px`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            {i % 4 === 0
              ? "📖"
              : i % 4 === 1
                ? "✨"
                : i % 4 === 2
                  ? "🎯"
                  : "💫"}
          </motion.div>
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 geometric-pattern opacity-15"></div>

      {/* Enhanced Header */}
      <motion.header
        className="relative z-20 p-8 border-b border-border/30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-3 space-x-reverse"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="w-8 h-8 text-primary" />
              <div className="text-3xl font-black text-gradient">
                ملازمي الأفضل
              </div>
              <Sparkles className="w-6 h-6 text-accent animate-luxury-pulse" />
            </motion.div>
          </Link>

          {/* Enhanced Breadcrumb */}
          <motion.div
            className="flex items-center space-x-3 space-x-reverse glass-effect-intense px-6 py-3 rounded-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
            </Link>
            <ChevronRight className="w-4 h-4 rotate-180 text-primary/60" />
            <Link
              to="/study-booklets"
              className="hover:text-primary transition-colors flex items-center space-x-2 space-x-reverse"
            >
              <Trophy className="w-4 h-4" />
              <span>الملازم الدراسية</span>
            </Link>
            <ChevronRight className="w-4 h-4 rotate-180 text-primary/60" />
            <div className="flex items-center space-x-2 space-x-reverse">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">
                {currentLevel.title}
              </span>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Enhanced Page Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className={`w-32 h-32 rounded-4xl bg-gradient-to-br ${currentLevel.gradient} p-8 mx-auto mb-8 glow-intense relative overflow-hidden`}
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-4xl"
              style={{
                background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <IconComponent className="w-full h-full text-white drop-shadow-xl relative z-10" />

            {/* Floating sparkles around icon */}
            <motion.div
              className="absolute -top-2 -right-2 text-2xl"
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.3, 1],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 text-2xl"
              animate={{
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              💫
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-0 right-1/2 transform translate-x-1/2 text-6xl"
            animate={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {currentLevel.accent}
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-gradient mb-8 floating">
            {currentLevel.title}
          </h1>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-xl rounded-3xl"></div>
            <p className="relative text-2xl text-foreground/90 leading-relaxed font-medium luxury-card rounded-3xl p-8">
              {currentLevel.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Grades Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          {currentLevel.grades.map((grade, index) => (
            <motion.div
              key={grade.id}
              initial={{ opacity: 0, y: 60, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 1.3 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateX: -5,
                rotateY: 3,
              }}
              whileTap={{ scale: 0.97 }}
              style={{ perspective: "1000px" }}
            >
              <Link to={`/grade/${grade.id}`}>
                <div className="relative group h-full">
                  {/* Enhanced outer glow */}
                  <div
                    className="absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"
                    style={{ backgroundColor: currentLevel.glowColor }}
                  ></div>

                  {/* Main card */}
                  <div className="relative luxury-card rounded-3xl p-8 h-full overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${currentLevel.gradient}`}
                      ></div>
                    </div>

                    {/* Enhanced Grade number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      {/* Enhanced Grade Number with Beautiful Animation */}
                      <motion.div
                        className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${currentLevel.gradient} flex items-center justify-center text-white font-black text-3xl shimmer overflow-hidden`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 15,
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(220, 38, 38, 0.3)",
                            "0 0 40px rgba(220, 38, 38, 0.5)",
                            "0 0 20px rgba(220, 38, 38, 0.3)",
                          ],
                        }}
                        transition={{
                          scale: { duration: 0.3 },
                          rotate: { duration: 0.3 },
                          boxShadow: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Animated background layers */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: `conic-gradient(from ${index * 60}deg, transparent, rgba(255,255,255,0.2), transparent)`,
                          }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        {/* Grade number */}
                        <span className="relative z-10 drop-shadow-lg">
                          {index + 1}
                        </span>

                        {/* Floating sparkles */}
                        <motion.div
                          className="absolute -top-1 -right-1 text-xs"
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          ✨
                        </motion.div>
                      </motion.div>

                      {/* Enhanced Icon and Subject Count */}
                      <div className="flex flex-col items-center space-y-2">
                        {/* Animated Grade Icon */}
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            y: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            },
                          }}
                        >
                          <span className="text-4xl filter drop-shadow-lg">
                            {grade.icon}
                          </span>

                          {/* Icon glow effect */}
                          <motion.div
                            className="absolute inset-0 text-4xl opacity-50 blur-sm"
                            animate={{
                              opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3,
                            }}
                          >
                            {grade.icon}
                          </motion.div>
                        </motion.div>

                        {/* Subject count badge */}
                        <motion.div
                          className="text-sm px-3 py-2 bg-primary/20 text-primary rounded-full font-bold border border-primary/30"
                          whileHover={{ scale: 1.05 }}
                          animate={{
                            borderColor: [
                              "rgba(220, 38, 38, 0.3)",
                              "rgba(220, 38, 38, 0.6)",
                              "rgba(220, 38, 38, 0.3)",
                            ],
                          }}
                          transition={{
                            borderColor: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          {grade.subjects} مادة
                        </motion.div>
                      </div>
                    </div>

                    {/* Enhanced content */}
                    <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-gradient transition-all duration-500">
                      {grade.name}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed mb-6 font-medium">
                      {grade.description}
                    </p>

                    {/* Enhanced stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="glass-effect rounded-xl p-3 text-center">
                        <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-primary">
                          {grade.subjects}
                        </div>
                        <div className="text-xs text-foreground/70">مادة</div>
                      </div>
                      <div className="glass-effect rounded-xl p-3 text-center">
                        <Zap className="w-6 h-6 text-accent mx-auto mb-2" />
                        <div className="text-lg font-bold text-accent">
                          {Math.floor(grade.subjects * 2.5)}+
                        </div>
                        <div className="text-xs text-foreground/70">ملزمة</div>
                      </div>
                    </div>

                    {/* Enhanced action */}
                    <motion.div
                      className="luxury-button rounded-xl py-4 px-6 font-bold text-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center space-x-2 space-x-reverse">
                        <BookOpen className="w-5 h-5 text-white" />
                        <span className="relative z-10 text-white">
                          عرض المواد
                        </span>
                        <span className="text-white">←</span>
                      </div>
                    </motion.div>

                    {/* Enhanced progress indicator */}
                    <div className="mt-6 h-2 bg-border/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${currentLevel.gradient} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{
                          width: `${Math.min(100, (grade.subjects / 16) * 100)}%`,
                        }}
                        transition={{
                          duration: 2,
                          delay: 1.8 + index * 0.15,
                          ease: "easeOut",
                        }}
                      >
                        {/* Progress shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 2.5 + index * 0.15,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Level Statistics */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            {
              value: currentLevel.grades.length,
              label: "صف دراسي",
              icon: "📚",
              gradient: "from-red-500 to-red-600",
            },
            {
              value: currentLevel.grades.reduce(
                (sum, grade) => sum + grade.subjects,
                0,
              ),
              label: "مادة دراسية",
              icon: "📖",
              gradient: "from-red-600 to-red-700",
            },
            {
              value: "200+",
              label: "ملزمة متاحة",
              icon: "⭐",
              gradient: "from-red-700 to-red-800",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="luxury-card rounded-3xl p-8 text-center glow relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.3 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Background animation */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-5 rounded-3xl`}
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl relative overflow-hidden`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {stat.icon}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.7,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <div className="relative z-10">
                <div className="text-4xl font-black text-gradient mb-3">
                  {stat.value}
                </div>
                <div className="text-foreground/70 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Level;
