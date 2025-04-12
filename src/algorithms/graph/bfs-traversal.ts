/**
 * Performs a breadth-first search traversal on a directed graph.
 *
 * @param {Graph<number>} graph - The directed graph represented as an adjacency list
 * @param {number} source - The starting vertex/node number for the traversal
 * @returns {number[]} - An array containing the vertices in BFS traversal order
 *
 * @time O(V + E) - Where V is the number of vertices and E is the number of edges
 * @space O(V) - For the visited array, queue, and result array
 *
 * @constraints
 * 1 ≤ graph.length ≤ 10^3
 * -1000 ≤ graph[i][j] ≤ 1000
 */

import { Graph } from "../../data-structures/graph/graph.ts";
import { Queue } from '../../data-structures/queue/index.ts';


export function traverseBfs(graph: Graph<number>, source: number) {
    if (!graph.getVertices()) {
        return [];
    }

    const result: number[] = [];
    const visited: boolean[] = new Array(graph.getVertices()).fill(false);
    const queue = new Queue<number>();
    const list = graph.getList();

    queue.enqueue(source);
    visited[source] = true;

    while (!queue.isEmpty()) {
        const vertex = queue.dequeue();
        
        if (vertex !== undefined) {

            result.push(vertex);
            
            const neighbors = list[vertex].getHead();
            let current = neighbors;
            

            while (current !== null) {
                if (!visited[current.data]) {
                    queue.enqueue(current.data);
                    visited[current.data] = true;
                }
                current = current.next;
            }
        }
    }

    return result;
}