var timeLimit = function(fn, t) {
    return async function (...args) {
        const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        const fnPromise = fn(...args);
        
        return Promise.race([fnPromise, timeoutPromise]);
    };
};
