/**
 * Finds the shortest paths from a source vertex to all other vertices in a graph
 * using the Bellman-Ford algorithm. This algorithm can handle negative edge weights
 * and detect negative cycles.
 *
 * @param graph - The graph to find shortest paths in
 * @param source - The source vertex index to start from
 * @param weights - Map of edge weights where key is "source-destination" and value is the weight
 * @returns An object containing:
 *   - distances: Map of vertex index to shortest distance from source
 *   - predecessors: Map of vertex index to its predecessor in the shortest path
 *   - hasNegativeCycle: Boolean indicating if a negative cycle was detected
 */

import { Graph } from "../../data-structures/graph/graph";

export function bellmanFord(
    graph: Graph<number>,
    source: number,
    weights: Map<string, number>,
): {
    distances: Map<number, number>;
    predecessors: Map<number, number | null>;
    hasNegativeCycle: boolean;
} {
    const vertices = graph.getVertices();
    const distances = new Map<number, number>();
    const predecessors = new Map<number, number | null>();

    for (let i = 0; i < vertices; i++) {
        distances.set(i, Infinity);
        predecessors.set(i, null);
    }
    distances.set(source, 0);


    for (let i = 0; i < vertices - 1; i++) {
        let updated = false;
        // Process all edges in each iteration
        for (let v = 0; v < vertices; v++) {
            const neighbors = graph.getList()[v];
            let current = neighbors.getHead();
            while (current !== null) {
                const u = current.data;
                const weight = weights.get(`${v}-${u}`) || Infinity;
                const distanceThroughV = distances.get(v)! + weight;

                if (distanceThroughV < distances.get(u)!) {
                    distances.set(u, distanceThroughV);
                    predecessors.set(u, v);
                    updated = true;
                }
                current = current.next;
            }
        }
        if (!updated) break;
    }

    // Check for negative cycles
    let hasNegativeCycle = false;
    for (let v = 0; v < vertices; v++) {
        const neighbors = graph.getList()[v];
        let current = neighbors.getHead();
        while (current !== null) {
            const u = current.data;
            const weight = weights.get(`${v}-${u}`) || Infinity;
            if (distances.get(v)! + weight < distances.get(u)!) {
                hasNegativeCycle = true;
                break;
            }
            current = current.next;
        }
        if (hasNegativeCycle) break;
    }

    return { distances, predecessors, hasNegativeCycle };
}

/**
 * Reconstructs the shortest path from source to target using the predecessors map
 * from the Bellman-Ford algorithm.
 *
 * @param predecessors - Map of vertex index to its predecessor in the shortest path
 * @param source - The source vertex index
 * @param target - The target vertex index
 * @returns Array of vertex indices representing the shortest path or null if no path exists
 */
export function reconstructPath(
    predecessors: Map<number, number | null>,
    source: number,
    target: number,
): number[] | null {
    if (!predecessors.has(target)) {
        return null;
    }

    const path: number[] = [];
    let current = target;

    while (current !== null) {
        path.unshift(current);
        current = predecessors.get(current)!;
    }

    return path[0] === source ? path : null;
}
