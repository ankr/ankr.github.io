import { greetings } from "./main";

describe("main", () => {
    it("works", () => {
        expect(greetings()).toBe("Hello from js!");
    });
});
