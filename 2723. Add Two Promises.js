var addTwoPromises = async function(promise1, promise2) {
    var [val1, val2] = await Promise.all([promise1, promise2]);
    var returnedPromise = val1 + val2;
    return returnedPromise;
};
