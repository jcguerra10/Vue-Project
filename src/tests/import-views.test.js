import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";

describe('Views Test', () => {
    test("NewPublis imports as expected", async () => {
        const cmp = await import("../views/NewPublis.vue");
        expect(cmp).toBeDefined();
    });
    test("Publis imports as expected", async () => {
        const cmp = await import("../views/Publis.vue");
        expect(cmp).toBeDefined();
    })
    test("PubliDetail imports as expected", async () => {
        const cmp = await import("../views/PubliDetail.vue");
        expect(cmp).toBeDefined();
    })
    test("Profile imports as expected", async () => {
        const cmp = await import("../views/Profile.vue");
        expect(cmp).toBeDefined();
    })
    test("NotFound imports as expected", async () => {
        const cmp = await import("../views/NotFound.vue");
        expect(cmp).toBeDefined();
    })
    test("NewPublis imports as expected", async () => {
        const cmp = await import("../views/NewPublis.vue");
        expect(cmp).toBeDefined();
    })
})