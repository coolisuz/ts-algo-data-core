import { Trie } from "../../../src/data-structures/trie/trie";

describe("Trie", () => {
    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();
    });

    describe("insert", () => {
        it("should insert a single word correctly", () => {
            trie.insert("hello");
            expect(trie.search("hello")).toBe(true);
        });

        it("should insert multiple words correctly", () => {
            trie.insert("hello");
            trie.insert("world");
            trie.insert("help");

            expect(trie.search("hello")).toBe(true);
            expect(trie.search("world")).toBe(true);
            expect(trie.search("help")).toBe(true);
        });

        it("should handle case-insensitive insertion", () => {
            trie.insert("Hello");
            expect(trie.search("hello")).toBe(true);
            expect(trie.search("HELLO")).toBe(true);
        });

        it("should not insert null values", () => {
            trie.insert(null as unknown as string);
            expect(trie.search("")).toBe(false);
        });

        it("should handle words with common prefixes", () => {
            trie.insert("cat");
            trie.insert("car");
            trie.insert("card");

            expect(trie.search("cat")).toBe(true);
            expect(trie.search("car")).toBe(true);
            expect(trie.search("card")).toBe(true);
        });

        it("should handle single character words", () => {
            trie.insert("a");
            trie.insert("b");
            trie.insert("c");

            expect(trie.search("a")).toBe(true);
            expect(trie.search("b")).toBe(true);
            expect(trie.search("c")).toBe(true);
        });
    });

    describe("delete", () => {
        it("should delete a word that exists in the trie", () => {
            trie.insert("hello");
            expect(trie.search("hello")).toBe(true);
            expect(trie.delete("hello")).toBe(true);
            expect(trie.search("hello")).toBe(false);
        });

        it("should return false when trying to delete a non-existent word", () => {
            trie.insert("hello");
            expect(trie.delete("world")).toBe(false);
            expect(trie.search("hello")).toBe(true);
        });

        it("should handle case-insensitive deletion", () => {
            trie.insert("hello");
            expect(trie.delete("HELLO")).toBe(true);
            expect(trie.search("hello")).toBe(false);
        });

        it("should return false when trying to delete from an empty trie", () => {
            expect(trie.delete("hello")).toBe(false);
        });

        it("should return false when trying to delete null or empty string", () => {
            trie.insert("hello");
            expect(trie.delete(null as unknown as string)).toBe(false);
            expect(trie.delete("")).toBe(false);
            expect(trie.search("hello")).toBe(true);
        });
    });
});
