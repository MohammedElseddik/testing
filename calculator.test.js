const Calculator = require("./calculator.js");

describe("add", () => {
    const sum = new Calculator(10, 2);
    test("add two numbers", () => {
        expect(sum.add()).toBe(12);
    });

    const sum2 = new Calculator(11, 2);
    test("add two numbers", () => {
        expect(sum2.add()).toBe(13);
    });
});

describe("sub", () => {
    const sub1 = new Calculator(10, 2);
    test("subtract two numbers", () => {
        expect(sub1.sub()).toBe(8);
    });

    const sub2 = new Calculator(11, 2);
    test("subtract two numbers", () => {
        expect(sub2.sub()).toBe(9);
    });
});

describe("divide", () => {
    const product = new Calculator(10, 2);
    test("divide two numbers", () => {
        expect(product.divide()).toBe(5);
    });

    const product2 = new Calculator(12, 2);
    test("divide two numbers", () => {
        expect(product2.divide()).toBe(6);
    });
});

describe("multiply", () => {
    const multiply1 = new Calculator(10, 2);
    test("multiply two numbers", () => {
        expect(multiply1.multiply()).toBe(20);
    });

    const multiply2 = new Calculator(12, 2);
    test("multiply two numbers", () => {
        expect(multiply2.multiply()).toBe(24);
    });
});