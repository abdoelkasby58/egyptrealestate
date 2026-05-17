<script setup>
import {  onMounted } from "vue"
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

    const speed = 1.2 // السرعة

    const spacing = 280 // المسافة بين العناصر


    // نوزع العناصر أفقياً
    items.forEach((el, i) => {
        gsap.set(el, {
            x: i * spacing,
        })
    })

    gsap.ticker.add(() => {
        items.forEach((el) => {
            let x = gsap.getProperty(el, "x")

            x -= speed

            // لما يخرج من الشمال يرجع يمين فوراً
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

        <div ref="container" class="relative h-[100px] md:h-[120px] lg:h-[150px] overflow-hidden">
            <div v-for="(brand, i) in brands" :key="brands.id" class="
          item
          absolute
          top-4
          -translate-y-1/2
          left-0

          will-change-transform
        ">
                <img :src="brand.logo" loading="lazy" class="w-[150px] md:w-[180px] lg:w-[220px] bg-cover bg-center"
                    :alt="brand.name">

            </div>
        </div>

    </section>
</template>
<style>
.bgboxes {

    background-color: #e2e8f057;
}
</style>