import { createPinia, setActivePinia } from "pinia";
import { afterAll, beforeEach, describe, expect, test } from "vitest";
import { useUsersStore } from "../stores/users"

describe('Users Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    test('users store is defined', () => {
        const store = useUsersStore()
        expect(store).toBeDefined()
    })
    test('users store has expected properties', () => {
        const store = useUsersStore()
        expect(store.activeUser).toBeDefined()
        expect(store.activeUser).toBeInstanceOf(Object)
    })
    test('users store has expected methods', () => {
        const store = useUsersStore()
        expect(store.signUp).toBeDefined()
        expect(store.signUp).toBeInstanceOf(Function)
        expect(store.signIn).toBeDefined()
        expect(store.signIn).toBeInstanceOf(Function)
        expect(store.signOut).toBeDefined()
        expect(store.signOut).toBeInstanceOf(Function)
    })

    test('signUp adds a user to the store', async () => {
        const store = useUsersStore()
        const user = {
            id: 1,
            name: 'Test User',
            email: 'test@test',
            password: 'testtesttest',
        }
        await store.signUp(user)
        expect(store.getActiveUser.user).not.null
        store.signOut
    })

    /* test('signIn adds a user to the store', async () => {
        const store = useUsersStore()
        const user = {
            id: 1,
            name: 'Test User',
            email: 'test@test',
            password: 'testtesttest',
        }
        await store.signIn(user)
        expect(store.getActiveUser.user).not.null
    })

    test('signOut removes a user from the store', async () => {
        const store = useUsersStore()
        const user = {
            id: 1,
            name: 'Test User',
            email: 'test@test',
            password: 'testtesttest',
        }
        await store.signIn(user)
        expect(store.getActiveUser.user).not.null
        store.signOut
        expect(store.getActiveUser.user).toBeNull
    }) */
})