<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';
import Footer from '@/components/Footer.vue';
import { Icon } from '@iconify/vue';

const LazyNavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'))
const LazyFooter = defineAsyncComponent(() => import('@/components/Footer.vue'))
const isDark = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  const theme = savedTheme || "dark";

  document.documentElement.setAttribute("data-theme", theme);

  isDark.value = theme === "light";
});
const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");

  const next = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", next);

  isDark.value = next === "light";

  localStorage.setItem("theme", next);
};
const showScroll = ref(false)
const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header class="relative bg-[var(--color-bg)]">
    <div :class="[
      'fixed bottom-5 right-5 cursor-pointer transition-all duration-300 flex items-center justify-center rounded-full shadow-md z-[1111]',
      showScroll
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-5 pointer-events-none'
    ]" @click="ScrollToTop">
      <div
        class="bg-[var(--color-primary)] hover:text-[black] opacity-70 hover:opacity-100 hover:shadow-[0_0_20px_rgba(196,151,78,0.5)] text-white p-2 sectionTitle rounded-full transition-all duration-300 hover:scale-110">
        <Icon icon="material-symbols:keyboard-arrow-up-rounded" />
      </div>
    </div>
    <LazyNavBar :is-dark="isDark" class="bg-[var(--color-bg)]" @toggle-theme="toggleTheme" />
    <RouterView />
    <LazyFooter />
  </header>
</template>

<style scoped></style>
