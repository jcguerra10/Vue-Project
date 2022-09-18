<template>
    <div>
        <Header />
        <router-view v-slot="{ Component }">
            <component
                :is="Component"
                :publisArray="publisArray"
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
export default {
    data() {
        return {
            publisArray: [],
        };
    },
    mounted() {
        if (localStorage.getItem("publis")) {
            this.publisArray = JSON.parse(localStorage.getItem("publis"));
        }
    },
    methods: {
        addPubli(publi) {
            this.publisArray = [...this.publisArray, publi];
            const parsed = JSON.stringify(this.publisArray);
            localStorage.setItem("publis", parsed);
        },
        addComment(idPubli, comment) {
            const index = this.publisArray
                .map((object) => object.id)
                .indexOf(idPubli);
            this.publisArray[index].comments = [
                ...this.publisArray[index].comments,
                comment,
            ];
            const parsed = JSON.stringify(this.publisArray);
            localStorage.setItem("publis", parsed);
        },
    },
    components: {
        Header,
        Social,
        Publis,
        NewPublis,
    },
};
</script>

<style>
</style>