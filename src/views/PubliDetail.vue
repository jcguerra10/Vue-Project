<template>
    <div class="center">
        <div class="container container-gap">
            <div class="row">
                <img
                    class="publication--item__img"
                    :src="currentPost.img"
                    alt="Publication"
                />
                <div class="comentary bg-dark-ligth">
                    <div class="">
                        <h1>{{ currentPost.description }}</h1>
                        <p>Game:</p>
                        <h2>{{ currentPost.game }}</h2>
                        <p>Label:</p>
                        <h2>{{ currentPost.label }}</h2>
                        <p>Genre:</p>
                        <h2>{{ currentPost.genre }}</h2>
                        <p v-if="currentPost.userEmail">Author:</p>
                        <h2 v-if="currentPost.userEmail">
                            {{ currentPost.userEmail }}
                        </h2>
                        <div>
                            <img
                                v-if="haveLikeOnPubli"
                                class="like-img"
                                src="../assets/pulgar-arriba-act.png"
                                @click="handleLike"
                                alt="like"
                            />
                            <img
                                v-else
                                class="like-img"
                                src="../assets/pulgar-arriba.png"
                                @click="handleLike"
                                alt="like"
                            />
                        </div>
                    </div>
                </div>
                <div class="mt-3 comentary bg-dark-ligth">
                    <div class="container--comment">
                        <h1>Comentary</h1>
                        <div class="" v-if="canComment">
                            <form action="" @submit="handleSubmit">
                                <div class="grid-3-1">
                                    <input
                                        class="form-input"
                                        type="text"
                                        name="comment"
                                        id="comment"
                                        placeholder="Comment"
                                        v-model="comment.text"
                                    />
                                    <button
                                        class="button bg-secondary"
                                        type="submit"
                                    >
                                        Comment
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div
                            class="comment"
                            v-for="comment in currentPost.comments"
                            :key="comment.id"
                        >
                            <Comment :comment="comment"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import { mapStores } from "pinia";
import { useUsersStore } from "../stores/users.js";
import { useLikesStore } from "../stores/likes.js";
import { generateId } from "../helpers";
export default {
    data() {
        return {
            canComment: false,
            comment: {
                text: "",
            },
            currentP: {},
            like: {
                publi_id: "",
                user_id: "",
            },
        };
    },
    props: {
        publisArray: Array,
    },
    emits: ["sendc"],
    computed: {
        ...mapStores(useUsersStore),
        ...mapStores(useLikesStore),
        currentPost() {
            const post = this.publisArray.filter(
                (post) => post.id == this.$route.params.id
            )[0];
            this.current = post;
            return post;
        },
        haveLikeOnPubli() {
            this.like.publi_id = this.currentPost.id;
            this.like.user_id = this.usersStore.getActiveUser.user.id;
            console.log("!!!");
            return this.likesStore.haveLikeOnPubli(this.like);
        },
    },
    mounted() {
        if (this.usersStore.activeUser.user !== undefined) {
            console.log;
            this.canComment = true;
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            this.$emit("sendc", this.$route.params.id, {
                id: generateId(),
                userEmail: this.usersStore.getActiveUser.user.email,
                ...this.comment,
            });
        },
        handleLike(e) {
            this.like.publi_id = this.currentPost.id;
            this.like.user_id = this.usersStore.getActiveUser.user.id;
            console.log({ ...this.like });
            this.likesStore.addLike(this.like);
        },
    },
    components: { Comment },
};
</script>

<style scoped>
@media (min-width: 980px) {
    .container {
        width: 80%;
    }
}
.container-gap {
    gap: 3rem;
}
.comentary {
    display: flex;
    justify-content: start;
    align-content: center;
    padding: 3rem;
    border-radius: 0.5rem;
}
.container--comment {
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
}

.grid-3-1 {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
}

.like-img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    padding: 0.5rem;
}

@media (min-width: 768px) {
    .grid-3-1 {
        grid-template-columns: 3fr 1fr;
    }
}
</style>
