<template>
    <main>
        <div class="container">
            <div
                class="publisArray"
                v-for="publi in publisArray"
                :key="publi.id"
                @click="() => onListItemClick(publi)"
            >
                <Publication :publi="publi" />
            </div>
        </div>
    </main>
</template>

<script>
import Publication from "../components/Publication.vue";
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
        onListItemClick(publi) {
            console.log("Click en " + publi.description);
        },
    },
    components: { Publication },
};
</script>

<style scoped>
.container {
    display: grid;
    gap: 3rem;
    padding-top: 2rem;
}

@media (min-width: 768px) {
    .container {
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>