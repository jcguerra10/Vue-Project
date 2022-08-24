<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container--item {
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