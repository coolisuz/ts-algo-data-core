import {
    PrefixSearch,
    hasPrefix,
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

    describe("PrefixSearch class", () => {
        let prefixSearch: PrefixSearch;

        beforeEach(() => {
            prefixSearch = new PrefixSearch();
        });

        test("should insert and find single word prefix", () => {
            prefixSearch.insert("cat");
            expect(prefixSearch.hasPrefix("ca")).toBe(true);
        });

        test("should insert and find multiple word prefixes", () => {
            prefixSearch.insertWords(["cat", "car", "dog"]);
            expect(prefixSearch.hasPrefix("ca")).toBe(true);
            expect(prefixSearch.hasPrefix("do")).toBe(true);
            expect(prefixSearch.hasPrefix("z")).toBe(false);
        });

        test("should handle empty prefix", () => {
            prefixSearch.insertWords(["cat", "car", "dog"]);
            expect(prefixSearch.hasPrefix("")).toBe(true);
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
        });

        test("should handle words with common prefixes", () => {
            prefixSearch.insertWords(["cat", "cats", "catch"]);
            expect(prefixSearch.hasPrefix("cat")).toBe(true);
            expect(prefixSearch.hasPrefix("ca")).toBe(true);
            expect(prefixSearch.hasPrefix("catch")).toBe(true);
        });
    });
});
