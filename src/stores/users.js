import { defineStore, acceptHMRUpdate } from "pinia";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xqvbkmwsilgbimeealxp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdmJrbXdzaWxnYmltZWVhbHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2ODkyNDEsImV4cCI6MTk4MTI2NTI0MX0.3dc49yPjZApCW26NO5FurzkYh9qUmmb6L3DQktU3c0o";
const supabase = createClient(supabaseUrl, supabaseKey);
const user = supabase.auth.user
console.log(user)

export const useUsersStore = defineStore("users", {
    state: () => ({
        activeUser: localStorage.getItem("activeUser")
        ? JSON.parse(localStorage.getItem("activeUser"))
        : {},
    }),
    getters: {
        getActiveUser: (state) => state.activeUser,
        getEmailActiveUser: (state) => state.activeUser === undefined ? state.activeUser.user.email : "",
    },
    actions: {
        async signUp(user) {
            const { data, error } = await supabase.auth.signUp({
                email: user.email,
                password: user.password,
            });
            this.activeUser = data;
            const parsed = JSON.stringify(this.activeUser);
            localStorage.setItem("activeUser", parsed);
        },
        async signIn(user) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: user.email,
                password: user.password,
            });
            if (data === null) {
                alert("Error signing in");
                console.log("---", error);
            } else {
                this.activeUser = data;
                console.log("activeUser", this.activeUser);
            }
            const parsed = JSON.stringify(this.activeUser);
            localStorage.setItem("activeUser", parsed);
        },
        async signOut() {
            const { error } = await supabase.auth.signOut();
            console.log("---", error);
            if (error) {
                alert("Error signing out");
                console.log("---", error);
            }
            this.activeUser = {}
            localStorage.removeItem("activeUser")
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
