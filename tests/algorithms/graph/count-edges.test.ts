import { Graph } from '../../../src/data-structures/graph/index';
import { countEdges } from '../../../src/algorithms/graph/count-edges';

describe('countEdges', () => {
    test('empty graph', () => {
        const graph = new Graph<number>(0);
        expect(countEdges(graph)).toBe(0);
    });

    test('single edge graph', () => {
        const graph = new Graph<number>(2);
        graph.addEdge(0, 1);
        expect(countEdges(graph)).toBe(1);
    });

    test('complete graph with 3 nodes', () => {
        const graph = new Graph<number>(3);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 0);
        expect(countEdges(graph)).toBe(3);
    });

    test('disconnected graph', () => {
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(2, 3);
        expect(countEdges(graph)).toBe(2);
    });

    test('star graph with 4 nodes', () => {
        const graph = new Graph<number>(4);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(0, 3);
        expect(countEdges(graph)).toBe(3);
    });
});