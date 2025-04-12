import { Graph } from '../../../src/data-structures/graph';

describe('Graph', () => {
    let graph: Graph<number>;

    beforeEach(() => {
        graph = new Graph<number>(5);
    });

    test('should initialize with the correct number of vertices', () => {
        expect(graph['vertices']).toBe(5);
        expect(graph['list'].length).toBe(5);
    });

    test('should add edges correctly', () => {
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        
        expect(graph['list'][0].length()).toBe(2);
        
    
        let head = graph['list'][0].getHead();
        expect(head?.data).toBe(2);
        expect(head?.next?.data).toBe(1);
        
    
        expect(graph['list'][1].length()).toBe(1);
        
    
        head = graph['list'][1].getHead();
        expect(head?.data).toBe(3);
    });

    test('should ignore invalid edges', () => {
        graph.addEdge(5, 1);
        graph.addEdge(0, 10);
        
    
        for (let i = 0; i < 5; i++) {
            expect(graph['list'][i].length()).toBe(0);
        }
    });

    test('should support method chaining for addEdge', () => {
        const result = graph.addEdge(0, 1).addEdge(1, 2).addEdge(2, 3);
        expect(result).toBe(graph);
    });

    test('should correctly convert to string representation', () => {
        graph.addEdge(0, 1).addEdge(0, 2).addEdge(1, 3);
        
        const graphString = graph.toString();
        
    
        expect(graphString).toContain('|0| => [2] -> [1] -> null');
        expect(graphString).toContain('|1| => [3] -> null');
        expect(graphString).toContain('|2| => null');
        expect(graphString).toContain('|3| => null');
        expect(graphString).toContain('|4| => null');
    });

    test('should handle a graph with no edges', () => {
        const graphString = graph.toString();
        
    
        for (let i = 0; i < 5; i++) {
            expect(graphString).toContain(`|${i}| => null`);
        }
    });

    test('should handle a cycle in the graph', () => {
        graph.addEdge(0, 1).addEdge(1, 2).addEdge(2, 0);
        
    
        expect(graph['list'][0].getHead()?.data).toBe(1);
        
    
        expect(graph['list'][1].getHead()?.data).toBe(2);
        
    
        expect(graph['list'][2].getHead()?.data).toBe(0);
    });
});