import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Home,
  FileText,
  Construction,
  Crown,
  Star,
  Target,
  CheckCircle,
  BarChart3,
} from "lucide-react";

const MinisterialQuestions = () => {
  return (
    <div className="min-h-screen animated-gradient">
      {/* Compact Header */}
      <motion.header
        className="p-4 border-b border-border/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2 space-x-reverse"
              whileHover={{ scale: 1.03 }}
            >
              <Crown className="w-6 h-6 text-primary" />
              <div className="text-lg font-black text-gradient">
                ملازمي الأفضل
              </div>
            </motion.div>
          </Link>

          {/* Compact Breadcrumb */}
          <motion.div
            className="flex items-center space-x-2 space-x-reverse glass-effect px-4 py-2 rounded-full text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 rotate-180 text-primary/60" />
            <div className="flex items-center space-x-1 space-x-reverse">
              <Star className="w-3 h-3 text-primary" />
              <span className="text-primary font-semibold">
                الأسئلة الوزارية
              </span>
            </div>
          </motion.div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="luxury-card rounded-3xl p-12 glow">
            {/* Construction icon - Compact */}
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl mx-auto mb-8 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ duration: 0.3 }}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <Construction className="w-10 h-10 text-white drop-shadow-lg" />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-black text-gradient mb-6 floating">
              الأسئلة الوزارية
            </h1>

            <p className="text-base text-foreground/80 mb-8">
              قسم الأسئلة الوزارية قيد التطوير بمعايير عالية
            </p>

            {/* Development notice - Compact */}
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-8">
              <p className="text-foreground/90 leading-relaxed text-sm">
                نعمل على جمع وتنظيم أكبر مجموعة من الأسئلة الوزارية والامتحانات
                السابقة لجميع المراحل الدراسية. ستجد قريباً أسئلة شاملة مع
                الحلول النموذجية لمساعدتك في التحضير للامتحانات.
              </p>
            </div>

            {/* Features preview - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: Target,
                  emoji: "📝",
                  title: "امتحانات سابقة",
                  description: "نماذج من الامتحانات الوزارية",
                },
                {
                  icon: CheckCircle,
                  emoji: "✅",
                  title: "حلول نموذجية",
                  description: "إجابات مفصلة وشروحات وافية",
                },
                {
                  icon: BarChart3,
                  emoji: "📊",
                  title: "تصنيف متقدم",
                  description: "أسئلة مرتبة حسب المواضيع",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-effect rounded-2xl p-4 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  {/* Background icon */}
                  <div className="absolute top-2 right-2 text-2xl opacity-20">
                    {feature.emoji}
                  </div>

                  <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-bold text-sm mb-2">{feature.title}</h4>
                  <p className="text-foreground/70 text-xs">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Action buttons - Compact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <motion.div
                  className="luxury-button px-6 py-3 rounded-xl font-bold text-white text-sm flex items-center space-x-2 space-x-reverse"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Home className="w-4 h-4" />
                  <span>العودة للرئيسية</span>
                </motion.div>
              </Link>

              <Link to="/study-booklets">
                <motion.div
                  className="glass-effect border border-primary/30 text-primary rounded-xl px-6 py-3 font-bold text-sm flex items-center space-x-2 space-x-reverse hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FileText className="w-4 h-4" />
                  <span>تصفح الملازم الدراسية</span>
                </motion.div>
              </Link>
            </div>

            {/* Progress indicator - Compact */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="flex items-center justify-center mb-3">
                <span className="text-foreground/70 font-medium text-sm">
                  جمع وتصنيف الأسئلة - 45% مكتمل
                </span>
              </div>
              <div className="w-48 h-2 bg-border/20 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-700 to-red-800"
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 2, delay: 2.5 }}
                />
              </div>

              {/* Statistics preview - Compact */}
              <motion.div
                className="grid grid-cols-3 gap-3 mt-6 max-w-xs mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
              >
                {[
                  { number: "500+", label: "سؤال وزاري" },
                  { number: "12", label: "مرحلة دراسية" },
                  { number: "100%", label: "دقة الحلول" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="glass-effect rounded-xl p-2 text-center"
                  >
                    <div className="text-sm font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-xs text-foreground/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MinisterialQuestions;
