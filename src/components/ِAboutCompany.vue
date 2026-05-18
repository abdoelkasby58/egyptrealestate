<template>
    <section ref="sectionRef" class="pt-10 pb-44 md:pb-32 text-white overflow-visible">
        <div class="mx-auto px-9">
            <div ref="headingRef"
                class="text-center mb-12 bg-[var(--color-boxes-pagedetails)] py-4 md:py-8 backdrop-blur-sm rounded-[60px] rounded-tr-[20px] ">
                <h1 class="mainTitle text-[var(--color-title)] mb-9">
                    {{ $t("nav.about") }}
                </h1>
                <p class="paragraph text-[var(--color-text)]">
                    {{ $t("about.desc") }}
                </p>
            </div>
            <!-- Main Box -->
            <div class="relative rounded-[30px] overflow-visible">

                <!-- Background -->
                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop"
                    class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" alt="about" />

                <!-- Overlay -->
                <div class="backgroundgreabout absolute inset-0"></div>



                <!-- Content -->
                <div ref="contentRef" class="max-w-[760px] relative z-10 px-5 sm:px-8 md:px-12 py-12 md:py-16">


                    <!-- Right Content -->
                    <div class="">

                        <h2 class="mainTitle font-semibold leading-tight mb-5">
                            {{ $t('aboutcompany.title') }}
                        </h2>

                        <h3 class="cardTitle font-bold text-white mb-7"> {{
                            $t('aboutcompany.subtitle') }}
                        </h3>

                        <p class="text-gray-300 leading-8 md:leading-9 paragraph mb-10"> نقدم أفضل
                            {{ $t('aboutcompany.description') }}
                        </p>


                        <!-- Button -->
                        <button ref="buttonRef"
                            class="w-full opacity-0 smallText sm:w-auto bg-[#C4974E] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-[60px] rounded-tr-[20px] text-black font-bold shadow-2xl mb-14">
                            {{ $t('aboutcompany.button') }}
                        </button>




                        <!-- Extra Added -->
                        <div ref="extraCardRef"
                            class="mt-2 mb-13 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[#0E1B2A]/90 border border-white/10 rounded-3xl p-5 md:p-6">
                            <div class="text-right">
                                <h3 class="smallTitle font-black mb-2">
                                    {{ $t('aboutcompany.cardTitle') }}
                                </h3>

                                <p class="text-gray-400 paragraph leading-7">
                                    {{ $t('aboutcompany.cardDesc') }}
                                </p>
                            </div>
                            <button
                                class="w-full paragraph sm:w-auto border border-[#C4974E]/30 hover:bg-[#C4974E] hover:text-black transition-all duration-300 px-7 py-3 rounded-[60px] rounded-tr-[20px] ">
                                {{ $t('aboutcompany.cardButton') }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="absolute left-1/2 -bottom-22 -translate-x-1/2 w-full px-4 z-[90]">
                    <!-- Stats -->
                    <div class="grid grid-cols-4 gap-4 md:gap-5 max-w-[1000px] mx-auto">

                        <div ref="statsRef" v-for="stat in stats" :key="stat.id"
                            class="bg-[#0E1B2A]/95 backdrop-blur-sm opacity-0 border p-4 flex flex-col items-center justify-center border-white/10 rounded-3xl text-center hover:border-[#C4974E]/40 transition-all duration-300">
                            <div class="text-[#C4974E] text-xl md:text-2xl lg:text-4xl mb-4">
                                <Icon :icon="stat.icon" />
                            </div>

                            <h3 class="cardTitle font-black mb-2">
                                +{{ stat.number }}
                            </h3>

                            <p class="text-gray-400 smallText">
                                {{ stat.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, nextTick, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const countAboutproject = ref(0)
const countClient = ref(0)
const countinvestment = ref(0)
const countCitynewabout = ref(0)
gsap.registerPlugin(ScrollTrigger)
const headingRef = ref(null)
const sectionRef = ref(null)
const contentRef = ref(null)
const buttonRef = ref(null)
const extraCardRef = ref(null)
const statsRef = ref([])
onMounted(async () => {
    // Heading
  gsap.from(headingRef.value, {
        opacity: 0,
        duration: 0.4,
        scale:0.1,
        y:60,
        delay:0.4,
        ease: "power1.inOut"
    })
        gsap.to(countAboutproject, {
            value: 100,
            duration: 4,
            delay: 3,
            ease: "power2.out",
            roundProps: "value",
            onUpdate: () => {
                countAboutproject.value = Math.floor(countAboutproject.value)
            }
        }),

        gsap.to(countClient, {
            value: 10000,
            duration: 4,
            delay: 3,
            ease: "power2.out",
            roundProps: "value",
            onUpdate: () => {
                countClient.value = Math.floor(countClient.value)
            }
        })
    gsap.to(countinvestment, {
        value: 15,
        duration: 4,
        delay: 3,
        ease: "power2.out",
        roundProps: "value",
        onUpdate: () => {
            countinvestment.value = Math.floor(countinvestment.value)
        }
    })
    gsap.to(countCitynewabout, {
        value: 8,
        duration: 4,
        delay: 3,
        ease: "power2.out",
        roundProps: "value",
        onUpdate: () => {
            countCitynewabout.value = Math.floor(countCitynewabout.value)
        }
    }),
        await nextTick()

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.value,
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
    })

    // Content fade up
    tl.from(contentRef.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    })

        // Button
        .to(buttonRef.value, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.5")

        // Extra card
        .from(extraCardRef.value, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")

        // Stats cards
        .to(statsRef.value, {
            opacity: 1,
            // y: 20,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.in"
        }, "-=0.3")
})
const { t } = useI18n()

const stats = computed(() => [
    {
        id: 1,
        icon: 'solar:city-bold-duotone',
        number: countAboutproject,
        title: t('aboutcompany.cities'),
    },
    {
        id: 2,
        icon: 'solar:shield-check-bold-duotone',
        number: countClient,
        title: t('aboutcompany.projects'),
    },
    {
        id: 3,
        icon: 'solar:users-group-rounded-bold-duotone',
        number: countinvestment,
        title: t('aboutcompany.clients'),
    },
    {
        id: 4,
        icon: 'solar:chart-2-bold-duotone',
        number: countCitynewabout,
        title: t('aboutcompany.investment'),
    },
])
</script>

<style scoped>
.backgroundgreabout {
    /* background-color: #c4974e41; */
    width: 100%;
    background: linear-gradient(100deg, rgb(2, 13, 27) 0%, rgba(7, 17, 27, 0.5) 50%, rgb(2, 13, 27) 100%);
}
</style>