const fizbuzz = require("../index");

describe("fizbuzz", () => {
    it("returns FizzBuzz when value is devisible by 15", () => {
        expect(fizbuzz(30)).toStrictEqual("FizzBuzz");
    });

    it("returns Fizz when value is divisible by 3", () => {
        expect(fizbuzz(9)).toStrictEqual("Fizz");
    });

    it("returns Buzz when value is divisible by 5", () => {
        expect(fizbuzz(10)).toStrictEqual("Buzz");
    });

    it("returns the value when value is not divisible by 3 or 5", () => {
        expect(fizbuzz(7)).toStrictEqual("7");
    });


})
