import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./pages/index.vue";

createApp(App)
  .use(
    createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          component: IndexPage,
        },
      ],
    })
  )
  .mount("#app");
