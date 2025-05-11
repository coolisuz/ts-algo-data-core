import { Graph } from "../../../src/data-structures/graph/graph";
import {
    dijkstra,
    reconstructPath,
} from "../../../src/algorithms/graph/dijkstra";

describe("Dijkstra's Algorithm", () => {
    let graph: Graph<number>;
    let weights: Map<string, number>;

    beforeEach(() => {
        graph = new Graph<number>(4);
        weights = new Map<string, number>();
    });

    it("should find shortest paths in a simple graph", () => {
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 3);

        weights.set("0-1", 4);
        weights.set("0-2", 2);
        weights.set("1-2", 1);
        weights.set("1-3", 5);
        weights.set("2-3", 8);

        const { distances, predecessors } = dijkstra(graph, 0, weights);

        expect(distances.get(0)).toBe(0);
        expect(distances.get(1)).toBe(4);
        expect(distances.get(2)).toBe(2);
        expect(distances.get(3)).toBe(9);

        const path = reconstructPath(predecessors, 0, 3);
        expect(path).toEqual([0, 1, 3]);
    });

    it("should handle disconnected vertices", () => {
        graph.addEdge(0, 1);
        weights.set("0-1", 1);

        const { distances, predecessors } = dijkstra(graph, 0, weights);

        expect(distances.get(0)).toBe(0);
        expect(distances.get(1)).toBe(1);
        expect(distances.get(2)).toBe(Infinity);
        expect(distances.get(3)).toBe(Infinity);

        const path = reconstructPath(predecessors, 0, 3);
        expect(path).toBeNull();
    });

    it("should handle a graph with a single vertex", () => {
        graph = new Graph<number>(1);
        const { distances, predecessors } = dijkstra(graph, 0, weights);

        expect(distances.get(0)).toBe(0);
        const path = reconstructPath(predecessors, 0, 0);
        expect(path).toEqual([0]);
    });

    it("should handle a graph with no edges", () => {
        const { distances, predecessors } = dijkstra(graph, 0, weights);

        expect(distances.get(0)).toBe(0);
        expect(distances.get(1)).toBe(Infinity);
        expect(distances.get(2)).toBe(Infinity);
        expect(distances.get(3)).toBe(Infinity);

        const path = reconstructPath(predecessors, 0, 3);
        expect(path).toBeNull();
    });
});
