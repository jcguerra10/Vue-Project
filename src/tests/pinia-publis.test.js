import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test, vi, vitest } from "vitest";
import { usePublisStore } from "../stores/publis";

describe("Publis test", () => {
    vi.mock("@supabase/supabase-js", () => {
        const createClient = vitest.fn(() =>
            Promise.resolve({
                from: vitest.fn(() => ({
                    select: vitest.fn(() => ({
                        eq: vitest.fn(() => ({
                            
                        })
                    })
                })
            })
        );

        return {
            createClient,
        };
    });

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("publis store is defined", () => {
        const store = usePublisStore();
        expect(store).toBeDefined();
    });

    test("publis store has expected properties", () => {
        const store = usePublisStore();
        expect(store.publis).toBeDefined();
        expect(store.publis).toBeInstanceOf(Array);
    });

    test("publis store has expected methods", () => {
        const store = usePublisStore();
        expect(store.getPublis).toBeDefined();
        expect(store.getPublis).toBeInstanceOf(Function);
        expect(store.createPubli).toBeDefined();
        expect(store.createPubli).toBeInstanceOf(Function);
    });
});
