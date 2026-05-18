<script setup>
import { defineAsyncComponent } from 'vue'


// 2. مكونات ثقيلة أسفل الشاشة الأولى (Lazy Loading) - تُحمل ديناميكياً لتسريع الموقع
const LazyMortgageFinance = defineAsyncComponent(() => import('@/components/MortgageFinance.vue'))
const LazyChart = defineAsyncComponent(() => import('@/components/Chart.vue'))
const LazyHeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const LazyMarqueeAni = defineAsyncComponent(() => import('@/components/MarqueeAni.vue'))
</script>

<template>
  <header class="top-0 inset-0">
    <div class="bg-[var(--color-bg)] top-0 left-0 z-[5] w-full">
      <!-- الشاشة الأولى تظهر فوراً (LCP سريع جداً) -->
      <LazyHeroSection />
      <LazyMarqueeAni />

      <!-- يتم تحميل أكواد هذه المكونات في ملفات منفصلة ولا تنزل إلا عند رندرة الصفحة -->
      <LazyMortgageFinance />
      <LazyChart />
    </div>
  </header>
</template>