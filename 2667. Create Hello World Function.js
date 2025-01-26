var createHelloWorld = function() {
    const greeting = "Hello World";
    return function(...args) {       
        return greeting;
    }
};