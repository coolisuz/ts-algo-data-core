import { TrieNode } from "../../data-structures/trie";

/**
 * Creates a trie from an array of words.
 *
 * @param words - Array of words to insert into the trie
 * @returns The root node of the created trie
 * @throws Error if any word contains invalid characters or exceeds maximum length
 */
export function createTrie(words: string[]): TrieNode {
    const root = new TrieNode("");

    for (const word of words) {
        if (word.length > 50) {
            throw new Error("Word length exceeds maximum of 50 characters");
        }

        let current = root;

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

    return root;
}

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
 * Finds the longest common prefix among all words in the trie.
 * The algorithm traverses the trie as long as there's exactly one child node,
 * building the common prefix character by character.
 * 
 * @param root - The root node of the trie
 * @time O(L) where L is the length of the longest common prefix
 * @space O(1) as we only store the prefix string

 */
export function findLongestCommonPrefix(root: TrieNode): string {
    let current = root;
    let prefix = "";

    while (true) {
        let childCount = 0;
        let nextChild: TrieNode | null = null;

        for (let i = 0; i < 26; i++) {
            if (current.children[i] !== null) {
                childCount++;
                nextChild = current.children[i];
            }
        }

        if (childCount !== 1 || current.isEndWord) {
            break;
        }

        prefix += nextChild!.value;
        current = nextChild!;
    }

    return prefix;
}

/**
 * Finds all words in the trie that match a given pattern.
 * The pattern can contain wildcards (*) that match any character.
 *
 * @param root - The root node of the trie
 * @param pattern - The pattern to match against (can contain * wildcards)
 * @returns Array of words that match the pattern
 * @time O(N * 26^W) where N is number of nodes and W is number of wildcards
 * @space O(L) where L is the length of the longest matching word
 *
 * @example
 * const root = createTrie(["cat", "cut", "cot", "dog"]);
 * findWordsWithPattern(root, "c*t"); // returns ["cat", "cut", "cot"]
 *
 * @example
 * const root = createTrie(["cat", "cut", "cot", "dog"]);
 * findWordsWithPattern(root, "c**"); // returns ["cat", "cut", "cot"]
 */
export function findWordsWithPattern(
    root: TrieNode,
    pattern: string,
): string[] {
    const words: string[] = [];

    function findWords(
        node: TrieNode,
        currentWord: string,
        patternIndex: number,
    ): void {
        if (patternIndex === pattern.length) {
            if (node.isEndWord) {
                words.push(currentWord);
            }
            return;
        }

        const char = pattern[patternIndex];

        if (char === "*") {
            for (let i = 0; i < 26; i++) {
                const child = node.children[i];
                if (child !== null) {
                    findWords(
                        child,
                        currentWord + String.fromCharCode(97 + i),
                        patternIndex + 1,
                    );
                }
            }
        } else {
            const index = char.charCodeAt(0) - "a".charCodeAt(0);
            if (index >= 0 && index < 26 && node.children[index] !== null) {
                findWords(
                    node.children[index]!,
                    currentWord + char,
                    patternIndex + 1,
                );
            }
        }
    }

    findWords(root, "", 0);
    return words;
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

    /**
     * Finds the longest common prefix among all words in the trie.
     * @returns The longest common prefix string
     * @throws Error if the trie contains invalid characters
     */
    findLongestCommonPrefix(): string {
        return findLongestCommonPrefix(this.root);
    }

    /**
     * Finds all words that match a given pattern.
     * The pattern can contain wildcards (*) that match any character.
     *
     * @param pattern - The pattern to match against (can contain * wildcards)
     * @returns Array of words that match the pattern
     * @throws Error if pattern contains invalid characters
     */
    findWordsWithPattern(pattern: string): string[] {
        for (const char of pattern) {
            if (
                char !== "*" &&
                (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122)
            ) {
                throw new Error(
                    "Pattern must contain only lowercase letters and * wildcards",
                );
            }
        }

        return findWordsWithPattern(this.root, pattern);
    }
}
