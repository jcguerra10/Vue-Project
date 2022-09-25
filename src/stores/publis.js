import { defineStore, acceptHMRUpdate } from "pinia";

export const usePublisStore = defineStore("publis", {
    state: () => ({
        publis: localStorage.getItem("publis")
            ? JSON.parse(localStorage.getItem("publis"))
            : [],
    }),
    getters: {
        getPublis: (state) => [...state.publis],
    },
    actions: {
        newPubli(publi) {
            this.publis = [...this.publis, publi];
            const parsed = JSON.stringify(this.publis);
            localStorage.setItem("publis", parsed);
        },
        newComment(idPubli, comment) {
            const index = this.publis
                .map((object) => object.id)
                .indexOf(idPubli);
            this.publis[index].comments = [
                ...this.publis[index].comments,
                comment,
            ];
            const parsed = JSON.stringify(this.publis);
            localStorage.setItem("publis", parsed);
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePublisStore, import.meta.hot));
}
