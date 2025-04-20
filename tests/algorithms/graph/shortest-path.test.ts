import { Graph } from '../../../src/data-structures/graph/index';
import { findShortestPath } from '../../../src/algorithms/graph/shortest-path';

describe('findShortestPath', () => {
    test('should return correct distance for direct path', () => {
        const graph = new Graph<number>(2);
        graph.addEdge(0, 1);
        
        expect(findShortestPath(graph, 0, 1)).toBe(1);
    });

    test('should return correct distance for indirect path', () => {
        // linear graph:
        //    0 --> 1 --> 2 --> 3
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        
        expect(findShortestPath(graph, 0, 3)).toBe(3);
    });

    test('should return correct distance for multiple possible paths', () => {
        // graph with multiple paths:
        //    0 --> 1 --> 3
        //    |           ^
        //    v           |
        //    2 ----------+
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 3);
        
        // Shortest path should be 0->2->3 (2 edges)
        expect(findShortestPath(graph, 0, 3)).toBe(2);
    });

    test('should return -1 when no path exists', () => {
        // disconnected graph:
        //    0 --> 1    2 --> 3
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(2, 3);
        
        expect(findShortestPath(graph, 0, 3)).toBe(-1);
    });

    test('should return 0 for same source and destination', () => {
        const graph = new Graph<number>(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        
        expect(findShortestPath(graph, 1, 1)).toBe(0);
    });
});