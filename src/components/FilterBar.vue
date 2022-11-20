<template>
    <div class="container--filter-bar">
        <div class="row">
            <p>Game</p>
            <select
                id="gameFilterSelect"
                @change="handleGame"
                v-model="gameSelect"
                class="form-input"
            >
                <option value="" disabled>Select a Game</option>
                <option
                    class="publisArray"
                    v-for="vg in videoGames"
                    :value="vg"
                    :key="vg"
                >
                    {{ vg }}
                </option>
            </select>
        </div>
        <div class="row">
            <p>Label</p>
            <select
                id="labelFilterSelect"
                @change="handleLabels"
                v-model="labelSelect"
                class="form-input"
            >
                <option value="" disabled>Select a Label</option>
                <option
                    class="publisArray"
                    v-for="lb in labels"
                    :value="lb"
                    :key="lb"
                >
                    {{ lb }}
                </option>
            </select>
        </div>
        <div class="row">
            <p>Genre</p>
            <select
                id="genreFilterSelect"
                @change="handleGenres"
                v-model="genreSelect"
                class="form-input"
            >
                <option value="" disabled>Select a Genre</option>
                <option
                    class="publisArray"
                    v-for="gn in genres"
                    :value="gn"
                    :key="gn"
                >
                    {{ gn }}
                </option>
            </select>
        </div>
        <div class="row">
            <button @click="handleReset" type="submit" class="button">
                Reset
            </button>
        </div>
    </div>
</template>

<script>
import { namesOfVideoGames, namesOfLabels, namesOfGenres } from "../helpers";
export default {
    data() {
        return {
            gameSelect: "",
            labelSelect: "",
            genreSelect: "",
            videoGames: [],
            labels: [],
            genres: [],
        };
    },
    emits: ["filterGame", "filterLabel", "filterGenre", "reset"],
    mounted() {
        this.videoGames = namesOfVideoGames();
        this.labels = namesOfLabels();
        this.genres = namesOfGenres();
    },
    methods: {
        handleGame: function (e) {
            this.$emit("filterGame", this.gameSelect);
            this.labelSelect = "";
            this.genreSelect = "";
        },
        handleLabels: function (e) {
            this.$emit("filterLabel", this.labelSelect);
            this.gameSelect = "";
            this.genreSelect = "";
        },
        handleGenres: function (e) {
            this.$emit("filterGenre", this.genreSelect);
            this.gameSelect = "";
            this.labelSelect = "";
        },
        handleReset: function (e) {
            this.gameSelect = "";
            this.labelSelect = "";
            this.genreSelect = "";
            this.$emit("reset");
        },
    },
};
</script>

<style scoped>
.button {
    padding: 0;
    width: fit-content;
    background-color: transparent;
    color: #0062ff;
}
.button:hover {
    cursor: pointer;
    color: #fff;
    background-color: transparent;
    transition: 600ms;
}
</style>
