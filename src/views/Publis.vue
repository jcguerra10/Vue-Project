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
    props: {
        publisArray: Array
    },
    methods: {
        onListItemClick(publi) {
            this.$router.push(`/details/${publi.id}`)
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