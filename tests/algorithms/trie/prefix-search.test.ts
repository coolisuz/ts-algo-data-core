import {
    PrefixSearch,
    hasPrefix,
    countWordsWithPrefix,
} from "../../../src/algorithms/trie/prefix-search";
import { TrieNode } from "../../../src/data-structures/trie";

describe("Prefix Search", () => {
    describe("hasPrefix function", () => {
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

        test("should return true for existing prefix", () => {
            const root = createTrie(["cat", "car", "dog"]);
            expect(hasPrefix(root, "ca")).toBe(true);
        });

        test("should return false for non-existent prefix", () => {
            const root = createTrie(["cat", "car", "dog"]);
            expect(hasPrefix(root, "z")).toBe(false);
        });

        test("should return true for empty prefix", () => {
            const root = createTrie(["cat", "car", "dog"]);
            expect(hasPrefix(root, "")).toBe(true);
        });

        test("should return false for prefix longer than any word", () => {
            const root = createTrie(["cat", "car", "dog"]);
            expect(hasPrefix(root, "cats")).toBe(false);
        });
    });

    describe("countWordsWithPrefix function", () => {
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

        test("should count words with matching prefix", () => {
            const root = createTrie(["cat", "car", "card", "dog"]);
            expect(countWordsWithPrefix(root, "ca")).toBe(3);
        });

        test("should return 0 for non-existent prefix", () => {
            const root = createTrie(["cat", "car", "dog"]);
            expect(countWordsWithPrefix(root, "z")).toBe(0);
        });

        test("should count all words for empty prefix", () => {
            const root = createTrie(["cat", "car", "dog"]);
            expect(countWordsWithPrefix(root, "")).toBe(3);
        });

        test("should count words with same prefix", () => {
            const root = createTrie(["test", "testing", "tested", "testable"]);
            expect(countWordsWithPrefix(root, "test")).toBe(4);
        });

        test("should count words with nested prefixes", () => {
            const root = createTrie(["a", "aa", "aaa", "aaaa"]);
            expect(countWordsWithPrefix(root, "a")).toBe(4);
            expect(countWordsWithPrefix(root, "aa")).toBe(3);
            expect(countWordsWithPrefix(root, "aaa")).toBe(2);
        });
    });

    describe("PrefixSearch class", () => {
        let prefixSearch: PrefixSearch;

        beforeEach(() => {
            prefixSearch = new PrefixSearch();
        });

        test("should insert and find single word prefix", () => {
            prefixSearch.insert("cat");
            expect(prefixSearch.hasPrefix("ca")).toBe(true);
            expect(prefixSearch.countWordsWithPrefix("ca")).toBe(1);
        });

        test("should insert and find multiple word prefixes", () => {
            prefixSearch.insertWords(["cat", "car", "dog"]);
            expect(prefixSearch.hasPrefix("ca")).toBe(true);
            expect(prefixSearch.hasPrefix("do")).toBe(true);
            expect(prefixSearch.hasPrefix("z")).toBe(false);
            expect(prefixSearch.countWordsWithPrefix("ca")).toBe(2);
        });

        test("should handle empty prefix", () => {
            prefixSearch.insertWords(["cat", "car", "dog"]);
            expect(prefixSearch.hasPrefix("")).toBe(true);
            expect(prefixSearch.countWordsWithPrefix("")).toBe(3);
        });

        test("should throw error for word with invalid characters", () => {
            expect(() => prefixSearch.insert("cat123")).toThrow(
                "Word must contain only lowercase letters",
            );
        });

        test("should throw error for word exceeding max length", () => {
            const longWord = "a".repeat(51);
            expect(() => prefixSearch.insert(longWord)).toThrow(
                "Word length exceeds maximum of 50 characters",
            );
        });

        test("should throw error for word list exceeding max size", () => {
            const words = Array(1001).fill("a");
            expect(() => prefixSearch.insertWords(words)).toThrow(
                "Word list size exceeds maximum of 1000",
            );
        });

        test("should throw error for prefix with invalid characters", () => {
            prefixSearch.insert("cat");
            expect(() => prefixSearch.hasPrefix("ca1")).toThrow(
                "Prefix must contain only lowercase letters",
            );
            expect(() => prefixSearch.countWordsWithPrefix("ca1")).toThrow(
                "Prefix must contain only lowercase letters",
            );
        });

        test("should handle words with common prefixes", () => {
            prefixSearch.insertWords(["cat", "cats", "catch"]);
            expect(prefixSearch.hasPrefix("cat")).toBe(true);
            expect(prefixSearch.hasPrefix("ca")).toBe(true);
            expect(prefixSearch.hasPrefix("catch")).toBe(true);
            expect(prefixSearch.countWordsWithPrefix("cat")).toBe(3);
        });

        test("should handle words with repeated letters", () => {
            prefixSearch.insertWords(["book", "boo", "boom", "boomer"]);
            expect(prefixSearch.countWordsWithPrefix("bo")).toBe(4);
            expect(prefixSearch.countWordsWithPrefix("boo")).toBe(4);
            expect(prefixSearch.countWordsWithPrefix("boom")).toBe(2);
        });
    });
});
