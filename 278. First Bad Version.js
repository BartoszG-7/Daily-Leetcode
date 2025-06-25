var solution = function(isBadVersion) {
    return function(n) {
        if (n < 1) return -1;
        let left = 1;
        let right = n;
        let fistBadVrs = -1;

        while (left <= right) {
            const mid = Math.floor(left + ( right -left) / 2);
            
            if ( isBadVersion(mid) ) {
                fistBadVrs = mid;
                if( mid ===1 ){
                    return mid;
                } else{
                    right = mid - 1; 
                }
            } else  {
                left = mid + 1;  
            }
        }
        return fistBadVrs;
    };
};
