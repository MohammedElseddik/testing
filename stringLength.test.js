const stringLength = require("./stringLength.js");

describe('addTasks and deleteTasks functions test', () => {

    test("returns 10 as the length of string", () => {
        expect(stringLength("javascript")).toBe(10);
    });

    test("throws an error", () => {
        expect(stringLength("javascript")).toBeGreaterThan(11);
    });
});