var createCounter = function(init) {
    var reset = init;
    return {
        increment: () => { 
            init += 1;
            return init;
        },
        decrement: () => {
            init -= 1;
            return init;
        },
        reset: () => {
            init = reset;
            return init;
        }

    }
};
