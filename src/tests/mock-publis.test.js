import { expect, test } from "vitest";
import { Publis } from "../views/Publis.vue";

describe("Publis", () => {
    test("Pass the publis", async() => {
        expect(Publis).toBeTruthy();

        const wrapper = mount(Publis(), {
            props: {
                publis: [{
                    id: 1,
                }, ],
            },
        });

        expect(wrapper).toEqual({
            varieties: [
                expect.objectContaining({ id: 1 })
            ]
        });
    });
});