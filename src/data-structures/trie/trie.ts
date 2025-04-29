import { TrieNode } from "./index";

export class Trie {
    root: TrieNode | null;

    constructor() {
        this.root = new TrieNode("");
    }

    get(t: string): number {
        return t.charCodeAt(0) - "a".charCodeAt(0);
    }
}
