import { NewQueue } from '../../../src/algorithms/queue/queue-with-stack'; 

describe('NewQueue', () => {
  let queue: NewQueue<number>;

  beforeEach(() => {
    queue = new NewQueue<number>();
  });

  test('should enqueue and dequeue elements in correct FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  test('should return undefined when dequeuing from empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  test('should maintain correct size after operations', () => {
    expect(queue.size()).toBe(0);
    
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    
    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  test('should handle mixed enqueue and dequeue operations', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
  });

  test('should correctly handle single element queue', () => {
    queue.enqueue(42);
    expect(queue.size()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(42);
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});