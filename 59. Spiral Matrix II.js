var generateMatrix = function (n) {
    let result = Array.from({ length: n }, () => Array(n).fill(0));
    let cnt = 1;
    for (let layer = 0; layer < Math.floor((n + 1) / 2); layer++) {

        for (let ptr = layer; ptr < n - layer; ptr++) {
            result[layer][ptr] = cnt++;
        }
        for (let ptr = layer + 1; ptr < n - layer; ptr++) {
            result[ptr][n - layer - 1] = cnt++;
        }
        for (let ptr = n - layer - 2; ptr >= layer; ptr--) {
            result[n - layer - 1][ptr] = cnt++;
        }
        for (let ptr = n - layer - 2; ptr > layer; ptr--) {
            result[ptr][layer] = cnt++;
        }
    }
    return result;
};
