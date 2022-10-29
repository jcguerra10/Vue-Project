<template>
    <div class="header__container--profile bg-dark">
        <button
            v-if="!haveUser"
            class="bg-dark-ligth"
            @click="handleModal('signup')"
        >
            Sign up
        </button>
        <button
            v-if="!haveUser"
            class="bg-secondary"
            @click="handleModal('signin')"
        >
            Sign in
        </button>
        <h2 v-if="haveUser" @click="this.$router.push('/profile');" class="user__label">
            {{ this.user.user === undefined ? "" : user.user.email }}
        </h2>
        <button
            class="bg-dark-ligth"
            v-if="haveUser"
            @click="(e) => handleSignOut(e)"
        >
            Sign Out
        </button>
    </div>
    <div id="modal" class="modal" @click="(e) => handleClose(e)" v-if="isOpen">
        <div class="modal-content bg-dark">
            <div class="modal-body">
                <form @submit="handleSubmit" class="modal-form">
                    <div v-if="isSignUp">
                        <p>NickName</p>
                        <input
                            class="form-input"
                            type="text"
                            v-model="nickName"
                            placeholder="NickName"
                        />
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            class="form-input"
                            type="text"
                            v-model="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            class="form-input"
                            type="password"
                            v-model="password"
                            placeholder="Password"
                        />
                    </div>
                    <button class="bg-secondary">
                        {{ isSignUp ? "Sign Up" : "Sign In" }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUsersStore } from "../stores/users.js";

export default {
    computed: {
        ...mapStores(useUsersStore),
    },
    data() {
        return {
            user: {},
            isSignUp: false,
            isOpen: false,
            haveUser: false,
            email: "",
            password: "",
            nickName: "",
        };
    },
    mounted() {
        this.user = this.usersStore.getActiveUser;
        console.log("---", { ...this.user });
        if (this.user.user !== undefined) {
            console.log("-------");
            this.haveUser = true;
        }
    },
    emits: ["signUp", "signIn", "signOut"],
    methods: {
        handleModal(whatIs) {
            if (whatIs === "signup") {
                this.isSignUp = true;
            } else if (whatIs === "signin") {
                this.isSignUp = false;
            }
            this.isOpen = true;
        },
        handleClose(e) {
            if (e.target == modal) {
                this.isOpen = false;
            }
        },
        handleSubmit(e) {
            e.preventDefault();
            if ((this.email !== "", this.password !== "")) {
                if (this.isSignUp) {
                    console.log(this.email, this.password, this.nickName);
                    this.usersStore.signUp({
                        email: this.email,
                        password: this.password,
                        options: {
                            data: {
                                name: this.nickName,
                            },
                        },
                    });
                } else {
                    this.usersStore.signIn({
                        email: this.email,
                        password: this.password,
                    });
                }
                this.isSignUp = false;
                this.isOpen = false;
                this.email = "";
                this.password = "";
                this.nickName = "";
                this.haveUser = true;
            } else {
                alert("Tienes campos por llenar");
            }
        },
        handleSignOut(e) {
            e.preventDefault();
            this.usersStore.signOut();
            this.haveUser = false;
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.header__container--profile {
    display: flex;
    justify-content: end;
    padding: 0.5rem;
    gap: 1rem;
}

button {
    border: none;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0.5rem;
    color: white;
    transition: 300ms;
    padding: 0.5rem 2rem;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    margin: 15% auto;
    padding: 2rem;
    width: 50%;
    border-radius: 0.5rem;
}

.modal-body {
    padding: 2px 16px;
}

.modal-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
}

@media (max-width: 768px) {
    .modal-content {
        width: 90%;
        margin: 40% auto;
    }
}

.form-input {
    background-color: #4e4e4e;
}

.user__label {
    cursor: pointer;
    overflow: hidden;
}
</style>
