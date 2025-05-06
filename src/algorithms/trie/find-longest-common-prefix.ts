/**
 * Finds the longest common prefix among all words in the trie
 * @param root - The root node of the trie
 * @returns The longest common prefix string
 * @time O(S) where S is the sum of all characters in all words
 * @space O(1) as we only store the prefix string
 */

import { TrieNode } from "../../data-structures/trie";

export function findLongestCommonPrefix(root: TrieNode): string {
    if (!root) return "";

    let prefix = "";
    let current = root;

    while (current && !current.isEndWord) {
        let childCount = 0;
        let nextChar = "";

        for (let i = 0; i < 26; i++) {
            if (current.children[i]) {
                childCount++;
                if (childCount > 1) break;
                nextChar = String.fromCharCode(97 + i);
            }
        }

        if (childCount !== 1) break;

        prefix += nextChar;
        current = current.children[nextChar.charCodeAt(0) - 97]!;
    }

    return prefix;
}
