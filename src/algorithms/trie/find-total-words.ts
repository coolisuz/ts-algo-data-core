import { TrieNode } from "../../data-structures/trie/index";

/**
 * Counts the total number of words stored in a trie using a recursive approach.
 * @param root - The root node of the trie
 * @returns The total number of words stored in the trie
 * @time O(N) where N is the number of nodes in the trie
 * @space O(H) where H is the height of the trie (due to recursion stack)
 */
export function findTotalWords(root: TrieNode): number {
    let numOfWords = 0;

    function traverse(node: TrieNode): void {
        if (node.isEndWord) {
            numOfWords++;
        }

        for (let i = 0; i < 26; i++) {
            const child = node.children[i];
            if (child !== null) {
                traverse(child);
            }
        }
    }

    traverse(root);
    return numOfWords;
}

/**
 * Counts the total number of words stored in a trie using an iterative approach with a stack.
 * This version avoids recursion and is more suitable for very deep tries.
 * @param root - The root node of the trie
 * @returns The total number of words stored in the trie
 * @time O(N) where N is the number of nodes in the trie
 * @space O(H) where H is the height of the trie (due to explicit stack)
 */
export function findTotalWordsV2(root: TrieNode): number {
    let numOfWords = 0;
    const stack: TrieNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;

        if (node.isEndWord) {
            numOfWords++;
        }

        for (let i = 25; i >= 0; i--) {
            const child = node.children[i];
            if (child !== null) {
                stack.push(child);
            }
        }
    }

    return numOfWords;
}
