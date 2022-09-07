<template>
    <div>
        <Header />
        <router-view v-slot="{ Component }">
            <component
                :is="Component"
                :publisArray="publisArray"
                @sendm="addPubli"
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
            this.publisArray = JSON.parse(localStorage.getItem('publis'));
        }
    },
    methods: {
        handleClick() {
            this.$router.push({
                name: "publis", 
                params: this.publisArray,
            });
        },
        addPubli(publi) {
            console.log("publi");
            this.publisArray = [...this.publisArray, publi];
            const parsed = JSON.stringify(this.publisArray);
            localStorage.setItem("publis", parsed);
        },
        persist() {
            localStorage.publisArray = JSON.stringify(this.publisArray);
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