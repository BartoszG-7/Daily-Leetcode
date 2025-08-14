var divide = function (dividend, divisor) {
   
    var MAX_INT = 2147483647; // 2**31 - 1
    var MIN_INT = -2147483648; // -2**31
  
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
  
    var negatives = 2;
    if (dividend > 0) {
        negatives -= 1;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives -= 1;
        divisor = -divisor;
    }
 
    var quotient = 0;
    while (dividend - divisor <= 0) {
        quotient -= 1;
        dividend -= divisor;
    }

    return negatives !== 1 ? -quotient : quotient;
};
