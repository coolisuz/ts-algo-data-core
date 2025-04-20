/**
 * Determine whether a valid path exists from the source vertex to the destination vertex.
 * If it exists, return TRUE, otherwise return FALSE.
 *
 * @time O(V+E) - where V is the number of nodes and E is the number of Edges that needs to be iterated
 * @space O(V) - where V is the number of nodes that needs to be stored in the visited array and recursion stack
 *
 * @param {graph: Graph<num>}
 * @param {source: number}
 * @param {destination: number}
 * @return {boolean}
 *
 * @constraints
 * 1 ≤ n ≤ 10^2
 * 0 ≤ edges.length ≤ n(n-1)/2
 * edges[i].length = 2
 * 0 ≤ source, destination ≤ n-1
 * There are no duplicate edges
 * There no self-edges
 *
 */

import { Graph } from "../../data-structures/graph/index";

export function checkPathExists(
    graph: Graph<number>,
    source: number,
    destination: number,
): boolean {
    const list = graph.getList();

    if (!list[source] || !list[destination]) return false;

    const visited = new Array(list.length).fill(false);

    function dfs(current: number): boolean {
        if (current === destination) return true;

        visited[current] = true;

        let neighbor = list[current].getHead();

        while (neighbor !== null) {
            if (!visited[neighbor.data]) {
                if (dfs(neighbor.data)) {
                    return true;
                }
            }

            neighbor = neighbor.next;
        }

        return false;
    }

    return dfs(source);
}
