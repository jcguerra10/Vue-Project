<template>
    <div>
        <Header />
        <Sign />
        <router-view v-slot="{ Component }">
            <component
                :is="Component"
                :publisArray="allPublis"
                @sendm="addPubli"
                @sendc="addComment"
            ></component>
        </router-view>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Social from "./views/Social.vue";
import Publis from "./views/Publis.vue";
import NewPublis from "./views/NewPublis.vue";
import Sign from "./components/Sign.vue";
import { mapStores } from "pinia";
import { usePublisStore } from "./stores/publis.js";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapStores(usePublisStore),
        allPublis() {
            return this.publisStore.getPublis;
        },
    },
    methods: {
        addPubli(publi) {
            this.publisStore.newPubli(publi);
        },
        addComment(idPubli, comment) {
            this.publisStore.newComment(idPubli, comment);
        },
    },
    components: {
    Header,
    Social,
    Publis,
    NewPublis,
    Sign
},
};
</script>

<style>
</style>