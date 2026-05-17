<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import SectionProjects from '@/components/SectionProjects.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <header class="relative pt-30">
  
      <SectionProjects/>

  </header>
</template> 

<style>

</style>
