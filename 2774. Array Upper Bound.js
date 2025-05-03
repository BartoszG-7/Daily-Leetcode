Array.prototype.upperBound = function(target) {
    let result = -1;
    this.forEach((val, ind)=> {
        if(val === target){
            result = ind;
        }
    })
    return result;
};
