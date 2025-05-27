/**
 * Given an array of paths representing direct connections, reconstructs the complete journey.
 * Each path is [source, destination] representing a direct path from source to destination.
 *
 * @time O(n) - where n is the number of paths
 * @space O(n) - where n is the size of the hash map storing connections
 *
 * @param {string[][]} paths - Array of [source, destination] pairs
 * @returns {string[]} - The complete journey sequence from first city to last
 */
export function findJourneyPath(paths: string[][]): string[] {
    if (paths.length === 0) return [];

    const adjacencyMap = new Map<string, string>();
    const incomingCount = new Map<string, number>();
    const allCities = new Set<string>();

    for (const [source, destination] of paths) {
        adjacencyMap.set(source, destination);
        allCities.add(source);
        allCities.add(destination);

        incomingCount.set(
            destination,
            (incomingCount.get(destination) || 0) + 1,
        );
    }

    let startCity = "";
    for (const city of allCities) {
        if (!incomingCount.has(city)) {
            startCity = city;
            break;
        }
    }

    if (!startCity) {
        startCity = paths[0][0];
    }

    const journey: string[] = [];
    let currentCity = startCity;

    while (currentCity) {
        journey.push(currentCity);
        currentCity = adjacencyMap.get(currentCity) || "";
    }

    return journey;
}
