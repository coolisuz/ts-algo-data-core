import { Graph } from '../../../src/data-structures/graph/graph';
import { findMotherVertex } from '../../../src/algorithms/graph/find-mother-vertex';

describe('findMotherVertex', () => {
    test('should find mother vertex in a cyclic graph', () => {
      const graph = new Graph(4); 
      graph.addEdge(0, 1);
      graph.addEdge(1, 2);
      graph.addEdge(2, 0);
      graph.addEdge(2, 3);
  
      const result = findMotherVertex(graph);
      expect([0, 1, 2]).toContain(result); 
    });
  
    test('should return null for graph with no mother vertex', () => {
      const graph = new Graph(4); 
      graph.addEdge(0, 1);
      graph.addEdge(1, 0);
      graph.addEdge(2, 3);
      graph.addEdge(3, 2);
  
      const result = findMotherVertex(graph);
      expect(result).toBeNull(); 
    });
  
    test('should return null for empty graph', () => {
      const graph = new Graph(0); 
      const result = findMotherVertex(graph);
      expect(result).toBeNull(); 
    });
  
    test('should return 0 for single vertex graph', () => {
      const graph = new Graph(1); 
      const result = findMotherVertex(graph);
      expect(result).toBe(0); 
    });
  
    test('should find mother vertex in a linear graph', () => {
      const graph = new Graph(3); 
      graph.addEdge(0, 1);
      graph.addEdge(1, 2);
  
      const result = findMotherVertex(graph);
      expect(result).toBe(0); 
    });
  });