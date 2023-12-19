// Write your tests here!
const substitutionModule = require('../src/substitution'); 
// The caesar function can now be accessed via caesarModule.caesar
const substitution = substitutionModule.substitution;

const expect = require("chai").expect;


describe("the function should return correctly", () => {
    it("should return a correctly with spaces, letters and special chatacters",() => {
        let actual = substitution("You! are! an! excellent! spy!", "xoyqmcgrukswaflnthdjpzibev");
        let expected = "Elp! xhm! xf! mbymwwmfj! dne!";

        expect(actual).to.equal(expected);
    });

    it("should return false if the alpahabet parameter is longer than 26 characters", () => {
        let actual = substitution("message", "abcdefghijklmnopqrstuvwxyz!!!");
        let expected = false;

        expect(actual).to.equal(expected);
    });

    it("should return false if the characters in the alphabet are not all unique", () => {
        let actual = substitution("messsage", "abcabcabcabcabcabcabcabcyz");
        let expected = false;

        expect(actual).to.equal(expected);
    })
});