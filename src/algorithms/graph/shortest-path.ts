/**
 * Finds the shortest path between source and destination vertices in an unweighted graph.
 * Returns the length of the shortest path (number of edges) or -1 if no path exists.
 *
 * @time O(V+E) - where V is the number of vertices and E is the number of edges in the graph
 * @space O(V) - for the queue and distance array to track visited nodes and distances
 *
 * @param {Graph<number>} g - The graph to search
 * @param {number} src - The source vertex
 * @param {number} dest - The destination vertex
 * @returns {number} - The length of the shortest path or -1 if no path exists
 *
 * @constraints
 * - 0 ≤ src, dest < number of vertices in the graph
 * - The graph is unweighted (all edges have equal weight)
 */

import { Graph } from "../../data-structures/graph/index.ts";
import { Queue } from "../../data-structures/queue/index.ts";

export function findShortestPath(
    g: Graph<number>,
    src: number,
    dest: number,
): number {
    const list = g.getList();

    if (!list[src] || !list[dest]) return -1;

    if (src === dest) return 0;

    const queue = new Queue<number>();
    const distance: number[] = new Array(list.length).fill(-1);

    distance[src] = 0;
    queue.enqueue(src);

    while (!queue.isEmpty()) {
        const vertex = queue.dequeue() as number;
        const neighbor = list[vertex];
        let current = neighbor.getHead();

        while (current !== null) {
            if (distance[current.data] === -1) {
                queue.enqueue(current.data);
                distance[current.data] = distance[vertex] + 1;

                if (current.data === dest) {
                    return distance[current.data];
                }
            }

            current = current.next;
        }
    }

    return -1;
}
