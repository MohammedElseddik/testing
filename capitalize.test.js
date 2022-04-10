const capitalize = require("./capitalizeString.js");

test("capitalize the first character of a string", () => {
    expect(capitalize("javaScript")).toBe("JavaScript");
});