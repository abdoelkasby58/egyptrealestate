<script setup>
import Chart from '@/components/Chart.vue';
import HeroSection from '@/components/HeroSection.vue';
import MarqueeAni from '@/components/MarqueeAni.vue';
import MortgageFinance from '@/components/MortgageFinance.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <header class="top-0 inset-0">

    <div class="bg-[var(--color-bg)] top-0 left-0 z-[5] w-full">

      <HeroSection />
      <MarqueeAni />
      <MortgageFinance />
      <Chart />
    </div>
  </header>

</template>
