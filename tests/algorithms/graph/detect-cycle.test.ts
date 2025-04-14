import { detectCycle } from "../../../src/algorithms/graph/detect-cycle";
import { Graph } from '../../../src/data-structures/graph/index'

describe("detectCycle", () => {
    test("should detect a cycle in a simple directed graph", () => {
        const graph = new Graph<number>(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        
        expect(detectCycle(graph)).toBe(true);
    });

    test("should return false for a directed acyclic graph (DAG)", () => {
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        
        expect(detectCycle(graph)).toBe(false);
    });

    test("should detect a self-loop", () => {
        const graph = new Graph<number>(2);
        graph.addEdge(0, 1);
        graph.addEdge(1, 1)
        
        expect(detectCycle(graph)).toBe(true);
    });

    test("should handle a disconnected graph with a cycle", () => {
        const graph = new Graph<number>(5);
        graph.addEdge(0, 1);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);
        graph.addEdge(4, 2);
        
        expect(detectCycle(graph)).toBe(true);
    });

    test("should handle an empty graph", () => {
        const graph = new Graph<number>(0);
        expect(detectCycle(graph)).toBe(false);
    });

    test("should handle a larger complex graph with cycle", () => {
        const graph = new Graph<number>(6);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);
        graph.addEdge(4, 5);
        graph.addEdge(5, 2)
        
        expect(detectCycle(graph)).toBe(true);
    });
});