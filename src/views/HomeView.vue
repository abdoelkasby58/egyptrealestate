<script setup>
import { defineAsyncComponent } from 'vue'
const LazyMortgageFinance = defineAsyncComponent(() => import('@/components/MortgageFinance.vue'))
const LazyChart = defineAsyncComponent(() => import('@/components/Chart.vue'))
const LazyHeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'))
const LazyMarqueeAni = defineAsyncComponent(() => import('@/components/MarqueeAni.vue'))
</script>
<template>
  <header class="top-0 inset-0">
    <div class="bg-[var(--color-bg)] top-0 left-0 z-[5] w-full">
      <LazyHeroSection />
      <LazyMarqueeAni />
      <div class="max-w-[1400px] m-auto">
      <LazyMortgageFinance />
      <LazyChart />
      </div>
    </div>
  </header>
</template>