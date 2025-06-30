import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, FileText, Crown, Star } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "ملازم دراسية",
      description: "مجموعة شاملة من أفضل الملازم الدراسية المتطورة",
      icon: BookOpen,
      path: "/study-booklets",
      gradient: "from-red-600 via-red-500 to-orange-600",
      glowColor: "rgba(220, 38, 38, 0.4)",
      accent: "🎓",
    },
    {
      title: "كتب مدرسية",
      description: "الكتب المدرسية الرسمية عالية الجودة والدقة",
      icon: GraduationCap,
      path: "/school-books",
      gradient: "from-red-700 via-red-600 to-red-500",
      glowColor: "rgba(185, 28, 28, 0.4)",
      accent: "📚",
    },
    {
      title: "الأسئلة الوزارية",
      description: "مجموعة حصرية من الأسئلة الوزارية والامتحانات",
      icon: FileText,
      path: "/ministerial-questions",
      gradient: "from-red-800 via-red-700 to-red-600",
      glowColor: "rgba(153, 27, 27, 0.4)",
      accent: "⭐",
    },
  ];

  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Enhanced floating particles and moving elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute luxury-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
            }}
            animate={{
              y: [0, -200],
              rotate: [0, 360],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-sm opacity-60" />
          </motion.div>
        ))}

        {/* Beautiful moving geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-3 h-3 bg-red-500/20 rotate-45"></div>
            ) : i % 3 === 1 ? (
              <div className="w-4 h-4 bg-orange-500/20 rounded-full"></div>
            ) : (
              <div className="w-2 h-6 bg-red-600/20 rounded-full"></div>
            )}
          </motion.div>
        ))}

        {/* Floating stars and sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute text-red-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 12 + 8}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            {i % 4 === 0
              ? "✨"
              : i % 4 === 1
                ? "⭐"
                : i % 4 === 2
                  ? "💫"
                  : "🔸"}
          </motion.div>
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>

      {/* Header with luxury design */}
      <motion.header
        className="relative z-20 p-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div
            className="flex items-center space-x-3 space-x-reverse"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Crown className="w-8 h-8 text-primary" />
            <div className="text-3xl font-black text-gradient">
              ملازمي الأفضل
            </div>
            <motion.div
              className="w-6 h-6 text-accent"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </motion.div>

          <div className="hidden md:flex space-x-12 space-x-reverse">
            {["الرئيسية", "عن الموقع", "تواصل معنا"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="relative text-foreground/80 hover:text-primary transition-all duration-500 font-semibold"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-8">
        {/* Welcome Section with luxury styling */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center mb-8 glass-effect-intense px-8 py-4 rounded-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-accent ml-3" />
            </motion.div>
            <span className="text-lg font-semibold text-primary">
              المنصة التعليمية الأكثر تطوراً
            </span>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-accent mr-3" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-9xl font-black text-gradient mb-8 floating"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            ملازمي الأفضل
          </motion.h1>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-xl rounded-3xl"></div>
            <p className="relative text-2xl md:text-3xl text-foreground/90 leading-relaxed font-medium luxury-card rounded-3xl p-8">
              منصة تعليمية استثنائية توفر أرقى الملازم والكتب الدراسية والأسئلة
              الوزارية بتقنيات متطورة وتصميم فاخر
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Categories Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl w-full"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 1.8 + index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.98 }}
              style={{ perspective: "1000px" }}
            >
              <Link to={category.path}>
                <div className="relative group h-full">
                  {/* Enhanced outer glow effect */}
                  <div
                    className="absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"
                    style={{ backgroundColor: category.glowColor }}
                  ></div>

                  {/* Main card */}
                  <div className="relative luxury-card rounded-3xl p-10 h-full overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${category.gradient}`}
                      ></div>
                    </div>

                    {/* Icon with enhanced styling */}
                    <div className="relative mb-8">
                      <motion.div
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${category.gradient} p-6 mb-4 shimmer relative overflow-hidden`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 5,
                          boxShadow: `0 0 40px ${category.glowColor}`,
                        }}
                        transition={{ duration: 0.4 }}
                        animate={{
                          boxShadow: [
                            `0 0 20px ${category.glowColor}`,
                            `0 0 40px ${category.glowColor}`,
                            `0 0 20px ${category.glowColor}`,
                          ],
                        }}
                      >
                        <category.icon className="w-full h-full text-white drop-shadow-lg relative z-10" />

                        {/* Rotating border effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
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

                        {/* Enhanced shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                      </motion.div>

                      {/* Enhanced floating accent */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-3xl"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {category.accent}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-black text-foreground mb-6 group-hover:text-gradient transition-all duration-500">
                      {category.title}
                    </h3>

                    <p className="text-foreground/80 leading-relaxed text-lg mb-8 font-medium">
                      {category.description}
                    </p>

                    {/* Enhanced call to action */}
                    <motion.div
                      className="luxury-button rounded-xl py-4 px-8 font-bold text-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center space-x-3 space-x-reverse">
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ✨
                        </motion.div>
                        <span className="relative z-10 text-white">
                          اكتشف المزيد
                        </span>
                        <span className="text-white">←</span>
                      </div>
                    </motion.div>

                    {/* Enhanced animated progress bar */}
                    <div className="mt-8 h-2 bg-border/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 2.5,
                          delay: 2.5 + index * 0.3,
                          ease: "easeOut",
                        }}
                      >
                        {/* Progress bar shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12"
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

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            className="inline-block glass-effect-intense rounded-3xl p-8 glow-intense relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                  "linear-gradient(180deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                  "linear-gradient(360deg, rgba(220,38,38,0.1), rgba(234,88,12,0.1))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 flex items-center space-x-4 space-x-reverse">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
              <p className="text-2xl text-gradient font-bold">
                🎓 ابدأ رحلتك التعليمية الاستثنائية الآن
              </p>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        className="relative z-10 mt-20 py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="luxury-card rounded-2xl p-8">
            <p className="text-foreground/70 text-lg">
              © 2024 ملازمي الأفضل - منصة التعليم الفاخر - جميع الحقوق محفوظة
            </p>
            <div className="flex justify-center space-x-8 space-x-reverse mt-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <Crown className="w-5 h-5 text-primary/60" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <Star className="w-5 h-5 text-accent/60" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ✨
              </motion.div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
