import { Graph } from '../../../src/data-structures/graph/index';
import { isTree } from '../../../src/algorithms/graph/validate-graph-tree';

describe('isTree', () => {
    test('should return true for a simple connected tree', () => {
        // regular tree:
        //    0
        //   / \
        //  1   2
        const graph = new Graph<number>(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 0);
        graph.addEdge(0, 2);
        graph.addEdge(2, 0);
        
        expect(isTree(graph)).toBe(true);
    });

    test('should return false for a graph with a cycle', () => {
        // graph with a cycle:
        //    0
        //   / \
        //  1---2
        const graph = new Graph<number>(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 0);
        graph.addEdge(0, 2);
        graph.addEdge(2, 0);
        graph.addEdge(1, 2);
        graph.addEdge(2, 1);
        
        expect(isTree(graph)).toBe(false);
    });

    test('should return false for a disconnected graph', () => {
        // disconnected graph:
        //    0    2
        //    |    |
        //    1    3
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(1, 0);
        graph.addEdge(2, 3);
        graph.addEdge(3, 2);
        
        expect(isTree(graph)).toBe(false);
    });

    test('should return true for a linear tree', () => {
        // linear tree:
        //    0---1---2---3
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(1, 0);
        graph.addEdge(1, 2);
        graph.addEdge(2, 1);
        graph.addEdge(2, 3);
        graph.addEdge(3, 2);
        
        expect(isTree(graph)).toBe(true);
    });

    test('should return true for a single node graph', () => {
        const graph = new Graph<number>(1);
        
        expect(isTree(graph)).toBe(true);
    });
});