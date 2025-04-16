/**
 * Given a directed graph as input, determine a mother vertex within it.
 * A mother vertex in a graph G = (V,E), is vertex V such that all other vertices in
 * G can be reached by a path from V. Although a graph might feature multiple mother
 * vertices, your goal is to identify at least one.
 *
 * @time O(V + E) where V is the number of vertices and E is the number of edges
 * @space O(V) for the visited array and recursion stack
 *
 * @constraints
 * 0 ≤ graph.length ≤ 10^4
 * 0 ≤ V, E ≤ 10^3
 * V != E
 * There are no repeated edges.
 */

import { Graph } from "../../data-structures/graph/index.ts";

export function findMotherVertex(graph: Graph<number>): number | null {
    const vertices = graph.getVertices();
    if (vertices === 0) return null;
    const list = graph.getList();
    let lastFinishedVertex = -1;

    const visited = new Array(vertices).fill(false);

    const dfs = (v: number) => {
        visited[v] = true;
        let neighborNode = list[v].getHead();

        while (neighborNode !== null) {
            const neighbor = neighborNode.data;
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
            neighborNode = neighborNode.next;
        }

        lastFinishedVertex = v;
    };

    for (let i = 0; i < vertices; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    visited.fill(false);
    dfs(lastFinishedVertex);

    if (visited.includes(false)) {
        return null;
    }

    return lastFinishedVertex;
}
