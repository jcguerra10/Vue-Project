<template>
    <div class="center">
        <div class="container container-gap">
            <div class="row">
                <img class="publication--item__img" src="../resources/img2.jpeg" alt="Publication" />
                <div class="comentary bg-dark-ligth">
                    <div class="">
                        <h1>{{ currentPost.description }}</h1>
                        <p>Description: </p>
                        <h2>{{ currentPost.game }}</h2>
                        <p>Label: </p>
                        <h2>{{ currentPost.label }}</h2>
                        <p>Genre: </p>
                        <h2>{{ currentPost.genre }}</h2>
                    </div>
                </div>
                <div class="mt-3 comentary bg-dark-ligth">
                    <div>
                        <h1>Comentary</h1>
                        <CommentBar />
                        <Comment  />
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "../components/Comment.vue";
import CommentBar from "../components/CommentBar.vue";
export default {
    props: {
        publisArray: Array,
    },
    computed: {
        currentPost() {
            return this.publisArray.filter(
                (post) => post.id == this.$route.params.id
            )[0];
        },
    },
    components: { Comment, CommentBar },
};
</script>

<style scoped>

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
</style>