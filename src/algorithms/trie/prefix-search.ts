import { TrieNode } from "../../data-structures/trie";

/**
 * Checks if any word in the trie starts with the given prefix.
 * @param root - The root node of the trie
 * @param prefix - The prefix to search for
 * @returns true if any word starts with the prefix, false otherwise
 * @time O(P) where P is the length of the prefix
 * @space O(1) as we only traverse the path
 */
export function hasPrefix(root: TrieNode, prefix: string): boolean {
    let current = root;

    for (const char of prefix) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0);
        if (index < 0 || index >= 26 || !current.children[index]) {
            return false;
        }
        current = current.children[index];
    }

    return true;
}

/**
 * Counts the number of words in the trie that start with the given prefix.
 * @param root - The root node of the trie
 * @param prefix - The prefix to search for
 * @returns The number of words that start with the prefix
 * @time O(P + N) where P is the length of the prefix and N is the number of nodes in the subtree
 * @space O(H) where H is the height of the subtree (due to recursion)
 */
export function countWordsWithPrefix(root: TrieNode, prefix: string): number {
    let current = root;

    for (const char of prefix) {
        const index = char.charCodeAt(0) - "a".charCodeAt(0);
        if (index < 0 || index >= 26 || !current.children[index]) {
            return 0;
        }
        current = current.children[index];
    }

    let count = 0;

    function countWords(node: TrieNode): void {
        if (node.isEndWord) {
            count++;
        }

        for (let i = 0; i < 26; i++) {
            const child = node.children[i];
            if (child !== null) {
                countWords(child);
            }
        }
    }

    countWords(current);
    return count;
}

/**
 * Trie-based prefix search implementation.
 * Stores words and allows checking if any word starts with a given prefix.
 */
export class PrefixSearch {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode("");
    }

    /**
     * Inserts a word into the trie.
     * @param word - The word to insert (must be lowercase letters only)
     * @throws Error if word contains invalid characters or exceeds max length
     */
    insert(word: string): void {
        if (word.length > 50) {
            throw new Error("Word length exceeds maximum of 50 characters");
        }

        let current = this.root;

        for (const char of word) {
            const index = char.charCodeAt(0) - "a".charCodeAt(0);
            if (index < 0 || index >= 26) {
                throw new Error("Word must contain only lowercase letters");
            }

            if (!current.children[index]) {
                current.children[index] = new TrieNode(char);
            }
            current = current.children[index];
        }

        current.isEndWord = true;
    }

    /**
     * Inserts multiple words into the trie.
     * @param words - Array of words to insert
     * @throws Error if any word is invalid or list size exceeds 1000
     */
    insertWords(words: string[]): void {
        if (words.length > 1000) {
            throw new Error("Word list size exceeds maximum of 1000");
        }

        for (const word of words) {
            this.insert(word);
        }
    }

    /**
     * Checks if any word in the trie starts with the given prefix.
     * @param prefix - The prefix to search for (must be lowercase letters only)
     * @returns true if any word starts with the prefix, false otherwise
     * @throws Error if prefix contains invalid characters
     */
    hasPrefix(prefix: string): boolean {
        for (const char of prefix) {
            const index = char.charCodeAt(0) - "a".charCodeAt(0);
            if (index < 0 || index >= 26) {
                throw new Error("Prefix must contain only lowercase letters");
            }
        }

        return hasPrefix(this.root, prefix);
    }

    /**
     * Counts the number of words that start with the given prefix.
     * @param prefix - The prefix to search for (must be lowercase letters only)
     * @returns The number of words that start with the prefix
     * @throws Error if prefix contains invalid characters
     */
    countWordsWithPrefix(prefix: string): number {
        for (const char of prefix) {
            const index = char.charCodeAt(0) - "a".charCodeAt(0);
            if (index < 0 || index >= 26) {
                throw new Error("Prefix must contain only lowercase letters");
            }
        }

        return countWordsWithPrefix(this.root, prefix);
    }
}
