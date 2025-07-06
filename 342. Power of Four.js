var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false;
    }
    return Number.isInteger(Math.log(n) / Math.log(4));    
};
