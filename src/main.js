import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import router from "./router";
import il8n from "./i18n";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Icon", Icon);
app.use(il8n);
app.mount("#app");
