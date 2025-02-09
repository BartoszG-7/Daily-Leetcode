var once = function(fn) {    
    let callsAmount = 0
    return function(...args) {
        callsAmount++
        if (callsAmount > 1) {
            return undefined;
        } else {
            return fn(...args);
        }
    };
};
