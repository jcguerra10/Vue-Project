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
            /*
            MAX_WIDTH: 320,
            MAX_HEIGHT: 180,
            MIME_TYPE: "image/jpeg",
            QUALITY: 0.7,
            */
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
        /*
        handleImage1: function (ev) {
            const file = ev.target.files[0]; // get the file
            const blobURL = URL.createObjectURL(file);
            const img = new Image();
            img.src = blobURL;
            img.onerror = function () {
                URL.revokeObjectURL(this.src);
                // Handle the failure properly
                console.log("Cannot load image");
            };
            img.onload = function () {
                URL.revokeObjectURL(this.src);
                const [newWidth, newHeight] = this.calculateSize(
                    img,
                    this.MAX_WIDTH,
                    this.MAX_HEIGHT
                );
                const canvas = document.createElement("canvas");
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
                canvas.toBlob(
                    (blob) => {
                        // Handle the compressed image. es. upload or save in local state
                        console.log("Original file", file);
                        console.log("Compressed file", blob);
                    },
                    this.MIME_TYPE,
                    this.QUALITY
                );
                document.getElementById("root").append(canvas);
            };
        },
        calculateSize: function(img, maxWidth, maxHeight) {
            let width = img.width;
            let height = img.height;

            // calculate the width and height, constraining the proportions
            if (width > height) {
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
            }
            return [width, height];
        },
        */
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
.my-8 {
    margin-top: 4rem;
    margin-bottom: 4rem;
}
</style>