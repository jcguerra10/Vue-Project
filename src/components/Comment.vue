<template>
    <div>
        <div class="comment bg-dark-ligth">
            <h2>Comment</h2>
            <p>
                {{ comment.text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: {}
    }
};
</script>

<style>
.comment {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 2rem;
}
</style>