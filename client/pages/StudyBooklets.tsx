import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Home,
  School,
  Users,
  BookOpen,
  Crown,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

const StudyBooklets = () => {
  const levels = [
    {
      id: "elementary",
      title: "المرحلة الابتدائية",
      description: "أساس التعليم المتين - الصفوف من الأول إلى السادس الابتدائي",
      icon: School,
      gradient: "from-red-500 via-red-600 to-orange-600",
      glowColor: "rgba(220, 38, 38, 0.4)",
      grades: "6 صفوف",
      subjects: "48 ��ادة",
      books: "120+ ملزمة",
      accent: "🌟",
      pattern: "elementary",
    },
    {
      id: "middle",
      title: "المرحلة المتوسطة",
      description: "بوابة التخصص - الصفوف من الأول إلى الثالث المتوسط",
      icon: Users,
      gradient: "from-red-600 via-red-700 to-red-800",
      glowColor: "rgba(185, 28, 28, 0.4)",
      grades: "3 صفوف",
      subjects: "42 مادة",
      books: "90+ ملزمة",
      accent: "⚡",
      pattern: "middle",
    },
    {
      id: "preparatory",
      title: "المرحلة الإعدادية",
      description:
        "قمة التحصيل العلمي - الصفوف الرابع والخامس والسادس (علمي وأدبي)",
      icon: BookOpen,
      gradient: "from-red-700 via-red-800 to-red-900",
      glowColor: "rgba(153, 27, 27, 0.4)",
      grades: "6 فروع",
      subjects: "65 مادة",
      books: "180+ ملزمة",
      accent: "👑",
      pattern: "secondary",
    },
  ];

  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-sm" />
          </motion.div>
        ))}

        {/* Moving decorative elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`decoration-${i}`}
            className="absolute text-red-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 12}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
              x: [0, 50, -50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            {i % 5 === 0
              ? "📚"
              : i % 5 === 1
                ? "✨"
                : i % 5 === 2
                  ? "🎓"
                  : i % 5 === 3
                    ? "⭐"
                    : "💫"}
          </motion.div>
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>

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
            className="flex items-center space-x-3 space-x-reverse glass-effect px-6 py-3 rounded-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
            </Link>
            <ChevronRight className="w-4 h-4 rotate-180 text-primary/60" />
            <div className="flex items-center space-x-2 space-x-reverse">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">
                الملازم الدراسية
              </span>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Enhanced Page Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center mb-8 glass-effect-intense px-8 py-4 rounded-full glow"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Trophy className="w-6 h-6 text-accent ml-3 animate-luxury-pulse" />
            <span className="text-lg font-bold text-primary">
              مكتبة الملازم الحصرية
            </span>
            <Trophy className="w-6 h-6 text-accent mr-3 animate-luxury-pulse" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-gradient mb-8 floating">
            الملازم الدراسية
          </h1>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-xl rounded-3xl"></div>
            <p className="relative text-2xl text-foreground/90 leading-relaxed font-medium luxury-card rounded-3xl p-8">
              اختر المرحلة التعليمية للوصول إلى أرقى وأشمل مجموعة من الملازم
              الدراسية المتطورة
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Levels Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 60, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 1.3 + index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -25,
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              style={{ perspective: "1000px" }}
            >
              <Link to={`/level/${level.id}`}>
                <div className="relative group h-full">
                  {/* Enhanced outer glow */}
                  <div
                    className="absolute -inset-3 rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000"
                    style={{ backgroundColor: level.glowColor }}
                  ></div>

                  {/* Main card with enhanced styling */}
                  <div className="relative luxury-card rounded-4xl p-12 h-full overflow-hidden">
                    {/* Dynamic background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${level.gradient}`}
                      ></div>
                    </div>

                    {/* Enhanced icon section */}
                    <div className="relative mb-10 flex flex-col items-center">
                      <motion.div
                        className={`relative w-28 h-28 rounded-3xl bg-gradient-to-br ${level.gradient} p-7 mb-6 shimmer overflow-hidden`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          boxShadow: `0 0 50px ${level.glowColor}`,
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 30px ${level.glowColor}`,
                            `0 0 50px ${level.glowColor}`,
                            `0 0 30px ${level.glowColor}`,
                          ],
                        }}
                        transition={{
                          scale: { duration: 0.4 },
                          rotate: { duration: 0.4 },
                          boxShadow: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Rotating gradient border */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background: `conic-gradient(from ${index * 120}deg, transparent, rgba(255,255,255,0.3), transparent)`,
                          }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <level.icon className="w-full h-full text-white drop-shadow-lg relative z-10" />

                        {/* Enhanced shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Multiple floating sparkles */}
                        <motion.div
                          className="absolute -top-2 -right-2 text-xl"
                          animate={{
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.3, 1],
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                        >
                          ✨
                        </motion.div>

                        <motion.div
                          className="absolute -bottom-1 -left-1 text-xl"
                          animate={{
                            rotate: [0, -10, 10, 0],
                            scale: [1, 1.2, 1],
                            x: [0, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                        >
                          💫
                        </motion.div>
                      </motion.div>

                      {/* Enhanced floating accent */}
                      <motion.div
                        className="text-4xl"
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.2, 1],
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        {level.accent}
                      </motion.div>
                    </div>

                    {/* Enhanced content */}
                    <h3 className="text-4xl font-black text-foreground mb-6 group-hover:text-gradient transition-all duration-500 text-center">
                      {level.title}
                    </h3>

                    <p className="text-foreground/80 leading-relaxed text-lg mb-8 font-medium text-center">
                      {level.description}
                    </p>

                    {/* Enhanced stats grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { label: "الصفوف", value: level.grades, icon: "📚" },
                        { label: "المواد", value: level.subjects, icon: "📖" },
                        { label: "الملازم", value: level.books, icon: "⭐" },
                      ].map((stat, statIndex) => (
                        <motion.div
                          key={stat.label}
                          className="glass-effect rounded-2xl p-4 text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 1.8 + index * 0.3 + statIndex * 0.1,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-2xl mb-1">{stat.icon}</div>
                          <div className="text-lg font-bold text-primary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-foreground/70">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced call to action */}
                    <motion.div
                      className="luxury-button rounded-2xl py-5 px-8 font-bold text-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center space-x-3 space-x-reverse">
                        <Zap className="w-5 h-5 text-white" />
                        <span className="relative z-10 text-white text-lg">
                          تصفح الصفوف
                        </span>
                        <span className="text-white">←</span>
                      </div>
                    </motion.div>

                    {/* Enhanced animated progress bar */}
                    <div className="mt-8 h-3 bg-border/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${level.gradient} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 2.5,
                          delay: 2 + index * 0.3,
                          ease: "easeOut",
                        }}
                      >
                        {/* Progress bar shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 3 + index * 0.3,
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

        {/* Enhanced Additional Info */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="luxury-card rounded-4xl p-12 max-w-6xl mx-auto glow-intense relative overflow-hidden">
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-4xl"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                  "linear-gradient(120deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                  "linear-gradient(240deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                  "linear-gradient(360deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Crown className="w-10 h-10 text-accent ml-4" />
                <h3 className="text-4xl font-black text-gradient">
                  لماذا نحن الأفضل؟
                </h3>
                <Crown className="w-10 h-10 text-accent mr-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: "✨",
                    title: "محتوى حصري",
                    desc: "ملازم معتمدة ومطورة بأحدث المعايير العلمية",
                    gradient: "from-red-500 to-red-600",
                  },
                  {
                    icon: "🎯",
                    title: "دقة استثنائية",
                    desc: "يغطي جميع المناهج بتفصيل شامل ودقة عالية",
                    gradient: "from-red-600 to-red-700",
                  },
                  {
                    icon: "👑",
                    title: "تصميم فاخر",
                    desc: "واجهة احترافية وتجربة مستخدم لا مثيل لها",
                    gradient: "from-red-700 to-red-800",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="luxury-card rounded-3xl p-8 text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl relative overflow-hidden`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gradient mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StudyBooklets;
