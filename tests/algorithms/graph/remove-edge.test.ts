import { Graph } from '../../../src/data-structures/graph/index.ts';
import { removeEdge } from '../../../src/algorithms/graph/remove-edge.ts';

describe('removeEdge', () => {
  test('should do nothing if source and destination are the same', () => {
    const g = new Graph(3);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    
    const result = removeEdge(g, 1, 1);
    
    const neighbors = result.getList()[0].getHead();
    expect(neighbors?.data).toBe(1);
    expect(neighbors?.next?.data).toBe(2);
  });

  test('should do nothing if the source vertex does not exist', () => {
    const g = new Graph(3);
    g.addEdge(0, 1);
    
    const result = removeEdge(g, 5, 1);
    
    const neighbors = result.getList()[0].getHead();
    expect(neighbors?.data).toBe(1);
  });

  test('should do nothing if the destination vertex does not exist', () => {
    const g = new Graph(3);
    g.addEdge(0, 1);
    
    const result = removeEdge(g, 0, 5);
    
    const neighbors = result.getList()[0].getHead();
    expect(neighbors?.data).toBe(1);
  });

  test('should do nothing if the edge does not exist', () => {
    const g = new Graph(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    
    const result = removeEdge(g, 0, 3);
    
    const neighbors = result.getList()[0].getHead();
    expect(neighbors?.data).toBe(1);
    expect(neighbors?.next?.data).toBe(2);
  });
});