       <script setup>
      import { computed, ref } from 'vue'
   
      import { Icon } from '@iconify/vue';
      import { useI18n } from 'vue-i18n';
import Footer from './Footer.vue';

      // إدارة حالة الصفحة (login, register, forgot, confirm)
      const view = ref('login')
      const emailRegex =
        /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

      const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/;
      const passwordShow = ref(false)
      const emaillogin = ref("")
      const emailloginerror = ref("")
      const passwordlogin = ref("")
      const passwordloginerror = ref("")
      const { t } = useI18n()
      const emailerrorMassege = computed(() => {
        if (!emailloginerror.value) return ""
        return t(`errors.${emailloginerror.value}`)
      })
      const passworderrorMassege = computed(() => {
        if (!passwordloginerror.value) return ""
        return t(`errors.${passwordloginerror.value}`)
      })
      const Login = () => {
        emailloginerror.value = "";
        passwordloginerror.value = "";
        const domainlogin = emaillogin.value.split("@")[1];
        const savedEmailLogin = localStorage.getItem("Emailrealestate", emaillogin.value)
        const savedPassLogin = localStorage.getItem("Passwordrealestate", passwordlogin.value)
        let login = false
        if (!emaillogin.value) {
          emailloginerror.value = "enterEmail"
          login = true
        } else if (!allowedDomains.includes(domainlogin) || !emailRegex.test(emaillogin.value)) {
          emailloginerror.value = "invalidEmail"
          login = true
        } else if (savedEmailLogin !== emaillogin.value) {
          emailloginerror.value = "emailNotFound"
          login = true
        }
        if (!passwordlogin.value) {
          passwordloginerror.value = "enterPassword"
          login = true
        } else if (!passwordRegex.test(passwordlogin.value)) {
          passwordloginerror.value = "invalidPassword";
          login = true
        } else if (savedPassLogin !== passwordlogin.value) {
          passwordloginerror.value = "wrongPassword"
          login = true
        }
        if (login) return

      }
      const namecreate = ref("")
      const namecreateError = ref("")
      const emailCreate = ref("")
      const emailCreateError = ref("")
      const passwordcreate = ref("")
      const passwordErrorcreate = ref("")
      const passwordcreateCon = ref("")
      const passwordErrorcreateCon = ref("")
      const passwordShowCreate = ref(false)
      const passwordShowCreateCon = ref(false)
      const emailRegexCreate =
        /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

      const allowedDomainsCreate = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
      const passwordRegexCreate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/;
      const nameErrorCreateMassege = computed(() => {
        if (!namecreateError.value) return ""
        return t(`errors.${namecreateError.value}`)
      })
      const emailErrorCreateMassege = computed(() => {
        if (!emailCreateError.value) return ""
        return t(`errors.${emailCreateError.value}`)
      })
      const passwordErrorCreateMassege = computed(() => {
        if (!passwordErrorcreate.value) return ""
        return t(`errors.${passwordErrorcreate.value}`)
      })
      const passwordConErrorCreateMassege = computed(() => {
        if (!passwordErrorcreateCon.value) return ""
        return t(`errors.${passwordErrorcreateCon.value}`)
      })
      const CreateAcc = () => {
        namecreateError.value = ""
        emailCreateError.value = "";
        passwordErrorcreate.value = "";
        passwordErrorcreateCon.value = "";
        const domainCreate = emailCreate.value.split("@")[1];

        let login = false
        if (!namecreate.value) {
          namecreateError.value = "enterName"
          login = true
        }
        if (!emailCreate.value) {
          emailCreateError.value = "enterEmail"
          login = true
        } else if (!allowedDomainsCreate.includes(domainCreate) || !emailRegexCreate.test(emailCreate.value)) {
          emailCreateError.value = "invalidEmail"
          login = true
        }

        if (!passwordcreate.value) {
          passwordErrorcreate.value = "enterPassword"
          login = true
        } else if (!passwordRegexCreate.test(passwordcreate.value)) {
          passwordErrorcreate.value = "invalidPassword";
          login = true
        }
        if (!passwordcreateCon.value) {
          passwordErrorcreateCon.value = "enterPassword"
          login = true
        } else if (!passwordRegexCreate.test(passwordcreateCon.value)) {
          passwordErrorcreateCon.value = "invalidPassword";
          login = true
        }
        if (login) return
        localStorage.setItem("Emailrealestate", emailCreate.value)
        localStorage.setItem("Passwordrealestate", passwordcreateCon.value)
        namecreate.value = ""
        emailCreate.value = ""
        passwordcreate.value = ""
        passwordcreateCon.value = ""
        view.value = "login"

      }
      const EmailForget = ref("")
      const EmailForgetError = ref("")
      const allowedDomainsForget = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
      const emailRegexCreateForget =
        /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
      const EmailErrorForgetMassege = computed(() => {
        if (!EmailForgetError.value) return ""
        return t(`errors.${EmailForgetError.value}`)
      })
      const forgetAcc = () => {
        EmailForgetError.value = ""
        let DomainForget = EmailForget.value.split("@")[1]
        const SavedEmailForget = localStorage.getItem("Emailrealestate")
        let ForgetEmailLog = false
        if (!EmailForget.value) {
          EmailForgetError.value = "enterEmail"
          ForgetEmailLog = true
        } else if (!allowedDomainsForget.includes(DomainForget)) {
          EmailForgetError.value = "invalidEmail"
          ForgetEmailLog = true
        } else if (SavedEmailForget !== EmailForget.value) {
          EmailForgetError.value = "emailNotFound"
          ForgetEmailLog = true
        }
        if (ForgetEmailLog) return
        EmailForget.value = ""
        view.value = "confirm"
      }
      const passwordRegexConfirm = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,16}$/;
      const passwordConfirm = ref("")
      const passwordErrorConfirm = ref("")
      const passwordConfirmCon = ref("")
      const passwordErrorConfirmCon = ref("")
      const passwordShowConfirm = ref(false)
      const passwordShowConfirmCon = ref(false)
      const PasswordErrorConMassege = computed(() => {
        if (!passwordErrorConfirm.value) return ""
        return t(`errors.${passwordErrorConfirm.value}`)
      })
      const PasswordErrorConfirmConMassege = computed(() => {
        if (!passwordErrorConfirmCon.value) return ""
        return t(`errors.${passwordErrorConfirmCon.value}`)
      })
      const ConfirmPassFun = () => {
        passwordErrorConfirm.value = ""
        passwordErrorConfirmCon.value = ""

        let hasError = false

        if (!passwordConfirm.value) {
          passwordErrorConfirm.value = "enterPassword"
          hasError = true
        } else if (!passwordRegexConfirm.test(passwordConfirm.value)) {
          passwordErrorConfirm.value = "invalidPassword"
          hasError = true
        }

        if (!passwordConfirmCon.value) {
          passwordErrorConfirmCon.value = "enterConfirmPassword"
          hasError = true
        } else if (!passwordRegexConfirm.test(passwordConfirmCon.value)) {
          passwordErrorConfirmCon.value = "invalidPassword"
          hasError = true
        }

        // التحقق إن الاتنين شبه بعض
        if (
          passwordConfirm.value &&
          passwordConfirmCon.value &&
          passwordConfirm.value !== passwordConfirmCon.value
        ) {
          passwordErrorConfirmCon.value = "passwordNotMatch"
          hasError = true
        }

        if (hasError) return

        // تغيير الباسورد
        localStorage.setItem(
          "Passwordrealestate",
          passwordConfirmCon.value
        )

        // تنظيف
        passwordConfirm.value = ""
        passwordConfirmCon.value = ""

        // رجوع للوجين
        view.value = "login"
      }
</script>
<template>
  <section class="absolute top-0 inset-0">
  <div class="relative pt-25 min-h-screen overflow-hidden">
    <!-- الخلفية -->
    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" loading="lazy" decoding="async" alt="Interior"
      class="absolute inset-0 w-full h-full object-cover opacity-100" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>

    

    <!-- المحتوى -->
    <div class="relative z-10 container mx-auto min-h-screen flex items-center justify-center px-4 py-5">
      <div
        class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-[30px] overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 shadow-2xl">
        <!-- الجزء الشمال -->
        <div class="hidden lg:flex flex-col justify-start py-16 px-8 bg-gradient-to-b from-black/30 to-black/60">
          <!-- <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000" 
             alt="Interior" class="absolute inset-0 w-full h-full object-cover opacity-60"> -->
          <h1 class="sectionTitle font-bold text-white leading-tight mb-6">
            {{ $t('auth.welcome') }}
          </h1>

          <p class="text-gray-300 paragraph leading-9 max-w-lg">
            {{ $t('auth.desc') }}
          </p>
        </div>

        <!-- الجزء اليمين -->
      <div class="w-full max-w-full p-5 sm:p-7 lg:p-9 bg-[#131E26]/80 backdrop-blur-xl">
  
  <div class="w-full flex items-center justify-start gap-6 border-b border-white/10 mb-5 z-[111] overflow-x-auto no-scrollbar touch-pan-x">
    <button
      @click="view = 'login'"
      :class="view === 'login'
        ? 'text-white border-[#C5A059]'
        : 'text-gray-400 border-transparent'"
      class="pb-3 text-base paragraph border-b-2 transition-all whitespace-nowrap flex-shrink-0 cursor-pointer font-medium">
      {{ $t('auth.login') }}
    </button>

    <button
      @click="view = 'register'"
      :class="view === 'register'
        ? 'text-white border-[#C5A059]'
        : 'text-gray-400 border-transparent'"
      class="pb-3 paragraph text-base border-b-2 transition-all whitespace-nowrap flex-shrink-0 cursor-pointer font-medium">
      {{ $t('auth.register') }}
    </button>
  </div>

  <div v-if="view === 'login'" class="space-y-3">
    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.email') }}
      </label>

      <input type="email" v-model="emaillogin" :placeholder="$t('auth.placeholders.email')"
        class="w-full inputText h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059] transition-all" />
      <div class="min-h-[24px] flex items-center">
        <span v-if="emailerrorMassege"
          class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1"> 
          {{ emailerrorMassege }}
        </span>
      </div>
    </div>

    <div>
      <div class="w-full flex items-center justify-between mb-2">
        <label class="text-gray-300 labelText">
          {{ $t('auth.password') }}
        </label>

        <button @click="view = 'forgot'" class="rounded-[60px] rounded-tr-[20px] text-[#C5A059] smallText hover:underline">
          {{ $t('auth.forgotPassword') }}
        </button>
      </div>
      <div class="relative">
        <input v-model="passwordlogin" :type="passwordShow ? 'text' : 'password'"
          :placeholder="$t('auth.placeholders.password')"
          class="w-full inputText h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059] transition-all" />
        <span @click="passwordShow = !passwordShow" class="absolute top-4 inset-e-3 paragraphLg text-[#C4974E] cursor-pointer">
          <Icon :icon="passwordShow ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
        </span>
      </div>
      <div class="min-h-[24px] flex items-center w-full">
        <span v-if="passworderrorMassege"
          class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ passworderrorMassege }}
        </span>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <input type="checkbox" id="remember" class="accent-[#C5A059] rounded-[60px] rounded-tr-[20px] inputText" />
      <label for="remember" class="labelText text-gray-400">
        {{ $t('auth.remember') }}
      </label>
    </div>

    <button
      class="w-full h-12 smallText rounded-[60px] rounded-tr-[20px] bg-[#C5A059] hover:bg-[#b68d3f] text-black font-bold transition-all duration-300 cursor-pointer"
      @click="Login">
      {{ $t('auth.login') }}
    </button>
  </div>

  <div v-if="view === 'register'" class="space-y-3">
    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.fullName') }}
      </label>

      <input type="text" v-model="namecreate" :placeholder="$t('auth.placeholders.fullName')"
        class="w-full inputText h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
      <div class="min-h-[24px] flex items-center w-full">
        <span v-if="nameErrorCreateMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ nameErrorCreateMassege }}
        </span>
      </div>
    </div>

    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.email') }}
      </label>

      <input type="email" v-model="emailCreate" :placeholder="$t('auth.placeholders.email')"
        class="w-full h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
     <div class="min-h-[24px] flex items-center w-full">
        <span v-if="emailErrorCreateMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ emailErrorCreateMassege }}
        </span>
      </div>
    </div>

    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.password') }}
      </label>
      <div class="relative">
        <input :type="passwordShowCreate ? 'text' : 'password'" :placeholder="$t('auth.placeholders.password')"
          v-model="passwordcreate"
          class="w-full h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
        <span @click="passwordShowCreate = !passwordShowCreate" class="absolute top-4 inset-e-3 paragraphLg text-[#C4974E] cursor-pointer">
          <Icon :icon="passwordShowCreate ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
        </span>
      </div>
       <div class="min-h-[24px] flex items-center w-full">
        <span v-if="passwordErrorCreateMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ passwordErrorCreateMassege }}
        </span>
      </div>
    </div>
    
    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.confirmPassword') }}
      </label>
      <div class="relative">
        <input :type="passwordShowCreateCon ? 'text' : 'password'"
          :placeholder="$t('auth.placeholders.confirmPassword')" v-model="passwordcreateCon"
          class="w-full h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
        <span @click="passwordShowCreateCon = !passwordShowCreateCon" class="absolute top-4 inset-e-3 paragraphLg text-[#C4974E] cursor-pointer">
          <Icon :icon="passwordShowCreateCon ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
        </span>
      </div>
      <div class="min-h-[24px] flex items-center w-full">
        <span v-if="passwordConErrorCreateMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ passwordConErrorCreateMassege }}
        </span>
      </div>
    </div>

    <button @click="CreateAcc"
      class="w-full h-12 smallText rounded-[60px] rounded-tr-[20px] bg-[#C5A059] hover:bg-[#b68d3f] text-black font-bold transition-all cursor-pointer">
      {{ $t('auth.register') }}
    </button>
  </div>

  <div v-if="view === 'forgot'" class="space-y-5">
    <div class="text-center">
      <h2 class="smallTitle font-bold text-white mb-3">
        {{ $t('auth.resetPassword') }}
      </h2>
      <p class="text-gray-400 smallText">
        {{ $t('auth.resetDesc') }}
      </p>
    </div>
    <div>
      <input type="email" v-model="EmailForget" :placeholder="$t('auth.placeholders.email')"
        class="w-full h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
      <div class="min-h-[24px] flex items-center w-full">
        <span v-if="EmailErrorForgetMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ EmailErrorForgetMassege }}
        </span>
      </div>
    </div>
    <button @click="forgetAcc"
      class="w-full h-12 smallText rounded-[60px] rounded-tr-[20px] bg-[#C5A059] hover:bg-[#b68d3f] text-black font-bold cursor-pointer">
      {{ $t('auth.sendCode') }}
    </button>

    <button @click="view = 'login'" class="w-full text-gray-400 smallText rounded-[60px] rounded-tr-[20px] hover:text-white transition-all cursor-pointer">
      {{ $t('auth.back') }}
    </button>
  </div>

  <div v-if="view === 'confirm'" class="space-y-3">
    <div class="text-center">
      <h2 class="smallTitle font-bold text-white mb-3">
        {{ $t('auth.newPassword') }}
      </h2>
    </div>

    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.newPasswordLabel') }}
      </label>
      <div class="relative">
        <input :type="passwordShowConfirm ? 'text' : 'password'" v-model="passwordConfirm"
          :placeholder="$t('auth.placeholders.newPassword')"
          class="w-full h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
        <span @click="passwordShowConfirm = !passwordShowConfirm" class="absolute top-4 inset-e-3 paragraphLg text-[#C4974E] cursor-pointer">
          <Icon :icon="passwordShowConfirm ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
        </span>
      </div>
      <div class="min-h-[24px] flex items-center w-full">
        <span v-if="PasswordErrorConMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ PasswordErrorConMassege }}
        </span>
      </div>
    </div>

    <div>
      <label class="block text-gray-300 mb-2 labelText">
        {{ $t('auth.confirmPassword') }}
      </label>
      <div class="relative">
        <input :type="passwordShowConfirmCon ? 'text' : 'password'" v-model="passwordConfirmCon"
          :placeholder="$t('auth.placeholders.confirmPassword')"
          class="w-full h-12 px-4 rounded-[60px] rounded-tr-[20px] bg-[#1F2937] border border-white/10 text-white outline-none focus:border-[#C5A059]" />
        <span @click="passwordShowConfirmCon = !passwordShowConfirmCon" class="absolute top-4 inset-e-3 paragraphLg text-[#C4974E] cursor-pointer">
          <Icon :icon="passwordShowConfirmCon ? 'mdi:eye' : 'mdi:eye-off'"></Icon>
        </span>
      </div>
      <div class="min-h-[24px] flex items-center w-full">
        <span v-if="PasswordErrorConfirmConMassege" class="border-s-4 border-red-500 text-red-500 rounded-[3px] w-full extraSmallText px-2 my-1">
          {{ PasswordErrorConfirmConMassege }}
        </span>
      </div>
    </div>

    <button @click="ConfirmPassFun"
      class="w-full h-12 rounded-[60px] rounded-tr-[20px] smallText bg-[#C5A059] hover:bg-[#b68d3f] text-black font-bold cursor-pointer">
      {{ $t('auth.save') }}
    </button>
  </div>

  <div v-if="view === 'login' || view === 'register'" class="mt-10">
    <div class="relative flex items-center justify-center mb-6">
      <div class="w-full border-t border-white/10"></div>
      <span class="absolute px-4 rounded-[60px] rounded-tr-[20px] bg-[#131E26] smallText text-gray-400">
        {{ $t('auth.orContinue') }}
      </span>
    </div>

    <div class="flex items-center justify-center gap-4">
      <button class="w-14 h-14 rounded-[60px] rounded-tr-[20px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
        <img loading="lazy" decoding="async" src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-6 h-6" />
      </button>

      <button class="w-14 h-14 rounded-[60px] rounded-tr-[20px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
        <img loading="lazy" decoding="async" src="https://www.svgrepo.com/show/475647/facebook-color.svg" class="w-6 h-6" />
      </button>

      <button class="w-14 h-14 rounded-[60px] rounded-tr-[20px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
        <img loading="lazy" decoding="async" src="https://www.svgrepo.com/show/448202/apple.svg" class="w-6 h-6 invert" />
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <Footer></Footer>
  </section>
</template>


<style scoped>
/* إضافة خطوط عربية إذا لزم الأمر */
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap');

.font-sans {
  /* color: #c4974e86; */
  font-family: 'Tajawal', sans-serif;
}
</style>