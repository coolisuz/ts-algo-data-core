import { Trie } from "../../../src/data-structures/trie/trie";
import { findLongestCommonPrefix } from "../../../src/algorithms/trie/find-longest-common-prefix";

describe("findLongestCommonPrefix", () => {
    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();
    });

    test("should return empty string for empty trie", () => {
        expect(findLongestCommonPrefix(trie.root!)).toBe("");
    });

    test("should return the word itself for single word", () => {
        trie.insert("hello");
        expect(findLongestCommonPrefix(trie.root!)).toBe("hello");
    });

    test("should find common prefix for multiple words", () => {
        trie.insert("hello");
        trie.insert("help");
        trie.insert("helmet");
        expect(findLongestCommonPrefix(trie.root!)).toBe("hel");
    });

    test("should return empty string when no common prefix exists", () => {
        trie.insert("hello");
        trie.insert("world");
        expect(findLongestCommonPrefix(trie.root!)).toBe("");
    });

    test("should handle words with same prefix but different lengths", () => {
        trie.insert("program");
        trie.insert("programming");
        trie.insert("programmer");
        expect(findLongestCommonPrefix(trie.root!)).toBe("program");
    });

    test("should handle case sensitivity", () => {
        trie.insert("Hello");
        trie.insert("Help");
        trie.insert("Helmet");
        expect(findLongestCommonPrefix(trie.root!)).toBe("hel");
    });

    test("should handle empty strings", () => {
        trie.insert("");
        trie.insert("hello");
        expect(findLongestCommonPrefix(trie.root!)).toBe("");
    });

    test("should handle large number of words", () => {
        const words = [
            "apple",
            "application",
            "appliance",
            "appreciate",
            "approach",
            "appropriate",
            "approximate",
        ];
        words.forEach((word) => trie.insert(word));
        expect(findLongestCommonPrefix(trie.root!)).toBe("app");
    });
});
