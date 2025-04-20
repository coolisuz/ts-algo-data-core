import { Graph } from '../../../src/data-structures/graph/index';
import { checkPathExists } from '../../../src/algorithms/graph/check-path-exist';

describe('checkPathExists', () => {
    test('should return true when a direct path exists between source and destination', () => {
        const graph = new Graph<number>(5);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        
        expect(checkPathExists(graph, 0, 3)).toBe(true);
    });

    test('should return true when an indirect path exists between source and destination', () => {
        const graph = new Graph<number>(6);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(2, 3);
        graph.addEdge(3, 5);
        graph.addEdge(1, 4);
        
        expect(checkPathExists(graph, 0, 5)).toBe(true);
    });

    test('should return false when no path exists between source and destination', () => {
        const graph = new Graph<number>(6);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(3, 4);
        graph.addEdge(4, 5);
        
        expect(checkPathExists(graph, 0, 5)).toBe(false);
    });

    test('should return false when source or destination does not exist in the graph', () => {
        const graph = new Graph<number>(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        
        expect(checkPathExists(graph, 0, 4)).toBe(false);
    });

    test('should handle cyclic graphs correctly', () => {
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0); // Cycle: 0 -> 1 -> 2 -> 0
        graph.addEdge(0, 3);
        
        expect(checkPathExists(graph, 3, 2)).toBe(false);
        expect(checkPathExists(graph, 2, 3)).toBe(true);
    });
});