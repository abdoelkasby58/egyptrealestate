<template>
    <section class="text-[var(--color-title)] ">
        <div
            class="max-w-[1300px] bg-[var(--glass-bg)] backdrop-blur-sm mx-auto h-22 z-[1000] fixed top-4 inset-0 flex items-center justify-between py-2 px-4 rounded-[60px] rounded-tr-[20px]">
            <!-- Left Side -->
            <div class="hidden md:flex items-center gap-4">
                <div @click="toggleLang"
                    class=" relative w-10 h-11 p-1 rounded-[60px] rounded-tr-[20px] border-2 border-[#C4974E]/40 bg-white/5 backdrop-blur-md text-[#C4974E] font-semibold paragraph tracking-wider flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-[#C4974E] hover:text-[var(--color-title-hover)] hover:shadow-[0_0_20px_rgba(196,151,78,0.5)] active:scale-95">
                    <span class="relative z-10">
                        {{ langeStore.locale === "ar" ? "en" : "ar" }}
                    </span>
                </div>
                <div class="relative p-2 w-10 h-11 rounded-[60px] rounded-tr-[20px] border-2 border-[#C4974E]/40 bg-white/5 backdrop-blur-md text-[#C4974E] font-semibold paragraphLg tracking-wider flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-[#C4974E] hover:text-[var(--color-title-hover)] hover:shadow-[0_0_20px_rgba(196,151,78,0.5)] active:scale-95"
                    @click="emit('toggle-theme')">
                    <Icon :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'" />
                </div>
                <button
                class="px-5 py-2 border-1  text-[var(--color-title)] border-[#C4974E] bg-[#C4974E] rounded-[60px] rounded-tr-[20px] font-medium hover:scale-105 hover:text-[var(--color-title-hover)] transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(196,151,78,0.5)] active:scale-95"
                    @click="login">
                    {{ t("nav.consult") }}
                </button>
            </div>
            <!-- Mobile Menu Icon -->
            <div class="md:hidden mainTitle text-[#C4974E] cursor-pointer" @click="isOpen = !isOpen">
                <Icon :icon="isOpen
                    ? 'material-symbols:close-rounded'
                    : 'material-symbols:menu-rounded'
                    " />
            </div>

            <!-- Navbar -->
            <nav :class="[
                'absolute md:static top-full z-[111] left-0 w-full md:w-auto bg-[var(--color-bg)] md:bg-[#c4974e00] overflow-hidden transition-all duration-500',
                isOpen
                    ? 'max-h-[full] opacity-100 py-2'
                    : 'max-h-[0px] opacity-0 md:opacity-100 md:max-h-full py-0',
            ]">
                <ul class="flex flex-col md:flex-row items-center gap-8 paragraph">
                    <li class="hoverAfter text-[var(--color-title)]">
                        <RouterLink to="/">{{ t("nav.home") }}</RouterLink>
                    </li>

                    <li class="hoverAfter text-[var(--color-title)]">
                        <RouterLink to="/projects">{{ t("nav.projects") }}</RouterLink>
                    </li>

                    <li class="hoverAfter text-[var(--color-title)]">
                        <RouterLink to="/about">{{ t("nav.about") }}</RouterLink>
                    </li>
                    
                    <li class="hoverAfter text-[var(--color-title)]">
                        <RouterLink to="/news">{{ t("nav.news") }}</RouterLink>
                    </li>
                    
                    <li class="hoverAfter text-[var(--color-title)]">
                        <RouterLink to="/contactus">{{ t("nav.contact") }}</RouterLink>
                    </li>
                </ul>

                <!-- Mobile Actions -->
                <div class="md:hidden flex flex-col items-center gap-4 mt-6">
                    <div @click="toggleLang"
                        class=" relative p-2 rounded-[60px] rounded-tr-[20px] border-2 border-[#C4974E]/40 bg-white/5 backdrop-blur-md text-[#C4974E] font-semibold text-[18px] tracking-wider flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-[#C4974E] hover:text-black hover:shadow-[0_0_20px_rgba(196,151,78,0.5)] active:scale-95">
                        <span class="relative z-10">
                            {{ langeStore.locale === "ar" ? "en" : "ar" }}
                        </span>
                    </div>
                    <div class="relative p-2 w-10 h-11 rounded-[60px] rounded-tr-[20px] border-2 border-[#C4974E]/40 bg-white/5 backdrop-blur-md text-[#C4974E] font-semibold paragraphLg tracking-wider flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-[#C4974E] hover:text-[var(--color-title-hover)] hover:shadow-[0_0_20px_rgba(196,151,78,0.5)] active:scale-95"
                        @click="emit('toggle-theme')">
                        <Icon :icon="isDark ? 'mdi:weather-sunny' : 'mdi:weather-night'" />
                    </div>
                    <button
                    class="px-5 py-2 bg-[#C4974E] rounded-[60px] rounded-tr-[20px]  text-[var(--color-title)] font-medium hover:scale-105 transition-all duration-300"
                    @click="login">
                        {{ t("nav.consult") }}
                    </button>
                </div>
            </nav>

            <!-- Logo -->
            <div>
                <img @click="refresh" :src="LogoReal" class="w-[65px] md:w-[75px] lg:w-[85px] cursor-pointer transition" alt="Logo" />
            </div>
        </div>
    </section>
</template>

<script setup>
import LogoReal from "@/assets/logorealestate.webp";
import { useLangStore } from "@/stores/lang";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
const emit = defineEmits(["toggle-theme"])
defineProps({
    isDark: {
        type: Boolean,
        required: true
    }
})
const isOpen = ref(false);

const router = useRouter();



const refresh = () => {
    router.push("/");
};

const login = () => {
    router.push("/login");
};
const { t } = useI18n();
const langeStore = useLangStore();
const toggleLang = () => {
    const newLang = langeStore.locale === "ar" ? "en" : "ar";
    langeStore.changeLang(newLang);
    console.log('Language switched to:', newLang);
}
console.log(t)
</script>

<style scoped>
.hoverAfter {
    position: relative;
    transition: 0.3s;

}

.hoverAfter a {
    display: inline-block;
    padding-bottom: 5px;
}

/* الخطين */
.hoverAfter::after,
.hoverAfter::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background: #c4974e;
    bottom: 0;
    transition: 0.4s;
}

.hoverAfter::after {
    left: 50%;
}

.hoverAfter::before {
    right: 50%;
}

/* Hover + Active نفس الشكل */
.hoverAfter:hover,
.hoverAfter.active {
    color: #c4974e;
    transform: scale(1.05);
}

.hoverAfter:hover::after,
.hoverAfter:hover::before,
.hoverAfter.active::after,
.hoverAfter.active::before {
    width: 50%;
}
</style>