var is_Interleave = function (s1, i, s2, j, res, s3) {
    
    if (res === s3 && i === s1.length && j === s2.length) {
        return true;
    }
    let ans = false;
    
    if (i < s1.length) {
        ans |= is_Interleave(s1, i + 1, s2, j, res + s1[i], s3);
    }
    if (j < s2.length) {
        ans |= is_Interleave(s1, i, s2, j + 1, res + s2[j], s3);
    }
    return Boolean(ans);
};
var isInterleave = function (s1, s2, s3) {
    
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    return is_Interleave(s1, 0, s2, 0, "", s3);
};
