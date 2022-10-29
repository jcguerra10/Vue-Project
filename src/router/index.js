import { createRouter, createWebHistory } from "vue-router";

import Social from "@/views/Social.vue";
import Publis from "@/views/Publis.vue";
import NewPublis from "@/views/NewPublis.vue";
import PubliDetail from "@/views/PubliDetail.vue";
import Profile from "@/views/Profile.vue";
import NotFound from "@/views/NotFound.vue";

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
        },
        {
            path: "/details/:id",
            name: "details",
            component: PubliDetail,
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
        },
        {
            path: "/:notFound(.*)",
            name: "notFound",
            component: NotFound,
        }
    ],
});

export default router;
