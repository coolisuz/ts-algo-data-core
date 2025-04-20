import { Graph } from "../../../src/data-structures/graph/graph";
import { traverseBfs } from "../../../src/algorithms/graph/bfs-traversal";

describe("BFS Graph Traversal", () => {
    test("should traverse a simple graph correctly", () => {
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);

        const result = traverseBfs(graph, 0);
        expect(result).toEqual([0, 1, 2, 3]);
    });

    test("should handle disconnected components", () => {
        const graph = new Graph<number>(6);
        graph.addEdge(0, 1);
        graph.addEdge(2, 3);
        graph.addEdge(4, 5);

        const result = traverseBfs(graph, 0);
        expect(result).toEqual([0, 1]);
    });

    test("should handle a graph with no edges", () => {
        const graph = new Graph<number>(3);

        const result = traverseBfs(graph, 0);
        expect(result).toEqual([0]);
    });

    test("should handle a graph with one vertex", () => {
        const graph = new Graph<number>(1);

        const result = traverseBfs(graph, 0);
        expect(result).toEqual([0]);
    });

    test("should handle starting from a non-source vertex", () => {
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);

        const result = traverseBfs(graph, 1);
        expect(result).toEqual([1, 3]);
    });
});
