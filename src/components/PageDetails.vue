<script setup>
import { useApistore } from '@/stores/apiproject';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, nextTick, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const storeDet = useApistore()
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imageRef = ref(null)
const contentRef = ref(null)
const infoCards = ref([])
const paymentRef = ref(null)
const featuresRef = ref([])

const router = useRoute()
onMounted(async () => {

    await storeDet.init()

    await nextTick()

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.value,
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
    })

    tl.from(imageRef.value, {
        opacity: 0,
        x: -40,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out"
    })

    .from(contentRef.value, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out"
    }, "-=1")

    .from(infoCards.value, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.5")

    .from(paymentRef.value, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.3")

    .from(featuresRef.value, {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.4")

})
const project = computed(() => {
    return storeDet.getAll.find((items) => items.id == Number(router.params.id))
})
console.log(storeDet)
</script>
<template>
    <div class="">

        <section ref="sectionRef" class="min-h-screen py-10 pt-33 px-4">
            <div class="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-10">
                <!-- Image -->
                <div ref="imageRef">
                    <img :src="project?.image" :alt="project?.title"
                        class="w-full h-[500px] object-cover rounded-3xl" />
                </div>

                <!-- Content -->
                <div ref="contentRef">
                    <h1 class="sectionTitle text-[var(--color-title)] font-bold mb-4">
                        {{ project?.title }}
                    </h1>

                    <p class="text-[var(--color-primary)] smallTitle mb-6">
                        {{ project?.price }}
                    </p>

                    <p class="text-[var(--color-text)] paragraph leading-8 mb-8">
                        {{ project?.description }}
                    </p>

                    <!-- Info -->
                    <div class="grid grid-cols-2 gap-4 mb-8">

    <div
        ref="infoCards"
        class="bg-[var(--color-boxes-pagedetails)] p-4 rounded-[60px] rounded-tr-[20px]"
    >
        <p class="text-[var(--color-text)] mb-2">
            {{ $t("projectDetails.location") }}
        </p>

        <h3>{{ project?.location }}</h3>
    </div>

    <div
        ref="infoCards"
        class="bg-[var(--color-boxes-pagedetails)] p-4 rounded-[60px] rounded-tr-[20px]"
    >
        <p class="text-[var(--color-text)] mb-2">
            {{ $t("projectDetails.area") }}
        </p>

        <h3>{{ project?.area }}</h3>
    </div>

    <div
        ref="infoCards"
        class="bg-[var(--color-boxes-pagedetails)] p-4 rounded-[60px] rounded-tr-[20px]"
    >
        <p class="text-[var(--color-text)] mb-2">
            {{ $t("projectDetails.bedrooms") }}
        </p>

        <h3>{{ project?.bedrooms }}</h3>
    </div>

    <div
        ref="infoCards"
        class="bg-[var(--color-boxes-pagedetails)] p-4 rounded-[60px] rounded-tr-[20px]"
    >
        <p class="text-[var(--color-text)] mb-2">
            {{ $t("projectDetails.bathrooms") }}
        </p>

        <h3>{{ project?.bathrooms }}</h3>
    </div>

    <div
        ref="infoCards"
        class="bg-[var(--color-boxes-pagedetails)] p-4 rounded-[60px] rounded-tr-[20px]"
    >
        <p class="text-[var(--color-text)] mb-2">
            {{ $t("projectDetails.developer") }}
        </p>

        <h3>{{ project?.developer }}</h3>
    </div>

    <div
        ref="infoCards"
        class="bg-[var(--color-boxes-pagedetails)] p-4 rounded-[60px] rounded-tr-[20px]"
    >
        <p class="text-[var(--color-text)] mb-2">
            {{ $t("projectDetails.delivery") }}
        </p>

        <h3>{{ project?.delivery }}</h3>
    </div>

</div>

                    <!-- Payment -->
                    <div ref="paymentRef"
                        class="bg-[var(--color-boxes-pagedetails)] p-5 rounded-[60px] rounded-tr-[20px] mb-8 border border-[#C4974E]/20">
                        <h2 class="smallTitle text-[var(--color-title)] font-bold mb-4">
                            {{ $t("projectDetails.payment") }}
                        </h2>

                        <p class="text-[var(--color-text)] paragraph">
                            {{ project?.payment }}
                        </p>
                    </div>

                    <!-- Features -->
                    <div>
                        <h2 class="smallTitle font-bold mb-5">
                            {{ $t("projectDetails.features") }}
                        </h2>

                        <div class="flex flex-wrap gap-3">
                            <span v-for="featureDet in project?.features" :key="featureDet" ref="featuresRef" class="
    px-4
    py-2
    rounded-[60px] rounded-tr-[20px]
    bg-[#C4974E]/10
    border
    border-[#C4974E]/30
    text-[var(--color-primary)]
  ">
                                {{ featureDet }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>