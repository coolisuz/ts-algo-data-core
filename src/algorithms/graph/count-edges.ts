/**
 * Counts the number of edges in an undirected graph
 *
 * @param {Graph<number>} graph - The graph to count edges in
 * @returns {number} The total number of edges in the graph
 *
 * @time O(V) - Where V is number of vertices
 * @space O(1) - Constant space as no additional storage is used
 *
 * @constraints
 * - 0 ≤ number of nodes ≤ 10^2
 * - 0 ≤ edges.length ≤ n(n-1)/2
 * - edges[i].length == 2
 * - 1 ≤ x, y ≤ n where x and y are vertices
 * - x ≠ y (no self-loops)
 * - No multiple edges between same vertices
 */

import { Graph } from "../../data-structures/graph/index";

export function countEdges(graph: Graph<number>): number {
    const list = graph.getList();
    let edges = 0;

    for (let i = 0; i < list.length; i++) {
        edges += list[i].getSize();
    }

    return edges;
}
