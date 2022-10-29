<template>
    <div class="profile">
        <div v-if="user.user !== undefined">
            <div class="container__profile">
                <h1>Profile</h1>
                <h2>{{ user.user.email }}</h2>
                
            </div>
        </div>
        <div v-else>
            <div class="container__profile">
                <h1>Profile</h1>
                <h2>Not logged in</h2>
            </div>
        </div>
        <div class="container__profile">
            <h1> Likes </h1>
        </div>
        <main>
            
            <div class="container">
                <div class="click" v-for="lk in likes" :key="lk.id" @click="() => onListItemClick(lk)">
                    <PublicationVue :publi="lk" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUsersStore } from "../stores/users.js";
import { useLikesStore } from "../stores/likes.js";
import PublicationVue from "../components/Publication.vue";
export default {
    data() {
        return {
            user: {},
            likes: [],
            getLikesSucces: false,
        };
    },
    computed: {
        ...mapStores(useUsersStore),
        ...mapStores(useLikesStore),
        async getLikes(){
            this.user = this.usersStore.getActiveUser;
            this.likes = await this.likesStore.getLikesOfUser(
                this.user.user.id
            );
            this.getLikesSucces = true;
            console.log("likes", this.likes);
            return this.likes
        }
    },
    mounted() {
        if (this.usersStore.getActiveUser.user !== undefined) {
            this.user = this.usersStore.getActiveUser;
            this.getLikes
        }
    },
    methods: {
        onListItemClick(publi) {
            this.$router.push(`/details/${publi.id}`);
        },
    },
    components: { PublicationVue },
};
</script>

<style scoped>

.container__profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
}

.profile {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    margin-top: 3rem;
}

.container {
    display: grid;
    gap: 3rem;
    padding-top: 2rem;
}

@media (min-width: 768px) {
    .container {
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}
.title__likes {
    text-align: center;
}
</style>
