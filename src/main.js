import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import il8n from "./i18n";

// 1. استيراد المكون الفعلي للأيقونات بدون تحميل حزمة الأيقونات كاملة
import { Icon } from "@iconify/vue";

const app = createApp(App);

// 2. تفعيل المكونات الأساسية وتأجيل الـ i18n إن لزم الأمر
app.use(createPinia());
app.use(router);

// 3. تسجيل مكون الأيقونة عالمياً (ممتد من استراتيجية الـ Tree Shaking)
app.component("Icon", Icon);

app.use(il8n);

// 4. تفعيل كود الحركات (AOS) ذكياً عند اكتمال تحميل الصفحة بالكامل (لو كنت تستخدمها)
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// window.addEventListener('load', () => {
//   AOS.init({ startEvent: 'load' });
// });

app.mount("#app");