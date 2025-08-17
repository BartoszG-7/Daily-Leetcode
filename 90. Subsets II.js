var subsetsWithDup = function (nums) {
    var n = nums.length;
    
    nums.sort();
    var subsets = [];
    var seen = new Set(); 
    var maxNumberOfSubsets = Math.pow(2, n);
    for (var subsetIndex = 0; subsetIndex < maxNumberOfSubsets; subsetIndex++) {
        
        var currentSubset = [];
        var hashcode = "";
        for (var j = 0; j < n; j++) {
            
            var mask = 1 << j;
            var isSet = mask & subsetIndex;
            if (isSet != 0) {
                currentSubset.push(nums[j]);
                
                hashcode += nums[j] + ",";
            }
        }
        if (!seen.has(hashcode)) {
            subsets.push(currentSubset);
            seen.add(hashcode);
        }
    }
    return subsets;
};