import {
    PrefixSearch,
    hasPrefix,
    countWordsWithPrefix,
    findLongestCommonPrefix,
} from "../../../src/algorithms/trie/prefix-search";
import { TrieNode } from "../../../src/data-structures/trie";
import {
    createTrie,
    findWordsWithPattern,
} from "../../../src/algorithms/trie/prefix-search";

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

    describe("findLongestCommonPrefix function", () => {
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

        test("should find longest common prefix", () => {
            const root = createTrie(["flower", "flow", "flight"]);
            expect(findLongestCommonPrefix(root)).toBe("fl");
        });

        test("should return empty string for no common prefix", () => {
            const root = createTrie(["dog", "racecar", "car"]);
            expect(findLongestCommonPrefix(root)).toBe("");
        });

        test("should return empty string for empty trie", () => {
            const root = new TrieNode("");
            expect(findLongestCommonPrefix(root)).toBe("");
        });

        test("should return entire word for single word", () => {
            const root = createTrie(["hello"]);
            expect(findLongestCommonPrefix(root)).toBe("hello");
        });

        test("should handle words with same prefix", () => {
            const root = createTrie(["test", "testing", "tested"]);
            expect(findLongestCommonPrefix(root)).toBe("test");
        });

        test("should handle words with nested prefixes", () => {
            const root = createTrie(["a", "aa", "aaa"]);
            expect(findLongestCommonPrefix(root)).toBe("a");
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

        test("should find longest common prefix", () => {
            prefixSearch.insertWords(["flower", "flow", "flight"]);
            expect(prefixSearch.findLongestCommonPrefix()).toBe("fl");
        });

        test("should return empty string for no common prefix", () => {
            prefixSearch.insertWords(["dog", "racecar", "car"]);
            expect(prefixSearch.findLongestCommonPrefix()).toBe("");
        });

        test("should return entire word for single word", () => {
            prefixSearch.insert("hello");
            expect(prefixSearch.findLongestCommonPrefix()).toBe("hello");
        });

        test("should handle words with same prefix", () => {
            prefixSearch.insertWords(["test", "testing", "tested"]);
            expect(prefixSearch.findLongestCommonPrefix()).toBe("test");
        });
    });
});

describe("PrefixSearch", () => {
    let prefixSearch: PrefixSearch;

    beforeEach(() => {
        prefixSearch = new PrefixSearch();
    });

    describe("insert", () => {
        it("should insert a word correctly", () => {
            prefixSearch.insert("hello");
            expect(prefixSearch.hasPrefix("hello")).toBe(true);
        });

        it("should throw error for word with invalid characters", () => {
            expect(() => prefixSearch.insert("HELLO")).toThrow(
                "Word must contain only lowercase letters",
            );
            expect(() => prefixSearch.insert("hello123")).toThrow(
                "Word must contain only lowercase letters",
            );
        });

        it("should throw error for word exceeding maximum length", () => {
            const longWord = "a".repeat(51);
            expect(() => prefixSearch.insert(longWord)).toThrow(
                "Word length exceeds maximum of 50 characters",
            );
        });
    });

    describe("insertWords", () => {
        it("should insert multiple words correctly", () => {
            prefixSearch.insertWords(["hello", "world", "test"]);
            expect(prefixSearch.hasPrefix("hello")).toBe(true);
            expect(prefixSearch.hasPrefix("world")).toBe(true);
            expect(prefixSearch.hasPrefix("test")).toBe(true);
        });

        it("should throw error for word list exceeding maximum size", () => {
            const words = Array(1001).fill("test");
            expect(() => prefixSearch.insertWords(words)).toThrow(
                "Word list size exceeds maximum of 1000",
            );
        });
    });

    describe("hasPrefix", () => {
        beforeEach(() => {
            prefixSearch.insertWords(["hello", "world", "help", "testing"]);
        });

        it("should return true for existing prefix", () => {
            expect(prefixSearch.hasPrefix("hel")).toBe(true);
            expect(prefixSearch.hasPrefix("wor")).toBe(true);
        });

        it("should return false for non-existing prefix", () => {
            expect(prefixSearch.hasPrefix("xyz")).toBe(false);
            expect(prefixSearch.hasPrefix("hellp")).toBe(false);
        });

        it("should throw error for prefix with invalid characters", () => {
            expect(() => prefixSearch.hasPrefix("HELLO")).toThrow(
                "Prefix must contain only lowercase letters",
            );
            expect(() => prefixSearch.hasPrefix("hello123")).toThrow(
                "Prefix must contain only lowercase letters",
            );
        });
    });

    describe("countWordsWithPrefix", () => {
        beforeEach(() => {
            prefixSearch.insertWords([
                "hello",
                "world",
                "help",
                "testing",
                "helmet",
            ]);
        });

        it("should return correct count for prefix", () => {
            expect(prefixSearch.countWordsWithPrefix("hel")).toBe(3);
            expect(prefixSearch.countWordsWithPrefix("wor")).toBe(1);
            expect(prefixSearch.countWordsWithPrefix("test")).toBe(1);
        });

        it("should return 0 for non-existing prefix", () => {
            expect(prefixSearch.countWordsWithPrefix("xyz")).toBe(0);
            expect(prefixSearch.countWordsWithPrefix("hellp")).toBe(0);
        });

        it("should throw error for prefix with invalid characters", () => {
            expect(() => prefixSearch.countWordsWithPrefix("HELLO")).toThrow(
                "Prefix must contain only lowercase letters",
            );
            expect(() => prefixSearch.countWordsWithPrefix("hello123")).toThrow(
                "Prefix must contain only lowercase letters",
            );
        });
    });

    describe("findLongestCommonPrefix", () => {
        it("should return empty string for empty trie", () => {
            expect(prefixSearch.findLongestCommonPrefix()).toBe("");
        });

        it("should return empty string for trie with no common prefix", () => {
            prefixSearch.insertWords(["hello", "world"]);
            expect(prefixSearch.findLongestCommonPrefix()).toBe("");
        });

        it("should return longest common prefix", () => {
            prefixSearch.insertWords(["hello", "help", "helmet"]);
            expect(prefixSearch.findLongestCommonPrefix()).toBe("hel");
        });

        it("should return word if it is a prefix of all other words", () => {
            prefixSearch.insertWords(["hello", "helloworld", "hellotest"]);
            expect(prefixSearch.findLongestCommonPrefix()).toBe("hello");
        });
    });

    describe("findWordsWithPattern", () => {
        beforeEach(() => {
            prefixSearch.insertWords([
                "cat",
                "cut",
                "cot",
                "dog",
                "bat",
                "rat",
                "hat",
            ]);
        });

        it("should find words matching pattern with single wildcard", () => {
            const result = prefixSearch.findWordsWithPattern("c*t");
            expect(result).toEqual(
                expect.arrayContaining(["cat", "cut", "cot"]),
            );
            expect(result.length).toBe(3);
        });

        it("should return empty array for no matches", () => {
            const result = prefixSearch.findWordsWithPattern("xyz");
            expect(result).toEqual([]);
        });

        it("should throw error for pattern with invalid characters", () => {
            expect(() => prefixSearch.findWordsWithPattern("HELLO")).toThrow(
                "Pattern must contain only lowercase letters and * wildcards",
            );
            expect(() => prefixSearch.findWordsWithPattern("hello123")).toThrow(
                "Pattern must contain only lowercase letters and * wildcards",
            );
        });
    });
});

describe("findWordsWithPattern", () => {
    it("should find words matching pattern with single wildcard", () => {
        const root = createTrie(["cat", "cut", "cot", "dog"]);
        const result = findWordsWithPattern(root, "c*t");
        expect(result).toEqual(expect.arrayContaining(["cat", "cut", "cot"]));
        expect(result.length).toBe(3);
    });

    it("should find words matching pattern with all wildcards", () => {
        const root = createTrie(["cat", "cut", "cot", "dog"]);
        const result = findWordsWithPattern(root, "***");
        expect(result).toEqual(
            expect.arrayContaining(["cat", "cut", "cot", "dog"]),
        );
        expect(result.length).toBe(4);
    });

    it("should return empty array for no matches", () => {
        const root = createTrie(["cat", "cut", "cot", "dog"]);
        const result = findWordsWithPattern(root, "xyz");
        expect(result).toEqual([]);
    });
});
