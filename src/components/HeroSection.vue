<template>
    <div class="h-screen relative">
        <img :src="PhotoSection" loading="eager" fetchpriority="high" class="w-full h-full object-cover"
            alt="rearestate">
        <div class="backgroundgre absolute inset-0 overlay"></div>
        <div class="absolute inset-0 top-10 overlay flex flex-col items-center justify-center">
            <h1 ref="animationTitle" class="mainTitle text-white font-bold opacity-0 text-center mb-7">{{
                $t("hero.title") }}</h1>
            <p ref="animationPragraph" class="smallTitle opacity-0 text-gray-200 mb-14">{{ $t("hero.subtitle") }}</p>
            <section ref="animationBoxes"
                class="flex opacity-0 justify-around text-center bg-[#020D1B]/80 backdrop-md-140 w-[90%] h-[180px] border-1 border-[#C4974E] rounded-[20px]">
                <div
                    class="w-[25%] flex flex-col items-center justify-center border-l-1 border-[#C4974E] hover:bg-[#c4974e41] transition duration-300">
                    <Icon icon="material-symbols:location-city" class="text-[#C4974E] sectionTitle mb-3" />
                    <span class="text-white smallTitle font-semibold mb-2">+{{ countCitynew }}</span>
                    <p class="text-white font-semibold paragraph">{{ $t("hero.stats.cities") }}</p>
                </div>
                <div
                    class="w-[25%] flex flex-col items-center justify-center border-l-1 border-[#C4974E] hover:bg-[#c4974e41] transition duration-300">
                    <Icon icon="material-symbols:altitude-outline-rounded" class="text-[#C4974E] sectionTitle mb-3" />
                    <span class="text-white smallTitle font-semibold mb-2">+{{ countExperince }}</span>
                    <p class="text-white font-semibold paragraph">{{ $t("hero.stats.experience") }}</p>
                </div>
                <div
                    class="w-[25%] h-full flex flex-col items-center justify-center border-l-1 border-[#C4974E] hover:bg-[#c4974e41] transition duration-300">
                    <Icon icon="material-symbols:data-thresholding-outline-rounded"
                        class="text-[#C4974E] sectionTitle mb-3" />
                    <span class="text-white smallTitle font-semibold mb-2">+{{ countResidentialunit }}</span>
                    <p class="text-white font-semibold paragraph">{{ $t("hero.stats.units") }}</p>
                </div>
                <div
                    class="w-[25%] flex flex-col items-center justify-center  hover:bg-[#c4974e41] transition duration-300">
                    <Icon icon="material-symbols:approval" class="text-[#C4974E] sectionTitle mb-3" />
                    <span ref="counterRef" class="text-white smallTitle font-semibold mb-2">+{{ countproject }}</span>
                    <p class="text-white font-semibold paragraph">{{ $t("hero.stats.projects") }}</p>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup>
import PhotoSection from "@/assets/sectionheroestate.webp"
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { useI18n } from "vue-i18n";
const { t } = useI18n()

const countproject = ref(0)
const countResidentialunit = ref(0)
const countExperince = ref(0)
const countCitynew = ref(0)

const animationTitle = ref(null)
const animationPragraph = ref("")
const animationBoxes = ref("")


onMounted(() => {
    gsap.to(animationTitle.value, {
        opacity: 1,
        delay: 0.3,
        y: -10,
        duration: 1,
        ease: "power3.out"
    })
    gsap.to(animationPragraph.value, {
        opacity: 1,
        delay: 0.6,
        y: -10,
        duration: 1,
        ease: "power3.out"
    })
    gsap.to(animationBoxes.value, {
        opacity: 1,
        delay: 0.9,
        y: -10,
        duration: 1,
        ease: "power3.out"
    })
    gsap.to(countproject, {
        value: 100,
        duration: 4,
        delay: 2,
        ease: "power3.out",
        roundProps: "value",
        onUpdate: () => {
            countproject.value = Math.floor(countproject.value)
        }
    })
    gsap.to(countResidentialunit, {
        value: 10000,
        duration: 4,
        delay: 2,
        ease: "power3.out",
        roundProps: "value",
        onUpdate: () => {
            countResidentialunit.value = Math.floor(countResidentialunit.value)
        }
    })
    gsap.to(countExperince, {
        value: 15,
        duration: 4,
        delay: 2,
        ease: "power3.out",
        roundProps: "value",
        onUpdate: () => {
            countExperince.value = Math.floor(countExperince.value)
        }
    })
    gsap.to(countCitynew, {
        value: 8,
        duration: 4,
        delay: 2,
        ease: "power3.out",
        roundProps: "value",
        onUpdate: () => {
            countCitynew.value = Math.floor(countCitynew.value)
        }
    })

})
</script>
<style scoped>
.backgroundgre {
    /* background-color: #c4974e41; */
    width: 100%;
    background:
        linear-gradient(rgb(2 13 27 / 71%) 20%, rgba(43, 0, 89, 0) 80%, rgb(2 13 27 / 81%) 100%);
}
</style>