/**
 * Represents a node in a Trie data structure.
 * Each node stores a character and maintains references to its child nodes.
 * The children array is of size 26 (0-25) for lowercase English letters (a-z).
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
        this.children = new Array(26).fill(null);
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

    /**
     * Checks if this node has any non-null children
     * @returns true if the node has no children, false otherwise
     */
    hasNoChildren(): boolean {
        return this.children.every((child) => child === null);
    }

    /**
     * Gets the number of non-null children
     * @returns number of non-null children
     */
    getChildCount(): number {
        return this.children.filter((child) => child !== null).length;
    }
}
