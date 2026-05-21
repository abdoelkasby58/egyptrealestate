<script setup>
import { onMounted } from "vue"
import gsap from "gsap"
import imgbarnd1 from "@/assets/talatmostafa-removebg-preview.png";
import imgbarnd2 from "@/assets/tatweermisr-removebg-preview.png";
import imgbarnd3 from "@/assets/palmhills-removebg-preview.png";
import imgbarnd4 from "@/assets/Ola-removebg-preview.png";
import imgbarnd5 from "@/assets/newgiza-removebg-preview.png";
import imgbarnd6 from "@/assets/misritalia-removebg-preview-removebg-preview.webp";
import imgbarnd7 from "@/assets/cityedge-removebg-preview.png";
import imgbarnd8 from "@/assets/emaar-removebg-preview.png";
import imgbarnd9 from "@/assets/mountainview-removebg-preview.png";
import imgbarnd10 from "@/assets/hydepark-removebg-preview.png";

const brands = [
    { id: 1, name: "Abdo Elkasby", logo: imgbarnd1 },
    { id: 2, name: "Abdo Elkasby", logo: imgbarnd2 },
    { id: 3, name: "Abdo Elkasby", logo: imgbarnd3 },
    { id: 4, name: "Abdo Elkasby", logo: imgbarnd4 },
    { id: 5, name: "Abdo Elkasby", logo: imgbarnd5 },
    { id: 6, name: "Abdo Elkasby", logo: imgbarnd6 },
    { id: 7, name: "Abdo Elkasby", logo: imgbarnd7 },
    { id: 8, name: "Abdo Elkasby", logo: imgbarnd8 },
    { id: 9, name: "Abdo Elkasby", logo: imgbarnd9 },
    { id: 10, name: "Abdo Elkasby", logo: imgbarnd10 },
]

onMounted(() => {
    const items = gsap.utils.toArray(".item")
    const speed = 1

    // نحسب المسافة حسب حجم الشاشة
    const getSpacing = () => {
        if (window.innerWidth < 640) return 140   // موبايل
        if (window.innerWidth < 1024) return 200  // تابلت
        return 280                                 // ديسكتوب
    }

    let spacing = getSpacing()

    const setPositions = () => {
        spacing = getSpacing()

        items.forEach((el, i) => {
            gsap.set(el, {
                x: i * spacing,
            })
        })
    }

    setPositions()

    // تحديث عند تغيير حجم الشاشة
    window.addEventListener("resize", setPositions)

    items.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            gsap.to(el, { scale: 1.1, duration: 0.3 })
        })
        el.addEventListener("mouseleave", () => {
            gsap.to(el, { scale: 1, duration: 0.3 })
        })
    })

    gsap.ticker.add(() => {
        items.forEach((el) => {
            let x = gsap.getProperty(el, "x")
            x -= speed

            if (x < -spacing) {
                x = spacing * (items.length - 1)
            }

            gsap.set(el, { x })
        })
    })
})
</script>

<template>
    <section class="py-2 bgboxes backdrop-blur-lg overflow-hidden bg-[var(--color-bg)]">
        <!-- تم إضافة كلاسات flex و items-center لضمان توسط العناصر عمودياً دائماً -->
        <div ref="container" class="relative h-[100px] md:h-[120px] lg:h-[150px] overflow-hidden flex items-center">

            <div v-for="(brand, i) in brands" :key="brand.id" class="
              item
              absolute
              left-0
              will-change-transform
              flex
              items-center
              justify-center
            ">
                <img loading="lazy" decoding="async" :src="brand.logo"
                    class="w-[150px] md:w-[180px] lg:w-[220px] h-auto object-contain" :alt="brand.name">
            </div>

        </div>
    </section>
</template>

<style>
.bgboxes {
    background-color: #e2e8f057;
}
</style>