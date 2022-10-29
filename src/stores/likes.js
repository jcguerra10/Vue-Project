import { defineStore, acceptHMRUpdate } from "pinia";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xqvbkmwsilgbimeealxp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdmJrbXdzaWxnYmltZWVhbHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2ODkyNDEsImV4cCI6MTk4MTI2NTI0MX0.3dc49yPjZApCW26NO5FurzkYh9qUmmb6L3DQktU3c0o";
const supabase = createClient(supabaseUrl, supabaseKey);

export const useLikesStore = defineStore("likes", {
    state: () => ({}),
    getters: {},
    actions: {
        async addLike(like) {
            const { error } = await supabase.from("likes").insert(like);
            console.log(error);
        },
        async getLikesOfUser(id) {
            let { data: likes, error } = await supabase.from("likes").select(`publis (*)`).eq("user_id", id);
            let lks = []
            likes.map((lk) => {
                console.log(lk.publis)
                lks = [...lks, lk.publis]
            })
            console.log(">>>", lks)
            return lks;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLikesStore, import.meta.hot));
}
