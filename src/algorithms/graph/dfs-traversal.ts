/**
 * Performs a depth-first search traversal on a directed graph.
 *
 * @param {Graph<number>} graph - The directed graph represented as an adjacency list
 * @param {number} source - The starting vertex/node number for the traversal
 * @returns {number[]} - An array containing the vertices in DFS traversal order
 *
 * @time O(V + E) - Where V is the number of vertices and E is the number of edges
 * @space O(V) - For the visited array, queue, and result array
 *
 * @constraints
 * 1 ≤ graph.length ≤ 10^3
 * -1000 ≤ graph[i][j] ≤ 1000
 */

import { Stack } from '../../data-structures/stack/index.ts';
import { Graph } from '../../data-structures/graph/index.ts';


export function traverseDfs(graph: Graph<number>, source: number) {
    if (!graph.getVertices()) {
        return [];
    }

    const result: number[] = [];
    const stack = new Stack<number>();
    const list = graph.getList();
    const visited = new Array(list.length).fill(false);

    stack.push(source);
    visited[source] = true;

    while(!stack.isEmpty()) {
        const vertex = stack.pop();

        if (vertex !== undefined) {
            result.push(vertex);
            const neighbor = list[vertex].getHead();

            let current = neighbor;

            while (current !== null) {
                if (!visited[current.data]) {
                    stack.push(current.data);
                    visited[current.data] = true;
                }

                current = current.next;
            }
        }
    }
    
    return result;
}