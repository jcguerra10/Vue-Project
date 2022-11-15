import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { usePublisStore } from "../stores/publis";

describe('Publis Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('publis store is defined', () => {
        const store = usePublisStore()
        expect(store).toBeDefined()
    })

    test('publis store has expected properties', () => {
        const store = usePublisStore()
        expect(store.publis).toBeDefined()
        expect(store.publis).toBeInstanceOf(Array)
    })

    test('publis store has expected methods', () => {
        const store = usePublisStore()
        expect(store.newPubli).toBeDefined()
        expect(store.newPubli).toBeInstanceOf(Function)
        expect(store.newComment).toBeDefined()
        expect(store.newComment).toBeInstanceOf(Function)
    })

    test('addPubli adds a publi to the store', () => {
        const store = usePublisStore()
        const publi = {
            id: 1,
            title: 'Test Publi',
            body: 'Test Body',
        }
        store.newPubli(publi)
        expect(store.publis).toHaveLength(12)
        expect(store.publis[0]).toEqual(publi)
    })
})
