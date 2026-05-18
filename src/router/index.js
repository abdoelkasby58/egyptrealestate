import i18n from "@/i18n"
import { computed, watchEffect } from "vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "nav.home",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/ProjectView.vue"),
    meta: {
      title: "nav.projects",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "nav.about",
    },
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsView.vue"),
    meta: {
      title: "nav.news",
    },
  },
  {
    path: "/contactus",
    name: "contactus",
    component: () => import("@/views/ContactViews.vue"),
    meta: {
      title: "nav.contact",
    },
  },
  {
    path: "/pagedetailscompaund/:id",
    name: "details",
    component: () => import("@/components/PageDetails.vue"),
    meta: {
      title: "nav.projects",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/LogIn.vue"),
    meta: {
      title: "nav.consult",
    },
  },
  {
    path: "/mortgagefinance",
    name: "mortgagefinance",
    component: () => import("@/components/MortgageFinance.vue"),
    meta: {
      title: "mortgagefinance",
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const pageTitle = computed(() => {
  if (!router.currentRoute.value.meta.title) return ""

  return i18n.global.t(router.currentRoute.value.meta.title)
})

watchEffect(() => {
  document.title = pageTitle.value
})

export default router