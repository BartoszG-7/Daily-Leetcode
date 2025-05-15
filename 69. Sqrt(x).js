var mySqrt = function (x) {
    if (x < 2) return x;
    let left = Math.floor(Math.pow(Math.E, 0.5 * Math.log(x)));
    let right = left + 1;
    return right * right > x ? left : right;
};
