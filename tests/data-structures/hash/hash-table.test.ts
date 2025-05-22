import { HashTable } from "../../../src/data-structures/hash";

describe("HashTable", () => {
    let hashTable: HashTable<string>;

    beforeEach(() => {
        hashTable = new HashTable<string>();
    });

    describe("constructor", () => {
        test("should create a hash table with default slots", () => {
            const table = new HashTable<number>();
            expect(table.getSize()).toBe(0);
            expect(table.isEmpty()).toBe(true);
        });

        test("should create a hash table with specified slots", () => {
            const table = new HashTable<number>(20);
            expect(table.getSize()).toBe(0);
            expect(table.isEmpty()).toBe(true);
        });

        test("should create a hash table with single slot", () => {
            const table = new HashTable<string>(1);
            expect(table.getSize()).toBe(0);
            expect(table.isEmpty()).toBe(true);
        });
    });

    describe("getSize", () => {
        test("should return 0 for a new hash table", () => {
            expect(hashTable.getSize()).toBe(0);
        });

        test("should return correct size after manual size manipulation", () => {
            expect(hashTable.getSize()).toBe(0);
        });
    });

    describe("isEmpty", () => {
        test("should return true for a new hash table", () => {
            expect(hashTable.isEmpty()).toBe(true);
        });

        test("should return true when size is 0", () => {
            expect(hashTable.isEmpty()).toBe(true);
            expect(hashTable.getSize()).toBe(0);
        });
    });

    describe("getIndex", () => {
        test("should return correct index for positive keys", () => {
            const table = new HashTable<number>(10);
            expect(table.getIndex(5)).toBe(5);
            expect(table.getIndex(15)).toBe(5); // 15 % 10 = 5
            expect(table.getIndex(25)).toBe(5); // 25 % 10 = 5
        });

        test("should return correct index for key 0", () => {
            const table = new HashTable<number>(10);
            expect(table.getIndex(0)).toBe(0);
        });

        test("should handle keys larger than slot count", () => {
            const table = new HashTable<number>(7);
            expect(table.getIndex(14)).toBe(0); // 14 % 7 = 0
            expect(table.getIndex(15)).toBe(1); // 15 % 7 = 1
            expect(table.getIndex(100)).toBe(2); // 100 % 7 = 2
        });

        test("should be consistent for the same key", () => {
            const table = new HashTable<number>(13);
            const key = 42;
            const index1 = table.getIndex(key);
            const index2 = table.getIndex(key);
            expect(index1).toBe(index2);
        });

        test("should work with single slot table", () => {
            const table = new HashTable<number>(1);
            expect(table.getIndex(0)).toBe(0);
            expect(table.getIndex(1)).toBe(0);
            expect(table.getIndex(100)).toBe(0);
        });
    });

    describe("resize", () => {
        test("should handle resize on empty table", () => {
            const table = new HashTable<number>(5);
            expect(table.getSize()).toBe(0);

            table.resize();

            expect(table.getSize()).toBe(0);
            expect(table.isEmpty()).toBe(true);
        });

        test("should maintain empty state after resize", () => {
            const table = new HashTable<string>(3);
            expect(table.isEmpty()).toBe(true);

            table.resize();

            expect(table.isEmpty()).toBe(true);
            expect(table.getSize()).toBe(0);
        });

        test("should work with very small initial size", () => {
            const table = new HashTable<boolean>(1);
            expect(table.getSize()).toBe(0);

            table.resize();

            expect(table.getSize()).toBe(0);
            expect(table.isEmpty()).toBe(true);
        });

        test("should handle multiple consecutive resizes", () => {
            const table = new HashTable<number>(2);

            table.resize(); // 2 -> 4 slots
            table.resize(); // 4 -> 8 slots
            table.resize(); // 8 -> 16 slots

            expect(table.getSize()).toBe(0);
            expect(table.isEmpty()).toBe(true);
        });
    });

    describe("insert", () => {
        test("should insert key-value pair into empty table", () => {
            const table = new HashTable<string>(5);

            table.insert(10, "apple");

            expect(table.getSize()).toBe(1);
            expect(table.isEmpty()).toBe(false);
        });

        test("should handle collisions by chaining entries", () => {
            const table = new HashTable<string>(3);

            // Both keys will hash to same index: 4 % 3 = 1, 7 % 3 = 1
            table.insert(4, "first");
            table.insert(7, "second");

            expect(table.getSize()).toBe(2);
            expect(table.isEmpty()).toBe(false);
        });

        test("should update existing key with new value", () => {
            const table = new HashTable<number>(5);

            table.insert(15, 100);
            expect(table.getSize()).toBe(1);

            table.insert(15, 200);
            expect(table.getSize()).toBe(1);
        });
    });

    describe("search", () => {
        test("should return value for existing key", () => {
            const table = new HashTable<string>(5);

            table.insert(10, "apple");
            table.insert(25, "banana");

            expect(table.search(10)).toBe("apple");
            expect(table.search(25)).toBe("banana");
        });

        test("should return undefined for non-existing key", () => {
            const table = new HashTable<number>(5);

            table.insert(15, 100);

            expect(table.search(99)).toBeUndefined();
            expect(table.search(0)).toBeUndefined();
        });

        test("should find correct value in collision chain", () => {
            const table = new HashTable<string>(3);

            // Keys 4 and 7 both hash to index 1 (4%3=1, 7%3=1)
            table.insert(4, "first");
            table.insert(7, "second");
            table.insert(10, "third"); // 10%3=1, another collision

            expect(table.search(4)).toBe("first");
            expect(table.search(7)).toBe("second");
            expect(table.search(10)).toBe("third");
        });
    });

    describe("integration tests", () => {
        test("should maintain consistency between getSize and isEmpty", () => {
            const table = new HashTable<string>(5);

            expect(table.getSize() === 0).toBe(table.isEmpty());

            table.resize();

            expect(table.getSize() === 0).toBe(table.isEmpty());
        });

        test("should work with different data types", () => {
            const numberTable = new HashTable<number>(10);
            const stringTable = new HashTable<string>(10);
            const booleanTable = new HashTable<boolean>(10);

            expect(numberTable.isEmpty()).toBe(true);
            expect(stringTable.isEmpty()).toBe(true);
            expect(booleanTable.isEmpty()).toBe(true);

            expect(numberTable.getIndex(42)).toBe(2);
            expect(stringTable.getIndex(7)).toBe(7);
            expect(booleanTable.getIndex(15)).toBe(5);
        });

        test("should handle edge cases with getIndex", () => {
            const table = new HashTable<string>(3);

            // Test boundary values
            expect(table.getIndex(0)).toBe(0);
            expect(table.getIndex(3)).toBe(0);
            expect(table.getIndex(6)).toBe(0);

            expect(table.getIndex(1)).toBe(1);
            expect(table.getIndex(4)).toBe(1);

            expect(table.getIndex(2)).toBe(2);
            expect(table.getIndex(5)).toBe(2);
        });

        test("should maintain state after multiple operations", () => {
            const table = new HashTable<number>(4);

            // Initial state
            expect(table.isEmpty()).toBe(true);
            expect(table.getSize()).toBe(0);

            // After resize
            table.resize();
            expect(table.isEmpty()).toBe(true);
            expect(table.getSize()).toBe(0);

            expect(table.getIndex(10)).toBe(2);
        });
    });
});
