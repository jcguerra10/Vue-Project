<template>
    <div class="publication">
        <div>
            <div class="publication--item">
                <img class="publication--item__img" src="../resources/img2.jpeg" alt="img publi">
            </div>
            <div class="publication--item__description">
                <p>
                    {{ publi.description }}
                </p>
            </div>
            <div class="">
                <p>
                    {{ publi.game }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        publi: {},
    },
};
</script>

<style>
</style>