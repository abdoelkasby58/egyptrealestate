<script setup>
import { Icon } from "@iconify/vue"
import gsap from "gsap";
import { onMounted, ref } from "vue"
const animationtitle = ref(null)
const animationUs = ref(null);
const animationForm = ref(null)
onMounted(() => {
    gsap.from(animationtitle.value, {
        opacity: 0,
        duration: 0.4,
        scale:0.1,
        y:60,
        delay:0.4,
        ease: "power1.inOut"
    })
    gsap.from(animationUs.value, {
        opacity: 0,
        duration: 0.4,
        scale:0.9,
        x:-80,
        delay:0.8,
        ease: "power1.inOut"
    })
    gsap.from(animationForm.value, {
        opacity: 0,
        duration: 0.4,
        scale:0.9,
        x:80,
        delay:0.8,
        ease: "power1.inOut"
    })
})
const formData = ref({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
})

// كائن لتخزين رسائل الأخطاء الخاصة بكل حقل ديناميكياً
const errors = ref({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
})

const loading = ref(false)
const success = ref(false)

const allowedDomainsContactUS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
const emailRegexContactUs = /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;


const handleSubmit = async () => {
    // 1. تصفية الأخطاء السابقة قبل البدء بفحص جديد
    errors.value = { name: "", email: "", phone: "", projectType: "", message: "" }
    let isValid = true

    // 2. التحقق من حقل الاسم
    if (!formData.value.name.trim()) {
        errors.value.name = "errors.nameRequired"
        isValid = false
    } else if (formData.value.name.trim().length < 3) {
        errors.value.name = "errors.nameShort"
        isValid = false
    }

    // 3. التحقق من حقل البريد الإلكتروني (Regex + Allowed Domains)
    const emailVal = formData.value.email.trim();
    if (!emailVal) {
        errors.value.email = "errors.emailRequired"
        isValid = false
    } else if (!emailRegexContactUs.test(emailVal)) {
        errors.value.email = "errors.emailInvalid"
        isValid = false
    } else {
        const domain = emailVal.split("@")[1]?.toLowerCase();
        if (!allowedDomainsContactUS.includes(domain)) {
            errors.value.email = "errors.domainNotAllowed"
            isValid = false
        }
    }

    // 4. التحقق من حقل الهاتف
    if (!formData.value.phone.trim()) {
        errors.value.phone = "errors.phoneRequired"
        isValid = false
    }

    // 5. التحقق من نوع المشروع
    if (!formData.value.projectType) {
        errors.value.projectType = "errors.projectRequired"
        isValid = false
    }

    // 6. التحقق من نص الرسالة
    if (!formData.value.message.trim()) {
        errors.value.message = "errors.messageRequired"
        isValid = false
    }

    // إذا وجد أي خطأ، نوقف التنفيذ فوراً ونمنع الإرسال
    if (!isValid) return

    // إذا كانت البيانات سليمة بنسبة 100%، نبدأ عملية الإرسال
    loading.value = true
    try {
        console.log("Form Submitted Successfully:", formData.value)

        // محاكاة طلب الـ API
        await new Promise(resolve => setTimeout(resolve, 1500))
        success.value = true

        // إعادة تعيين الحقول بعد النجاح
        formData.value = {
            name: "",
            email: "",
            phone: "",
            projectType: "",
            message: ""
        }

        setTimeout(() => {
            success.value = false
        }, 4000)

    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <section
        class="py-16 px-4 min-h-screen bg-[var(--color-bg)] transition-colors duration-300 relative overflow-hidden bg-cover bg-center">
        <div class="max-w-[1200px] mx-auto relative z-10">

            <div ref="animationtitle"
                class="text-center mb-12 bg-[var(--color-boxes-pagedetails)] py-4 md:py-8 backdrop-blur-sm rounded-xl">
                <h1 class="mainTitle text-[var(--color-title)] mb-3">
                    {{ $t("contact.title") }}
                </h1>
                <p class="paragraph text-[var(--color-text)] max-w-2xl mx-auto mb-4">
                    {{ $t("contact.subtitle") }}
                </p>

                <Transition name="fade">
                    <section class="h-4">
                        <div v-if="success"
                            class="inline-block bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-2.5 rounded-[60px] rounded-tr-[20px] smallText font-medium animate-bounce">
                            ✔ {{ $t("contact.successMessage") || "Message sent successfully!" }}
                        </div>
                    </section>
                </Transition>
            </div>

            <div class="grid md:grid-cols-12 gap-8 items-start">

                <div ref="animationUs"
                    class="md:col-span-5 bg-[var(--color-boxes-pagedetails)] border border-white/5 rounded-[24px] p-6 md:p-8 space-y-8 shadow-lg shadow-black/10">

                    <div class="flex items-start gap-4">
                        <div
                            class="p-3 bg-[var(--color-bg)] rounded-xl border border-white/5 text-[var(--color-primary)]">
                            <Icon icon="solar:map-point-bold" class="w-5 h-5" />
                        </div>
                        <div>
                            <h3 class="extraSmallText text-[var(--color-text)] opacity-70 mb-1">
                                {{ $t("contact.info.addressTitle") }}
                            </h3>
                            <p class="smallText font-semibold text-[var(--color-title)]">
                                {{ $t("contact.info.addressValue") }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div
                            class="p-3 bg-[var(--color-bg)] rounded-xl border border-white/5 text-[var(--color-primary)]">
                            <Icon icon="solar:phone-bold" class="w-5 h-5" />
                        </div>
                        <div>
                            <h3 class="extraSmallText text-[var(--color-text)] opacity-70 mb-1">
                                {{ $t("contact.info.phoneTitle") }}
                            </h3>
                            <p class="smallText font-semibold text-[var(--color-title)] dir-ltr inline-block">
                                {{ $t("contact.info.phoneValue") }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div
                            class="p-3 bg-[var(--color-bg)] rounded-xl border border-white/5 text-[var(--color-primary)]">
                            <Icon icon="solar:letter-bold" class="w-5 h-5" />
                        </div>
                        <div>
                            <h3 class="extraSmallText text-[var(--color-text)] opacity-70 mb-1">
                                {{ $t("contact.info.emailTitle") }}
                            </h3>
                            <p class="smallText font-semibold text-[var(--color-title)]">
                                {{ $t("contact.info.emailValue") }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div
                            class="p-3 bg-[var(--color-bg)] rounded-xl border border-white/5 text-[var(--color-primary)]">
                            <Icon icon="solar:clock-circle-bold" class="w-5 h-5" />
                        </div>
                        <div>
                            <h3 class="extraSmallText text-[var(--color-text)] opacity-70 mb-1">
                                {{ $t("contact.info.hoursTitle") }}
                            </h3>
                            <p class="smallText font-semibold text-[var(--color-title)]">
                                {{ $t("contact.info.hoursValue") }}
                            </p>
                        </div>
                    </div>

                </div>

                <div ref="animationForm"
                    class="md:col-span-7 bg-[var(--color-surface)] border border-white/5 rounded-[24px] p-6 md:p-8 shadow-lg shadow-black/10">

                    <form @submit.prevent="handleSubmit" class="space-y-5">

                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[var(--color-text)] mb-2 labelText">
                                    {{ $t('contact.form.name') }}
                                </label>
                                <input v-model="formData.name" type="text" :placeholder="$t('contact.form.name')"
                                    class="inputText bg-[var(--color-bg)] text-[var(--color-title)] border rounded-[60px] rounded-tr-[20px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition w-full"
                                    :class="errors.name ? 'border-red-500' : 'border-white/10'" />
                                <div class="min-h-[24px] flex items-center w-full">
                                    <span v-if="errors.name"
                                        class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1 bg-red-500/5">
                                        {{ $t(errors.name) }}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label class="block text-[var(--color-text)] mb-2 labelText">
                                    {{ $t('contact.form.email') }}
                                </label>
                                <input v-model="formData.email" type="email" :placeholder="$t('contact.form.email')"
                                    class="inputText bg-[var(--color-bg)] text-[var(--color-title)] border rounded-[60px] rounded-tr-[20px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition w-full"
                                    :class="errors.email ? 'border-red-500' : 'border-white/10'" />
                                <div class="min-h-[24px] flex items-center w-full">
                                    <span v-if="errors.email"
                                        class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1 bg-red-500/5">
                                        {{ $t(errors.email) }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-[var(--color-text)] mb-2 labelText">
                                {{ $t('contact.form.phone') }}
                            </label>
                            <input v-model="formData.phone" type="tel" :placeholder="$t('contact.form.phone')"
                                class="inputText bg-[var(--color-bg)] text-[var(--color-title)] rounded-[60px] rounded-tr-[20px] border px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition"
                                :class="errors.phone ? 'border-red-500' : 'border-white/10'" />
                            <div class="min-h-[24px] flex items-center w-full">
                                <span v-if="errors.phone"
                                    class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1 bg-red-500/5">
                                    {{ $t(errors.phone) }}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="block text-[var(--color-text)] mb-2 labelText">
                                {{ $t('contact.form.projectType') }}
                            </label>
                            <div class="relative w-full">
                                <select v-model="formData.projectType"
                                    class="inputText bg-[var(--color-bg)] text-[var(--color-text)] border rounded-[60px] rounded-tr-[20px] px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition appearance-none cursor-pointer"
                                    :class="errors.projectType ? 'border-red-500' : 'border-white/10'">
                                    <option value="" disabled selected hidden>
                                        {{ $t("contact.form.selectPlaceholder") }}
                                    </option>
                                    <option value="residential" class="bg-[var(--color-bg)] text-[var(--color-title)]">
                                        {{ $t("contact.form.options.residential") }}
                                    </option>
                                    <option value="commercial" class="bg-[var(--color-bg)] text-[var(--color-title)]">
                                        {{ $t("contact.form.options.commercial") }}
                                    </option>
                                    <option value="investment" class="bg-[var(--color-bg)] text-[var(--color-title)]">
                                        {{ $t("contact.form.options.investment") }}
                                    </option>
                                </select>
                                <div
                                    class="absolute inset-y-0 right-4 rtl:left-4 rtl:right-auto flex items-center pointer-events-none text-gray-400">
                                    <Icon icon="mdi:chevron-down" class="filterIcon" />
                                </div>
                            </div>
                            <div class="min-h-[24px] flex items-center w-full">
                                <span v-if="errors.projectType"
                                    class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1 bg-red-500/5">
                                    {{ $t(errors.projectType) }}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="block text-[var(--color-text)] mb-2 labelText">
                                {{ $t('contact.form.message') }}
                            </label>
                            <textarea v-model="formData.message" rows="4" :placeholder="$t('contact.form.message')"
                                class="inputText bg-[var(--color-bg)] text-[var(--color-title)] border rounded-[60px] rounded-tr-[20px] px-4 py-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 transition"
                                :class="errors.message ? 'border-red-500' : 'border-white/10'"></textarea>
                            <div class="min-h-[24px] flex items-center w-full">
                                <span v-if="errors.message"
                                    class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1 bg-red-500/5">
                                    {{ $t(errors.message) }}
                                </span>
                            </div>
                        </div>

                        <button type="submit" :disabled="loading"
                            class="btnText w-full rounded-[60px] rounded-tr-[20px] bg-[var(--color-primary)] text-black font-semibold py-3.5 transition hover:opacity-90 disabled:opacity-50 flex justify-center items-center gap-2">
                            <span v-if="loading"
                                class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                            <span>{{ loading ? $t("contact.form.sending") : $t("contact.form.submit") }}</span>
                        </button>

                    </form>

                </div>

            </div>

        </div>
    </section>
</template>

<style scoped></style>