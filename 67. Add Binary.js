var addBinary = function (a, b) {
    let numA = BigInt("0b" + a);
    let numB = BigInt("0b" + b);

    let sum = numA + numB;

    return sum.toString(2);
};
