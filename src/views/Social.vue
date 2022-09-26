<template>
    <div>
        <main class="">
            <div class="container--items">
                <div class="container--item container--item__text">
                    <h1>Welcome to Social</h1>
                    <p>Best Social Network</p>
                </div>
            </div>
            <div class="container--items">
                <div class="container--item container--item__img">
                    <img src="../resources/logo.png" alt="logo" />
                </div>
            </div>
        </main>
        <div class="container">
            <div class="container--random-publis" v-if="show">
                <div>
                    <h1>Some Random Publis</h1>
                </div>
                <div>
                    <div class="container--publis">
                        <div
                            class="publisArray"
                            v-for="publi in pub"
                            :key="publi.id"
                            @click="() => onListItemClick(publi)"
                        >
                            <Publication :publi="publi" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Publication from "../components/Publication.vue";
export default {
    props: {
        publisArray: Array,
    },
    data() {
        return {
            show: false,
            pub: [],
        };
    },
    methods: {
        onListItemClick(publi) {
            this.$router.push(`/details/${publi.id}`);
        },
    },
    mounted() {
        let max = this.publisArray.length;
        let past = -1;
        let flag = false;
        let ret = [];
        if (this.publisArray.length > 1) {
            this.show = true;
            while (!flag) {
                let intRand = Math.floor(Math.random() * max);
                if (past != intRand) {
                    ret.push(this.publisArray[intRand]);
                    if (past != -1) {
                        flag = true;
                    } else {
                        past = intRand;
                    }
                }
            }
        }
        this.pub = ret;
    },
    components: {
        Publication,
    },
};
</script>

<style lang="scss" scoped>
.container--item {
    top: 0;
    left: 0;
    padding: 2rem;
}

@media (min-width: 768px) {
    .container--item {
        padding: 10rem 2rem;
    }
    .container--item__text {
        justify-content: left;
        text-align: start;
    }
}
.container--item__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.container--item__img {
    display: flex;
    align-items: end;
}

.container--random-publis {
    display: flex;
    flex-direction: column;
    width: 80%;
}
.container--random-publis h1 {
    margin-bottom: 3rem;
    text-align: center; 
}

.container--publis {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}
</style>