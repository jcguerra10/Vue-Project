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
        <div class="container" v-if="show">
            <div>
                <h1>Some Random Publis</h1>
            </div>
            <div>
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
        const max = this.publisArray.length;
        const past = -1;
        const flag = false;
        const ret = [];
        if (this.publisArray.length > 1) {
            this.show = true;
            while (flag) {
                const intRand = Math.floor(Math.random() * max);
                if (past != intRand) {
                    ret.push(intRand);
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
</style>