<template>
    <section ref="projectsSection" class="py-4 px-4 md:px-8 relative overflow-hidden">
        <!-- Background Glow -->
        <div class="absolute inset-0"></div>

        <div class="relative z-10 max-w-[1400px] mx-auto">
            <!-- Heading -->
            <div ref="headingRef"
                class="text-center mb-12 bg-[var(--color-boxes-pagedetails)] py-4 md:py-8 backdrop-blur-sm rounded-[60px] rounded-tr-[20px] ">
                <h2 class="text-3xl text-[var(--color-title)] md:text-5xl font-bold mb-8">
                    {{ $t("projectsSection.title") }}
                </h2>

                <p class="text-[var(--color-text)] text-lg">
                    {{ $t("projectsSection.subtitle") }}
                </p>
            </div>

            <!-- Filters -->
            <div ref="filtersRef" class="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">

                <div class="relative opacity-0">
                    <select class="filterStyle filterSelect rounded-[60px] rounded-tr-[20px] w-full">
                        <option>{{ $t("projectsSection.filters.sort") }}</option>
                    </select>

                    <Icon icon="mdi:chevron-down" class="filterIcon" />
                </div>

                <div class="relative opacity-0">
                    <select class="filterStyle filterSelect rounded-[60px] rounded-tr-[20px] w-full">
                        <option>{{ $t("projectsSection.filters.propertyType") }}</option>
                    </select>

                    <Icon icon="mdi:chevron-down" class="filterIcon" />
                </div>

                <div class="relative opacity-0">
                    <select class="filterStyle filterSelect rounded-[60px] rounded-tr-[20px] w-full">
                        <option>{{ $t("projectsSection.filters.projectType") }}</option>
                    </select>

                    <Icon icon="mdi:chevron-down" class="filterIcon" />
                </div>

                <div class="relative opacity-0">
                    <select class="filterStyle filterSelect rounded-[60px] rounded-tr-[20px] w-full">
                        <option>{{ $t("projectsSection.filters.unitType") }}</option>
                    </select>

                    <Icon icon="mdi:chevron-down" class="filterIcon" />
                </div>

                <div class="relative opacity-0">
                    <select class="filterStyle filterSelect rounded-[60px] rounded-tr-[20px] w-full">
                        <option>{{ $t("projectsSection.filters.city") }}</option>
                    </select>

                    <Icon icon="mdi:chevron-down" class="filterIcon" />
                </div>

                <button class="filterBtn opacity-0 rounded-[60px] rounded-tr-[20px] ">
                    {{ $t("projectsSection.filters.filterBtn") }}
                </button>

            </div>

            <!-- Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref="cardsRef">
                <div v-for="project in store.getAll" :key="project.id" class="
            bg-[var(--color-boxes-pagedetails)]
            rounded-[24px]
            overflow-hidden
            border border-[#C4974E]/20
            hover:border-[#C4974E]
            transition-all duration-500
            hover:-translate-y-2
            group
          ">
                    <!-- Image -->
                    <div class="relative overflow-hidden">
                        <img loading="lazy" decoding="async" :src="project.image" class="
    w-full
    h-[260px]
    object-cover
    group-hover:scale-110
    transition-all duration-700
  " :alt="project.title" />

                        <!-- Favorite -->
                        <button class="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-[60px] rounded-tr-[20px]
                bg-[var(--color-bg)]/40
                backdrop-blur-md
                flex
                items-center
                justify-center
                cursor-pointer
              " @click="ToggleFav(project.id)">
                            <Icon v-if="isFav.includes(project.id)" icon="material-symbols:heart-plus-outline-rounded"
                                width="24" height="24" style="color: red" />
                            <Icon v-else icon="material-symbols:heart-plus-outline-rounded" width="24" height="24"
                                style="color: var(--color-bg)" />

                        </button>
                    </div>

                    <!-- Content -->
                    <div class="p-5">
                        <h3 class="text-[var(--color-title)] smallTitle font-bold mb-2">
                            {{ project.title }}
                        </h3>

                        <p class="text-[var(--color-text)] paragraph mb-5">
                            {{ project.location }}
                        </p>

                        <div class="
                flex
                items-center
                justify-between
              ">
                            <span class="
                  text-[var(--color-primary)]
                  smallTitle
                  font-bold
                ">
                                {{ project.price }}
                            </span>

                            <button class="
                  px-4
                  py-2
                  border
                  text-[var(--color-title)]
                  border-[#C4974E]
                 rounded-[60px] rounded-tr-[20px]
                  hover:bg-[#C4974E]
                  hover:text-[var(--color-surface)]
                  transition-all
                  paragraph
                  duration-300
                " @click="pagedetails(project.id)">
                                {{ $t("projectsSection.detailsBtn") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useApistore } from "@/stores/apiproject"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue"
import { useRouter } from "vue-router"

gsap.registerPlugin(ScrollTrigger)

const store = useApistore()
const router = useRouter()

// ======================
// FAV
// ======================
const isFav = ref([])

const ToggleFav = (id) => {
    const favs = isFav.value

    if (favs.includes(id)) {
        isFav.value = favs.filter((favId) => favId !== id)
    } else {
        favs.push(id)
    }
}

// ======================
// REFS
// ======================
const projectsSection = ref(null)
const headingRef = ref(null)
const filtersRef = ref(null)
const cardsRef = ref([])

let ctx

// ======================
// PAGE DETAILS
// ======================
const pagedetails = (id) => {
    router.push(`/pagedetailscompaund/${id}`)
}

// ======================
// MOUNT
// ======================
onMounted(async () => {
    // متستناش الانيميشن عشان البيانات
    store.init()

    // استنى الرندر يخلص
    await nextTick()

    // GSAP Context = أفضل في التنضيف والـ performance
    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectsSection.value,
                start: "top 85%",
                once: true, // يمنع إعادة تشغيل الانيميشن كل Scroll
            },
            defaults: {
                ease: "power3.out",
            },
        })

        // Heading
        tl.from(headingRef.value, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            force3D: true,
            clearProps: "all",
        })

        // Filters
        if (filtersRef.value?.children?.length) {
            tl.to(
                filtersRef.value.children,
                {
                    opacity:1,
                    y: 10,
                    stagger: 0.001,
                    duration: 2,
                    ease:"power3.inOut",
                    // force3D: true,
                    // clearProps: "all",
                },
                "-=0.3"
            )
        }

        // Cards
        if (cardsRef.value?.length) {
            tl.from(
                cardsRef.value,
                {
                    opacity: 1,
                    y: 35,
                    scale: 0.98,
                    stagger: 0.06,
                    duration: 0.5,
                    force3D: true,
                    clearProps: "all",
                },
                "-=0.2"
            )
        }
    }, projectsSection)
})

// ======================
// CLEANUP
// ======================
onBeforeUnmount(() => {
    ctx?.revert()
})
</script>
<style scoped>
.filterStyle {
    background: var(--color-boxs);
    border: 1px solid rgba(196, 151, 78, 0.2);
    padding: 12px 16px;
    color: var(--color-title);
    outline: none;
    transition: 0.3s;
}

.filterStyle:focus {
    border-color: #c4974e;
}

.filterBtn {
    background: #c4974e;
    color: black;
    font-weight: 600;
    transition: 0.3s;
}

.filterBtn:hover {
    transform: scale(1.05);
}

/* الجديد */
.filterSelect {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-inline-end: 40px;
    cursor: pointer;
}

.filterIcon {
    position: absolute;
    top: 50%;
    inset-inline-end: 13px;
    transform: translateY(-50%);
    color: #c4974e;
    font-size: var(--text-h4);
    pointer-events: none;
}
</style>