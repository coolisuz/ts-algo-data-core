/**
 * Given an undirected graph containing nodes labeled from 0 to n-1.
 * Determine whether the graph is a valid tree or not.  
 * Return TRUE if the edges of the given graph make up a valid tree, and FALSE otherwise.
 * A graph is a valid tree when all the nodes are connected and there is no cycle between them.
 * 
 * @time O(V+E) - where V is the number of nodes in the graph and edges are the number of connections
 * @space O(V) - extra memory used to keep track of vertices
 * 
 * @param {graph: Graph<number>}
 * @returns {boolean}
 * 
 * @constraints
 * Let n be the number of nodes in the undirected graph, where:
 * 1 ≤ n ≤ 10^2
 * 0 ≤ edges ≤ 5 * 10^3
 * There are no repeated edges
 * There are no self-loops
 */

import { Graph } from '../../data-structures/graph/index.ts';


export function isTree(graph: Graph<number>): boolean {
    const vertices = graph.getVertices();
    if (vertices === 0) return true; 
    
    const list = graph.getList();
    const visited = new Set<number>();

    function hasCycle(current: number, parent: number | null): boolean {
        visited.add(current);
        
        let neighbor = list[current].getHead();
        
        while (neighbor !== null) {

            if (!visited.has(neighbor.data)) {
                if (hasCycle(neighbor.data, current)) {
                    return true;
                }
            } 

            else if (neighbor.data !== parent) {
                return true;
            }
            
            neighbor = neighbor.next;
        }
        
        return false;
    }
    
    const cycleExists = hasCycle(0, null);
    
    return !cycleExists && visited.size === vertices;
}