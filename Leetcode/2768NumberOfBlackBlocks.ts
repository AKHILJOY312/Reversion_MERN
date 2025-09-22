function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {
    const map = new Map<string, number>();

    for (const [r, c] of coordinates) {
        // A black cell can affect up to 4 possible 2x2 blocks
        const candidates = [
            [r - 1, c - 1],
            [r - 1, c],
            [r, c - 1],
            [r, c],
        ];

        for (const [x, y] of candidates) {
            if (x >= 0 && y >= 0 && x < m - 1 && y < n - 1) {
                const key = `${x},${y}`;
                map.set(key, (map.get(key) || 0) + 1);
            }
        }
    }

    const answer = Array(5).fill(0);
    for (const count of map.values()) {
        answer[count]++;
    }

    const totalBlocks = (m - 1) * (n - 1);
    answer[0] = totalBlocks - map.size;

    return answer;
}

// Example usage:
console.log(countBlackBlocks(3, 3, [[0,0], [1,1], [0,2]]));
// Output: [3,1,0,0,0]
