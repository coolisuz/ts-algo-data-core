/**
 * Finds the shortest paths from a source vertex to all other vertices in a graph
 * using Dijkstra's algorithm. This algorithm works only for graphs with non-negative
 * edge weights and is more efficient than Bellman-Ford for such cases.
 *
 * @param graph - The graph to find shortest paths in
 * @param source - The source vertex index to start from
 * @param weights - Map of edge weights where key is "source-destination" and value is the weight
 * @returns An object containing:
 *   - distances: Map of vertex index to shortest distance from source
 *   - predecessors: Map of vertex index to its predecessor in the shortest path
 */

import { Graph } from "../../data-structures/graph/graph";

export function dijkstra(
    graph: Graph<number>,
    source: number,
    weights: Map<string, number>,
): {
    distances: Map<number, number>;
    predecessors: Map<number, number | null>;
} {
    const vertices = graph.getVertices();
    const distances = new Map<number, number>();
    const predecessors = new Map<number, number | null>();
    const visited = new Set<number>();

    for (let i = 0; i < vertices; i++) {
        distances.set(i, Infinity);
        predecessors.set(i, null);
    }
    distances.set(source, 0);

    // Process all vertices
    for (let i = 0; i < vertices; i++) {
        let minDistance = Infinity;
        let u = -1;

        for (let v = 0; v < vertices; v++) {
            if (!visited.has(v) && distances.get(v)! < minDistance) {
                minDistance = distances.get(v)!;
                u = v;
            }
        }

        if (u === -1) break;
        visited.add(u);

        const neighbors = graph.getList()[u];
        let current = neighbors.getHead();
        while (current !== null) {
            const v = current.data;
            const weight = weights.get(`${u}-${v}`) || Infinity;

            if (
                !visited.has(v) &&
                distances.get(u)! + weight < distances.get(v)!
            ) {
                distances.set(v, distances.get(u)! + weight);
                predecessors.set(v, u);
            }
            current = current.next;
        }
    }

    return { distances, predecessors };
}

/**
 * Reconstructs the shortest path from source to target using the predecessors map
 * from Dijkstra's algorithm.
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
