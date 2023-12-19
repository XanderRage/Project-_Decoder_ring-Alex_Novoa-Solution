// Write your tests here!
const polybiusModule = require('../src/polybius'); 
// The caesar function can now be accessed via caesarModule.caesar
const polybius = polybiusModule.polybius;

const expect = require("chai").expect;

describe("the function should return correctly", () => {
    it("should return a string",() => {
        let actual = polybius("3251131343 2543241341", false);
        let expected = "hello world"

        expect(actual).to.equal(expected);
    });

    it("should correctly handle I and J", () => {
        let actual = polybius("4432423352125413", false);
        let expected = "th(i/j)nkful";

        expect(actual).to.equal(expected);
    });

    it("should return false with an odd amount of numbers", () => {
        let actual = polybius("44324233521254134", false);
        let expected = false;

        expect(actual).to.equal(expected);
    });

    it("should handle characters that aren't letters i.e. !@#$%^&*", () => {
        let actual = polybius("h#ll* w*rld!!");
        let expected = "321313 25241341";

        expect(actual).to.equal(expected);
    })
});