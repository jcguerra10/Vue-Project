<template>
    <div>
        <div>
            <Header />
        </div>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Social />
                </Route>
                <Route path="publis">
                    <Publis />
                </Route>
                <Route path="newpublis">
                    <NewPublis />
                </Route>
            </Routes>
        </BrowserRouter>
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