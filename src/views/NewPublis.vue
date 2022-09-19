<template>
    <div class="title">
        <h1>New Publi</h1>
    </div>
    <div class="center">
        <div class="container">
            <form @submit="handleSubmit" class="flex bg-dark-ligth">
                <div class="row-img">
                    <input type="file" @change="handleImage" />
                </div>
                <div class="grid">
                    <div class="row">
                        <p>Description</p>
                        <input
                            class="form-input"
                            type="text"
                            placeholder="Description"
                            v-model="publi.description"
                        />
                    </div>
                    <div class="row">
                        <p>Game</p>
                        <select v-model="publi.game" class="form-input">
                            <option value="" disabled>Select a Game</option>
                            <option
                                class="publisArray"
                                v-for="vg in videoGames"
                                :value="vg"
                            >
                                {{ vg }}
                            </option>
                        </select>
                    </div>
                    <div class="row">
                        <p>Label</p>
                        <select v-model="publi.label" class="form-input">
                            <option value="" disabled>Select a Label</option>
                            <option
                                class="publisArray"
                                v-for="lb in labels"
                                :value="lb"
                            >
                                {{ lb }}
                            </option>
                        </select>
                    </div>
                    <div class="row">
                        <p>Genre</p>
                        <select v-model="publi.genre" class="form-input">
                            <option value="" disabled>Select a Genre</option>
                            <option
                                class="publisArray"
                                v-for="gn in genres"
                                :value="gn"
                            >
                                {{ gn }}
                            </option>
                        </select>
                    </div>
                    <button class="button bg-secondary">Send Publi</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {
    generateId,
    namesOfVideoGames,
    namesOfLabels,
    namesOfGenres,
} from "../helpers";
export default {
    props: {
        publisArray: Array,
    },
    data() {
        return {
            publi: {
                description: "",
                game: "",
                label: "",
                genre: "",
                comments: [],
            },
            videoGames: [],
            labels: [],
            genres: [],
            imageShow: "",
        };
    },
    mounted() {
        this.videoGames = namesOfVideoGames();
        this.labels = namesOfLabels();
        this.genres = namesOfGenres();
    },
    emits: ["sendm", "sendc"],
    methods: {
        handleSubmit: function (e) {
            e.preventDefault();
            console.log({ ...this.publi });
            console.log(this.publi.img);
            this.$emit("sendm", {
                id: generateId(),
                img: this.imageShow,
                ...this.publi,
            });
            this.$router.push("/publis");
        },
        handleImage: function (e) {
            const reader = new FileReader();
            console.log("reading");
            reader.addEventListener("load", () => {
                console.log(reader.result);
                this.imageShow = reader.result;
            });
            reader.readAsDataURL(e.target.files[0]);
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 1024px;
}
@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
.grid {
    display: grid;
    width: 100%;
    border-radius: 0.5rem;
    gap: 1rem;
}
.flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
    justify-content: center;
    align-content: center;
    padding: 3rem;
    border-radius: 0.5rem;
}
@media (min-width: 1024px) {
    .flex {
        flex-direction: row;
        padding: 5rem;
    }
}

.row-img {
    display: flex;
    align-items: center;
    justify-content: center;
}
.img {
    background-color: aliceblue;
    min-width: 200px;
    min-height: 200px;
    border-radius: 10px;
}
</style>