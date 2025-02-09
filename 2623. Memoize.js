function memoize(fn, memo = {}) {
    return function(...args) {
        let id = JSON.stringify(args)
        if(id in memo) {
            return memo[id];
        }
        let x = fn(...args)
        memo[id] = x
        return x;
    };
};
