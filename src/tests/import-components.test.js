describe("import vue components", () => {
    test("Comment imports as expected", async () => {
        const cmp = await import("../components/Comment.vue");
        expect(cmp).toBeDefined();
    });

    test("FilterBar imports as expected", async () => {
        const cmp = await import("../components/FilterBar.vue");
        expect(cmp).toBeDefined();
    });

    test("Header imports as expected", async () => {
        const cmp = await import("../components/Header.vue");
        expect(cmp).toBeDefined();
    });

    test("Publication imports as expected", async () => {
        const cmp = await import("../components/Publication.vue");
        expect(cmp).toBeDefined();
    });

    test("Sign imports as expected", async () => {
        const cmp = await import("../components/Sign.vue");
        expect(cmp).toBeDefined();
    });
});
