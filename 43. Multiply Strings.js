let sumResults = function (results) {
    let answer = [...results[results.length - 1]];
    let newAnswer = [];
    for (let j = 0; j < results.length - 1; ++j) {
        let result = [...results[j]];
        newAnswer = [];
        let carry = 0;
        for (let i = 0; i < answer.length || i < result.length; ++i) {
            let digit1 = i < result.length ? result[i] : 0;
            let digit2 = i < answer.length ? answer[i] : 0;
            let sum = digit1 + digit2 + carry;
            carry = Math.floor(sum / 10);
            newAnswer.push(sum % 10);
        }
        if (carry != 0) {
            newAnswer.push(carry);
        }
        answer = newAnswer;
    }
    return answer;
};

let multiplyOneDigit = function (firstNumber, secondNumberDigit, numZeros) {
    let currentResult = [];
    for (let i = 0; i < numZeros; ++i) {
        currentResult.push(0);
    }
    let carry = 0;
    for (let i = 0; i < firstNumber.length; ++i) {
        let multiplication =
            Number(secondNumberDigit) * Number(firstNumber[i]) + carry;
        carry = Math.floor(multiplication / 10);
        currentResult.push(multiplication % 10);
    }
    if (carry) {
        currentResult.push(carry);
    }
    return currentResult;
};

let multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    let firstNumber = [...num1];
    let secondNumber = [...num2];
    firstNumber.reverse();
    secondNumber.reverse();
    let results = [];
    for (let i = 0; i < secondNumber.length; ++i) {
        results.push(multiplyOneDigit(firstNumber, secondNumber[i], i));
    }
    let answer = sumResults(results);
    answer.reverse();
    return answer.join("");
};
