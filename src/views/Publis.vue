<template>
    <FilterBar
            @filterGame="handleFilterGame"
            @filterLabel="handleFilterLabel"
            @filterGenre="handleFilterGenre"
            @reset="handleReset"
        />
    <main>
        <div class="container">
            <div
                class="publisArray"
                v-for="publi in pub"
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
import FilterBar from "../components/FilterBar.vue";
export default {
    data() {
        return {
            pub: [],
        };
    },
    props: {
        publisArray: Array,
    },
    methods: {
        onListItemClick(publi) {
            this.$router.push(`/details/${publi.id}`);
        },
        handleFilterGame(filter) {
            this.pub = this.publisArray.filter(
                (post) => post.game == filter
            );
        },
        handleFilterLabel(filter) {
            this.pub = this.publisArray.filter(
                (post) => post.label == filter
            );
        },
        handleFilterGenre(filter) {
            this.pub = this.publisArray.filter(
                (post) => post.genre == filter
            );
        },
        handleReset() {
            this.pub = this.publisArray
        }
    },
    mounted() {
        this.pub = this.publisArray;
    },
    components: { Publication, FilterBar },
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