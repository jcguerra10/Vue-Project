<template>
    <div>
        <header>
            <router-link to="/">Social</router-link>
            <router-link to="/publis">Publis</router-link>
            <router-link to="/newpublis">New Publi</router-link>
        </header>
        <router-view v-slot="{ Component }">
            <component :is="Component" :publisArray="publisArray"></component>
        </router-view>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Social from "./pages/Social.vue";
import Publis from "./pages/Publis.vue";
import NewPublis from "./pages/NewPublis.vue";
export default {
    data() {
        return {
            publisArray: [
                {
                    id: "1",
                    img: "../resources/img1.jpeg",
                    description: "Lorem ipsum dolor sit amet, consectetur adip",
                    game: "EjMost",
                },
                {
                    id: 2,
                    img: "",
                    description: "Dolor sit amet, lorem ipsum consectetur adip",
                    game: "EjWars",
                },
                {
                    id: 3,
                    img: "",
                    description: "Morbi vitae, consectetur adip",
                    game: "Ejcasse",
                },
                {
                    id: 4,
                    img: "",
                    description: "Morbi, Vitae consectetur adip",
                    game: "Ejcasse",
                },
            ],
        };
    },
    methods: {
        handleClick() {
            this.$router.push({
                name: "publis", //use name for router push
                params: this.publisArray
            });
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