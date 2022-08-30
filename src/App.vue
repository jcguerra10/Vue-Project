<template>
    <div>
        <header>
            <router-link to="/">Social</router-link>
            <router-link to="/publis">Publis</router-link>
            <router-link to="/newpublis">New Publi</router-link>
        </header>
        <router-view/>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Social from "./pages/Social.vue";
import Publis from "./pages/Publis.vue";
import NewPublis from "./pages/NewPublis.vue";
export default {
    components: {
        Header,
        Social,
        Publis,
        NewPublis,
    },
};
</script>

<style>
</style>