var simplifyPath = function (path) {
    let stack = [];
        for (let portion of path.split("/")) {
        if (portion === "..") {
            if (stack.length) {
                stack.pop();
            }
        } else if (portion === "." || !portion) {
            continue;
        } else {
            stack.push(portion);
        }
    }
    return "/" + stack.join("/");
};
