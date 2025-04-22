export class AVLNode<T> {
    public left: AVLNode<T> | null;
    public right: AVLNode<T> | null;
    public height: number;

    constructor(public value: T) {
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}