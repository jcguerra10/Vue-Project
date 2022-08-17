<template>
    <div>
        <div>
            <Header />
        </div>
        <div>
            <Social />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Social from "./pages/Social.vue";
export default {
    components: {
        Header,
        Social,
    },
};
</script>

<style>
</style>