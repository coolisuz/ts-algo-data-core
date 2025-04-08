/**
 * A class implementing two stacks using a single array.
 * Stack 1 grows from the start (left) of the array, while Stack 2 grows from the end (right).
 */
export class TwoStack {
    public array: Array<number | null>;
    private left: number;
    private right: number;

    /**
     * Creates a new TwoStack instance
     * @param {number} size - The fixed size of the underlying array
     * @throws {Error} If size is not a positive integer
     */
    constructor(size: number) {
        if (size <= 0 || !Number.isInteger(size)) {
            throw new Error("Size must be a positive integer");
        }
        this.array = new Array<number | null>(size).fill(null);
        this.left = -1;
        this.right = this.array.length;
    }

    /**
     * Pushes a value onto Stack 1
     * @param {number} value - The value to push
     * @throws {Error} If Stack 1 is full (stack overflow)
     */
    push1(value: number): void {
        if (this.left + 1 === this.right) {
            throw new Error("Stack Overflow");
        }
        this.left++;
        this.array[this.left] = value;
    }

    /**
     * Pushes a value onto Stack 2
     * @param {number} value - The value to push
     * @throws {Error} If Stack 2 is full (stack overflow)
     */
    push2(value: number): void {
        if (this.right - 1 === this.left) {
            throw new Error("Stack Overflow");
        }
        this.right--;
        this.array[this.right] = value;
    }

    /**
     * Removes and returns the top element from Stack 1
     * @returns {number | null} The popped element
     * @throws {Error} If Stack 1 is empty (stack underflow)
     */
    pop1(): number | null {
        if (this.left < 0) {
            throw new Error("Stack Underflow");
        }
        const popped = this.array[this.left];
        this.array[this.left] = null;
        this.left--;
        return popped;
    }

    /**
     * Removes and returns the top element from Stack 2
     * @returns {number | null} The popped element
     * @throws {Error} If Stack 2 is empty (stack underflow)
     */
    pop2(): number | null {
        if (this.right >= this.array.length) {
            throw new Error("Stack Underflow");
        }
        const popped = this.array[this.right];
        this.array[this.right] = null;
        this.right++;
        return popped;
    }
}
