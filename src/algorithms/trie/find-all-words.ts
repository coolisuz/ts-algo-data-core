import { TrieNode } from "../../data-structures/trie";

/**
 * Finds all words stored in a trie using a recursive approach.
 * @param root - The root node of the trie
 * @returns An array of all words stored in the trie
 * @time O(N) where N is the number of nodes in the trie
 * @space O(H + W) where H is the height of the trie (due to recursion stack) and W is the total number of words
 */
export function findAllWords(root: TrieNode): string[] {
    const words: string[] = [];

    function traverse(node: TrieNode, currentWord: string): void {
        if (node.isEndWord) {
            words.push(currentWord);
        }

        for (let i = 0; i < 26; i++) {
            const child = node.children[i];
            if (child !== null) {
                const char = String.fromCharCode(97 + i);
                traverse(child, currentWord + char);
            }
        }
    }

    traverse(root, "");
    return words;
}
