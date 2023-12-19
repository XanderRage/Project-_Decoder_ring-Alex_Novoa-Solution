// Write your tests here!
const caesarModule = require('../src/caesar'); 
// The caesar function can now be accessed via caesarModule.caesar
const caesarFunction = caesarModule.caesar;

const expect = require("chai").expect;

describe("the function should return correctly", () => {
    it("should return false if shift value is empty", () => {
        let actual = caesarFunction("the input lol");

        expect(actual).to.equal(false);
    })

    it("should return false if shift outside of allowed range", () => {
        let actual = caesarFunction("the input lol", 99.);

        expect(actual).to.equal(false);
    });

    it("should encode the value correctly", () => {
        let actual = caesarFunction("This is a secret message!", 8);
        let expected = 'bpqa qa i amkzmb umaaiom!';

        expect(actual).to.equal(expected);
    });

    it("should decode the value correctly", () => {
        let actual = caesarFunction("bpqa qa i amkzmb umaaiom!", -8);
        let expected = "this is a secret message!";

        expect(actual).to.equal(expected);
    });

    it("should return characters correctly, even with random symbols", () => {
        let actual = caesarFunction("t@h#i!s$", 8);
        let expected = 'b@p#q!a$';

        expect(actual).to.equal(expected);
    });
});