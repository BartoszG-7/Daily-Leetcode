var minDistance = function (word1, word2) {
    return minDistanceRecur(word1, word2, word1.length, word2.length);
};
var minDistanceRecur = function (word1, word2, word1Index, word2Index) {
    if (word1Index == 0) {
        return word2Index;
    }
    if (word2Index == 0) {
        return word1Index;
    }
    if (word1.charAt(word1Index - 1) == word2.charAt(word2Index - 1)) {
        return minDistanceRecur(word1, word2, word1Index - 1, word2Index - 1);
    } else {
        var insertOperation = minDistanceRecur(
            word1,
            word2,
            word1Index,
            word2Index - 1,
        );
        var deleteOperation = minDistanceRecur(
            word1,
            word2,
            word1Index - 1,
            word2Index,
        );
        var replaceOperation = minDistanceRecur(
            word1,
            word2,
            word1Index - 1,
            word2Index - 1,
        );
        return (
            Math.min(
                insertOperation,
                Math.min(deleteOperation, replaceOperation),
            ) + 1
        );
    }
};
