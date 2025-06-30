import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  ChevronRight,
  Home,
  ExternalLink,
  Crown,
  Star,
  Trophy,
  BookOpen,
} from "lucide-react";

const Grade = () => {
  const { gradeId } = useParams();

  // Enhanced mock data with Iraqi curriculum subjects
  const gradeData = {
    // المرحلة الابتدائية
    "grade-1": {
      name: "الأول الابتدائي",
      level: "المرحلة الابتدائية",
      description: "بداية الرحلة التعليم��ة",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
      ],
    },
    "grade-2": {
      name: "الثاني الابتدائي",
      level: "المرحلة الابتدائية",
      description: "تطوير المهارات الأساسية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        {
          name: "التربية الاجتماعية",
          icon: "🌐",
          gradient: "from-orange-600 to-red-700",
        },
      ],
    },
    "grade-3": {
      name: "الثالث الابتدائي",
      level: "المرحلة الابتدائية",
      description: "توسيع المدارك المعرفية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        {
          name: "التربية الاجتماعية",
          icon: "🌐",
          gradient: "from-orange-600 to-red-700",
        },
        {
          name: "التربية الموسيقية",
          icon: "🎵",
          gradient: "from-red-600 to-orange-600",
        },
      ],
    },
    "grade-4": {
      name: "الرابع الابتدائي",
      level: "المرحلة الابتدائية",
      description: "تطوير المهارات المتقدمة",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الوطنية",
          icon: "🇮🇶",
          gradient: "from-red-500 to-red-700",
        },
      ],
    },
    "grade-5": {
      name: "الخامس الابتدائي",
      level: "المرحلة الابتدائية",
      description: "صقل القدرات التحليلية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الوطنية",
          icon: "🇮🇶",
          gradient: "from-red-500 to-red-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
      ],
    },
    "grade-6": {
      name: "السادس الابتدائي",
      level: "المرحلة الابتدائية",
      description: "الإعداد للمرحلة التالية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الوطنية",
          icon: "🇮🇶",
          gradient: "from-red-500 to-red-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
      ],
    },
    // المرحلة المتوسطة
    "grade-7": {
      name: "الأول المتوسط",
      level: "المرحلة المتوسطة",
      description: "انطلاقة نحو التخصص",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "العلوم", icon: "🔬", gradient: "from-red-700 to-red-800" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        {
          name: "التربية الوطنية",
          icon: "🇮🇶",
          gradient: "from-red-500 to-red-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
        {
          name: "التربية المهنية",
          icon: "🔧",
          gradient: "from-orange-600 to-red-600",
        },
      ],
    },
    "grade-8": {
      name: "الثاني المتوسط",
      level: "المرحلة المتوسطة",
      description: "تعميق المفاهيم العلمية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "الفيزياء", icon: "⚛️", gradient: "from-red-700 to-red-800" },
        { name: "الكيمياء", icon: "🧪", gradient: "from-red-800 to-red-900" },
        { name: "الأحياء", icon: "🧬", gradient: "from-red-600 to-red-700" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        {
          name: "التربية الوطنية",
          icon: "🇮🇶",
          gradient: "from-red-500 to-red-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
      ],
    },
    "grade-9": {
      name: "الثالث المتوسط",
      level: "المرحلة المتوسطة",
      description: "التأهيل للإعدادية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "الفيزياء", icon: "⚛️", gradient: "from-red-700 to-red-800" },
        { name: "الكيمياء", icon: "🧪", gradient: "from-red-800 to-red-900" },
        { name: "الأحياء", icon: "🧬", gradient: "from-red-600 to-red-700" },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الفنية",
          icon: "🎨",
          gradient: "from-orange-500 to-red-600",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
        {
          name: "التربية الوطنية",
          icon: "🇮🇶",
          gradient: "from-red-500 to-red-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
        { name: "علم النفس", icon: "🧠", gradient: "from-red-700 to-red-900" },
      ],
    },
    // المرحلة الإعدادية - العلمي
    "grade-10-science": {
      name: "الرابع العلمي",
      level: "المرحلة الإعدادية",
      description: "التخصص العلمي المتقدم",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "الفيزياء", icon: "⚛️", gradient: "from-red-700 to-red-800" },
        { name: "الكيمياء", icon: "🧪", gradient: "from-red-800 to-red-900" },
        { name: "الأحياء", icon: "🧬", gradient: "from-red-600 to-red-700" },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "علوم الحاسوب",
          icon: "💻",
          gradient: "from-red-800 to-red-900",
        },
        {
          name: "علوم الأرض",
          icon: "🌍",
          gradient: "from-orange-600 to-red-700",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
      ],
    },
    // المرحلة الإعدادية - الأدبي
    "grade-10-literary": {
      name: "الرابع الأدبي",
      level: "المرحلة الإعدادية",
      description: "التخصص الأدبي المتميز",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الفلسفة", icon: "🤔", gradient: "from-red-700 to-red-800" },
        { name: "علم النفس", icon: "🧠", gradient: "from-red-700 to-red-900" },
        {
          name: "الاقتصاد",
          icon: "💰",
          gradient: "from-orange-600 to-red-600",
        },
        {
          name: "علم الاجتماع",
          icon: "👥",
          gradient: "from-red-600 to-red-700",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
      ],
    },
    // باقي الصفوف الإعدادية
    "grade-11-science": {
      name: "الخامس العلمي",
      level: "المرحلة الإعدادية",
      description: "تعميق العلوم والرياضيات",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "الفيزياء", icon: "⚛️", gradient: "from-red-700 to-red-800" },
        { name: "الكيمياء", icon: "🧪", gradient: "from-red-800 to-red-900" },
        { name: "الأحياء", icon: "🧬", gradient: "from-red-600 to-red-700" },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "علوم الحاسوب",
          icon: "💻",
          gradient: "from-red-800 to-red-900",
        },
        {
          name: "علوم الأرض",
          icon: "🌍",
          gradient: "from-orange-600 to-red-700",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
      ],
    },
    "grade-11-literary": {
      name: "الخامس الأدبي",
      level: "المرحلة الإعدادية",
      description: "إتقان الآداب والعلوم الإنسانية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الفلسفة", icon: "🤔", gradient: "from-red-700 to-red-800" },
        { name: "علم النفس", icon: "🧠", gradient: "from-red-700 to-red-900" },
        {
          name: "الاقتصاد",
          icon: "💰",
          gradient: "from-orange-600 to-red-600",
        },
        {
          name: "علم الاجتماع",
          icon: "👥",
          gradient: "from-red-600 to-red-700",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
      ],
    },
    "grade-12-science": {
      name: "السادس العلمي",
      level: "المرحلة الإعدادية",
      description: "البوابة للتخصصات العلمية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "الرياضيات", icon: "🔢", gradient: "from-red-600 to-red-700" },
        { name: "الفيزياء", icon: "⚛️", gradient: "from-red-700 to-red-800" },
        { name: "الكيمياء", icon: "🧪", gradient: "from-red-800 to-red-900" },
        { name: "الأحياء", icon: "🧬", gradient: "from-red-600 to-red-700" },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "علوم الحاسوب",
          icon: "💻",
          gradient: "from-red-800 to-red-900",
        },
        {
          name: "علوم الأرض",
          icon: "🌍",
          gradient: "from-orange-600 to-red-700",
        },
        {
          name: "التربية الرياضية",
          icon: "⚽",
          gradient: "from-red-600 to-orange-700",
        },
        {
          name: "اللغة الكردية",
          icon: "🗣️",
          gradient: "from-red-600 to-red-800",
        },
        {
          name: "حقوق الإنسان",
          icon: "⚖️",
          gradient: "from-red-700 to-orange-700",
        },
      ],
    },
    "grade-12-literary": {
      name: "السادس الأدبي",
      level: "المرحلة الإعدادية",
      description: "البوابة للتخصصات الأدبية",
      subjects: [
        {
          name: "اللغة العربية",
          icon: "📝",
          gradient: "from-red-500 to-red-600",
        },
        { name: "التاريخ", icon: "🏛️", gradient: "from-orange-600 to-red-700" },
        {
          name: "الجغرافية",
          icon: "🗺️",
          gradient: "from-red-600 to-orange-600",
        },
        {
          name: "التربية الإسلامية",
          icon: "🕌",
          gradient: "from-red-500 to-orange-600",
        },
        {
          name: "اللغة الإنجليزية",
          icon: "🌍",
          gradient: "from-red-700 to-red-800",
        },
        { name: "الفلسفة", icon: "🤔", gradient: "from-red-700 to-red-800" },
        { name: "علم النفس", icon: "🧠", gradient: "from-red-700 to-red-900" },
        {
          name: "الاقتصاد",
          icon: "💰",
          gradient: "from-orange-600 to-red-600",
        },
        {
          name: "علم الاجتماع",
          icon: "👥",
          gradient: "from-red-600 to-red-700",
        },
        { name: "الحاسوب", icon: "💻", gradient: "from-red-800 to-red-900" },
      ],
    },
  };

  const currentGrade = gradeData[gradeId as keyof typeof gradeData] || {
    name: "صف غير محدد",
    level: "مرحلة غير محددة",
    description: "وصف غير متوفر",
    subjects: [],
  };

  const handleSubjectClick = (subjectName: string) => {
    window.open("https://t.me/xd6_bot", "_blank");
  };

  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Compact floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 180],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <div className="w-1.5 h-1.5 bg-red-400/40 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Responsive Header */}
      <motion.header
        className="relative z-20 p-3 sm:p-4 lg:p-6 border-b border-border/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/">
            <motion.div
              className="flex items-center space-x-2 space-x-reverse"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <div className="text-base sm:text-lg lg:text-xl font-black text-gradient">
                ملازمي الأفضل
              </div>
            </motion.div>
          </Link>

          {/* Responsive Breadcrumb */}
          <motion.div
            className="flex items-center space-x-1 sm:space-x-2 space-x-reverse glass-effect px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
            <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 rotate-180 text-primary/60" />
            <Link
              to="/study-booklets"
              className="hover:text-primary transition-colors"
            >
              الملازم
            </Link>
            <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 rotate-180 text-primary/60" />
            <span className="text-primary font-semibold">
              {currentGrade.name}
            </span>
          </motion.div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        {/* Responsive Page Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block px-3 sm:px-4 py-2 bg-primary/20 text-primary rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 glass-effect"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1 sm:ml-2" />
            {currentGrade.level}
          </motion.div>

          <h1 className="text-responsive-3xl font-black text-gradient mb-3 sm:mb-4 floating">
            {currentGrade.name}
          </h1>

          <p className="text-responsive-sm text-foreground/80 max-w-2xl mx-auto">
            {currentGrade.description} - اختر المادة للحصول على الملازم
          </p>
        </motion.div>

        {/* Responsive Subjects Grid */}
        {currentGrade.subjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {currentGrade.subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                <div
                  className="relative group cursor-pointer"
                  onClick={() => handleSubjectClick(subject.name)}
                >
                  {/* Responsive glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Main card - Responsive */}
                  <div className="relative luxury-card rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 h-24 sm:h-28 lg:h-36 overflow-hidden group-hover:border-primary/40 transition-all duration-300">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-8">
                      <div
                        className={`w-full h-full bg-gradient-to-br ${subject.gradient}`}
                      ></div>
                    </div>

                    {/* Subject content - Responsive */}
                    <div className="relative flex flex-col items-center text-center h-full justify-between">
                      {/* Icon */}
                      <motion.div
                        className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${subject.gradient} p-1 sm:p-2 lg:p-3 shimmer overflow-hidden flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          boxShadow: [
                            "0 0 8px rgba(220, 38, 38, 0.2)",
                            "0 0 16px rgba(220, 38, 38, 0.4)",
                            "0 0 8px rgba(220, 38, 38, 0.2)",
                          ],
                        }}
                        transition={{
                          scale: { duration: 0.3 },
                          rotate: { duration: 0.3 },
                          boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        <span className="text-xs sm:text-sm lg:text-lg">
                          {subject.icon}
                        </span>

                        {/* Enhanced shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                      </motion.div>

                      {/* Subject name - Responsive */}
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-foreground group-hover:text-gradient transition-all duration-300 leading-tight px-1">
                        {subject.name}
                      </h3>

                      {/* Action indicator - Responsive */}
                      <motion.div
                        className="flex items-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -5 }}
                        whileHover={{ x: 0 }}
                      >
                        <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1 text-primary" />
                        <span className="text-primary text-xs">تحميل</span>
                      </motion.div>
                    </div>

                    {/* Progress bar - Responsive */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-border/20 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${subject.gradient}`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 1.5,
                          delay: 1.2 + index * 0.05,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-8 sm:py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="luxury-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-lg mx-auto">
              <Crown className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
              <h3 className="text-responsive-lg font-black text-gradient mb-4">
                المحتوى قيد التطوير
              </h3>
              <p className="text-foreground/70 mb-4 sm:mb-6 text-responsive-sm">
                سيتم إضافة المواد قريباً
              </p>
              <Link
                to="/study-booklets"
                className="luxury-button btn-sm sm:btn-md rounded-xl font-bold text-white"
              >
                العودة للملازم
              </Link>
            </div>
          </motion.div>
        )}

        {/* Responsive Info Card */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="luxury-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-accent ml-1 sm:ml-2" />
              <h3 className="text-responsive-md font-bold text-gradient">
                كيفية الحصول على الملازم
              </h3>
              <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 text-accent mr-1 sm:mr-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-responsive-sm">
              <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <div className="text-base sm:text-lg mb-1 sm:mb-2">👆</div>
                <h4 className="font-semibold mb-1">انقر على المادة</h4>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  اختر المادة المطلوبة
                </p>
              </div>
              <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <div className="text-base sm:text-lg mb-1 sm:mb-2">🤖</div>
                <h4 className="font-semibold mb-1">انتقل للبوت</h4>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  سيفتح بوت التليجرام
                </p>
              </div>
              <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <div className="text-base sm:text-lg mb-1 sm:mb-2">📥</div>
                <h4 className="font-semibold mb-1">حمّل الملازم</h4>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  احصل على الملازم مجاناً
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Grade;
