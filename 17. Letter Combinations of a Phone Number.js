var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    let combinations = [];
    let letters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    let backtrack = function (index, path) {
        if (path.length === digits.length) {
            combinations.push(path.join(""));
            return;
        }
        let possibleLetters = letters[digits[index]];
        for (let letter of possibleLetters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return combinations;
};
