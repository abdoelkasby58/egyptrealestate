import { defineStore } from "pinia";
import { ref, watch } from "vue";
import i18n from "@/i18n";

export const useLangStore = defineStore("lang", () => {
  const locale = ref(localStorage.getItem("language") || "ar");

  const applyLang = (lang) => {
    i18n.global.locale.value = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
  };
  applyLang(locale.value);
  watch(locale, (newLang) => {
    applyLang(newLang);
  });

  const changeLang = (lang) => {
    locale.value = lang;
  };
  return {
    locale,
    changeLang,
  };
});
