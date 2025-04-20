import { traverseDfs } from "../../../src/algorithms/graph/dfs-traversal";
import { Graph } from "../../../src/data-structures/graph";

describe("DFS Graph Traversal", () => {
    test("should traverse a simple graph correctly", () => {
        const graph = new Graph(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);

        const result = traverseDfs(graph, 0);
        expect(result).toEqual([0, 2, 1, 3]);
    });

    test("should handle a graph with cycles", () => {
        const graph = new Graph(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(3, 0);

        const result = traverseDfs(graph, 0);
        expect(result).toEqual([0, 2, 1, 3]);
    });

    test("should handle disconnected components", () => {
        const graph = new Graph(6);
        graph.addEdge(0, 1);
        graph.addEdge(2, 3);
        graph.addEdge(4, 5);

        const result = traverseDfs(graph, 0);
        expect(result).toEqual([0, 1]);
    });

    test("should handle starting from a non-source vertex", () => {
        const graph = new Graph(5);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 4);

        const result = traverseDfs(graph, 1);
        expect(result).toEqual([1, 3]);
    });
});
