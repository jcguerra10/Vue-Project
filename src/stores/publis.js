import { defineStore, acceptHMRUpdate } from "pinia";
import { initialValues } from "../helpers/index.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xqvbkmwsilgbimeealxp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdmJrbXdzaWxnYmltZWVhbHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2ODkyNDEsImV4cCI6MTk4MTI2NTI0MX0.3dc49yPjZApCW26NO5FurzkYh9qUmmb6L3DQktU3c0o";
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase.from("publis").select();

export const usePublisStore = defineStore("publis", {
    state: () => ({
        publis: data.length !== null ? data : initialValues(supabase),
    }),
    getters: {
        getPublis: (state) => [...state.publis],
    },
    actions: {
        async newPubli(publi) {
            this.publis = [publi, ...this.publis];
            const { error } = await supabase.from("publis").insert(publi);
            console.log(error);
        },
        async newComment(idPubli, comment) {
            const index = this.publis
                .map((object) => object.id)
                .indexOf(idPubli);
            this.publis[index].comments = [
                ...this.publis[index].comments,
                comment,
            ];

            const { error } = await supabase
                .from("publis")
                .update(this.publis[index])
                .eq("id", idPubli);
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePublisStore, import.meta.hot));
}
