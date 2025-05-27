import { findJourneyPath } from "../../../src/algorithms/hash/find-journey-path";

describe("findJourneyPath", () => {
    test("should reconstruct simple journey path", () => {
        const paths = [
            ["New York", "Chicago"],
            ["Chicago", "Denver"],
            ["Denver", "Los Angeles"],
        ];

        const result = findJourneyPath(paths);

        expect(result).toEqual([
            "New York",
            "Chicago",
            "Denver",
            "Los Angeles",
        ]);
    });

    test("should handle unordered paths", () => {
        const paths = [
            ["Chicago", "Denver"],
            ["Denver", "Los Angeles"],
            ["New York", "Chicago"],
        ];

        const result = findJourneyPath(paths);

        expect(result).toEqual([
            "New York",
            "Chicago",
            "Denver",
            "Los Angeles",
        ]);
    });

    test("should handle single connection", () => {
        const paths = [["A", "B"]];

        const result = findJourneyPath(paths);

        expect(result).toEqual(["A", "B"]);
    });

    test("should return empty array for empty input", () => {
        const paths: string[][] = [];

        const result = findJourneyPath(paths);

        expect(result).toEqual([]);
    });

    test("should handle longer journey", () => {
        const paths = [
            ["Paris", "London"],
            ["Berlin", "Paris"],
            ["London", "Dublin"],
            ["Madrid", "Berlin"],
            ["Dublin", "Edinburgh"],
        ];

        const result = findJourneyPath(paths);

        expect(result).toEqual([
            "Madrid",
            "Berlin",
            "Paris",
            "London",
            "Dublin",
            "Edinburgh",
        ]);
    });

    test("should handle mixed order paths", () => {
        const paths = [
            ["B", "C"],
            ["D", "E"],
            ["A", "B"],
            ["C", "D"],
        ];

        const result = findJourneyPath(paths);

        expect(result).toEqual(["A", "B", "C", "D", "E"]);
    });
});
