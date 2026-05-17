import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/projects",
    name: "projects",

    component: () => import("@/views/ProjectView.vue"),
    meta: {
      title: "Projects",
    },
  },
  {
    path: "/about",
    name: "about",

    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/news",
    name: "news",

    component: () => import("@/views/NewsView.vue"),
    meta: {
      title: "NEWS",
    },
  },
  {
    path: "/contactus",
    name: "contactus",

    component: () => import("@/views/ContactViews.vue"),
    meta: {
      title: "ContactUs",
    },
  },
  {
    path: "/pagedetailscompaund/:id",
    name: "details",

    component: () => import("@/components/PageDetails.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/login",
    name: "login",

    component: () => import("@/components/LogIn.vue"),
    meta: {
      title: "Log in",
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.afterEach((to) => {
  document.title = to.meta.title || "Default App Title";
});
export default router;
