import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueDevTools(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // 1. تفعيل حذر لتقسيم الكود وتحسين الكاش (Manual Chunks)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // عزل مكتبات الحركة (مثل GSAP أو AOS) في ملف منفصل لأنها ثقيلة ولا تتغير كثيراً
            if (id.includes("gsap") || id.includes("aos")) {
              return "animations";
            }
            // عزل حزم الأيقونات إذا كنت تستخدم Iconify أو ما يشبهها
            if (id.includes("iconify") || id.includes("icons")) {
              return "icons";
            }
            // يمكنك ترك باقي المكتبات الأساسية لتتجمع في ملف vendor افتراضي تلقائياً
          }
        },
      },
    },
    // 2. تحسينات إضافية اختيارية لسرعة التحميل:
    chunkSizeWarningLimit: 600, // رفع حد التحذير قليلاً ليتناسب مع التقسيم الجديد (بالكيلوبايت)
    cssCodeSplit: true, // تأكيد تقسيم ملفات الـ CSS لتُحمل فقط مع المكونات الخاصة بها
  },
});