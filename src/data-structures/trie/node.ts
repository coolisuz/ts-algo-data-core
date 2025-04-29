/**
 * Represents a node in a Trie data structure.
 * Each node stores a character and maintains references to its child nodes.
 * The children array is of size 27 (0-26) for lowercase English letters (a-z).
 */
export class TrieNode {
    /** Array of child nodes, where each index corresponds to a character (a=0, b=1, etc.) */
    children: (TrieNode | null)[];
    /** The character value stored in this node */
    value: string;
    /** Flag indicating if this node represents the end of a word */
    isEndWord: boolean;

    /**
     * Creates a new TrieNode instance.
     * @param char - The character to store in this node
     */
    constructor(char: string) {
        this.children = new Array(27).fill(null);
        this.value = char;
        this.isEndWord = false;
    }

    /**
     * Marks this node as the end of a word.
     */
    markAsLeaf(): void {
        this.isEndWord = true;
    }

    /**
     * Unmarks this node as the end of a word.
     */
    unMarkAsLeaf(): void {
        this.isEndWord = false;
    }
}
