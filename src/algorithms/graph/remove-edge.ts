/**
 * Removes an edge from a source vertex to a destination vertex in a graph
 *
 * @param {Graph<number>} g - The graph to modify
 * @param {number} src - The source vertex
 * @param {number} dest - The destination vertex to disconnect from the source
 * @returns {Graph<number>} - The modified graph
 *
 *
 * @time O(E) where E is the number of edges from the source vertex
 * @space O(1) as no additional data structures are created
 *
 * @example
 * const g = new Graph(5);
 * g.addEdge(0, 1);
 * g.addEdge(0, 2);
 * removeEdge(g, 0, 1); // Removes edge from vertex 0 to vertex 1
 */

import { Graph } from "../../data-structures/graph/index.ts";

export function removeEdge(
    g: Graph<number>,
    src: number,
    dest: number,
): Graph<number> {
    const list = g.getList();

    if (src === dest || !list[src] || !list[dest]) return g;

    const neighbors = list[src];

    let current = neighbors.getHead();

    while (current?.next) {
        if (current.next.data === dest) {
            current.next = current.next.next;
            return g;
        }

        current = current.next;
    }

    return g;
}
