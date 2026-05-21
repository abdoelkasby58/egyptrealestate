import { defineStore } from "pinia";
import { projects as projectsAr } from "@/api/projectsAr";
import { projects as projectsEn } from "@/api/projectsEn";
import { useLangStore } from "@/stores/lang";
import { watch } from "vue";

export const useApistore = defineStore("projects", {
  state: () => ({
    allProjects: [],
    loading: false,
  }),
  getters: {
    getAll: (state) => state.allProjects,
    count: (state) => state.allProjects.length,
  },
  actions: {
    fetchProjects() {
      this.loading = true;
      const langStore = useLangStore();
      this.allProjects = langStore.locale === "ar" ? projectsAr : projectsEn;
      setTimeout(() => {
        this.loading = false; 
      }, 200);
    },
    init() {
      const langStore = useLangStore();
      this.fetchProjects();
      watch(() => langStore.locale, () => {
        this.fetchProjects();
      });
    },
  },
});
