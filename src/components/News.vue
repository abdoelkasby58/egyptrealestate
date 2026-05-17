<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue"
import gsap from "gsap"
import newsimg1 from "@/assets/imgnews1.webp"
import newsimg2 from "@/assets/imgnews2.webp"
import newsimg3 from "@/assets/imgnews3.webp"
import newsimg4 from "@/assets/imgnews4.webp"
import newsimg5 from "@/assets/imgnews5.webp"
import newsimg6 from "@/assets/imgnews6.webp"
import newsimg7 from "@/assets/imgnews7.webp"
import newsimg8 from "@/assets/imgnews8.webp"
import newsimg9 from "@/assets/imgnews9.webp"
import newsimg10 from "@/assets/imgnews10.webp"

const activeTab = ref("all")

const news = ref([
    { id: 1, image: newsimg1, date: "2026-05-10", author: "Admin", type: "latest" },
    { id: 2, image: newsimg2, date: "2026-05-09", author: "Editor", type: "trending" },
    { id: 3, image: newsimg3, date: "2026-05-08", author: "Admin", type: "featured" },
    { id: 4, image: newsimg4, date: "2026-05-07", author: "Team", type: "latest" },
    { id: 5, image: newsimg5, date: "2026-05-06", author: "Admin", type: "trending" },
    { id: 6, image: newsimg6, date: "2026-05-05", author: "Editor", type: "featured" },
    { id: 7, image: newsimg7, date: "2026-05-04", author: "Admin", type: "latest" },
    { id: 8, image: newsimg8, date: "2026-05-03", author: "Team", type: "trending" },
    { id: 9, image: newsimg9, date: "2026-05-02", author: "Editor", type: "featured" },
    { id: 10, image: newsimg10, date: "2026-05-01", author: "Admin", type: "latest" }
])

const tabs = ["all", "latest", "trending", "featured"]

const filteredNews = computed(() => {
    const tab = activeTab.value
    return tab === "all"
        ? news.value
        : news.value.filter(item => item.type === tab)
})

/* GSAP ANIMATION */
const headerRef = ref(null)
const tabsRef = ref(null)
const cardsRef = ref([])

// دالة مخصصة لتحديث الكروت فقط عند الفلترة
const animateCards = () => {

    const validCards = cardsRef.value.filter(el => el !== null)
    
    if (validCards.length === 0) return

 
    gsap.set(validCards, { y: 40, opacity: 0 })

  
    gsap.to(validCards, {
        y: 0, 
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        overwrite: "auto"
    })
}


watch(activeTab, async () => {
    cardsRef.value = [] 
    await nextTick()   
    animateCards()
})

onMounted(() => {
    const tl = gsap.timeline()


    tl.from(headerRef.value, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })

   
    tl.from(tabsRef.value, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out"
    }, "-=0.3")

    animateCards()
})
</script>

<template>
    <section class="py-10 px-4 min-h-screen bg-[var(--color-bg)]">
        <div class="max-w-[1300px] mx-auto">

            <div ref="headerRef" class="text-center mb-10">
                <h1 class="mainTitle text-[var(--color-title)] mb-3">
                    {{ $t("news.title") }}
                </h1>
                <p class="paragraph text-[var(--color-text)]">
                    {{ $t("news.subtitle") }}
                </p>
            </div>

            <div ref="tabsRef" class="flex flex-wrap gap-3 justify-center mb-10">
                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                    class="px-5 py-2 rounded-[60px] rounded-tr-[20px] border transition-all duration-300" :class="activeTab === tab
                        ? 'bg-[var(--color-primary)] text-black'
                        : 'border-white/10 text-[var(--color-text)]'">
                    {{ $t(`news.tabs.${tab}`) }}
                </button>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="(item, index) in filteredNews" :key="item.id" 
                    :ref="el => { if (el) cardsRef[index] = el }"
                    class="news-card bg-[var(--color-boxes-pagedetails)] rounded-[24px] overflow-hidden border border-white/10 opacity-0 hover:border-[var(--color-primary)] transition-all duration-300 group">
                    
                    <div class="overflow-hidden">
                        <img :src="item.image" class="w-full bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500" sizes="100vw"
                            loading="eager" fetchpriority="high" alt="Hero" />
                    </div>

                    <div class="p-5">
                        <h2 class="cardTitle text-[var(--color-title)] mb-3 line-clamp-2">
                            {{ $t(`news.articles.art_${item.id}`) || "No title" }}
                        </h2>

                        <p class="smallText text-[var(--color-text)] mb-4">
                            {{ $t("news.author") }}: {{ item.author }}
                        </p>

                        <div class="flex items-center justify-between">
                            <span class="extraSmallText text-gray-400">
                                {{ item.date }}
                            </span>

                            <button class="text-[var(--color-primary)] smallText font-semibold hover:underline">
                                {{ $t("news.readMore") }}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>