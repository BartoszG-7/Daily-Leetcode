var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
            return i;
        }
    } 
    return -1;
};
