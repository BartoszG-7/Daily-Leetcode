function generateParenthesis(n) {
    let res = [];
    generate("", n, n, res);
    return res;
}
function generate(str, left, right, res) {
    if (!left && !right && str.length) {
        res.push(str);
        return;
    }
    if (left) generate(str + "(", left - 1, right, res);
    if (right > left) generate(str + ")", left, right - 1, res);
}
