var chunk = function(arr, size) {
    const chunkedArray = [];
    i = 0
    j = size
    while (i < arr.length) {
        const tempArray = arr.slice(i, j)
        chunkedArray.push(tempArray)
        i += size
        j += size
    }
    return chunkedArray;
};
