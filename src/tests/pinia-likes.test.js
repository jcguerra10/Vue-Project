import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useLikesStore } from "../stores/likes"

describe('Likes Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('likes store is defined', () => {
        const store = useLikesStore()
        expect(store).toBeDefined()
    })

    test('likes store has expected methods', () => {
        const store = useLikesStore()
        expect(store.addLike).toBeDefined()
        expect(store.addLike).toBeInstanceOf(Function)
    })
})