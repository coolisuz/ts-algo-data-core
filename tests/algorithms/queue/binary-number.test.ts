import { generateBinaryNumber } from "../../../src/algorithms/queue/binary-number";

describe("generateBinaryNumber", () => {
    test("should throw an error for n = 0", () => {
        expect(() => generateBinaryNumber(0)).toThrow(
            "Input must be between 1 and 1000",
        );
    });

    test('should return ["1"] for n = 1', () => {
        expect(generateBinaryNumber(1)).toEqual(["1"]);
    });

    test("should return correct binary numbers for n = 5", () => {
        const expected = ["1", "10", "11", "100", "101"];
        expect(generateBinaryNumber(5)).toEqual(expected);
    });

    test("should return correct binary numbers for n = 10", () => {
        const expected = [
            "1",
            "10",
            "11",
            "100",
            "101",
            "110",
            "111",
            "1000",
            "1001",
            "1010",
        ];
        expect(generateBinaryNumber(10)).toEqual(expected);
    });

    test("should handle larger values of n", () => {
        const result = generateBinaryNumber(16);
        expect(result).toHaveLength(16);
        expect(result[15]).toBe("10000");
    });
});
