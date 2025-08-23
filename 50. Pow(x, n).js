function binaryExp(x, n) {

    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 1 / binaryExp(x, -1 * n);
    }

    if (n % 2 === 1) {
        return x * binaryExp(x * x, (n - 1) / 2);
    }

    else {
        return binaryExp(x * x, n / 2);
    }
}

var myPow = function (x, n) {
    return binaryExp(x, n);
};
