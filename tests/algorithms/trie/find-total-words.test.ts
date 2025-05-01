import { TrieNode } from "../../../src/data-structures/trie";
import {
    findTotalWords,
    findTotalWordsV2,
} from "../../../src/algorithms/trie/find-total-words";

describe("findTotalWords", () => {
    // Helper function to create a trie from an array of words
    function createTrie(words: string[]): TrieNode {
        const root = new TrieNode("");

        for (const word of words) {
            let current = root;
            for (const char of word) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0);
                if (!current.children[index]) {
                    current.children[index] = new TrieNode(char);
                }
                current = current.children[index];
            }
            current.isEndWord = true;
        }

        return root;
    }

    describe("recursive version", () => {
        test("should return 0 for empty trie", () => {
            const root = new TrieNode("");
            expect(findTotalWords(root)).toBe(0);
        });

        test("should count single word correctly", () => {
            const root = createTrie(["hello"]);
            expect(findTotalWords(root)).toBe(1);
        });

        test("should count multiple words correctly", () => {
            const root = createTrie(["hello", "world", "hi"]);
            expect(findTotalWords(root)).toBe(3);
        });

        test("should count words with common prefixes correctly", () => {
            const root = createTrie(["cat", "cats", "catch"]);
            expect(findTotalWords(root)).toBe(3);
        });

        test("should count words with overlapping paths correctly", () => {
            const root = createTrie(["ant", "any", "and", "an"]);
            expect(findTotalWords(root)).toBe(4);
        });
    });

    describe("iterative version (V2)", () => {
        test("should return 0 for empty trie", () => {
            const root = new TrieNode("");
            expect(findTotalWordsV2(root)).toBe(0);
        });

        test("should count single word correctly", () => {
            const root = createTrie(["hello"]);
            expect(findTotalWordsV2(root)).toBe(1);
        });

        test("should count multiple words correctly", () => {
            const root = createTrie(["hello", "world", "hi"]);
            expect(findTotalWordsV2(root)).toBe(3);
        });

        test("should count words with common prefixes correctly", () => {
            const root = createTrie(["cat", "cats", "catch"]);
            expect(findTotalWordsV2(root)).toBe(3);
        });

        test("should count words with overlapping paths correctly", () => {
            const root = createTrie(["ant", "any", "and", "an"]);
            expect(findTotalWordsV2(root)).toBe(4);
        });
    });

    describe("both versions should give same results", () => {
        test("should give same results for various test cases", () => {
            const testCases = [
                [],
                ["a"],
                ["hello", "world"],
                ["cat", "cats", "catch"],
                ["ant", "any", "and", "an"],
                ["a", "aa", "aaa", "aaaa"],
                ["the", "there", "their", "they"],
            ];

            testCases.forEach((words) => {
                const root = createTrie(words);
                expect(findTotalWords(root)).toBe(findTotalWordsV2(root));
            });
        });
    });
});
