
class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    add() {
        return this.number1 + this.number2;
    }

    sub() {
        return this.number1 - this.number2;
    }

    divide() {
        return this.number1 / this.number2;
    }

    multiply() {
        return this.number1 * this.number2;
    }
}

module.exports = Calculator;