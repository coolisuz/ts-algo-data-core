import { TrieNode } from "./index";

/**
 * A Trie (prefix tree) data structure implementation.
 * This implementation is optimized for lowercase English letters (a-z).
 * Each node in the Trie represents a character and maintains references to its child nodes.
 */
export class Trie {
    /** The root node of the Trie */
    root: TrieNode | null;

    /**
     * Creates a new Trie instance with an empty root node.
     */
    constructor() {
        this.root = new TrieNode("");
    }

    /**
     * Gets the index for a character in the children array.
     * @param t - The character to get the index for
     * @returns The index (0-25) for the character in the children array
     */
    getIndex(t: string): number {
        return t.charCodeAt(0) - "a".charCodeAt(0);
    }

    /**
     * Inserts a word into the Trie
     *
     * @time O(n) - since it make n iterations
     * @space O(1) - no extra space used
     * @param key - The word to insert into the Trie
     */
    insert(key: string): void {
        if (key === null) return;

        key = key.toLowerCase();
        let currentNode = this.root;

        if (key === "") {
            if (currentNode) {
                currentNode.markAsLeaf();
            }
            return;
        }

        for (let level = 0; level < key.length; level++) {
            const index = this.getIndex(key[level]);

            if (currentNode?.children[index] === null) {
                currentNode.children[index] = new TrieNode(key[level]);
            }

            currentNode = currentNode!.children[index];
        }

        currentNode?.markAsLeaf();
    }

    /**
     * Searches for a word in the Trie
     *
     * @time O(n) - where n is the length of the word
     * @space O(1) - no extra space used
     * @param word - The word to search for
     * @returns true if the word exists in the Trie false otherwise
     */
    search(word: string): boolean {
        if (!word) return false;

        word = word.toLowerCase();
        let currentNode = this.root;

        if (word === "") {
            return currentNode?.isEndWord ?? false;
        }

        for (let level = 0; level < word.length; level++) {
            const index = this.getIndex(word[level]);

            if (!currentNode?.children[index]) {
                return false;
            }

            currentNode = currentNode.children[index]!;
        }

        return currentNode?.isEndWord ?? false;
    }

    /**
     * Deletes a word from the Trie
     *
     * @time O(n) - where n is the length of the word
     * @space O(n) - due to recursive call stack
     * @param word - The word to delete from the Trie
     * @returns boolean indicating whether the word was successfully deleted
     */
    delete(word: string): boolean {
        if (this.root === null || word === null || word === "") {
            return false;
        }

        word = word.toLowerCase();
        return this.deleteHelper(word, this.root, word.length, 0);
    }

    /**
     * Helper method to recursively delete a word from the Trie
     *
     * @param word - The word to delete
     * @param currentNode - The current node being processed
     * @param length - The length of the word
     * @param level - The current level in the Trie
     * @returns boolean indicating whether the current node was deleted
     */
    private deleteHelper(
        word: string,
        currentNode: TrieNode | null,
        length: number,
        level: number,
    ): boolean {
        if (currentNode === null) {
            return false;
        }

        // Base case: reached the end of the word
        if (level === length) {
            if (!currentNode.isEndWord) {
                return false;
            }
            currentNode.unMarkAsLeaf();
            return currentNode.hasNoChildren();
        }

        // Get the child node for the current character
        const index = this.getIndex(word[level]);
        const childNode = currentNode.children[index];

        // If child doesn't exist word is not in trie
        if (childNode === null) {
            return false;
        }

        // Recursively delete the child
        const shouldDeleteChild = this.deleteHelper(
            word,
            childNode,
            length,
            level + 1,
        );

        // If child should be deleted remove it
        if (shouldDeleteChild) {
            currentNode.children[index] = null;
        }

        // Return true if this node should be deleted
        // (it has no children and is not the end of another word)
        return currentNode.hasNoChildren() && !currentNode.isEndWord;
    }
}
