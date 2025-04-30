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
     * Inserts a word into the Trie.
     * @param key - The word to insert into the Trie
     */
    insert(key: string): void {
        if (key === null) return;

        key = key.toLocaleLowerCase();
        let currentNode = this.root;
        let index = 0;

        for (let level = 0; level < key.length; level++) {
            index = this.getIndex(key[level]);

            if (currentNode?.children[index] === null) {
                currentNode.children[index] = new TrieNode(key[level]);
            }

            currentNode = currentNode!.children[index];
        }

        currentNode?.markAsLeaf();
    }
}
