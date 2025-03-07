var compose = function(functions) {
    return function(x) {
        result = x;
        for (i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        }
        return result;
    };
};
