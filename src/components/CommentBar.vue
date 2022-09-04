<template>
    <div class="container--comment">
        <form action="">
            <div class="grid-3-1">
                <input
                    class="form-input"
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                />
                <button class="button bg-secondary" type="submit">
                    Comment
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
.container--comment {
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
}
.grid-3-1 {
    display: grid;
    gap: 1rem;
    grid-template-columns: 3fr 1fr;
}
.comentary--section {
}
</style>