import { TrieNode } from "../../../src/data-structures/trie";
import { findAllWords } from "../../../src/algorithms/trie/find-all-words";

describe("findAllWords", () => {
    // Helper function to create a trie from an array of words
    function createTrie(words: string[]): TrieNode {
        const root = new TrieNode("");

        for (const word of words) {
            let current = root;
            let validWord = "";

            // First collect all valid lowercase letters
            for (const char of word.toLowerCase()) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                if (index >= 0 && index < 26) {
                    validWord += char;
                }
            }

            // Then create the trie path only for valid letters
            for (const char of validWord) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                if (!current.children[index]) {
                    current.children[index] = new TrieNode(char);
                }
                current = current.children[index];
            }

            if (validWord.length > 0) {
                current.isEndWord = true;
            }
        }

        return root;
    }

    test("should return empty array for empty trie", () => {
        const root = new TrieNode("");
        expect(findAllWords(root)).toEqual([]);
    });

    test("should find single word correctly", () => {
        const root = createTrie(["hello"]);
        expect(findAllWords(root)).toEqual(["hello"]);
    });

    test("should find multiple words correctly", () => {
        const root = createTrie(["hello", "world", "hi"]);
        const result = findAllWords(root);
        expect(result).toHaveLength(3);
        expect(result).toContain("hello");
        expect(result).toContain("world");
        expect(result).toContain("hi");
    });

    test("should find words with common prefixes correctly", () => {
        const root = createTrie(["cat", "cats", "catch"]);
        const result = findAllWords(root);
        expect(result).toHaveLength(3);
        expect(result).toContain("cat");
        expect(result).toContain("cats");
        expect(result).toContain("catch");
    });

    test("should find words with overlapping paths correctly", () => {
        const root = createTrie(["ant", "any", "and", "an"]);
        const result = findAllWords(root);
        expect(result).toHaveLength(4);
        expect(result).toContain("ant");
        expect(result).toContain("any");
        expect(result).toContain("and");
        expect(result).toContain("an");
    });

    test("should find words in alphabetical order", () => {
        const root = createTrie(["zebra", "apple", "banana"]);
        expect(findAllWords(root)).toEqual(["apple", "banana", "zebra"]);
    });

    test("should handle words with same prefix but different lengths", () => {
        const root = createTrie(["a", "aa", "aaa", "aaaa"]);
        const result = findAllWords(root);
        expect(result).toHaveLength(4);
        expect(result).toEqual(["a", "aa", "aaa", "aaaa"]);
    });

    test("should handle words with all letters of the alphabet", () => {
        const root = createTrie(["abcdefghijklmnopqrstuvwxyz"]);
        expect(findAllWords(root)).toEqual(["abcdefghijklmnopqrstuvwxyz"]);
    });

    test("should handle words with repeated letters", () => {
        const root = createTrie(["book", "boo", "boom", "boomer"]);
        const result = findAllWords(root);
        expect(result).toHaveLength(4);
        expect(result).toEqual(["boo", "book", "boom", "boomer"]);
    });

    test("should handle words that are prefixes of each other", () => {
        const root = createTrie(["test", "testing", "tested", "testable"]);
        const result = findAllWords(root);
        expect(result).toHaveLength(4);
        expect(result).toEqual(["test", "testable", "tested", "testing"]);
    });
});
