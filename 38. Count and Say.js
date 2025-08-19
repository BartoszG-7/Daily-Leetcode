var countAndSay = function (n) {
    let s = "1";
    for (let i = 2; i <= n; i++) {
        let t = "";
        const regex = /(.)\1*/g;
        let match;
        while ((match = regex.exec(s)) !== null) {
            t += match[0].length.toString() + match[1];
        }
        s = t;
    }
    return s;
};
