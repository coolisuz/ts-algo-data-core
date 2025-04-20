/**
 * Detects whether a directed graph contains a cycle
 *
 * A cycle occurs when you can start at one vertex that follows a path through the edges
 * and return to the starting vertex.
 *
 * @param {Graph<number>} graph - The directed graph to check for cycles
 * @returns {boolean} - True if the graph contains a cycle false otherwise
 *
 *
 * @complexity
 * Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges
 * Space Complexity: O(V) for the visited and inCurrentPath arrays
 */

import { Graph } from "../../data-structures/graph/index";
import { LinkedList } from "../../data-structures/linked-list";

export function detectCycle(graph: Graph<number>): boolean {
    const vertices = graph.getVertices();
    const list = graph.getList();

    if (vertices === 0) {
        return false;
    }

    const visited = new Array(vertices).fill(false);

    for (let v = 0; v < vertices; v++) {
        if (!visited[v]) {
            const inCurrentPath = new Array(vertices).fill(false);

            if (hasCycleDFS(v, visited, inCurrentPath, list)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Helper function that performs DFS traversal to detect cycles.
 *
 * @param {number} vertex - The current vertex being processed
 * @param {boolean[]} visited - Array tracking all visited vertices
 * @param {boolean[]} inCurrentPath - Array tracking vertices in the current DFS path
 * @param {LinkedList<number>[]} adjacencyList - The adjacency list representation of the graph
 * @returns {boolean} - True if a cycle is detected false otherwise
 *
 * @private
 */
function hasCycleDFS(
    vertex: number,
    visited: boolean[],
    inCurrentPath: boolean[],
    adjacencyList: LinkedList<number>[],
): boolean {
    visited[vertex] = true;
    inCurrentPath[vertex] = true;

    const neighbors = adjacencyList[vertex];
    let current = neighbors?.getHead() || null;

    while (current !== null) {
        const neighbor = current.data;

        if (inCurrentPath[neighbor]) {
            return true;
        }

        if (!visited[neighbor]) {
            if (hasCycleDFS(neighbor, visited, inCurrentPath, adjacencyList)) {
                return true;
            }
        }

        current = current.next;
    }

    inCurrentPath[vertex] = false;
    return false;
}
