import { LinkedList } from "../linked-list/index.ts";

export class Graph<T> {
    private vertices: number;
    private list: LinkedList<number>[];

    /**
     * Creates a new graph with the specified number of vertices
     * 
     * @param vertices - Number of vertices (nodes) to initialize
     */
    constructor(vertices: number) {
        this.vertices = vertices;
        this.list = [];

        for (let i = 0; i < vertices; i++) {
            const temp = new LinkedList<number>();
            this.list.push(temp);
        }
    }

    /**
     * Adds a directed edge from source to destination
     * 
     * @param source - Index of the source vertex
     * @param destination - Index of the destination vertex
     * @returns The modified graph instance for method chaining
     */
    addEdge(source: number, destination: number): Graph<T> {
        if (source < this.vertices && destination < this.vertices) {
            this.list[source].append(destination);
        }
        return this;
    }

    /**
     * Prints the graph representation to the console
     */
    printGraph(): void {
        console.log(">>Adjacency List of Directed Graph<<");
        for (let i = 0; i < this.list.length; i++) {
            process.stdout.write(`|${i}| => `);
            let temp = this.list[i].getHead();
            
            while (temp !== null) {
                process.stdout.write(`[${temp.data}] -> `);
                temp = temp.next;
            }
            console.log("null");
        }
    }

    /**
     * Returns a string representation of the graph
     * 
     */
    toString(): string {
        let str = "";
        for (let i = 0; i < this.list.length; i++) {
            str += `|${i}| => `;
            let temp = this.list[i].getHead();
            
            while (temp !== null) {
                str += `[${temp.data}] -> `;
                temp = temp.next;
            }
            str += "null\n";
        }
        return str;
    }

    /**
     * @returns the number of vertices/nodes in the graph 
     */
    getVertices(): number {
        return this.vertices;
    }

    /**
     * @returns the adjacency list representation of the graph
     */
    getList(): LinkedList<number>[] {
        return this.list;
    }
}