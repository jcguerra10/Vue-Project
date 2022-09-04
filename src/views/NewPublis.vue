<template>
    <div class="title">
        <h1>New Publi</h1>
    </div>
    <div class="center">
        <div class="container">
            <form @submit="handleSubmit" class="flex bg-dark-ligth">
                <div class="row-img">
                    <div class="img"></div>
                </div>
                <div class="grid">
                    <div class="row">
                        <p>Description</p>
                        <input
                            class="form-input"
                            type="text"
                            placeholder="Description"
                            v-model="description"
                        />
                    </div>
                    <div class="row">
                        <p>Game</p>
                        <select v-model="game" class="form-input">
                            <option value="" selected>Select a Game</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div class="row">
                        <p>Labels</p>
                        <select v-model="labels" class="form-input">
                            <option value="" selected>Select a Label</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div class="row">
                        <p>Genre</p>
                        <select v-model="genre" class="form-input">
                            <option value="" selected>Select a Genre</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <button class="button bg-secondary">Send Publi</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publisArray: Array,
            description: "",
            game: "",
            labels: "",
            genre: "",
        };
    },
    methods: {
        handleSubmit : function(e) {
            console.log(this.description)
            console.log(this.game)
            console.log(this.labels)
            console.log(this.genre)
            let publi = {
                description: this.description,
                game: this.game,
                labels: this.labels,
                genre: this.genre,
            }
            this.publisArray
            console.log(this.publisArray)
            e.preventDefault();
        }
    }
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