<script setup>


import { defineAsyncComponent } from 'vue';

const LazySectionProjects = defineAsyncComponent(() => import('@/components/SectionProjects.vue'))


</script>

<template>
  <header class="relative mx-auto max-w-[1400px] pt-30">

    <LazySectionProjects />

  </header>
</template>

<style></style>
