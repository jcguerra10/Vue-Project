import { createRouter, createWebHistory } from "vue-router";

import Social from "@/pages/Social.vue";
import Publis from "@/pages/Publis.vue";
import NewPublis from "@/pages/NewPublis.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "social",
            component: Social,
        },
        {
            path: "/Publis",
            name: "publis",
            component: Publis,
        },
        {
            path: "/NewPublis",
            name: "newpublis",
            component: NewPublis,
        }
    ],
});

export default router;
