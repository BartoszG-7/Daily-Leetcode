var hammingWeight = function(n) {
        let res = 0;
        for (let i = 0; i < 32; i++) {
            if ((n >> i) & 1) {
                res += 1;
            }
        }
        return res;   
};
