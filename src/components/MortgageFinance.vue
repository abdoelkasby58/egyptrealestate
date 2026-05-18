<template>
      <div ref="calculatorSection"
        class="flex items-center justify-center p-3 sm:p-4 lg:p-6 mt-5 font-sans">

        <div
            class="w-full max-w-[1400px] min-h-[650px] overflow-hidden rounded-2xl border border-white/5 grid grid-cols-1 lg:grid-cols-12">

            <!-- Left -->
            <div ref="leftContent"
                class="relative lg:col-span-7 p-4 sm:p-6 lg:p-7 flex flex-col justify-center">

                <div class="md:absolute md:top-0 md:inset-s-10 text-center mb-6">
                    <h1 class="text-[var(--color-title)] cardTitle font-bold mb-2">
                        {{ $t('calculator.title') }}
                    </h1>

                    <p class="paragraph text-center md:text-start text-[var(--color-text)]">
                        {{ $t('calculator.subtitle') }}
                    </p>
                </div>

                <div class="space-y-4">

                    <!-- Property Price -->
                    <div ref="inputs">
                        <label class="block text-gray-300 labelText mb-1.5 font-medium">
                            {{ $t('calculator.propertyPrice') }}
                        </label>

                        <div class="relative">
                            <input type="number" v-model="propertyPrice"
                                class="w-full h-10 px-3 rounded-[60px] rounded-tr-[20px] inputText bg-[#1F2937]/80 border border-white/10 text-white font-mono outline-none focus:border-[#C5A059] transition-all text-left" />

                            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 inputText font-sans">
                                {{ $t('calculator.currency') }}
                            </span>
                        </div>
                    </div>

                    <!-- Down Payment -->
                    <div ref="inputs">
                        <label class="block text-gray-300 labelText mb-1.5 font-medium">
                            {{ $t('calculator.downPayment') }}
                        </label>

                        <div class="grid grid-cols-3 gap-2">
                            <div class="relative col-span-1">
                                <input type="number" v-model="downPaymentPercent"
                                    @input="updateDownPaymentAmount"
                                    class="w-full h-10 px-3 rounded-[60px] rounded-tr-[20px] inputText bg-[#1F2937]/80 border border-white/10 text-white font-mono outline-none focus:border-[#C5A059] transition-all text-left" />

                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 inputText">
                                    %
                                </span>
                            </div>

                            <div class="relative col-span-2">
                                <input type="number" v-model="downPaymentAmount"
                                    @input="updateDownPaymentPercent"
                                    class="w-full h-10 px-3 rounded-[60px] rounded-tr-[20px] inputText bg-[#1F2937]/80 border border-white/10 text-white font-mono outline-none focus:border-[#C5A059] transition-all text-left" />

                                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 inputText">
                                    {{ $t('calculator.currency') }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Loan Term -->
                    <div ref="inputs">
                        <label class="block text-gray-300 labelText mb-1.5 font-medium">
                            {{ $t('calculator.loanTerm') }}
                        </label>

                        <div class="relative">
                            <select v-model="loanTerm"
                                class="w-full h-10 px-3 rounded-[60px] rounded-tr-[20px] inputText bg-[#1F2937]/80 border border-white/10 text-white outline-none focus:border-[#C5A059] transition-all appearance-none cursor-pointer">

                                <option :value="10">10 {{ $t('calculator.years') }}</option>
                                <option :value="15">15 {{ $t('calculator.years') }}</option>
                                <option :value="20">20 {{ $t('calculator.years') }}</option>
                                <option :value="25">25 {{ $t('calculator.years') }}</option>
                            </select>

                            <span
                                class="absolute inset-e-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 inputText">
                                ▼
                            </span>
                        </div>
                    </div>

                    <!-- Interest -->
                    <div ref="inputs">
                        <label class="block text-gray-300 labelText mb-1.5 font-medium">
                            {{ $t('calculator.interestRate') }}
                        </label>

                        <div class="relative">
                            <input type="number" step="0.1" v-model="interestRate"
                                class="w-full h-10 px-3 rounded-[60px] rounded-tr-[20px] inputText bg-[#1F2937]/80 border border-white/10 text-white font-mono outline-none focus:border-[#C5A059] transition-all text-left"
                                dir="ltr" />

                            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 inputText">
                                %
                            </span>
                        </div>
                    </div>

                    <div class="border-t border-white/5 my-4"></div>

                    <!-- Result -->
                    <div ref="resultBox"
                        class="bg-[var(--color-boxs)] rounded-[60px] rounded-tr-[20px] p-3 text-center border border-white/5">
                        <p class="text-[var(--color-text)] inputText mb-1">
                            {{ $t('calculator.expectedInstallment') }}
                        </p>

                        <div class="inputText font-bold text-[var(--color-title)] font-mono">
                            {{ formatCurrency(monthlyPayment) }}

                            <span class="inputText font-sans">
                                {{ $t('calculator.perMonth') }}
                            </span>
                        </div>
                    </div>

                    <!-- Button -->
                    <button ref="buttonRef" @click="calculateLoan"
                        class="w-full h-10 opacity-0 rounded-[60px] rounded-tr-[20px] bg-[#C5A059] hover:bg-[#b68d3f] text-[var(--color-title)] text-sm font-bold transition-all duration-300 shadow-lg shadow-[#C5A059]/10 cursor-pointer">

                        {{ $t('calculator.calculateBtn') }}
                    </button>

                </div>
            </div>

            <!-- Right Image -->
            <div ref="imageSide"
                class="hidden lg:block lg:col-span-5 relative min-h-[380px] overflow-hidden">

                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop"
                    alt="عقار مصر"
                    class="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-[4000ms]" />

                <div class="absolute inset-0 bg-gradient-to-r from-[#131E26] via-transparent to-black/20">
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()



// State
const propertyPrice = ref("")
const downPaymentPercent = ref("")
const downPaymentAmount = ref("")
const loanTerm = ref("")
const interestRate = ref("")
gsap.registerPlugin(ScrollTrigger)

const calculatorSection = ref(null)
const leftContent = ref(null)
const imageSide = ref(null)
const inputs = ref([])
const resultBox = ref(null)
const buttonRef = ref(null)


onMounted(() => {

    // Main Animation Timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: calculatorSection.value,
            start: "top 80%", // يبدأ لما السكشن يدخل الشاشة
            toggleActions: "play none none none",
        }
    })

    // Section
    tl.from(calculatorSection.value, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    })

    // Left Content
    .from(leftContent.value, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6")

    // Right Image
    .from(imageSide.value, {
        opacity: 0,
        x: 60,
        scale: 1.1,
        duration: 1.2,
        ease: "power3.out"
    }, "-=1")

    // Inputs
    .from(inputs.value, {
        opacity: 0,
        y: 25,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.7")

    // Result Box
    .from(resultBox.value, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.3")

    // Button
    .to(buttonRef.value, {
        opacity: 1,
        y: 20,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.4")

})
// Update down payment amount
const updateDownPaymentAmount = () => {
    if (propertyPrice.value) {
        downPaymentAmount.value = Math.round(
            (downPaymentPercent.value / 100) * propertyPrice.value
        )
    }
}

// Update down payment percent
const updateDownPaymentPercent = () => {
    if (propertyPrice.value && downPaymentAmount.value) {
        downPaymentPercent.value = parseFloat(
            ((downPaymentAmount.value / propertyPrice.value) * 100).toFixed(1)
        )
    }
}

// Monthly payment
const monthlyPayment = computed(() => {
    const principal = propertyPrice.value - downPaymentAmount.value

    if (principal <= 0) return 0

    const monthlyRate = (interestRate.value / 100) / 12
    const totalMonths = loanTerm.value * 12

    if (monthlyRate === 0) {
        return Math.round(principal / totalMonths)
    }

    const payment =
        (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)

    return Math.round(payment)
})

// Format currency
const formatCurrency = (value) => {
    return new Intl.NumberFormat(
        locale.value === 'ar' ? 'ar-EG' : 'en-US'
    ).format(value)
}

// Calculate
const calculateLoan = () => {

    if (monthlyPayment.value === 0) {
        alert(t('calculator.invalidInputs'))
    } else {
        alert(
            `${t('calculator.successAlert')} ${formatCurrency(
                monthlyPayment.value
            )} ${t('calculator.currency')}`
        )
    }
}
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>