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
            publisArray: [
                {
                    id: "1",
                    img: "../resources/img1.jpeg",
                    description: "Lorem ipsum dolor sit amet, consectetur adip",
                    game: "EjMost",
                    label: "Picture",
                    genre: "Thriller",
                },
                {
                    id: "2",
                    img: "",
                    description: "Dolor sit amet, lorem ipsum consectetur adip",
                    game: "EjWars",
                    label: "Picture",
                    genre: "Suspenso",
                },
                {
                    id: "3",
                    img: "",
                    description: "Morbi vitae, consectetur adip",
                    game: "Ejcasse",
                    label: "Post",
                    genre: "Comedy",
                },
                {
                    id: "4",
                    img: "",
                    description: "Morbi, Vitae consectetur adip",
                    game: "Ejcasse",
                    label: "Post",
                    genre: "Horror",
                },
            ],
        };
    },
    methods: {
        handleClick() {
            this.$router.push({
                name: "publis", //use name for router push
                params: this.publisArray,
            });
        },
        addPubli(publi) {
            console.log("publi");
            this.publisArray = [...this.publisArray, publi];
        },
        handleSendMessage(event) {
            // Our event handler gets the event, as well as any
            // arguments the child passes to the event
            console.log('guardee', event);
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